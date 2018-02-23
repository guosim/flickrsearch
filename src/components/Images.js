import React from 'react';
import { connect } from 'react-redux';

import './Images.css';

const Images = ({images, tag}) => 
	<ul className="images">
		{ images.map((url, index) => <li key={index}><img src={url} alt={tag} /></li>) }
	</ul>

const mapStateToProps = state => {
	return {
		images: state.imagesByTag.images,
		tag: state.chooseTag
	}
}

export default connect(mapStateToProps)(Images);