import React from 'react';


class Glossary extends React.Component {
    render() {
        return <div>

            <div className="centerParagraph-ofHome"> 
                <h1>All Dart and releated Computer Glossary</h1>
                <div>
                    <p>Lazy = call-by-need,  (They are not initialized until they are used in program)</p>

                    <p>Override = The annotation @override marks an instance member as overriding a superclass member with the same name.It's also used to annotate the implementation of an abstract method. It is optional to use but recommended as it improves readability</p>

                    <p>An external function is a function whose body is provided separately from its declaration. An external function may be a top-level function or a method</p>

                    <p>The singleton pattern ensures only one instance of a class is ever created.</p>

                    <h5>Method chaining</h5>
                    <p>Each method returns an object(one function returning another function and so on), allowing the calls to be chained together in a single statement without requiring variables to store the intermediate results.</p>

                    <h5>ASCII</h5>
                    <p>American Standard Code for Information Interchange, an encoding system for converting keyboard characters and instructions into the binary number code that the computer understands.</p>

                    <h5>Binary code</h5>
                    <p>The most basic language a computer understands, it is composed of a series of 0s and 1s. The computer interprets the code to form numbers, letters, punctuation marks, and symbols.</p>

                    <h5>Bit</h5>
                    <p>The smallest piece of computer information, either the number 0 or 1. In short they are called binary digits.</p>

                    <h5>Byte</h5>
                    <p>Most computers use combinations of eight bits, called bytes, to represent one character of data or instructions. For example, the word cat has three characters, and it would be represented by three bytes.</p>

                    <h5>Cache</h5>
                    <p>A small data-memory storage area that a computer can use to instantly re-access data instead of re-reading the data from the original source, such as a hard drive. Browsers use a cache to store web pages so that the user may view them again without reconnecting to the Web</p>

                    <h5>Gigabyte (GB)</h5>
                    <p>1024 megabytes. Also called gig.</p>

                    <h5>GUI</h5>
                    <p>Graphical User Interface, a system that simplifies selecting computer commands by enabling the user to point to symbols or illustrations (called icons) on the computer screen with a mouse.</p>

                    <h5>Terabytes (TB)</h5>
                    <p>A thousand gigabytes.</p>

                    <h5>RAM</h5>
                    <p>Random Access Memory, one of two basic types of memory. Portions of programs are stored in RAM when the program is launched so that the program will run faster. Though a PC has a fixed amount of RAM, only portions of it will be accessed by the computer at any given time. Also called memory.</p>

                    <h5>ROM</h5>
                    <p>Read-Only Memory, one of two basic types of memory. ROM contains only permanent information put there by the manufacturer. Information in ROM cannot be altered, nor can the memory be dynamically allocated by the computer or its operator.</p>

                    <h5>Server</h5>
                    <p>A computer that shares its resources and information with other computers, called clients, on a network.</p>

                    <h5>UPS</h5>
                    <p>Universal Power Supply or Uninterruptible Power Supply. An electrical power supply that includes a battery to provide enough power to a computer during an outage to back-up data and properly shut down.</p>

                    <h5>Program</h5>
                    <p>A precise series of instructions written in a computer language that tells the computer what to do and how to do it. Programs are also called software or applications.</p>
    
                    <h5>Programming language</h5>
                    <p>A series of instructions written by a programmer according to a given set of rules or conventions (syntax). High-level programming languages are independent of the device on which the application (or program) will eventually run; low-level languages are specific to each program or platform. Programming language instructions are converted into programs in language specific to a particular machine or operating system (machine language). So that the computer can interpret and carry out the instructions. Some common programming languages are BASIC, C, C++, dBASE, FORTRAN, and Perl.</p>
                </div>
            </div>

        </div>
    }
}

export default Glossary;