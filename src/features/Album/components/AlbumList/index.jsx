import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from './../AlbumItem';

AlbumList.propTypes = {
    items: PropTypes.array
};

AlbumList.defaultProps = {
    items: []
}

function AlbumList(props) {
    const { items } = props;
    return (
        <>
            {items.map(item => (
                <AlbumItem key={item.id} item={item}></AlbumItem>
            ))}
        </>
    );
}

export default AlbumList;