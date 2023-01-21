import React, { Component } from 'react';
import { InfoConsumer } from '../../context.jsx';
import Info from '../../Info.jsx';


class Home extends Component{
    render(){
        return(
        <div className="container">
            <br />
            <h1 style={{textAlign: "center", fontFamily:"revert-layer"}}>Osnovne akademske studije</h1>
            <p style={{textAlign: "center"}}>Sva obaveštenja u vezi aktivnosti na fakultetu možete pronaći ovde</p>
            
            
            <div className="row mt-5">
                
            <InfoConsumer>
                {value => {
                    return value.info.map(item => {
                        return <Info key={item.id} item={item} />
                    });
                }}
            </InfoConsumer>
            </div>
        </div>
        );
    }
}

export default Home;