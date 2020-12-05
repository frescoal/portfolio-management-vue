class CreateMetaAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :meta_accounts do |t|
      t.string :name
      t.integer :parent_id, null: true
      t.references :user

      t.timestamps
    end
    add_index :meta_accounts, [:parent_id]
  end
end
