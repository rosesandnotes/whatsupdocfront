import React from 'react';
import pandalogo from '../img/pandalogo150px.png';
import whatsupdoclogo from '../img/whatsupdoclogo.png';

const Nav = () => {
  return <div>
       <nav className="navbar fixed-top navbar-expand-lg navbar-dark mb-5">
        <a className="navbar-brand" href="#">
          <img src={pandalogo} alt="logo" width="50px" height="50px" id="logoimage" /> 
          <img src={whatsupdoclogo} alt="logotext" id="logotext" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto" >
            <li className="nav-item active">
              <a className="nav-link" href="#showcase">Home <span className="sr-only">(current)</span></a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#aboutsection">About</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="#contactsection">Contact</a>
            </li>  

            <li className="nav-item">
                <a className="nav-link" href="#popupbox1">Sign in</a>
            </li>
                     
                <a className="signup-button" href="#popupbox2">Sign up</a>             
          </ul>
        </div>
        
        <div id="popupbox1" className="bgoverlay">
          <div className="sign-popup">           
                <a className="xclose" href="#">&times;</a>

              <div className="signinfield">
                <form action="/action_page.php" className="signin-form">
                  <h3>Sign in</h3>

                  <input type="text" placeholder="Username / E-mail" name="email" required />     
                  <input type="password" placeholder="Password" name="psw" required />  

                  <button type="submit" className="signinbtn">Sign in</button>

                  <label>
                    <input type="checkbox" checked="checked" name="remember" style={{ marginBottom: '15px'}} /> Remember me
                  </label>

                  <p><a className="forgotpass" href="#">Forgot your password?</a></p>               
                  <hr />

                  <a className="notmember">Not a member yet? Register with us</a>               
                  <a className="signupbtn1" href="#popupbox2">Sign up</a>                               
                </form>
              </div>
          </div>
        </div>

        <div id="popupbox2" className="bgoverlay">
          <div className="sign-popup">           
                  <a className="xclose" href="#">&times;</a>
              <div className="signupfield">
                <form action="/action_page.php" className="signup-form">
                  <h3>Sign Up</h3>
                  <p>Create an account</p>

                <fieldset data-role="controlgroup">
                  <label for="Patient" style={{marginRight:'30px'}} >                
                  <input type="checkbox" name="persona1" id="Patient" value="Patient" />
                  Patient</label>             
                
                  <label for="Physician">
                  <input type="checkbox" name="persona2" id="Physician" value="Physician" />
                  Physician</label>
                </fieldset>

                  <input type="text" placeholder="Username" name="username" required />
                  <input type="text" placeholder="Fist name" name="firstname" required />
                  <input type="text" placeholder="Last name" name="lasttname" required />                                               
                  <input type="text" placeholder="E-mail address" name="email-signup" required />                              
                  <input type="password" placeholder="Password" name="psw-signup" required />                             
                  <input type="password" placeholder="Confirm Password" name="psw-repeat" required />                             
                
                  <label>
                    <input type="checkbox" checked="checked" name="terms-and-privacy" style={{marginBottom:'15px'}} />
                    By creating an account you agree to our <a href="#popupbox3" style= {{color: '#41A6C2'}}  > Terms & Privacy </a>
                  </label>               
              
                  <button type="submit" className="signupbtn" >Sign up</button>     
                </form>               
              </div>
          </div> 
        </div> 

        <div id="popupbox3" className="bgoverlay">
          <div className="terms-popup">           
                  <a className="xclose" href="#">&times;</a>

              <div className="Termsnprivacy">             
                  <h3>Terms & Privacy</h3>
                  <hr />
                  <p>This privacy notice discloses the privacy practices for (website address). This privacy notice applies solely to information collected by this website. It will notify you of the following:                   
                  </p>
                  <p>
                      1. What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.
                  </p>
                  <p>2. What choices are available to you regarding the use of your data.</p>
                  <p>3. The security procedures in place to protect the misuse of your information.</p>
                  <p>4. How you can correct any inaccuracies in the information.</p>
                  
                  <h4>Information Collection, Use, and Sharing</h4>
                  <p> We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.</p>
                      
                  <p> We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.</p>     <p>Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.</p>
                  
                  <h4>Your Access to and Control Over Information</h4> 
                  <p>You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:</p>
                  <p>• See what data we have about you, if any.</p>
                  <p>• Change/correct any data we have about you.</p>
                  <p>• Have us delete any data we have about you.</p>
                  <p>• Express any concern you have about our use of your data.</p>

                  <h4>Security</h4>
                  <p>We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.</p>
                  <p>Wherever we collect sensitive information (such as credit card data), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for "https" at the beginning of the address of the Web page.</p>
                  <p>While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.
                  </p> 
                  
                  <a className="signupbtn1" href="#popupbox2">Agree & Sign up</a>
              </div>
          </div>        
        </div>
    </nav>
  </div>
}

export { Nav }