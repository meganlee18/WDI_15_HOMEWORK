class CreateQuotes < ActiveRecord::Migration[5.2]
  def change
    create_table :quotes do |t|
      t.text :description
      t.integer :user_id
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
