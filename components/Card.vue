<template>
	<div class="card">
		<div class="card-header">
			<div class="avatar" v-bind:style="{'background-image': 'url(' + photo.user.profile_image.small + ')'}"></div>
			<!-- <pre>{{ JSON.stringify(photo) }}</pre> -->
			<div class="name">{{ photo.user.name }}</div>
		</div>
		<div class="card-body" v-bind:style="{'background-image': 'url(' + photo.urls.regular + ')'}"></div>
		<div class="card-footer">
			<div class="actions"></div>
			<div class="actions actions-right"></div>
		</div>
	</div>
</template>

<script>
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
}

.card-header {
	height: 60px;
	width: 100%;
	padding: 10px;
	display: inline-block;	
}

.card-header > div {
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
	border: 0.5px solid gray;
	width: 100%;
	min-height: 40px;
	display: inline-block;
}

.card-footer .actions {
	border: 0.25px solid gray;
	width: 40px;
	height: 40px;
	float: left;
}

.card-footer .actions.actions-right {
	float: right;
}
</style>