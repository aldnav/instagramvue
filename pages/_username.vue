<template>
  <ProfileFeed></ProfileFeed>
</template>

<script>
import ProfileFeed from '~/components/ProfileFeed.vue'

export default {
  components: {
    ProfileFeed
  },

  async fetch({store, params}) {
    await store.dispatch('LOAD_PROFILE', params.username);
  }
}
</script>

<style>

html {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  letter-spacing: 1px;
}

html, body, .container {
  margin: 0 auto;
  padding: 0;
  min-height: 100vh;
  background-color: #fafafa;
}

nav {
  height: 100px;
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  background-color: white;
}

</style>
