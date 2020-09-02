import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Frog from '../assets/frog.svg';


export class New extends Component {
    render() {
        return (
            <>
            <h1 className="w-full text-center p-16 text-lg">
                A new one
            </h1> 
            <ul>
                <li>
                    <Link to={'/list/123456'} >
                    <img src={Frog} className="w-2/5 m-auto" alt="new" /> 
                    </Link></li>
            </ul> 
            </>
        )
    }
}


export default New;