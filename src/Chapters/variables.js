import React from 'react';


class Variables extends React.Component {

     changeVar() {
        var input = document.getElementById("input-var").value
        var inputValueVar = "var";
        var inputValueInt = "int";
     
        if(input === "") {
           document.getElementById("correct-var").style.visibility = "hidden";
        }else if(input === inputValueVar || input === inputValueInt) { 
           document.getElementById("correct-var").style.visibility = "visible";
           document.getElementById("correct-var").innerHTML = "Correct!!";
        } else if(input !== inputValueVar || input !== inputValueInt) {
           document.getElementById("correct-var").style.visibility = "visible";
           document.getElementById("correct-var").innerHTML = "Wrong!!";
        } else {
           document.getElementById("correct-var").style.visibility = "hidden";
           document.getElementById("correct-var").innerHTML = "";
        }
     
     }

    render() {
        return <div>

            <div className="centerParagraph-ofHome">  
                <p>A variable is “a named space in the memory” that stores values. In other words, it acts a container for values in a program. Variable names are called identifiers. Following are the naming rules for an identifier −</p>

                <ul>
                    <li>Identifiers cannot be keywords.</li>
                    <li>Identifiers can contain alphabets and numbers</li>
                    <li>Identifiers cannot contain spaces and special characters, except the underscore (_) and the dollar ($) sign.</li>
                    <li>Variable names cannot begin with a number.</li>

                </ul>

                    <h4>Final and const</h4>
                    <p>If you never intend to change a variable, use <b>final</b> or <b>const</b>, either instead of var or in addition to a type. A final variable can be set only once; a const variable is a compile-time constant. (Const variables are implicitly final.) A final top-level or class variable is initialized the first time it’s used.</p>

                    <h4>Example - var</h4>
                    <p>Here’s an example of creating a variable and initializing it:</p>
                    <p>var name = 'Aaron';</p>
                    <p>Variables store references. The variable called name contains a reference to a String object with a value of “Aaron”.The type of the name variable is inferred to be String, but you can change that type by specifying it</p>
                    <p>dynamic name = 'Aaron';</p>

                    <p>Another option is to explicitly declare the type that would be inferred</p>

                    <p>String name = 'Aaron';</p>

                    <h4>Example - final and const keyword</h4>
                    <p className="source-code1">
                        void main() &#123; <br /> <br />
                        &emsp;{ " // This is final " } <br />
                        &emsp;final val1 = 12; <br />
                        &emsp;print(val1); <br /> <br />
                        &emsp;{ " // This is constant " } <br />
                        &emsp;const pi = 3.14; <br />
                        &emsp;const area = pi*12*12; <br />
                        &emsp;print("The output is &dollar;&#123;area &#125;"); <br />
                        &#125;
                    </p>

                    <p>The main difference between final and const is final mostly used inside a class to make a constant value whereas const can be used anywhere in the programme but if you want to use const in classes like final then you have to make static const in class.</p>
                <br />

                <div className="source">
                    <a className="main-source" href="https://www.tutorialspoint.com/dart_programming/dart_programming_variables.htm" target="_blank" rel="noopener noreferrer">source</a>
                </div>

                <hr className="horizontal-line" />
                <div className="mock-test">
                    <h2 className="OptionalMock-test">Optional Mock Test</h2>
                    
                    <div className="test-container">
                        <span><input id="input-var" type="text" /></span>&nbsp;
                        <span>myVariable = 10;</span>
                    </div>
                    
                    <div className="test-container">
                        <button className="inner-button" type="button" onClick={this.changeVar}>Done</button>
                    </div>
                    
                    <div className="test-container">
                        <h1 id="correct-var" className="correct">Correct!!</h1>
                    </div>
                    

                </div>
            
            </div>

        </div>
    }
}


export default Variables;