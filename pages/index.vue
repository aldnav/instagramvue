<template>
  <div class="container">
    <nav></nav>
    <div class="feed-wrapper">
      <Feed></Feed>
    </div>
  </div>
</template>

<script>
import Feed from '~/components/Feed.vue'

export default {
  components: {
    Feed
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
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
  background-color: white;
}

.feed-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
