class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :accounts do |t|
      t.string :name
      t.integer :number
      t.integer :plutus_account_id

      t.timestamps
    end
  end
end

