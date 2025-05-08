import React from 'react';
import Slider from '../../components/Slider';
import MoviesContainer from '../../components/MoviesContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div >
            <Slider></Slider>
            <MoviesContainer movies={data}></MoviesContainer>

        </div>
    );
};

export default Home;