<template>
  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">Mes Comptes</h5>
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
import {MetaAccountListItem} from '../../components/Accounts'
import {getMetaAccount} from "@/services/account.services";

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
  },
  methods: {},

}
</script>
<style>

</style>
