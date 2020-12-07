<template>
  <stats-card
      type="success"
      :title="this.keyNumbers.assets"
      small-title="Actifs"
      icon="nc-icon nc-money-coins"
      class="col-md-3"
  >
   <span slot="footer">
     Mois courant {{ this.keyNumbers.monthly_assets }}
   </span>
  </stats-card>
</template>
<script>

import StatsCard from "@/components/UIComponents/Cards/StatsCard";
import { dashboardService } from "@/services/dashboard.service";

  export default {
    components: {StatsCard},
    methods: {},
    data() {
      return {
        keyNumbers: null
      }
    },
    mounted(){
      dashboardService.getKeyNumbers().then(response => (this.keyNumbers = response));
    },
    beforeDestroy() {
    }
  }
</script>
<style>
</style>
