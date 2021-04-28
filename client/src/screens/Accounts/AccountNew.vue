<template>
  <div class="row">
    <div class="col-md-6 ml-auto mr-auto">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">{{ $t('accounts.new_title') }}</h5>
        </div>
        <div class="card-body card-collapse">
          <account-form />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {AccountForm} from '../../components/Accounts'
import {Button} from '../../components/UIComponents';

export default {
  data() {
    return {
      loading: true,
      metaAccounts: [],
    };
  },
  mounted() {
  },
  components: {
    AccountForm,
  },
  methods: {},

}
</script>
<style>

</style>
