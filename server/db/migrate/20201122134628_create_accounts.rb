class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :accounts do |t|
      t.string :name
      t.string :description
      t.integer :number
      t.integer :category
      t.integer :plutus_account_id
      t.integer :meta_account_id

      t.timestamps
    end
    add_index :accounts, [:plutus_account_id, :meta_account_id]

  end
end

