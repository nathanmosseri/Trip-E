class RemoveGroupKeyFromGroups < ActiveRecord::Migration[7.0]
  def change
    remove_column :groups, :group_code
  end
end
