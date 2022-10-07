class UserShowMethodSerializer < ActiveModel::Serializer
  attributes :id, :username, :full_name, :password_digest

  has_many :groups do 
    object.groups.order(:start_date)
  end

end
