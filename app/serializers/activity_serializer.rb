class ActivitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :time, :date, :group_id
end
