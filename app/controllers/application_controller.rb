class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  # Avoid CSRF Token Verification for API Requests
  protect_from_forgery with: :null_session, only: Proc.new { |c| c.request.format.json? }
  # Allow Devise Additional Parameters
  before_action :configure_permitted_parameters, if: :devise_controller?

  def authenticate_admin_user!
    if !current_admin_user
      redirect_to new_admin_user_session_path
    end
  end

  protected

  def configure_permitted_parameters
    added_attrs = [:username, :name, :mobile]
    devise_parameter_sanitizer.permit(:sign_up, keys: added_attrs)
    devise_parameter_sanitizer.permit(:password, keys: [:password, :password_confirmation, :redirect_url])
  end
end
