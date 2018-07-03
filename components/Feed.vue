<template>
	<div class="feed">
		<div class="card">
			<div class="card-header">
				<div class="avatar"></div>
				<div class="name">Mememe</div>
			</div>
			<div class="card-body"></div>
			<div class="card-footer">
				<div class="actions"></div>
				<div class="actions actions-right"></div>
			</div>
		</div>
		<div class="card"></div>
		<div class="card"></div>
	</div>
</template>

<script>
	
</script>

<style scoped>
.feed {
	height: 100%;
	padding-top: 40px;
}

.card {
	border: 1px solid black;
	margin-bottom: 60px;
}

.card-header {
	border: 1px solid black;
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