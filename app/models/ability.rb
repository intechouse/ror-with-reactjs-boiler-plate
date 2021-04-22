# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)

    if true
      can :manage, :all
    else
      user.computed_permissions.call(self, user)
      can :manage, User
      can :manage, Role
      can :manage, AdminUser
      can :manage, Category
      can :manage, Brand
      can :manage, Product
      can :manage, Faq
      can :manage, Size
    end

    can :read, ActiveAdmin::Page, name: "Dashboard", namespace_name: "admin"

  end
end
