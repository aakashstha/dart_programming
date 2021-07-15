import React from "react";

class Functions extends React.Component {
  changeFunction() {
    var input = document.getElementById("input-function").value;
    var input1 = document.getElementById("input-function1").value;
    var inputValue = "void";
    var inputValue1 = "main";

    if (input === "" || input1 === "") {
      document.getElementById("correct-function").style.visibility = "hidden";
    } else if (input === inputValue && input1 === inputValue1) {
      document.getElementById("correct-function").style.visibility = "visible";
      document.getElementById("correct-function").innerHTML = "Correct!!";
    } else if (input !== inputValue || input1 !== inputValue1) {
      document.getElementById("correct-function").style.visibility = "visible";
      document.getElementById("correct-function").innerHTML = "Wrong!!";
    } else {
      document.getElementById("correct-function").style.visibility = "hidden";
      document.getElementById("correct-function").innerHTML = "";
    }
  }

  render() {
    return (
      <div>
        <div className="centerParagraph-ofHome">
          <p>
            Functions are the building blocks of readable, maintainable, and
            reusable code. A function is a set of statements to perform a
            specific task. Functions organize the program into logical blocks of
            code. Once defined, functions may be called to access code. This
            makes the code reusable. Moreover, functions make it easy to read
            and maintain the program’s code.
          </p>

          <div>
            <h3>Defining a Function</h3>
            <p className="source-code1">
              test() &#123; <br />
              &emsp;{"//function definition "} <br />
              &emsp;print("function called"); <br />
              &#125;
            </p>
            <p>
              A function definition specifies what and how a specific task would
              be done. Before using a function, it must be defined.
            </p>
          </div>

          <div>
            <h3>Calling a Function</h3>
            <p className="source-code1">
              void main() &#123; <br />
              &emsp;test(); <br />
              &#125; <br />
              test() &#123; <br />
              &emsp;{"//function definition "} <br />
              &emsp;print("function called"); <br />
              &#125;
            </p>
            <p>
              A function must be called to execute it. This process is termed as
              function invocation.
            </p>
          </div>

          <div>
            <h3>Returning Function</h3>
            <p className="source-code1">
              void main() &#123; <br />
              &emsp;print(test()); <br />
              &#125; <br />
              String test() &#123;
              <br />
              &emsp;{"// function definition  "} <br />
              &emsp;return "hello world"; <br />
              &#125;
            </p>
            <p>
              Functions may also return value along with the control, back to
              the caller. Such functions are called as returning functions.
            </p>

            <ul>
              <li>The return_type can be any valid data type</li>
              <li>
                The return statement is optional. I not specified the function
                returns null;
              </li>
              <li>
                The data type of the value returned must match the return type
                of the function.
              </li>
              <li>
                A function can return at the most one value. In other words,
                there can be only one return statement per function.
              </li>
            </ul>
          </div>

          <div>
            <h3>Recursive Dart Functions</h3>
            <p className="source-code1">
              void main() &#123; <br />
              &emsp;print(factorial(6));
              <br />
              &#125; <br />
              factorial(number) &#123; <br />
              &emsp;if (number &lt;= 0) &#123;
              <br />
              &emsp;&emsp;{"// termination case  "} <br />
              &emsp;&emsp;return 1; <br />
              &emsp;&#125; else &#123; <br />
              &emsp;&emsp;return (number * factorial(number - 1)); <br />
              &emsp;&emsp;{"// function invokes itself  "} <br />
              &emsp;&#125; <br />
              &#125;
            </p>
            <p>
              Recursion is a technique for iterating over an operation by having
              a function call to itself repeatedly until it arrives at a result.
              Recursion is best applied when you need to call the same function
              repeatedly with different parameters from within a loop.
            </p>
          </div>

          <div>
            <h3>Lambda Functions</h3>
            <p className="source-code1">
              void main() &#123; &emsp;printMsg(); <br />
              &emsp; print(test()); <br />
              &#125; <br />
              printMsg()=> <br />
              print("hello"); <br />
              int test()=>123;
              <br />
              {"// returning function "}
            </p>
            <p>
              Lambda functions are a concise mechanism to represent functions.
              These functions are also called as Arrow functions.
            </p>
          </div>
          <br />

          <div className="source">
            <a
              className="main-source"
              href="https://www.tutorialspoint.com/dart_programming/dart_programming_functions.htm"
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
              <span>
                <input id="input-function" />
                <input id="input-function1" />
              </span>
              <span>()&nbsp;&#123;</span>
              <p>&emsp;print("This is a void function");</p>
              <span>&#125;</span>
            </div>

            <div className="test-container">
              <button
                className="inner-button"
                type="button"
                onClick={this.changeFunction}
              >
                Done
              </button>
            </div>

            <div className="test-container ">
              <h1 id="correct-function" className="correct">
                Correct!!
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Functions;
