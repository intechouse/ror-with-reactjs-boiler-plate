module Api
  module V1
    module DeviseTokenAuth
      class ConfirmationsController < ::DeviseTokenAuth::ConfirmationsController
        # require 'colorize'
        # Resend email method
        def create
          return render_create_error_missing_email if resource_params[:email].blank?
          @resource = User.find_by_email params[:email]
          return render_user_not_found_error(params[:email]) unless @resource
          if @resource.confirmed?
            return render_already_confirmed(params[:email])
          end
          @resource.send_confirmation_instructions({
                                                     redirect_url: redirect_url,
                                                     client_config: resource_params[:config_name]
                                                   })
          render_confirmation_success(params[:email])
        end


        private

        def render_user_not_found_error(email)
          render_error(404, I18n.t('devise_token_auth.confirmations.user_not_found', email: email))
        end

        def render_confirmation_success(email)
          render json: {
            success: true,
            message: I18n.t('devise_token_auth.confirmations.sended', email: email)
          }
        end

        def render_already_confirmed(email)
          render json: {
            success: true,
            message: I18n.t('devise_token_auth.confirmations.already_confirmed', email: email)
          }
        end

      end
    end
  end
end
