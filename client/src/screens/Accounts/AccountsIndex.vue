<template>
  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <div class="separated">
            <h5 class="card-title">{{ $t('accounts.my_accounts') }}</h5>
          </div>
          <div class="separated text-right">
            <router-link
                to="/accounts/new"
            >
            <Button type="primary" outline round>
              <i class="fas fa-plus"></i>
              {{ $t('global.new') }}
            </Button>
            </router-link>
          </div>
        </div>
        <div class="card-body card-collapse" id="accounts">
          <meta-account-list-item
              v-for="(metaAccount, index) in topLevelMetaAccounts"
              v-bind:key="index"
              :metaAccount="metaAccount"
              :metaAccounts="metaAccounts"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {getMetaAccount} from "@/services/account.services";
import {MetaAccountListItem} from '../../components/Accounts'
import {Button} from '../../components/UIComponents';

export default {
  data() {
    return {
      loading: true,
      metaAccounts: [],
      topLevelMetaAccounts: []
    };
  },
  mounted() {
    getMetaAccount().then(response => {
      this.metaAccounts = response;
      this.topLevelMetaAccounts = response.filter((metaAccount) => metaAccount.parent_id === null);
    });
  },
  components: {
    MetaAccountListItem,
    Button
  },
  methods: {},

}
</script>
<style>

</style>
