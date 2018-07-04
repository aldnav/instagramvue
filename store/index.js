import axios from '~/plugins/axios';

export const state = () => ({
	photos: [],
	profilePhotos: [],
	profile: {}
});

export const mutations = {
	setPhotos(state, photos) {
		state.photos = state.photos.concat(photos);
	},

	setProfilePhotos(state, photos) {
		state.profilePhotos = state.profilePhotos.concat(photos);
	},

	setProfileInfo(state, info) {
		state.profile = info;
	}
};

const params = {
	client_id: process.env.USPLASH_ACCESS_KEY
};

export const actions = {
	async LOAD_ITEMS({ commit }, page) {
		if (!page) {
			page = 1;
		}
		console.log(page);
		const response = await axios.get('photos', {
			params: { ...params, page: page}
		});
		const photos = response.data;

		commit('setPhotos', photos);
	},

	async LOAD_PROFILE({ commit }, username) {
		let response = await axios.get(`users/${username}/photos`, {
			params: { ...params}
		});
		const photos = response.data;
		commit('setProfilePhotos', photos);

		response = await axios.get(`users/${username}`, {
			params: { ...params}
		});
		commit('setProfileInfo', response.data);
	},

	async LOAD_PHOTOS({ commit }, {username, page}) {
		if (!page) {
			page = 1;
		}
		let response = await axios.get(`users/${username}/photos`, {
			params: { ...params, page: page}
		});
		const photos = response.data;
		commit('setProfilePhotos', photos);
		return photos.length;
	}
}