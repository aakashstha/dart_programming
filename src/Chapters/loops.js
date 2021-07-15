import React from "react";

import Loops_Image from "../images/loops.png";

class Loops extends React.Component {
  changeLoop() {
    var input = document.getElementById("input-loop").value;
    var inputValue = "for";

    if (input === "") {
      document.getElementById("correct-loop").style.visibility = "hidden";
    } else if (input === inputValue) {
      document.getElementById("correct-loop").style.visibility = "visible";
      document.getElementById("correct-loop").innerHTML = "Correct!!";
    } else if (input !== inputValue) {
      document.getElementById("correct-loop").style.visibility = "visible";
      document.getElementById("correct-loop").innerHTML = "Wrong!!";
    } else {
      document.getElementById("correct-loop").style.visibility = "hidden";
      document.getElementById("correct-loop").innerHTML = "";
    }
  }

  render() {
    return (
      <div>
        <div className="centerParagraph-ofHome">
          <div>
            <figure>
              <img src={Loops_Image} alt="Loops_Image" width="80%" />
            </figure>
          </div>
          <div>
            <p>
              At times, certain instructions require repeated execution. Loops
              are an ideal way to do the same. A loop represents a set of
              instructions that must be repeated. In a loop’s context, a
              repetition is termed as an iteration.
            </p>

            <h3>for Loop</h3>
            <p className="source-code1">
              void main() &#123; <br />
              &emsp;var num = 5; <br />
              &emsp;var factorial = 1; <br /> <br />
              &emsp;for( var i = num ; i >= 1; i-- ) &#123; <br />
              &emsp;&emsp;factorial *= i ; <br />
              &emsp; &#125; <br />
              &emsp;print(factorial); <br />
              &#125;
            </p>
            <p>
              The for loop has three parts: the initializer (i=num), the
              condition ( i>=1) and the final expression (i--).
            </p>

            <p>
              The program calculates the factorial of the number 5 and displays
              the same. The for loop generates the sequence of numbers from 5 to
              1, calculating the product of the numbers in every iteration.
            </p>
          </div>

          <div>
            <h3>for-in Loop</h3>
            <p className="source-code1">
              void main() &#123; <br />
              &emsp;var obj = [12,13,14]; <br /> <br />
              &emsp;for (var prop in obj) &#123; <br />
              &emsp;&emsp;print(prop); <br />
              &emsp;&#125; <br />
              &#125;
            </p>
            <p>
              The for...in loop is used to loop through an object's properties{" "}
            </p>
            <p>
              In each iteration, one property from the object is assigned to the
              variable name and this loop continues till all the properties of
              the object are exhausted.
            </p>
          </div>

          <div>
            <h3>while Loop</h3>
            <p className="source-code1">
              void main() &#123; <br />
              &emsp;var num = 5; <br />
              &emsp;var factorial = 1; <br /> <br />
              &emsp;while(num >=1) &#123; <br />
              &emsp;&emsp;factorial = factorial * num; <br />
              &emsp;&emsp;num--; <br />
              &emsp;&#125; <br />
              &emsp;print("The factorial is &dollar;&#123;factorial&#125;");{" "}
              <br />
              &#125;
            </p>
            <p>
              The while loop executes the instructions each time the condition
              specified evaluates to true. In other words, the loop evaluates
              the condition before the block of code is executed.
            </p>
            <p>
              The above code uses a while loop to calculate the factorial of the
              value in the variable num.
            </p>
          </div>

          <div>
            <h3>do while Loop</h3>
            <p className="source-code1">
              void main() &#123; <br />
              &emsp;var n = 10; <br />
              &emsp;do &#123; <br />
              &emsp;&emsp;print(n); <br />
              &emsp;&emsp;n--; <br />
              &emsp;&#125; <br />
              &emsp;while(n>=0); <br />
              &#125;
            </p>
            <p>
              The do…while loop is similar to the while loop except that the
              do...while loop doesn’t evaluate the condition for the first time
              the loop executes. However, the condition is evaluated for the
              subsequent iterations. In other words, the code block will be
              executed at least once in a do…while loop.
            </p>
          </div>

          <div>
            <h3>break statement</h3>
            <p className="source-code1">
              void main() &#123; <br />
              &emsp;var i = 1; <br />
              &emsp;while(i&lt;=10) &#123; <br />
              &emsp;&emsp;if (i % 5 == 0) &#123; <br />
              &emsp;&emsp;&emsp;print("The first multiple of 5 between 1 and 10
              is : &dollar;&#123;i&#125;"); <br />
              &emsp;&emsp;&emsp;break ; <br />
              &emsp;&emsp;{
                "//exit the loop if the first multiple is found "
              }{" "}
              <br />
              &emsp;&emsp;&#125; <br />
              &emsp;&emsp;i++; <br />
              &emsp;&#125;
              <br />
              &#125;
            </p>
            <p>
              The break statement is used to take the control out of a
              construct. Using break in a loop causes the program to exit the
              loop. Following is an example of the break statement.
            </p>

            <p>
              The above code prints the first multiple of 5 for the range of
              numbers within 1 to 10.If a number is found to be divisible by 5,
              the if construct forces the control to exit the loop using the
              break statement
            </p>
          </div>

          <div>
            <h3>continue statement</h3>
            <p className="source-code1">
              void main() &#123; <br />
              &emsp;var num = 0; <br />
              &emsp;var count = 0; <br /> <br />
              &emsp;for(num = 0; num&lt;=20;num++) &#123; <br />
              &emsp;&emsp;if (num % 2==0) &#123; <br />
              &emsp;&emsp;&emsp;continue; <br />
              &emsp;&#125; else &#123;
              <br />
              &emsp;&emsp;count++; <br />
              &emsp;&#125; <br />
              &emsp;print(" The count of odd values between 0 and 20 is:
              &dollar;&#123;count&#125;"); <br />
              &#125;
            </p>
            <p>
              The continue statement skips the subsequent statements in the
              current iteration and takes the control back to the beginning of
              the loop. Unlike the break statement, the continue statement
              doesn’t exit the loop. It terminates the current iteration and
              starts the subsequent iteration.
            </p>
            <p>
              The above example displays the number of even values between 0 and
              20. The loop exits the current iteration if the number is even.
              This is achieved using the continue statement.
            </p>
          </div>
          <br />

          <div className="source">
            <a
              className="main-source"
              href="https://www.tutorialspoint.com/dart_programming/dart_programming_loops.htm"
              target="_blank"
              rel="noopener noreferrer"
            >
              source
            </a>
          </div>

          <hr className="horizontal-line" />

          <div className="mock-test">
            <h2 className="OptionalMock-test">Optional Mock Test</h2>

            <div className="test-container">
              <p className="exam">
                <input id="input-loop" /> (var i = 1;&nbsp; i &lt;&#61;
                10;&nbsp; i++) &#123;
                <br />
                &emsp;print("Hello World!!"); <br />
                <span>&#125;</span>
              </p>
            </div>

            <div className="test-container">
              <button
                className="inner-button"
                type="button"
                onClick={this.changeLoop}
              >
                Done
              </button>
            </div>

            <div className="test-container">
              <h1 id="correct-loop" className="correct">
                Correct!!
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loops;
