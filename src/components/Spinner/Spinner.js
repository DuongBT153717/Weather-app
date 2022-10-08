import React from 'react';
import SpinnerImg from '../../icons/loading.gif'
const Spinner = () => {
    return (
        <>
            <img src={SpinnerImg} className='d-block m-auto' style={{width: '200px'}} alt="" />
        </>
    );
};

export default Spinner;