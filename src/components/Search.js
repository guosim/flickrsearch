import React from 'react';
import { connect } from 'react-redux';
import { imageSearch } from '../actions';

let Search = ({ dispatch }) => {
	let input;

	return (
		<form
			onSubmit={e => {
				e.preventDefault();
				dispatch(imageSearch(input.value))
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
