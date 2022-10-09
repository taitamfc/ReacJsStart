import React from 'react';
import logo from './../logo.svg';

function CT01Variables(props) {
    const name = 'Nguyen Van A';
    const age = 18;
    const gender = true;
    const student = {
        name: 'TTFC'
    };
    const favoried = ['Sing', 'Song'];

    return (
        <div>
            <header className='AppHeader'>
                <img src={logo} />
                <p>Xin chao {name}. Ban nam nay {age} tuoi</p>
                <p>Gioi tinh: {gender ? 'Nam' : 'Nu'} </p>
                <p>Gioi tinh: {gender && <p>Nam</p>} </p>
                <p>Gioi tinh: {!gender && 'Nu'} </p>
                {
                    gender && (
                        <div>
                            <p>Nam nhieu dong co wrapper</p>
                            <p>Nam nhieu dong co wrapper</p>
                        </div>
                    )
                }

                {
                    gender && (
                        <React.Fragment>
                            <p>Nam nhieu dong ko co wrapper</p>
                            <p>Nam nhieu dong ko co wrapper</p>
                        </React.Fragment>
                    )
                }
            </header>
        </div>
    );
}

export default CT01Variables;