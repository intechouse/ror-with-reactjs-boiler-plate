module Api
  module V1
    module DeviseTokenAuth
      class SessionsController < ::DeviseTokenAuth::SessionsController
        # Prevent session parameter from being passed
        # Unpermitted parameter: session
        wrap_parameters format: []

        before_action :set_user_by_token, only: [:destroy]
        after_action :reset_session, only: [:destroy]

        def confirm_google_login
          validator = GoogleIDToken::Validator.new
          begin
            token = params[:wc][:id_token]
            required_audience = JWT.decode(token, nil, false)[0]['aud']
            payload = validator.check(token, required_audience)
            @user = User.where(provider: 'google', uid: payload['sub']).first
            if @user == nil # New User
              render json: {status: 'new', user: {wc: params[:wc], email: payload['email'], name: payload['name'], uid: payload['sub'], provider: 'google'}}, status: 200
            else
              # Already have an account, login
              render json: {user: @user}, status: 200
            end
          rescue JWT::JWKError
            render json: {error: I18n.t('session.invalid_google_user')}, status: 401
          rescue JWT::DecodeError
            render json: {error: I18n.t('session.invalid_google_user')}, status: 401
          rescue GoogleIDToken::ValidationError => e
            render json: {error: I18n.t('session.invalid_google_user')}, status: 401
          end
        end
        
        def facebook_callback
          render :json => {:error => I18n.t('session.invalid_facebook_user')}, status: 401 and return if params.blank?
          if params[:error]
            render :json => {:error => I18n.t('session.invalid_facebook_user')}, status: 401 and return
          end
          begin
            @graph = Koala::Facebook::API.new(params[:accessToken])
            if @graph.get_object('me')
              @user = User.where(provider: 'facebook', uid: params['userID']).first
              if @user == nil # New User
                render json: {status: 'new', user: {access_token: params[:accessToken], email: params['email'], name: params['name'], uid: params['userID'], provider: 'facebook'}}, status: 200
              else
                # Already have an account, login
                render json: {user: @user}, status: 200
              end
            else
              render :json => {:error => I18n.t('session.invalid_facebook_user')}, status: 401 and return
            end
          rescue Koala::Facebook::AuthenticationError
            render :json => {:error => I18n.t('session.invalid_facebook_user')}, status: 401 and return
          end
        end

      end
    end
  end
end
