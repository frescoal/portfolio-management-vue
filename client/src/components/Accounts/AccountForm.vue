<template>
  <div>
    <fg-input :label="$t('accounts.attributes.name')" placeholder="UBS ..." v-model="account.name"> </fg-input>
    <fg-input :label="$t('accounts.attributes.description')" placeholder="CHXX XXXX XXXX XXXX XXXX X" v-model="account.description"> </fg-input>
    <dropdown :label="$t('accounts.attributes.category')" :title="$t('global.choose')" v-model="account.category">
      <li v-for="(category) in accountCategory" v-bind:key="category"> {{ $log(account) ||  $t(`accounts.categories.${category}`) }}</li>
    </dropdown>
  </div>
</template>
<script>
import { FgInput, Dropdown } from 'src/components/UIComponents';
import { accountCategory } from 'src/config/constants';

export default {
  data() {
    return {
      loading: true,
      account: this.accountValue !== undefined ? this.accountValue : {
        name: '',
        description: '',
        number: null,
        category: null,
        meta_account_id: null
      },
      accountCategory: accountCategory
    };
  },
  props: {
    accountValue: {
      name: String,
      description: String,
      number: Number,
      category: String,
      meta_account_id: Number
    }
  },
  mounted() {
  },
  components: {
    FgInput,
    Dropdown
  },
  methods: {},

}
</script>
<style>

</style>
