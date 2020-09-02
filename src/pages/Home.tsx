import React from 'react';
import ReactDOM from 'react-dom';
import CloudSun from '../assets/cloud-sun.svg';

const Home: React.FC = () => (
    <>
        <h1 className="w-full text-center p-16 text-lg">
            This is an app in React, Typescript and TailwindCss
        </h1>
        <div className="p-16 bg-gray-600">
           <img src={CloudSun} className="w-3/5 m-auto" alt="new" /> 
        </div>
    </>
)


export default Home;