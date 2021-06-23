import React from 'react';



class Examples extends React.Component {

    showHideExamples() {
        // For Show and Hide SOURCE CODE in Examples /!!
        var accordion = document.getElementsByClassName("sourceCode-button");
        var i;
 
        console.log(accordion);

        for(i=0; i<accordion.length; i++) {
        console.log(i);
        accordion[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to add the button that controls the sourceCode */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active sourceCode */
            var sourceCode = this.nextElementSibling;
            if(sourceCode.style.display === "block") {
                sourceCode.style.display = "none";
            } else {
                sourceCode.style.display = "block";
            }
        })

        }
    }

    render() {
        return <div>
            <div className="centerParagraph-ofHome">
                <div> 
                <p><strong>This examples can help you a lot to understand dart concept and how to solve certain problems.</strong></p> 

                <h1><u>Dart Programming Code To Create Nepali Flag, Pyramid, Pattern, Palindrome and Fibonacci number series and many more.</u></h1>
                    <br />
                <h3>First example series, programme to print our nepali flag</h3>  
                    <pre className="printing-pattern"> {`
                        1 
                        1 1 
                        1 1 1 
                        1 1 1 1 
                        1 1 1 1 1 
                        2 
                        2 2 
                        2 2 2 
                        2 2 2 2 
                        2 2 2 2 2 
                        3
                        3
                        3
                        3
                        3
                    4 4 4 4 4  
                        `}</pre> 


                    <button className="sourceCode-button" onClick={this.showHideExamples}>Source Code</button>

                        <div className="source-code">
                            <pre>{`
                                void main() {
                                    printingNepaliFlagInConsole() {semiColon};
                                }

                                void printingNepaliFlagInConsole() {
                                var store;
                                var emptySpace = "";

                                for (var space = 1; space &lt;=20; space++) {
                                    emptySpace += " ";
                                }

                                for (var outerSet = 1; outerSet &lt;= 2; outerSet++) {
                                    for (var row = 1; row &lt;= 5; row++) {
                                    store = '';
                                    for (var column = 1; column &lt;= row; column++) {
                                        store += "$outerSet ";
                                    }
                                    print("$emptySpace     $store");
                                    }
                                }

                                var stickOfFlag = 1;
                                while (stickOfFlag &lt;= 5) {
                                    print("$emptySpace     3");
                                    stickOfFlag++;
                                }

                                var groundOfFlag = 1;
                                var storeGroundToPrintHorizontally = "";
                                while (groundOfFlag &lt;= 5) {
                                    storeGroundToPrintHorizontally += "4 ";
                                    groundOfFlag++;
                                }
                                print("$emptySpace $storeGroundToPrintHorizontally");
                                }
                                
                            `}</pre>
                        </div>

                        </div>

                        <div className="motivation-quote">
                            <h3 className="quote">Programming is a skill best acquired by practice and 
                            example rather than from books.</h3>
                            <h4 className="quote">&mdash; by Alan Turing</h4>
                        </div>
                <hr />
                <hr />

 
                {/**
                Pattern Printing    1
                */}
                <div>
                    <h3>Pattern Printing 1</h3>  
                    <pre className="printing-pattern"> {`
                        NEPAL
                        EPAL 
                        PAL
                        AL
                        L
                    `}</pre>

                    <button className="sourceCode-button" onClick={this.showHideExamples}>Source Code</button>

                    <div className="source-code">
                    <pre>{`
                        void main() {
                            printSomePattern();
                        }

                        printSomePattern() {
                            var store;
                            String printString = "NEPAL";
                            for (var row = 0; row &lt;5; row++) {
                            store = "";
                            for (var column = row; column &lt; 5; column++) {
                                store += printString[column];
                            }
                            print(store);
                            }
                        }
                    `}</pre>
                    </div>

                </div>

                    <div className="motivation-quote">
                    <h3 className="quote">Programming is an art. Don't spend all your time 
                        sharpening your pencil when you should be drawing.</h3>
                    <h4 className="quote">&mdash; by Paul Hudson</h4>
                    </div>
                <hr />
                <hr />

                {/**
                Pattern Printing    2
                */}
                <div>
                    <h3>Pattern Printing 2</h3>  
                    <pre className="printing-pattern"> {`
                        *
                        **
                        ***
                        ****
                        *****
                    `}</pre>

                        <button className="sourceCode-button" onClick={this.showHideExamples}>Source Code</button>

                        <div className="source-code">
                    <pre>{`
                        void main() {
                            printSomePattern();
                        }

                        void printSomePattern() {
                            var store;
                            for (var a = 1; a &lt;= 5; a++) {
                            store = '';
                            for (var b = 1; b &lt;= a; b++) {
                                store += "*";
                            }
                            print(store);
                            }
                        }
                    `}</pre>
                    </div>

                </div>
                    <div className="motivation-quote">
                    <h3 className="quote">Everyone should know how to programme a computer,  
                        because it teaches you how to think.
                    </h3>
                    <h4 className="quote">&mdash; by Steve Jobs</h4>
                    </div>
                <hr />
                <hr />


                {/**
                Pattern Printing    3
                */}
                <div>
                    <h3>Pattern Printing 3</h3>  
                    <pre className="printing-pattern"> {`
                        1
                        00
                        111
                        0000
                        11111
                    `}</pre>

                    <button className="sourceCode-button" onClick={this.showHideExamples}>Source Code</button>

                        <div className="source-code">
                    <pre>{`
                        void main() {
                            printSomePattern();
                        }

                        printSomePattern() {
                            var store;
                            for (var row = 1; row &lt;= 5; row++) {
                            store = "";
                            for (var column = 1; column &lt;= row; column++) {
                                if (row % 2 == 0) {
                                store += "0";
                                } else {
                                store += "1";
                                }
                            }
                            print(store);
                            }
                        }
                    `}</pre>
                    </div>

                </div>

                    <div className="motivation-quote">
                    <h3 className="quote">Programming is Thinking, 
                        Not Typing.
                    </h3>
                    <h4 className="quote">&mdash; by Casey Patton</h4>
                    </div>
                <hr />
                <hr />

                {/**
                Check For Palindrome Word    4
                */}
                <div>
                    <h3>Check For Palindrome Word 4</h3>  
                    <pre className="printing-pattern">
                        Yes, this is a Palindromaic word
                    </pre>

                    <button className="sourceCode-button" onClick={this.showHideExamples}>Source Code</button>

                        <div className="source-code">
                    <pre>{`
                        void main() {
                            printSomePattern();
                        }

                        // Input a word and check whether it is a palindromic word or not.
                        void printSomePattern() {
                            var inputWord = "madam";
                            bool checkPalindromaic;
                            var k = inputWord.length - 1;
                            for (var a = 0; a &lt;= inputWord.length - 1; a++) {
                            if (inputWord[a] == inputWord[k]) {
                                checkPalindromaic = true;
                                k--;
                            } else {
                                checkPalindromaic = false
                                break
                            }
                            }
                            if (checkPalindromaic) {
                            print("Yes, this is a Palindromaic word! Congrats");
                            } else {
                            print("No, this is a not Palindromaic word! SORRY");
                            }
                        }
                    `}</pre>
                    </div>

                    </div>

                        <div className="motivation-quote">
                        <h3 className="quote">A good programmer is someone who always looks both 
                            ways before crossing a one-way street.</h3>
                        <h4 className="quote">&mdash; by Doug Linder</h4>
                        </div>
                    <hr />
                    <hr />

                {/**
                Pattern Printing    5
                */}
                <div>
                    <h3>Pattern Printing 5</h3>  
                    <pre className="printing-pattern">{`
                        1
                        121
                        12321
                        1234321
                        123454321
                    `}</pre>

                    <button className="sourceCode-button" onClick={this.showHideExamples}>Source Code</button>

                        <div className="source-code">
                    <pre>{`
                        void main() {
                            printSomePattern();
                        }

                        void printSomePattern() {
                            String store;

                            for (var row = 1; row &lt;= 5; row++) {
                            store = "";

                            for (var emptySpace = 6 - row; emptySpace >= 1; emptySpace--) {
                                store += " ";
                            }

                            var column;
                            for (column = 1; column &lt;= row; column++) {
                                store += "$column";
                            }

                            // Next half part goes from here.
                            column = row - 1;
                            while (column >= 1) {
                                store += "$column";
                                column--;
                            }
                            print(store);
                            }
                        }
                    `}</pre>
                    </div>

                    </div>

                        <div className="motivation-quote">
                        <h3 className="quote">Any fool can write code that a computer can understand. 
                            Good programmers write code that humans can understand.</h3>
                        <h4 className="quote">&mdash; by Martin Fowler</h4>
                        </div>
                    <hr />
                    <hr />


                {/**
                Pattern Printing    6
                */}
                <div>
                    <h3>Pattern Printing 6</h3>  
                    <pre className="printing-pattern">{`
                        5 5 5 5 5 
                        5 5 5 5 
                        5 5 5 
                        5 5 
                        5 
                    `}</pre>

                    <button className="sourceCode-button" onClick={this.showHideExamples}>Source Code</button>

                        <div className="source-code">
                    <pre>{`
                        void main() {
                            printSomePattern();
                        }

                        void printSomePattern() {
                            String store;

                            for (var a = 1; a &lt;= 5; a++) {
                            store = "";
                            for (var b = 5; b >= a; b--) {
                                store += "5 ";
                            }
                            print(store);
                            }
                        }
                    `}</pre>
                    </div>

                </div>

                    <div className="motivation-quote">
                    <h3 className="quote">Knowledge is power.</h3>
                    <h4 className="quote">&mdash; by Francis Bacon</h4>
                    </div>
                <hr />
                <hr />
                
                {/**
                Fibonacci Number Printing    7
                */}
                <div>
                    <h3>Fibonacci Number Printing  7</h3>  
                    <pre className="printing-pattern"> {`
                        1
                        1
                        3
                        5
                        8
                        13
                        21
                        34
                        55
                        89
                        144
                        233
                        377
                        610
                        987
                        1597
                        2584
                        4181
                        6765
                        10946
                        Here is first 20 terms of the Fibonocci series.
                    `}</pre>

                        <button className="sourceCode-button" onClick={this.showHideExamples}>Source Code</button>

                        <div className="source-code">
                    <pre>{`
                        void main() {
                            printSomePattern();
                        }

                        // Output the first twenty terms of the Fibonocci series.
                        void printSomePattern() {
                            int firstValue = 1;
                            int secondValue = 1;
                            int output;
                            var a;
                            for (a = 1; a &lt;= 20 - 1; a++) {
                            output = firstValue + secondValue;
                            print((a == 1) ? "1\n1" : output);
                            firstValue = secondValue;
                            secondValue = output;
                            }
                            print("Here is first $a terms of the Fibonocci series.");
                        }
                    `}</pre>
                    </div>

                </div>

                    <div className="motivation-quote">
                        <h3 className="quote">Make it work, make it right, make it fast.</h3>
                        <h4 className="quote">&mdash; by Kent Beck</h4>
                    </div>
                    <hr />
                    <hr />


                {/**
                Diamond Printing  8
                */}
                <div>
                    <h3>Diamond Printing  8</h3>  
                    <pre className="printing-pattern">{`
                            *
                           ***
                          *****
                         *******
                        *********
                       ***********
                      *************
                     ***************
                    *****************
                   *******************
                    *****************
                     ***************
                      *************
                       ***********
                        *********
                         *******
                          *****
                           ***
                            *
                    `}</pre>

                    <button className="sourceCode-button" onClick={this.showHideExamples}>Source Code</button>

                        <div className="source-code">
                    <pre>{`
                        void main() {
                            firstPart();
                        }

                        // First part of pattern
                        void firstPart() {
                            secondPart();
                            String storeGround;
                            for (var row = 1; row &lt;= 10; row++) {
                            storeGround = "";
                            for (var emptySpace = 1; emptySpace &lt;= row; emptySpace++) {
                                storeGround += " ";
                            }

                            var column;
                            for (column = 10; column &gt;= row; column--) {
                                storeGround += "*";
                            }

                            // Next half part goes from here.
                            column = 10 - row;
                            while (column &gt;= 1) {
                                storeGround += "*";
                                column--;
                            }
                            print("$storeGround");
                            }
                        }

                        // Second part of pattern
                        void secondPart() {
                            String storeGround;
                            for (var row = 1; row &lt;= 9; row++) {
                            storeGround = "";

                            for (var emptySpace = 11 - row; emptySpace >= 1; emptySpace--) {
                                storeGround += " ";
                            }

                            var column;
                            for (column = 1; column &lt;= row; column++) {
                                storeGround += "*";
                            }

                            // Next half part goes from here.
                            column = row - 1;
                            while (column >= 1) {
                                storeGround += "*";
                                column--;
                            }
                            print("$storeGround");
                            }
                        }
                    `}</pre>
                    </div>

                </div>

                    <div className="motivation-quote">
                    <h3 className="quote">Programming isn't about what you know; 
                        it's about what you can figure out.</h3>
                    <h4 className="quote">&mdash; by Chris Pine</h4>
                    </div>
                <hr />
                <hr />

                {/**
                Printing heart shape Pattern    9
                */}
                <div>
                    <h3>Heart shape Pattern  9</h3>  
                    <pre className="printing-pattern">{`
                            ** ** 
                           *  *  *
                           *     *
                            *   * 
                             * *  
                              * 
                   `}</pre>

                    <button className="sourceCode-button" onClick={this.showHideExamples}>Source Code</button>

                        <div className="source-code">
                    <pre>{`
                        void main() {
                            printHeartShapePattern();
                        }

                        void printHeartShapePattern() {
                            String store;

                            for (var row = 0; row &lt;= 5; row++) {
                            store = "";
                            for (var column = 0; column &le;= 6; column++) {
                                if ((row == 0 &amp;&amp; column % 3 != 0) ||
                                    (row == 1 &amp;&amp; column % 3 == 0) ||
                                    (row - column == 2) ||
                                    (row + column == 8)) {
                                store += "*";
                                } else {
                                store += " ";
                                }
                            }
                            print(store);
                            }
                        }
                    `}</pre>
                    </div>
                
                </div>

                    <div className="motivation-quote">
                    <h3 className="quote">A good idea is about ten percent and implementation and 
                        hard work, and luck is 90 percent.</h3>
                    <h4 className="quote">&mdash; by Guy Kawasaki</h4>
                    </div>
                <hr />
                <hr />
            </div>

            
        </div>
    }
}

export default Examples;
