import React from 'react';
import styled from 'styled-components';

function Footer(){
    return (
        <FooterContainter className="main-footer">
        <div className="footer-middle" style={{color:"white"}}>
            <div className="container">
                <div className="row"  >
                    <div className="col-md-3 col-sm-6">
                    <h4>Elektrotehnički fakultet</h4>
                    <ul className="list-unstyled" >
                        <li>Bulevar Kralja Aleksandra 73, 11000 Beograd</li>
                         <li>Telefon: 011/3226-6992</li>    
                         </ul>  
                    </div>    
                </div>
                <div className="footer-bottom">
                 <p className="text-xs-center">
                 &copy;{new Date().getFullYear()} ETF - sva prava zadržana
                 </p>
                </div>
            </div>
         </div>
        </FooterContainter>
    );
}

export default Footer;


const FooterContainter = styled.footer`
   
    .footer-middle {
        background: var(--mainLightGrey);
        padding-top: 2rem;
        color: var(--mainDark);
    }
    .footer-bottom {
        padding-top: 2rem;
        padding-bottom: 1rem;
        
    }
`;