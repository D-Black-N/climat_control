class CreateGreenHouses < ActiveRecord::Migration[7.0]
  def change
    create_table :green_houses do |t|
      t.string :name
      t.string :ip_address
      t.integer :state
      t.string :location

      t.timestamps
    end
  end
end
