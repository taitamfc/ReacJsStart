import React from 'react';
import PropTypes from 'prop-types';
import AlbumFeature from '../..';

AlbumItem.propTypes = {
    item: PropTypes.any
};

AlbumItem.defaultProps = {
    item: {}
}

function AlbumItem(props) {
    const { item } = props
    return (
        <div className='box'>
            <a href={item.thumbnailUrl}>
                <h3> {item.name} </h3>
                <img src={item.thumbnailUrl} alt="" />
            </a>
        </div>
    );
}

export default AlbumItem;