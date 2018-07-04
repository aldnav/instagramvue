<template>
	<div class="profile-feed">
		<div class="profile-detail">
			<div class="profile-bound">
				<div class="profile-avatar" v-bind:style="{'background-image': 'url(' + profile.profile_image.large + ')'}"></div>
				<div class="profile-hud">
					<h1>{{ profile.name }}</h1>
					<div>
						<span>{{ profile.total_photos }} Photos</span>&emsp;
						<span>{{ profile.total_collections }} Collections</span>&emsp;
						<span>{{ profile.location }}</span>
						<p>{{ profile.bio }}</p>
						<a v-bind:href="profile.links.html" target="_blank">{{ profile.links.html }}</a>
					</div>
				</div>
			</div>
		</div>
		<div class="photo-grid-container">
			<div class="photo-grid">
				<div v-for="photo in profilePhotos" v-bind:key="photo.id" class="photo">
					<a v-bind:href="photo.links.html" target="_blank">
						<div class="photo-prev" v-bind:style="{'background-image': 'url(' + photo.urls.regular + ')'}"></div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	computed: mapState([
		'profilePhotos',
		'profile'
	]),

	data: () => ({
		page: 1,
		busy: false,
		noInc: false
	}),

	methods: {
		loadMore: async function() {
			if (this.busy) {
				return;
			}
			this.busy = true;
			if (!this.noInc)
				this.page++;
	    const result = await this.$store.dispatch('LOAD_PHOTOS', {username: this.profile.username, page: this.page});
			this.busy = false;
			if (this.result == 0)
				this.noInc = true;
		}
	},

	created: function() {
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
.profile-detail {
	height: 320px;
}

.photo-grid-container {
	display: flex;
	justify-content: center;
	align-items: center;
}

.photo-grid {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	width: 1080px;
}

.photo {
	width: 280px;
	height: 280px;
	margin: 20px;
}

.photo-prev {
	width: 100%;
	height: 100%;
	background-size: cover;
}


.profile-detail {
	display: flex;
	align-items: center;
	justify-content: center;
}

.profile-bound {
	width: 960px;
}

.profile-avatar {
	display: block;
	width: 170px;
	height: 170px;
	border-radius: 85px;
	background-size: cover;
	float: left;
}

.profile-hud {
	float: right;
	width: 740px;
	margin-left: 20px;
}

</style>