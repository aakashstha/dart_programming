import React from 'react';

class DecisionMaking extends React.Component {

     changeDecision() {
        var input = document.getElementById("input-decision").value
        var inputValue = "if";
     
        if(input === "") {
           document.getElementById("correct-decision").style.visibility = "hidden";
        }else if(input === inputValue) { 
           document.getElementById("correct-decision").style.visibility = "visible";
           document.getElementById("correct-decision").innerHTML = "Correct!!";
        } else if(input !== inputValue) {
           document.getElementById("correct-decision").style.visibility = "visible";
           document.getElementById("correct-decision").innerHTML = "Wrong!!";
        }else {
           document.getElementById("correct-decision").style.visibility = "hidden";
           document.getElementById("correct-decision").innerHTML = "";
        }
     
     }

    render() {
        return <div>

            <div className="centerParagraph-ofHome">  
                <div> 
                    <h3>if statement</h3>
                    <p className="source-code1">
                        void main() &#123; <br />
                        &emsp;var  num=5; <br />
                        &emsp;if (num>0) &#123; <br /> 
                        &emsp;&emsp;print("number is positive"); <br />
                        &emsp;&#125; <br />     
                        &#125; 
                    </p>
                    <p>If the Boolean expression evaluates to be true, then the block of code inside the if statement will be executed. If Boolean expression evaluates to be false, then the first set of code after the end of the if statement (after the closing curly brace) will be executed.</p>

                </div>

                <div>
                    <h3>if... else</h3>
                    <p className="source-code1">
                        void main() &#123;  <br />
                        &emsp;var num = 12; <br />
                        &emsp;if (num % 2==0) &#123;  <br />
                        &emsp;&emsp;print("Even"); <br />
                        &emsp;&#125;else &#123;  <br />
                        &emsp;&emsp;print("Odd"); <br />
                        &emsp;&#123;  <br />
                        &#123; 
                    </p>
                    <p>The if block guards the conditional expression. The block associated with the if statement is executed if the Boolean expression evaluates to true. The if block may be followed by an optional else statement. The instruction block associated with the else block is executed if the expression evaluates to false.</p>

                </div>

                <div>
                    <h3>else…if ladder</h3>
                    <p className="source-code1">
                        void main() &#123;  <br />
                        &emsp;var num = 2; <br />
                        &emsp;if(num &gt; 0) &#123;  <br />
                        &emsp;&emsp;print("&dollar;&#123;num &#125; is positive"); <br />
                        &emsp;&#125;  <br />
                        &emsp;else if(num &lt; 0) &#123;  <br />
                        &emsp;&emsp;print("&dollar;&#123;num&#125; is negative"); <br />
                        &emsp;&#125; else &#123;  <br />
                        &emsp;&emsp;print("&dollar;&#123;num&#125; is neither positive nor negative"); <br /> 
                        &emsp;&#125; <br />
                        &#125;
                    </p>
                    <p>When using if…else statements, there are a few points to keep in mind. An if can have zero or one else's and it must come after any else…if's. An if can have zero to many else…if's and they must come before the else. Once an else…if succeeds, none of the remaining else…if's or else's will be tested.</p>

                </div>


                <div>
                    <h3>switch case</h3>
                    <p className="source-code1">
                        void main()  &#123;  <br />
                        &emsp;var grade = "A"; <br />
                        &emsp;switch(grade) &#123; <br />
                        &emsp;case "A":  &#123; print("Excellent"); &#125; <br />
                        &emsp;break; <br />
                        &emsp;case "B":  &#123; print("Good"); &#125; <br />
                        &emsp;break; <br />
                        &emsp;case "C":  &#123; print("Fair"); &#125; <br />
                        &emsp;break; <br />
                        &emsp;case "D":  &#123; print("Poor"); &#125; <br />
                        &emsp;break; <br />
                        &emsp;default:  &#123; print("Invalid choice"); &#125; <br />
                        &emsp; break; <br />
                        &emsp;&#125; <br />
                        &#125; 
                    </p>
                    <p>The example verifies the value of the variable grade against the set of constants (A, B, C, D, and E) and executes the corresponding blocks. If the value in the variable doesn’t match any of the constants mentioned above, the default block will be executed.</p>

                </div> 
                <br />

                <div className="source">
                    <a className="main-source" href="https://www.tutorialspoint.com/dart_programming/dart_programming_decision_making.htm" target="_blank" rel="noopener noreferrer">source</a>
                </div>

                <hr className="horizontal-line" />
                
                <div className="mock-test"> 
                    <h2 className="OptionalMock-test">Optional Mock Test</h2>

                    <div className="test-container">
                        <p>var x = 1;<br />
                        <input id="input-decision" />&nbsp;(x==1) &#123;<br />
                        &emsp;print("This is 1");<br />
                        &#125; else &#123;<br />
                        &emsp;print("This is not 1"); <br />
                        &#125; <br /></p>
                    </div>

                    <div className="test-container">
                        <button className="inner-button" type="button" onClick={this.changeDecision}>Done</button>
                    </div>

                    <div className="test-container">
                        <h1 id="correct-decision" className="correct">Correct!!</h1>
                    </div>

                </div>
                
            </div>

        </div>
    }
}


export default DecisionMaking;