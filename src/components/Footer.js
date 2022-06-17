import React from 'react'
import { RiFacebookFill, RiTwitterFill, RiInstagramLine, RiLinkedinBoxFill } from "react-icons/ri";


function Footer() {
    return (
        
        <footer className="site-footer">
            <div className="container text-center">
                <div className="row">
                <div className="col-xs-12 col-sm-4 col-md-4 my-3">
                    <h6>Head Office</h6>
                    <li>UAN: 111-729-526</li>
                    <li>UAN: 111-729-526</li>
                    <li>UAN: 111-729-526</li>
                    <li>UAN: 111-729-526</li>
                    <li>UAN: 111-729-526</li>
                </div>
               
                <div className="col-xs-12 col-sm-4 col-md-4 my-3">
                    <h6>Useful links</h6>
                    <ul className="footer-links"> 
                    <li>lorem</li>                   
                    <li>lorem</li>                   
                    <li>lorem</li>                   
                    <li>lorem</li>                   
                    </ul>
                </div>
               
                <div className="col-xs-12 col-sm-4 col-md-4 my-3">
                    <h6>Contact with Us</h6>
                    <ul className="social-icons">
                    <li><a className="facebook" href="#"><RiFacebookFill/></a></li>
                    <li><a className="twitter" href="#"><RiTwitterFill/></a></li>
                    <li><a className="dribbble" href="#"><RiInstagramLine/></a></li>
                    <li><a className="linkedin" href="#"><RiLinkedinBoxFill/></a></li>   
                    </ul>
                </div>
                </div>
              
            </div>
            
               
                <div className="tex-center">
                    <p className="copyright-text ">Copyright &copy; 2021 All Rights Reserved by Syalani Welfare. </p>
                </div>
        </footer>
      
    )
}

export default Footer
