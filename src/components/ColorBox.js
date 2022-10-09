import React, { useState } from "react";
import PropTypes from 'prop-types';

function ColorBox(props) {
    const { color, rounded } = props;
    const [colorChange, setColorChange] = useState(false);
    return (
        <div className="box" style={{
            backgroundColor: colorChange ? colorChange : color,
            borderRadius: (rounded) ? '10px' : ''
        }}>
            <button onClick={() => setColorChange('red')}>Change Color</button>
        </div>
    )
}

// declare all props in this component
ColorBox.propTypes = {
    color: PropTypes.string.isRequired,
    rounded: PropTypes.bool
}

//declare default value
ColorBox.defaultProps = {
    rounded: true
}

export default ColorBox;