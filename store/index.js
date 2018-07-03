import axios from '~/plugins/axios';

export const state = () => ({
	photos: []
});

export const mutations = {
	setPhotos(state, photos) {
		state.photos = photos;
	}
};

const params = {
	client_id: process.env.USPLASH_ACCESS_KEY
};
export const actions = {
	async nuxtServerInit({ commit }) {
		const response = await axios.get('photos', {
			params: { ...params}
		});
		const photos = response.data;

		commit('setPhotos', photos);
	}
}