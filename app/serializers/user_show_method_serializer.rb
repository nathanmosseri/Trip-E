class UserShowMethodSerializer < ActiveModel::Serializer
  attributes :id, :username, :full_name, :password_digest

  has_many :groups

end
