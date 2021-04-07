class Api::V1::MetaAccountsController < Api::V1::ApplicationController

  def index
    render json: MetaAccount.where(user: current_api_v1_user), include: [:meta_accounts, accounts: {methods: [:balance]}], methods: [:balance]
  end
end
