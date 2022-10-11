import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

CUseCallBack.propTypes = {

};

function Chart(props) {
    const { onTypeChange } = props;
    // Bị re-render khi couter thay đổi
    console.log('Chart');
    return (
        <div>
            Chart
        </div>
    );
}

function CUseCallBack(props) {
    const [couter, setCounter] = useState(1);
    const handleTypeChange = useCallback(() => {
        console.log('handleTypeChange');
    })

    const handleClick = () => {
        setCounter(couter + 1);
        console.log('handleClick');
    };

    return (
        <div>
            <h1>{couter}</h1>
            <button onClick={handleClick}> Click Me </button>
            <Chart onTypeChange={handleTypeChange}></Chart>
        </div>
    );
}

export default CUseCallBack;