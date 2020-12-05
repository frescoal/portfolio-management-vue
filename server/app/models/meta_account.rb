class MetaAccount < ApplicationRecord
  has_many :meta_accounts, inverse_of: 'parent'
  belongs_to :parent, optional: true, class_name: 'MetaAccount'
  belongs_to :user
end
