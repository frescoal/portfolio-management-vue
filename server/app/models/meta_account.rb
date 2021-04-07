class MetaAccount < ApplicationRecord
  has_many :meta_accounts, inverse_of: 'parent', foreign_key: 'parent_id'
  has_many :accounts
  belongs_to :parent, optional: true, class_name: 'MetaAccount'
  belongs_to :user

  def balance
    account_balance = meta_accounts.inject(0.0){|sum,meta_account| sum + meta_account.balance }
    accounts.inject(account_balance ){ |sum,meta_account| sum + meta_account.balance }
  end
end
