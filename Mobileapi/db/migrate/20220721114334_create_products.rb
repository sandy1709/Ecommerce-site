class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.integer :product_id
      t.string :product_name
      t.string :product_type
      t.integer :company_id
      t.string :company_name
      t.integer :user_id
      t.integer :likes
      t.string :A
      t.string :B
      t.string :C 
      t.string :D
      t.string :E  
      t.string :F
      t.string :G
      t.string :H
      t.string :I
      t.string :J
      t.string :K
      t.string :L

      t.timestamps
    end
  end
end
