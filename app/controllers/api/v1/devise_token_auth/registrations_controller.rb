module Api
  module V1
    module DeviseTokenAuth
      class RegistrationsController < ::DeviseTokenAuth::RegistrationsController
        skip_before_action :verify_authenticity_token
        wrap_parameters User, include: [:name, :username, :email, :password, :password_confirmation, :mobile]

        def check_username_availability
          if User.find_by(username: params[:username])
            render json: {success: false, errors: I18n.t('registration.already_username')} and return
          else
            render json: {success: true} and return
          end
        end

        def check_email_availability
          if User.find_by(email: params[:email])
            render json: {success: false, errors: I18n.t('registration.already_email')} and return
          else
            render json: {success: true} and return
          end
        end

        def check_mobile_availability
          if User.find_by(mobile: params[:mobile])
            render json: {success: false, errors: I18n.t('registration.already_phone_number')} and return
          else
            render json: {success: true} and return
          end
        end

        def social_registration
          isValid = false
          if params[:provider] == 'google'
            isValid = User.verify_google_login(wc: params[:wc], email: params[:email], uid: params[:uid])
          elsif params[:provider] == 'facebook'
            isValid = User.verify_facebook_login(access_token: params[:access_token], uid: params[:uid])
           else
            render json: {status: 'error', error: I18n.t('registration.provider', provider: params[:provider])}, status: 401 and return
          end
          if isValid
            @user = User.new(sign_up_params)
            if @user.save
              render json: {status: 'success', data: @user}, status: 200
            else
              render json: {status: 'error', errors: @user.errors}, status: 422
            end
          else
            render json: {status: 'error', error: I18n.t('registration.invalid_provider', provider: params[:provider])}, status: 401
          end
        end

        private

        def sign_up_params
          params.require(:user).permit(:name, :username, :email, :password, :password_confirmation, :mobile)
        end

        def account_update_params
          params.require(:user).permit(:name, :email)
        end
      end
    end
  end
end
