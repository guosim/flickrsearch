import React from 'react';
import { connect } from 'react-redux';

const Images = ({images, tag}) => 
	<ul>
		{images.map(index => <li key={index}><img src={index} alt={tag} /></li>)}
	</ul>

const mapStateToProps = state => {
	return {
		images: state.imagesByTag.images,
		tag: state.chooseTag
	}
}

export default connect(mapStateToProps)(Images);