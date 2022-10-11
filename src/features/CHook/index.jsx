import React from 'react';
import PropTypes from 'prop-types';
import CUseEffect from './components/CUseEffect';
import CCustomHook from './components/CCustomHook';
import CUseCallBack from './components/CUseCallBack';

CHookFeature.propTypes = {

};

function CHookFeature(props) {
    return (
        <div>
            {/* <CUseEffect></CUseEffect> */}
            {/* <CCustomHook></CCustomHook> */}
            <CUseCallBack></CUseCallBack>
        </div>
    );
}

export default CHookFeature;