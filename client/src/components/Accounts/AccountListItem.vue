<template>
  <router-link
      to="/accounts/1"
      class="account-content"
  >
    <span class="account-name">{{ account.name }}</span>
    <span class="account-description">{{ account.description }}</span>
    <span class="account-amount">{{ account.balance }} CHF</span>
  </router-link>
</template>
<script>

export default {
  name: 'account-list-item',
  props: {
    account: {
      type: Object,
      description: ' The MetaAccount object'
    },
  },
  components: {},
  methods: {},
  mounted() {
  }
}
</script>
<style>
#accounts .account-name {
  flex: 1;
}
#accounts .account-description{
  flex: 1;
  font-style: italic;
  font-size: 90%;
}

#accounts .account-content {
  display: flex;
  font-weight: bold;
  text-decoration: none;
  background-color: transparent;
  color: #444;
}

.account-content {
  margin-right: 30px;
}
</style>
