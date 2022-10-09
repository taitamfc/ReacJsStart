import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const items = [
        {
            id: 1,
            name: 'Album 1',
            thumbnailUrl: 'https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png',
        },
        {
            id: 2,
            name: 'Album 2',
            thumbnailUrl: 'https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png',
        },
        {
            id: 3,
            name: 'Album 3',
            thumbnailUrl: 'https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png',
        }
    ];
    return (
        <>
            <AlbumList items={items}></AlbumList>
        </>
    );
}

export default AlbumFeature;