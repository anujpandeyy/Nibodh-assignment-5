import React from 'react'
export default function header() {
    return (
        <div>
            <div className="row justify-content-between">
                <div className="col-md-4 d-flex">
                    <div className="icons">
                        <i className="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-youtube"></i>
                    </div>
                    <div className="contact mx-5">
                        <i class="fas fa-phone"></i>
                        &nbsp;<span>+91-5555-7865-55</span>
                    </div>
                </div>
                <div className="col-md-5 d-flex justify-content-end">
                <div className="links">
                <a href=""><i class="fas fa-sign-in-alt"></i>&nbsp;SignUp</a>
                <a href=""><i class="fas fa-sign-in-alt"></i>&nbsp;Login</a>
                </div>
                </div>
            </div>
        </div>
    )
}
