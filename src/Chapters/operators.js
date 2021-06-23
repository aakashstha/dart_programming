import React from 'react';


class Operators extends React.Component {

     changeOperator() {
        var input = document.getElementById("input-operator").value
        var inputValue = "12";
     
        if(input === "") {
           document.getElementById("correct-operator").style.visibility = "hidden";
        }else if(input === inputValue) { 
           document.getElementById("correct-operator").style.visibility = "visible";
           document.getElementById("correct-operator").innerHTML = "Correct!!";
        } else if(input !== inputValue) {
           document.getElementById("correct-operator").style.visibility = "visible";
           document.getElementById("correct-operator").innerHTML = "Wrong!!";
        }else {
           document.getElementById("correct-operator").style.visibility = "hidden";
           document.getElementById("correct-operator").innerHTML = "";
        }
     
     }

    render() {
        return <div>

            <div className="centerParagraph-ofHome"> 
                <div>
                    <p>The main operators discuss in the dart programming language are as follows: - </p>
                    <ul>
                        <li>Arithmetic Operators</li>
                        <li>Assignment Operators</li>
                        <li>Equality and Relational Operators</li>
                        <li>Logical Operators</li>
                        <li>Type test Operators</li>
                        <li>Bitwise Operators</li>
                    </ul>

                    <p>An expression is a special kind of statement that evaluates to a value. Every expression is composed of −</p>
                    <ul>
                        <li>Operands − Represents the data</li>
                        <li>Operator − Defines how the operands will be processed to produce a value</li>

                    </ul>
                    <p>Consider the following expression – "2 + 3". In this expression, 2 and 3 are operands and the symbol "+" (plus) is the operator.</p>
                </div>
                <hr />

                { /**
                Arithmetic Operators
                 */}
                <div>
                    <h3>Arithmetic Operator</h3>

                    <table className="table-operator">
                        <tr>
                            <th>SN.</th>
                            <th>Operator</th>
                            <th>Meaning</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>+</td>
                            <td>Add</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>-</td>
                            <td>Subtract</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>*</td>
                            <td>Multiply</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>/</td>
                            <td>Divide</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>%</td>
                            <td>Get the remainder of an integer division (modulo)</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>++</td>
                            <td>Increment</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>--</td>
                            <td>Decrement</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>~/</td>
                            <td>Divide, returning an integer result</td>
                        </tr>

                    </table>

                </div>
                <hr />

                { /**
                Assignment Operators
                 */}
                <div>
                    <h3>Assignment Operator</h3>

                    <table className="table-operator">
                        <tr>
                            <th>SN.</th>
                            <th>Operator</th>
                            <th>Description</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>=</td>
                            <td>(Simple Assignment) <br />Assigns values from the right side operand to the left side operand <br /> <b>Ex:</b>C = A + B will assign the value of A + B into C </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>??=</td>
                            <td>Assign the value only if the variable is null</td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>+=</td>
                            <td>(Add and Assignment) <br />It adds the right operand to the left operand and assigns the result to the left operand. <br /> <b>Ex:</b>C += A is equivalent to C = C + A</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>-=</td>
                            <td>(Subtract and Assignment)<br />It subtracts the right operand from the left operand and assigns the result to the left operand.<br /><b>Ex</b>: C -= A is equivalent to C = C – A</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>*=</td>
                            <td>(Multiply and Assignment)<br />It multiplies the right operand with the left operand and assigns the result to the left operand.<br /><b>Ex</b>: C *= A is equivalent to C = C * A</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>/=</td>
                            <td>(Divide and Assignment)<br />It divides the left operand with the right operand and assigns the result to the left operand.</td>
                        </tr>

                    </table>
                </div>
                <hr />

                { /**
                Equality and Relational Operators 
                 */}
                <div>
                    <h3>Equality and Relational Operators</h3>

                    <table className="table-operator">
                        <tr>
                            <th>SN.</th>
                            <th>Operator</th>
                            <th>Description</th>
                            <th>Example</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>&gt;</td>
                            <td>Greater than</td>
                            <td>(A &gt; B) is False</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>&lt;</td>
                            <td>Lesser than</td>
                            <td>(A &lt; B) is True</td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>&gt;=</td>
                            <td>Greater than or equal to</td>
                            <td>(A&gt;= B) is False</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>&lt;=</td>
                            <td>Lesser than or equal to</td>
                            <td>(A &lt;= B) is True</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>==</td>
                            <td>Equality</td>
                            <td>(A==B) is True</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>!=</td>
                            <td>Not equal</td>
                            <td>(A!=B) is True</td>
                        </tr>

                    </table>

                </div>
                <hr />


                { /**
                 Logical Operators 
                 */}
                <div>
                    <h3>Logical Operators</h3>

                    <table className="table-operator">
                        <tr>
                            <th>SN.</th>
                            <th>Operator</th>
                            <th>Description</th>
                            <th>Example</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>&amp;&amp;</td>
                            <td><b>And</b> − The operator returns true only if all the expressions specified return true</td>
                            <td>(A > 10 &amp;&amp; B &gt; 10) is False.</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>||</td>
                            <td><b>OR</b> − The operator returns true if at least one of the expressions specified return true</td>
                            <td>((A &gt; 10 || B &gt; 10) is True.</td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>!=</td>
                            <td><b>NOT</b> − The operator returns the inverse of the expression’s result. <br />For E.g.: !(7&gt;5) returns false</td>
                            <td>!(A &gt; 10) is True.</td>
                        </tr>


                    </table>

                </div>
                <hr />

                { /**
                 Type test Operators 
                 */}
                <div>
                    <h3>Type test Operators</h3>

                    <table className="table-operator">
                        <tr>
                            <th>SN.</th>
                            <th>Operator</th>
                            <th>Meaning</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>is</td>
                            <td>True if the object has the specified type</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>is!</td>
                            <td>False if the object has the specified type</td>

                        </tr>


                    </table>

                </div>
                <hr />

                { /**
                 Bitwise Operators
                 */}
                <div>
                    <h3>Bitwise Operator</h3>

                    <table className="table-operator">
                        <tr>
                            <th>SN.</th>
                            <th>Operator</th>
                            <th>Description</th>
                            <th>Example</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Bitwise AND</td>
                            <td>a &amp; b</td>
                            <td>Returns a one in each bit position for which the corresponding bits of both operands are ones.</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Bitwise OR</td>
                            <td>a &#124; b</td>
                            <td>Returns a one in each bit position for which the corresponding bits of either or both operands are ones.</td>

                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Bitwise XOR</td>
                            <td>a &and; b</td>
                            <td>Returns a one in each bit position for which the corresponding bits of either but not both operands are ones.</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Bitwise NOT</td>
                            <td>&#126;a</td>
                            <td>Inverts the bits of its operand.</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Left shift</td>
                            <td>a &lt;&lt; b</td>
                            <td>Shifts a in binary representation b (&lt; 32) bits to the left, shifting in zeroes from the right.</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Right shift</td>
                            <td>a &gt;&gt; b</td>
                            <td>Shifts a in binary representation b (&lt; 32) bits to the right, discarding bits shifted off.</td>
                        </tr>

                    </table>

                </div>
                <br /> 

                <div className="source">
                    <a className="main-source" href="https://www.tutorialspoint.com/dart_programming/dart_programming_operators.htm" target="_blank" rel="noopener noreferrer">source</a>
                </div>

                <hr className="horizontal-line" />
                
                <div className="mock-test">
                    <h2 className="OptionalMock-test">Optional Mock Test</h2>

                    <div className="test-container">
                        <p>int a = 5, b = 6, c = 7;</p>
                        <span>print(a+c) = </span>
                        <span><input id="input-operator" />;</span>
                    </div>

                    <div className="test-container">
                        <button className="inner-button" type="button" onClick={this.changeOperator}>Done</button>
                    </div>

                    <div className="test-container">
                        <h1 id="correct-operator" className="correct">Correct!!</h1>
                    </div>

                </div>
                
            </div>

        </div>
    }
}


export default Operators;