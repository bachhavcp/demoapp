import React from 'react';
import Car from './Car';
import './styles.css';

// don't change the Component name "App"
export default function App() {
    const Vehicle=[
        {
            Company:'TATA',
            Model:'Nexon',
            Details:'SUV',
        },
        {
            Company:'MARUTI',
            Model:'Baleno',
            Details:'Hatchback'
        },
        {
            Company:'Hyundai',
            Model:'Creta',
            Details:'SUV'
        },
        ]
    return (
        <div>
            <h1>Car Mall</h1>
            <div>
            <Car Company={Vehicle[0].Company} Model={Vehicle[0].Model} Details={Vehicle[0].Details}></Car>
            <Car
            Company={Vehicle[1].Company} Model={Vehicle[1].Model} Details={Vehicle[1].Details}
            ></Car>
            <Car
            Company={Vehicle[2].Company} Model={Vehicle[2].Model} Details={Vehicle[2].Details}
            ></Car>
            </div>
        </div>
    );
}