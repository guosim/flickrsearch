import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { chooseTag, fetchImages } from '../actions';

import './Search.css';

const Search = props => {
	let input;

	return (
		<form className="search"
			onSubmit={e => {
				e.preventDefault();
				props.chooseTag(input.value);
				props.fetchImages(input.value);
			}}
		>
			<input 
				ref={node => {input = node}}
				type="text"
				placeholder="Image Search"
			/>
			<button type="submit">
				Search
			</button>
		</form>
	)
}

const mapStateToProps = state => {
	return {
		loading: state.isFetching
	}
}

const mapDispatchToProps = dispatch => 
	bindActionCreators({ chooseTag, fetchImages }, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Search);
