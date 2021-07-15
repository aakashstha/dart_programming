import React from "react";

class Datatypes extends React.Component {
  changeBool = () => {
    var input = document.getElementById("input-bool").value;
    var inputTrue = "true";
    var inputFalse = "false";

    if (input === "") {
      document.getElementById("correct-bool").style.visibility = "hidden";
    } else if (input === inputTrue || input === inputFalse) {
      document.getElementById("correct-bool").style.visibility = "visible";
      document.getElementById("correct-bool").innerHTML = "Correct!!";
    } else if (input !== inputTrue || input !== inputFalse) {
      document.getElementById("correct-bool").style.visibility = "visible";
      document.getElementById("correct-bool").innerHTML = "Wrong!!";
    } else {
      document.getElementById("correct-bool").style.visibility = "hidden";
      document.getElementById("correct-bool").innerHTML = "";
    }
  };

  render() {
    return (
      <div>
        <div className="centerParagraph-ofHome">
          <p>The Dart language has special support for the following types:</p>
          <ul>
            <li>Numbers</li>
            <li>Stings</li>
            <li>Booleans</li>
            <li>Lists</li>
            <li>Maps</li>
            <li>Sets</li>
          </ul>

          <h4>Numbers</h4>
          <ul>
            <li>
              <b>Integer</b> - Integer value represents a value without a
              decimal point. For example, the value "10" is an integer. Integer
              literals are represented using the <b>int</b> keyword.
            </li>
            <li>
              <b>Double</b> - Dart also supports fractional numeric values that
              is with decimal point. The Double data type in Dart represents a
              64-bit (double-precision) floating-point number. For example, the
              value "10.10". The keyword <b>double</b> is used to represent
              floating point literals.
            </li>
          </ul>

          <h4>Strings</h4>
          <ul>
            <li>
              The keyword <b>String</b> is used to represent string literals.
              String values are embedded in either single or double quotes.
            </li>
          </ul>

          <h4>Boolean</h4>
          <ul>
            <li>
              The Boolean data type represents Boolean values true and false.
              Dart uses the <b>bool</b> keyword to represent a Boolean value.
            </li>
          </ul>

          <h4>List, Map and Set</h4>
          <ul>
            <li>
              The data types list and map are used to represent a collection of
              objects. A <b>List</b> is an ordered group of objects which in
              other programming language called array. The <b>Map</b> data type
              represents a set of values as key-value pairs and also called
              dictionary in other language because of key-value pairs like
              dictionary. The dart: core library enables creation and
              manipulation of these collections through the predefined List and
              Map classes respectively. A <b>set</b> in Dart is an unordered
              collection of unique items. Dart support for sets is provided by
              set literals and the Set type.
            </li>
          </ul>

          <h4>The Dynamic Type</h4>
          <ul>
            <li>
              Dart is an optionally typed language. If the type of a variable is
              not explicitly specified, the variable’s type is dynamic. The{" "}
              <b></b> keyword can also be used as a type annotation explicitly.
            </li>
          </ul>
          <br />

          <div className="source">
            <a
              className="main-source"
              href="https://www.tutorialspoint.com/dart_programming/dart_programming_data_types.htm"
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
              <span>bool what = </span>
              <span>
                <input id="input-bool" />;
              </span>
            </div>

            <div className="test-container">
              <button
                className="inner-button"
                type="button"
                onClick={this.changeBool}
              >
                Done
              </button>
            </div>

            <div className="test-container">
              <h1 id="correct-bool" className="correct">
                Correct!!
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Datatypes;
