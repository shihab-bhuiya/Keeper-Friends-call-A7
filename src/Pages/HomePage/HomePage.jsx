import React from 'react';
import Banner from '../../Component/Hompage/Banner';
import Friends from '../../Component/Hompage/Friends';

const HomePage = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold underline text-center'>Welcome to React</h1>
            <Banner/>
            <Friends/>
        </div>
    );
};

export default HomePage;