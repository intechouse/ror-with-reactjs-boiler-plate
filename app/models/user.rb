class User < ApplicationRecord
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable, :omniauthable, omniauth_providers: [:google_oauth2, :facebook]
  include DeviseTokenAuth::Concerns::User
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  before_validation :set_uid #, :decrypt_para
  has_many_attached :profile_images
  
  def self.verify_google_login(wc:, email:, uid:)
    begin
      validator = GoogleIDToken::Validator.new
      token = wc[:id_token]
      required_audience = JWT.decode(token, nil, false)[0]['aud']
      payload = validator.check(token, required_audience)
      if payload['email'] == email && payload['sub'] == uid
        true
      else
        false
      end
    rescue JWT::JWKError
      false
    rescue JWT::DecodeError
      false
    rescue GoogleIDToken::ValidationError => e
      false
    end
  end

  def self.verify_facebook_login(access_token:, uid:)
    begin
      @graph = Koala::Facebook::API.new(access_token)
      @user = @graph.get_object("me")
      if @user['id'] == uid
        true
      else
        false
      end
    rescue Koala::Facebook::AuthenticationError
      false
    end
  end
  def set_uid
    self.uid = self.email if self.uid.blank?
  end
end
