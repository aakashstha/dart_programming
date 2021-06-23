import React from 'react';

import CheatSheet from './images/cheatSheet.png';

class Cheatsheet extends React.Component {
    render() {
        return <div> 

            <div className="centerParagraph-ofHome">
                <h1>Dart language cheatsheet</h1>
                <p>This cheatsheet is based on the learning you did in this course of documentation. After you completed your learning and further continue to  make an application then this may come handy to use because every time you donot have to go whole through the documentation.</p>
                <div>
                    <figure>
                        <img src={CheatSheet} alt="Dart Programming Cheatsheet" width="80%" />
                    </figure>
                </div>

                <div>
                    <h3>Declaring fields</h3>
                    <div>
                        <p>var = Generic var (dynamic)</p>
                        <p>final = Same as var but final</p>
                        <p>const = Constant</p>

                    </div>
                </div>


                <div>
                    <h3>Dealing with null</h3>
                    <div>
                        <p>as = Typecast</p>
                        <p>is = instanceof</p>
                        <p>is! = !instanceof</p>

                    </div>
                </div>

                <div>
                    <h3>Checking types</h3>
                    <div>
                        <p>as = Typecast</p>
                        <p>is = instanceof</p>
                        <p>is! = !instanceof</p>

                    </div>
                </div>

                <div>
                    <h3>Implementing functions</h3>
                    <div>
                        <p>as = Typecast</p>
                        <p>is = instanceof</p>
                        <p>is! = !instanceof</p>

                    </div>
                </div>

                <div>
                    <h3>Implementing constructors</h3>
                    <div>
                        <h5>Normal constructor</h5>
                        <p>Point(this.x, this.y);</p>
                        <h5>Factory constructor</h5>
                        <p>factory Point(int x, int y) => ...;</p>
                        <h5>Named constructor</h5>
                        <p className="source-code">
                            Point.fromJson(Map json) <br />
                                : x = json['x'];<br />
                                : y = json['y'];<br /> 
                            
                        </p> 
                        <h5>Delegating constructor</h5>
                        <p>Point.alongXAxis(num x) : this(x, 0);</p>
                        <h5>Const constructor</h5>
                        <p>const ImmutablePoint(this.x, this.y);</p>
                        <h5>Initializer list</h5>
                        <p className="source-code">
                            Point.fromJson(Map jsonMap)<br />
                            : x = jsonMap['x'], y = jsonMap['y'];

                        </p>

                    </div>
                </div>
            </div>
        
        </div>
    }
}

export default Cheatsheet;