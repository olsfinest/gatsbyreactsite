import React  from 'react'
import { Link } from 'gatsby';



const Footer = () => { 

    

return( 

<div className="footer-wrapper">

    <div id="footer-wrapper">

    <div className="container">

        

            <footer role="contentinfo">

                <div id="inner-footer" className="clearfix">

                <p className="attribution">© 2019 -  <Link to="/" ><span> Design by Patrick </span></Link>   
                
                - ALL RIGHTS RESERVED. Built with  by 

                <a href="https://shanewebguy.com/">
                <span className="orange-txt"> Shane</span><span className="txt-white">Web</span><span className="orange-txt">Guy</span>
                </a>.    
                
                <br/>
            
                <Link to="/ada-compliance-statement/" >
                <span> ADA Compliance Statement</span>
                </Link> 
                </p>
                
                
                </div> 
                
                
            </footer>
        
        </div>

    </div> 

</div>    
)

}



export default Footer

