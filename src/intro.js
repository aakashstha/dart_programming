import React from 'react';


import DartPad from './images/dartPad.png';

class Intro extends React.Component {
    render() {
        return <div>

            <div class="centerParagraph-ofHome">
                <p>Go to <a class="dart-pad" href="https://dartpad.dartlang.org/" target="_blank" rel="noopener noreferrer">DartPad </a>which is a playground for dart progarming language. You can test every dart keyword and play certian concept here.</p>
                
                <p>Your First Dart Code.</p>
                <pre class="source-code">
                    main() {
                       // print("Hello World/!!")&semi
                    }
                </pre>
                <p>Copy and paste the above code in DartPade link provided above to run your first code.</p>
                
                <p>printing something is very easy in dart it only require three lines of code as you see above.</p>
                
                <p>The main() function is a predefined method in Dart. This method acts as the entry point to any dart application. A Dart script needs the main() method for execution. print() is a predefined function that prints the specified string or value to the standard output i.e. the terminal.</p>
                
                <p>As you copy and paste the above code in DartPad the output of the code will be -</p>
                <figure>
                    <img src={DartPad} alt=" Dart-Pad" width="100%" />
                </figure>
                
                <p>Go to the link provided and familiarize yourself with online editor DartPad.</p>
                
                <p>In this begineer to programming journey there will be many times that your donot understand and think this is not going as I expected. So, ultimately willing to quit programming. Every programmer have to go through this situation but those how overcome this situation and fight back with some patience, taking break and searching online help will stand out and be in top.</p>
            </div>
            
        </div>
    }
}

export default Intro;