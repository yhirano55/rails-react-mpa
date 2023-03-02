class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title, null: false, index: true
      t.integer :price, null: false
      t.text :description, null: false

      t.timestamps
    end
  end
end
