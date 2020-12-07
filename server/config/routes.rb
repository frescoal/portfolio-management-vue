Rails.application.routes.draw do
  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'

      # Dashboard
      get 'key_numbers', to: 'dashboard#key_numbers'

      # Resources
      resources :meta_accounts, only: [:index]
    end
  end
end
