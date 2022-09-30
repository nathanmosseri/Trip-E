class CreateGroups < ActiveRecord::Migration[7.0]
  def change
    create_table :groups do |t|
      t.string :start_date
      t.string :end_date
      t.string :location
      t.string :name
      t.string :group_code

      t.timestamps
    end
  end
end
