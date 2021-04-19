Rails.application.routes.draw do

  mount_devise_token_auth_for 'User' , at: "api/v1/auth"

  root 'home#index'
  get '*path', to: 'home#index', constraints: lambda {|req|
    req.path.exclude? 'rails/active_storage'
  }
end
