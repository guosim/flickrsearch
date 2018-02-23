import React from 'react';
import { connect } from 'react-redux';
import { chooseTag, fetchImages } from '../actions';

import './Search.css';

let Search = ({ dispatch }) => {
	let input;

	return (
		<form className="search"
			onSubmit={e => {
				e.preventDefault();
				dispatch(chooseTag(input.value));
				dispatch(fetchImages());
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

Search = connect()(Search);

export default Search;
