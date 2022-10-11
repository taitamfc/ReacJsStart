import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

CUseEffect.propTypes = {

};

function CUseEffect(props) {
    const [number, setNumber] = useState(1);
    const [filters, setFilters] = useState(1);
    useEffect(() => {
        // EVERY
        // No dependencies defined
        // Always execute after every render
        console.log('Always execute after every render');
        return () => {
            // Execute before the next effect or unmount.
            console.log('Execute before the next effect or unmount');
        };
    });

    useEffect(() => {
        // ONCE
        // Empty dependencies
        // Only execute once after the FIRST RENDER
        console.log('Only execute once after the FIRST RENDER');
        return () => {
            // Execute once when unmount
        };
    }, []);

    useEffect(() => {
        // On demand
        // Has dependencies
        // Only execute after the first RENDER or number state changes
        console.log('Only execute after the first RENDER or filters state changes');

        return () => {
            // Execute once when unmount
        }
    }, [filters]);

    return (
        <div>
            <p>{number}</p>
            <button type='button' onClick={() => {
                setNumber(number + 1)
            }}> CUseEffect setNumber </button>

        </div>
    );
}

export default CUseEffect;