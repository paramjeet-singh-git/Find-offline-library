import React from 'react'

export default function Login(props) {
    return (
        <div>
            <br />
            <br />
            <div className="cont">
                <div className="form sign-in">
                    <h2  id='loginpage' style={{color:"#f5a425"}}>Welcome</h2>
                    <label>
                        <span id='loginpage' className='mail'>Email</span>
                        <input type="email" />
                    </label>
                    <label>
                        <span id='loginpage' className='mail'>Password</span>
                        <input type="password" />
                    </label>
                    <p className="forgot-pass">Forgot password?</p>
                    <button type="button" className="submit">Sign In</button>

                </div>
                <div className="sub-cont">
                    <div className="img__1">
                        <div className="img__text m--up">

                            <h3 id='loginmsg'>Don't have an account? Please Sign up!</h3>
                        </div>
                        <div className="img__text m--in">

                            <h3 id='loginmsg'>If you already have an account, just sign in.</h3>
                        </div>
                        <div className="img__btn" onClick={function () {
                            document.querySelector('.cont').classList.toggle('s--signup');
                        }}>
                            <span className="m--up" id='loginpage'>Sign Up</span>
                            <span className="m--in" id='loginpage'>Sign In</span>
                        </div>
                    </div>
                    <div className="form sign-up">
                        <h2 id='loginpage2' style={{color:"#f5a425"}}>Create your Account</h2>
                        <label>
                            <span id='loginpage2'>Name</span>
                            <input type="text" />
                        </label>
                        <label>
                            <span id='loginpage2'>Email</span>
                            <input type="email" />
                        </label>
                        <label>
                            <span id='loginpage2'>Password</span>
                            <input type="password" />
                        </label>
                        <button type="button" className="submit">Sign Up</button>

                    </div>
                </div>
            </div>



        </div>
    )
}
