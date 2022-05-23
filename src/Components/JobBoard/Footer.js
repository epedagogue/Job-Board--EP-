import React from 'react'
import './Footer.css'


const Footer = () => {
    return (

        <footer class="footer-section">
            <div class="copyright-area">
                <div class="container">
                    <div class="row">                      
                            <div class="footer-menu">
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">Terms</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Policy</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>              
                    </div>
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2022, All Right Reserved <a href="https://www.epedagogue.com/#/" target="_blank">Epedagogue Global Pvt. Ltd.</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer