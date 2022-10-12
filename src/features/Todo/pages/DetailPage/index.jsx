import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

DetailPage.propTypes = {

};

function DetailPage(props) {
    let params = useParams();
    return (
        <div>
            <h2>Invoice Detail</h2>
            <p>Invoice: {params.todoId}</p>
        </div>
    );
}

export default DetailPage;