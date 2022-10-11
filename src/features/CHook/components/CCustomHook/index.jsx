import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

CCustomHook.propTypes = {

};

function useMagicColor() {
    const [color, setColor] = useState('red');
    useEffect(() => {
        console.log('Only execute once after the FIRST RENDER');

        const refInterval = setInterval(() => {
            const newColor = (color == 'red') ? 'green' : 'red';
            setColor(newColor);
        }, 1000);
        return () => {
            clearInterval(refInterval);
        }
    }, [color]);

    return color;
}

function CCustomHook(props) {
    const color = useMagicColor();
    return <div className="magic-box" style={{ backgroundColor: color, padding: '20px' }}> Color Box </div>
}

export default CCustomHook;