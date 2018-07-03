import axios from '~/plugins/axios';

export const state = () => ({
	photos: [],
	profilePhotos: [],
	profile: {}
});

export const mutations = {
	setPhotos(state, photos) {
		state.photos = photos;
	},

	setProfilePhotos(state, photos) {
		state.profilePhotos = photos;
	},

	setProfileInfo(state, info) {
		state.profile = info;
	}
};

const params = {
	client_id: process.env.USPLASH_ACCESS_KEY
};

export const actions = {
	async LOAD_ITEMS({ commit }) {
		const response = await axios.get('photos', {
			params: { ...params}
		});
		const photos = response.data;

		commit('setPhotos', photos);
	},

	async LOAD_PROFILE({ commit }, username) {
		console.log('profile', username);
		let response = await axios.get(`users/${username}/photos`, {
			params: { ...params}
		});
		const photos = response.data;
		commit('setProfilePhotos', photos);

		response = await axios.get(`users/${username}`, {
			params: { ...params}
		});
		commit('setProfileInfo', response.data);
	}
}