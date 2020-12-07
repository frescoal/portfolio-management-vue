<template>
  <collapse>
    <collapse-item
        v-for="(metaAccount, index) in this.metaAccounts"
        class="style"
        :key="index"
        :title="metaAccount.name" :name="index">
      {{ $log(metaAccount)}}
        <collapse>
          <collapse-item
              v-for="(metaAccount, index) in metaAccount.meta_accounts"
              class="style"
              :key="index"
              :title="metaAccount.name" :name="index">
          </collapse-item>
        </collapse>
    </collapse-item>
 </collapse>
</template>
<script>
import { Collapse, CollapseItem } from '../../components/UIComponents'
import { getMetaAccount } from "@/services/account.services";

export default {
  data() {
    return {
      loading: true,
      metaAccounts: []
    };
  },
  mounted() {
    getMetaAccount().then(response => (this.metaAccounts = response));
  },
  components: {
    Collapse,
    CollapseItem
  },
  methods: {},

}
</script>
<style>

</style>
