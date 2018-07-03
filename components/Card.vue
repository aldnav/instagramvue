<template>
	<div class="card">
		<div class="card-header">
			<router-link :to="{ name: 'username', params: {username: photo.user.username } }" tag="div">
				<div class="avatar" v-bind:style="{'background-image': 'url(' + photo.user.profile_image.small + ')'}"></div>
				<div class="name">{{ photo.user.name }}</div>
			</router-link>
		</div>
		<div class="card-body" v-bind:style="{'background-image': 'url(' + photo.urls.regular + ')'}"></div>
		<div class="card-footer">
			<div class="actions-container">
				<div class="actions actions--like"></div>
				<div class="actions actions-right actions--bookmark"></div>
			</div>
			<div class="extra">
				<div class="likes" v-if="photo.likes"><strong>{{ photo.likes }} likes</strong></div>
				<div class="timeinfo">{{ moment(photo.created_at).fromNow() }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import moment from '~/plugins/moment';

export default {
	props: ['photo']
}
</script>

<style>
.card {
	margin: 0;
	padding: 0;
	margin-bottom: 60px;
	border: 1px solid #e5e5e5;
	border-radius: 4px;
	background-color: white;
}

.card-header {
	height: 60px;
	width: 100%;
	padding: 16px;
	display: inline-block;	
}

.card-header > div > div {
	float: left;
}

.card-header .avatar {
	background-color: black;
	background-size: cover;
	border-radius: 20px;
	height: 40px;
	width: 40px;
}

.card-header .name {
	margin-left: 10px;
}

.card-body {
	width: 614px;
	height: 614px;
	background-size: cover;
}

.card-footer {
	min-height: 40px;
	padding: 16px;
}

.card-footer .actions-container {
	width: 100%;
	display: inline-block;
}

.card-footer .actions {
	width: 40px;
	height: 40px;
	float: left;
	background-size: cover;
}

.card-footer .actions.actions-right {
	float: right;
}

.actions--like {
	background-image: url('~/assets/heart-outline.svg');
}
.actions--bookmark {
	background-image: url('~/assets/bookmark-outline.svg');
}
</style>