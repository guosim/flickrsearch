const imageSearchApp = (state = '', action) => {
	switch (action.type) {
		case 'SEARCH':
			return action.tag;
		default:
			return state;
	}
}

export default imageSearchApp;