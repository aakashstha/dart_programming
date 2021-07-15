import React from "react";

class Enumeration extends React.Component {
  changeEnumeration() {
    var input = document.getElementById("input-enumeration").value;
    var inputValue = "enum";

    if (input === "") {
      document.getElementById("correct-enumeration").style.visibility =
        "hidden";
    } else if (input === inputValue) {
      document.getElementById("correct-enumeration").style.visibility =
        "visible";
      document.getElementById("correct-enumeration").innerHTML = "Correct!!";
    } else if (input !== inputValue) {
      document.getElementById("correct-enumeration").style.visibility =
        "visible";
      document.getElementById("correct-enumeration").innerHTML = "Wrong!!";
    } else {
      document.getElementById("correct-enumeration").style.visibility =
        "hidden";
      document.getElementById("correct-enumeration").innerHTML = "";
    }
  }

  render() {
    return (
      <div>
        <div className="centerParagraph-ofHome">
          <h3>Syntax</h3>
          <p className="source-code1">
            enum enum_name &#123; <br />
            &emsp;enumeration list <br />
            &#125;
          </p>

          <h3>Enumeration</h3>
          <p className="source-code1">
            enum Status &#123; <br />
            &emsp;none, <br />
            &emsp;running, <br />
            &emsp;stopped, <br />
            &emsp;paused <br />
            &#125; <br />
            void main() &#123; <br />
            &emsp;print(Status.values); <br />
            &emsp;Status.values.forEach((v) => print('value: &dollar;v, index:
            &dollar;&#123;v.index&#125;')); <br />
            &emsp;print('running: &dollar;&#123;Status.running&#125;,
            &dollar;&#123;Status.running.index&#125;'); <br />
            &emsp;print('running index: &dollar;&#123;Status.values[1]&#125;');{" "}
            <br />
            &#125;
          </p>
          <hr />

          <p>
            [Status.none, Status.running, Status.stopped, Status.paused] <br />
            value: Status.none, index: 0 <br />
            value: Status.running, index: 1 <br />
            value: Status.stopped, index: 2 <br />
            value: Status.paused, index: 3 <br />
            running: Status.running, 1 <br />
            running index: Status.running
          </p>
          <p>
            An enumeration is used for defining named constant values. An
            enumerated type is declared using the <b>enum</b> keyword.Each of
            the symbols in the enumeration list stands for an integer value, one
            greater than the symbol that precedes it. By default, the value of
            the first enumeration symbol is 0.
          </p>
          <br />

          <div className="source">
            <a
              className="main-source"
              href="https://www.tutorialspoint.com/dart_programming/dart_programming_enumeration.htm"
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
                <input id="input-enumeration" />
              </span>
              <span> Week &#123;</span>

              <p>&emsp;Sunday,</p>
              <p>&emsp;Monday,</p>
              <p>&emsp;Tuesday,</p>
              <p>&emsp;Wednesday,</p>
              <p>&emsp;Thursday,</p>
              <p>&emsp;Friday,</p>
              <p>&emsp;Saturday,</p>
              <span>&#125;</span>
            </div>

            <div className="test-container">
              <button
                className="inner-button"
                type="button"
                onClick={this.changeEnumeration}
              >
                Done
              </button>
            </div>

            <div className="test-container ">
              <h1 id="correct-enumeration" className="correct">
                Correct!!
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Enumeration;
