class CreateSessions < ActiveRecord::Migration[7.0]
  def change
    create_table :sessions do |t|
      t.string :token
      t.datetime :expired
      t.belongs_to :user

      t.timestamps
    end
  end
end
