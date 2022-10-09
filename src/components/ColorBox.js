import React from "react";
import PropTypes from 'prop-types';

function ColorBox(props) {
    const { color, rounded } = props;
    return (
        <div className="box" style={{
            backgroundColor: color,
            borderRadius: (rounded) ? '10px' : ''
        }}></div>
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