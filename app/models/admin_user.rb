class AdminUser < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, 
         :recoverable, :rememberable, :validatable
  has_many :role_assignments, dependent: :destroy
  has_many :roles, through: :role_assignments

  def computed_permissions
    roles.map(&:computed_permissions).reduce(RoleCore::ComputedPermissions.new, &:concat)
  end
end
