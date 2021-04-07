<template>
  <div class="card card-plain">
    <div>
      <a data-toggle="collapse"
         data-parent="#accounts"
         :class="`meta-account-content level-${level}`"
         :href="`#content-${this.metaAccount.id}`"
         :aria-controls="`content-${this.metaAccount.id}`">
        <span class="meta-account-name">{{ this.metaAccount.name }}</span>
        <span class="meta-account-amount">
          {{ this.metaAccount.balance }} CHF
          <i class="nc-icon nc-minimal-down"></i>
        </span>
      </a>
      <div
          :id="`content-${this.metaAccount.id}`"
          class="collapse">
        <div class="card-body">
          <div>
            <meta-account-list-item
                v-for="(metaAccount, index) in metaAccount.meta_accounts"
                v-bind:key="index"
                :metaAccount="getMetaAccountData(metaAccount.id)"
                :metaAccounts="metaAccounts" :level="level + 1"/>
            <account-list-item
                v-for="(account, index) in metaAccount.accounts"
                v-bind:key="index"
                :account="account"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {MetaAccountListItem, AccountListItem} from "../Accounts";

export default {
  name: 'meta-account-list-item',
  props: {
    metaAccount: {
      type: Object,
      description: ' The MetaAccount object'
    },
    metaAccounts: {
      type: Array,
      description: 'All Meta accounts available'
    },
    level: {
      type: Number,
      description: 'Tells you at what level of recursion you we are',
      default: 1,
    }
  },
  components: {
    MetaAccountListItem,
    AccountListItem: () => import('./AccountListItem.vue'), // Had to import this way because of recursive call
  },
  methods: {
    getMetaAccountData(metaAccountId) {
      return this.metaAccounts.find(metaAccount => metaAccount.id === metaAccountId)
    },
  },
  mounted() {
  }
}
</script>
<style>
#accounts .meta-account-content {
  display: flex;
  font-weight: bold;
  display: flex;
  font-weight: bold;
  text-decoration: none;
  background-color: transparent;
  color: #444;
  padding: 7px 0;
}
#accounts .meta-account-content.level-1 {font-size: 1.2rem; padding: 6px 0;}
#accounts .meta-account-content.level-2 {font-size: 1.1rem; padding: 5px 0;}
#accounts .meta-account-content.level-3 {font-size: 1rem; padding: 4px 0;}
#accounts .meta-account-content.level-4 {font-size: 0.9rem; padding: 3px 0;}
#accounts .meta-account-content.level-5 {font-size: 0.8rem; padding: 2px 0;}
#accounts .meta-account-name {
  flex: 1;
}
#accounts .meta-account-amount i{
  margin-left: 20px;
}
#accounts .card .card-body {
  padding-right: 0;
}
</style>
