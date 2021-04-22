ActiveAdmin.register User do

  # See permitted parameters documentation:
  # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
  #
  # Uncomment all parameters which should be permitted for assignment
  #
  permit_params :email, :name, :mobile, :username, :password, :password_confirmation

  index do
    selectable_column
    id_column
    column :email
    column :name
    column :mobile
    column :username
    column :created_at
    column :updated_at
    actions
  end

  filter :email
  filter :name
  filter :mobile
  filter :username

  form do |f|
    f.inputs do
      f.input :email
      f.input :username
      f.input :name
      f.input :mobile
      f.input :password
      f.input :password_confirmation
    end
    f.actions
  end

  #
  # or
  #
  # permit_params do
  #   permitted = [:email, :name, :mobile, :username, :encrypted_password, :reset_password_token, :reset_password_sent_at, :remember_created_at, :sign_in_count, :current_sign_in_at, :last_sign_in_at, :current_sign_in_ip, :last_sign_in_ip, :confirmation_token, :confirmed_at, :confirmation_sent_at, :unconfirmed_email, :provider, :uid, :tokens, :allow_password_change]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end
  
end
