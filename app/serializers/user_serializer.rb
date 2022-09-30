class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :full_name, :password_digest
end
