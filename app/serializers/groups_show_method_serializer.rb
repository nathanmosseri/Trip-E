class GroupsShowMethodSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :location, :name, :description, :date_range

  has_many :activities
  has_many :users, serializer: GroupShowMethodUsersSerializer


end
