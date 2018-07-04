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
	data: () => ({
		page: 1,
		busy: false
	}),

  components: {
    Card
  },

  computed: mapState([
  	'photos'
  ]),

  methods: {
  	loadMore: function() {
  		if (this.busy) {
  			return;
  		}
  		this.busy = true;
  		this.page++;
  		console.log(this.page);
      this.$store.dispatch('LOAD_ITEMS', this.page);
  		this.busy = false;
  	}
  },

  mounted: function() {
  	this.$on('reachedBottom', function() {
  		this.loadMore();
  	});

  	window.onscroll = function() {
  	    if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight) {
  	    this.$emit('reachedBottom');
  	    }
  	}.bind(this);
  }
}
</script>

<style scoped>
.feed {
	height: 100%;
	padding-top: 40px;
}
</style>