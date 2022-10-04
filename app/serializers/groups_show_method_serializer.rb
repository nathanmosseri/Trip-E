class GroupsShowMethodSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :location, :name, :description, :date_range

  has_many :activities do
    object.activities.order(:datetime)
  end
  has_many :users, serializer: GroupShowMethodUsersSerializer


end
