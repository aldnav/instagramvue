<template>
	<div class="feed">
		<template v-for="photo in photos">
			<Card v-bind:key="photo.id" :photo="photo" />
		</template>
	</div>
</template>

<script>
import Card from '~/components/Card.vue';
import { mapState } from 'vuex';

export default {
  components: {
    Card
  },

  computed: mapState([
  	'photos'
  ])
}
</script>

<style scoped>
.feed {
	height: 100%;
	padding-top: 40px;
}
</style>