import React from 'react';
import axios from 'axios';

import Email from './images/emailLogo.png';
import Twitter from './images/twitterLogo.png';
import Instagram from './images/instagramLogo.png';

 
class Info extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: '',
            lname: '',
            country: '',
            email: '',
            rating: null,
            feedback: ''
        }
    }

    handleChange = (event)  => {
        this.setState({
            fname: event.target.value,
        });
    }


    postJsonData = event => {
        event.preventDefault(); 

        const person = {
            fname:this.state.fname, 
        }
        
        axios.post('http://localhost:3002/person',{person}) 
        .then(response => {
            console.log(response);
            console.log(response.data);
        });
    }



    componentDidMount() {
        axios.get('http://localhost:3002/person')
        .then(response => {
            console.log(response.data)
            
            let data = response.data;
            let content = '';
            data.forEach((ele, index) => {
                content += `<div>
                    <h4>${index+1}: ${ele.fname} ${ele.lname} from country ${ele.country}. Email address ${ele.email} gave rating ${ele.rating} out of 10. <br /> <u>Feedback:</u> ${ele.feedback}</h4>
                </div>`
            });
            document.querySelector("#form-output").innerHTML = content;
        })
        .catch(() => {
            document.querySelector("#form-output").innerHTML = "Json server is not loaded or something else ERROR occured.";
        })
    }


    render() {
        return <div>

            <div className="Container">
                <div>
                    <h1 className="hi">Hi! This is Aakash!</h1>

                    <h3 className="paragraph">If you have any problem regrading this website and queries related to dart programming language then you can always contact me/!!</h3>
                </div>
                <br />

                <div className="contact-me">
                    <center>
                        <p>Email me:</p>
                        <a href="mailto:np03a190288@heraldcollege.edu.np">  
                            <img className="email" src={Email} alt="E-mail" width="50px" />
                        </a>


                        <p className="follow">Follow me:</p>
                        <a href="https://twitter.com/aakash_shtha" target="_blank" rel="noopener noreferrer"> 
                            <img className="twitt" src={Twitter} alt="Twitter" width="60px" />
                        </a>
                        <a href="https://www.instagram.com/aakashstha/" target="_blank" rel="noopener noreferrer">
                            <img className="insta" src={Instagram} alt="Instagram" width="44px" />
                        </a>
                    </center>
                </div>

                <div id="white-space"></div>


                {
                    // Form to take user input
                }
                <center>
                <div id="form">
                    <form className="submission-form" onSubmit={this.postJsonData}>
                        <fieldset>
                            <legend>Feedback</legend>
 
                            <br /><label>First Name:</label>
                            <input type="text" name="fname" onChange={this.handleChange}required /> <br />
                            <label>Last Name:</label>
                            <input type="text"  name="lname" onChange={this.handleChange}required /> <br />
                            <label>Country:</label>
                            <input type="text" name="country" /> <br/>
                            <label>Email Id:</label>
                            <input type="email" name="email" required /> <br /> <br />

                            <label>Rating out of 10:</label> <br />
                            <input list="rating" name="ratings" required />
                            <datalist id="rating">
                                <option value="1"></option>
                                <option value="2"></option> 
                                <option value="3"></option>
                                <option value="4"></option>
                                <option value="5"></option>
                                <option value="6"></option>
                                <option value="7"></option>
                                <option value="8"></option>
                                <option value="9"></option>
                                <option value="10"></option>
                            </datalist> <br />

                            <label>Give some feedback about this website:</label> <br /> 
                            <textarea name="message" rows="10" cols="50" placeholder="Awesome/!!"></textarea> <br />

                            <button type="reset">Reset</button>
                            <button type="submit">Submit</button>
                        </fieldset>
                    </form> 
                </div>
                <br />
                <br />

                <div id="form-output"> </div>
                </center>

                </div>

            </div>
    }
}


export default Info;