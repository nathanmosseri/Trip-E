class GroupSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :location, :name, :description
end
