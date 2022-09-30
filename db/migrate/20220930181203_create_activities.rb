class CreateActivities < ActiveRecord::Migration[7.0]
  def change
    create_table :activities do |t|
      t.string :name
      t.string :description
      t.string :time
      t.string :date
      t.integer :group_id

      t.timestamps
    end
  end
end
