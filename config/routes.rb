Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  
  mount_devise_token_auth_for 'User' , at: "api/v1/auth",  controllers: {
    registrations: 'api/v1/devise_token_auth/registrations',
    sessions: 'api/v1/devise_token_auth/sessions',
  }

  # Additional Routes for User
  devise_scope :user do
    get 'api/v1/check_username_availability' => 'api/v1/devise_token_auth/registrations#check_username_availability'
    get 'api/v1/check_email_availability' => 'api/v1/devise_token_auth/registrations#check_email_availability'
    get 'api/v1/check_mobile_availability' => 'api/v1/devise_token_auth/registrations#check_mobile_availability'
    post 'api/v1/omniauth/confirm_google_login' => 'api/v1/devise_token_auth/sessions#confirm_google_login'
    post 'api/v1/omniauth/facebook_callback' => 'api/v1/devise_token_auth/sessions#facebook_callback'
    post 'api/v1/omniauth/social_registration' => 'api/v1/devise_token_auth/registrations#social_registration'
  end

  get 'home/index'
  root 'home#index'
  get '*path', to: 'home#index', constraints: lambda {|req|
    req.path.exclude? 'rails/active_storage'
  }
end
