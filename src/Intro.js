import React from 'react';
import avatar from './avatar.png';
import logo from './logo.png';

const Intro = (props) => {
    return (
        <div>
            <section id="intro-overview">
                <img src={logo} className="logo" alt="logo" />
                <img src={avatar} className="avatar" alt="avatar" />

            </section>
        </div>
    );
}

export default Intro;