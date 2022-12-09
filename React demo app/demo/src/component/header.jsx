
import React from 'react';

export default class Header extends React.Component{
    
    render(){
        return (<div className="p-5 mb-0 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold text-center">Demo Application</h1>
                <p className="fs-4 text-center">Demo Application created in React</p>
            </div>
        </div>);
    }
}
