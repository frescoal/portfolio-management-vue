class MetaAccount < ApplicationRecord
  belongs_to :parent, optional: true, class_name: 'MetaAccount'
  has_many :meta_accounts, inverse_of: 'parent'
end
