import React from 'react';

class Classes extends React.Component {

     changeClass () {
        var input = document.getElementById("input-class").value
        var input1 = document.getElementById("input-class1").value
        var input2 = document.getElementById("input-class2").value
        var inputValue = "class";
        var inputValue1 = "String";
        var inputValue2 = "}";
     
        if(input === "" || input1 === "" || input2 === "") {
           document.getElementById("correct-class").style.visibility = "hidden";
        } else if(input === inputValue && input1 === inputValue1 && input2 === inputValue2) { 
           document.getElementById("correct-class").style.visibility = "visible";
           document.getElementById("correct-class").innerHTML = "Correct!!";
        } else if(input !== inputValue || input1 !== inputValue1 || input2 !== inputValue2) {
           document.getElementById("correct-class").style.visibility = "visible";
           document.getElementById("correct-class").innerHTML = "Wrong!!";
        }else {
           document.getElementById("correct-class").style.visibility = "hidden";
           document.getElementById("correct-class").innerHTML = "";
        }
     
     }

    render () {
        return <div>

            <div className="centerParagraph-ofHome"> 
            <div>
            <h1>Classes</h1>
                <p>Dart is an object-oriented language with classes and mixin-based inheritance. Every object is an instance of a class, and all classes descend from Object. Mixin-based inheritance means that although every class (except for Object) has exactly one superclass, a class body can be reused in multiple class hierarchies. Extension methods are a way to add functionality to a class without changing the class or creating a subclass.</p>

                <h3>Declaring a class</h3>
                <p>Use the <b>class</b> keyword to declare a class in Dart. A class definition starts with the keyword class followed by the class name; and the class body enclosed by a pair of curly braces. The syntax for the same is given below −</p>
                <p className="source-code1">
                    class class_name &#123; <br />
                    &emsp;&lt;fields&gt;  <br />
                    &emsp;&lt;getters/setters&gt;  <br />
                    &emsp;&lt;constructors&gt;  <br />
                    &emsp;&lt;functions&gt;  <br />
                    &#125;
                </p>
            </div>
            <div>
                <p>A class definition can include the following −</p>
                <ul>
                    <li>Fields - A field is any variable declared in a class. Fields represent data pertaining to objects.</li>
                    <li>Setters and Getters − Allows the program to initialize and retrieve the values of the fields of a class. A default getter/ setter is associated with every class. However, the default ones can be overridden by explicitly defining a setter/ getter.</li>
                    <li>Constructors − responsible for allocating memory for the objects of the class.</li>
                    <li>Functions − Functions represent actions an object can take. They are also at times referred to as methods.</li>

                </ul>

            </div>

            <div>
                <h3>Example: Declaring a class</h3>
                <p className="source-code1">
                    class Car &#123; <br />  
                    &emsp;{ "// field" } <br /> 
                    &emsp;String engine = "E1001";  <br /> 
                    &emsp;{ "// function " } <br /> 
                    &emsp;void disp() &#123; <br /> 
                    &emsp;&emsp;print(engine);  <br /> 
                    &emsp;&#125; <br />  
                    &#125; 
                </p>
                <p>The example declares a class Car. The class has a field named engine. The disp() is a simple function that prints the value of the field engine.</p>

            </div>

            <div>
                <h3>Dart Constructors</h3>
                <p className="source-code1">
                    void main() &#123; <br />   
                    &emsp;Car c = new Car('E1001'); <br /> 
                    &#125; <br />   
                    class Car &#123; <br />   
                    &emsp;Car(String engine) &#123; <br />   
                    &emsp;&emsp;print(engine); <br /> 
                    &emsp;&#125; <br />   
                    &#125; 
                </p>
                <p>A constructor is a special function of the class that is responsible for initializing the variables of the class. Dart defines a constructor with the same name as that of the class. A constructor is a function and hence can be parameterized.</p>

            </div>


            <div>
                <h3>Named Constructors</h3>
                <p className="source-code1">
                    void main() &#123; <br />             
                    &emsp;Car c1 = new Car.namedConst("E1001"); <br />                                       
                    &emsp;Car c2 = new Car(); <br />  
                    &#125; <br />            
                    class Car &#123; <br />                     
                    &emsp;Car() &#123; <br />                             
                    &emsp;&emsp;print("Non-parameterized constructor invoked"); <br />  
                    &emsp;&#125; <br />                                    
                    &emsp;Car.namedConst(String engine) &#123; <br />   
                    &emsp;&emsp;print("The engine is : $;&#123;engine&#125;"); <br />    
                    &emsp;&#125; <br />                               
                    &#125; 
                </p>
                <p>Dart provides named constructors to enable a class define multiple constructors.</p>

            </div>

             <div>
                <h3>Dart Class ─ Getters and Setters</h3>
                <p className="source-code1">
                    class Student &#123; <br /> 
                    &emsp;String name;  <br /> 
                    &emsp;int age;  <br /> 
                    &emsp;String get stud_name &#123; <br />  
                    &emsp;return name;  <br /> 
                    &#125; <br />  
                    void set stud_name(String name) &#123; <br />  
                    &emsp;this.name = name;  <br /> 
                    &#125; <br />  
                    void set stud_age(int age) &#123; <br /> 
                    &emsp;if(age&lt;= 0) &#123; <br /> 
                    &emsp;&emsp;print("Age should be greater than 5");  <br /> 
                    &emsp;&#125; <br />   
                    &emsp;else &#123; <br />  
                    &emsp;&emsp;this.age = age;  <br /> 
                    &emsp;&#125; <br /> 
                    &#125; <br />
                    int get stud_age &#123; <br />  
                    &emsp;return age;     
                    &#125; <br /> 
                    &#125; <br />  
                    void main() &#123; <br />  
                    &emsp;Student s1 = new Student(); <br /> 
                    &emsp;s1.stud_name = 'MARK'; <br /> 
                    &emsp;s1.stud_age = 0; <br /> 
                    &emsp;print(s1.stud_name); <br /> 
                    &emsp;print(s1.stud_age); <br /> 
                    &#125;
                </p>
                <p>Getters and Setters, also called as accessors and mutators, allow the program to initialize and retrieve the values of class fields respectively. Getters or accessors are defined using the get keyword. Setters or mutators are defined using the set keyword.</p>

            </div>

            <div>
                <h3>Class Inheritance</h3>
                <p className="source-code1">
                    void main() &#123; <br /> 
                    &emsp;var obj = new Circle(); <br />  
                    &emsp;obj.cal_area(); <br />  
                    &#125; <br />   
                    class Shape &#123; <br />  
                    &emsp;void cal_area() &#123; <br />  
                    &emsp;&emsp;print("calling calc area defined in the Shape class"); <br />  
                    &emsp;&#125; <br />   
                    &#125; <br />    
                    class Circle extends Shape &#123;&#125;
                </p>
                <p>Dart supports the concept of Inheritance which is the ability of a program to create new classes from an existing class. The class that is extended to create newer classes is called the parent class/super class. The newly created classes are called the child/sub classes.</p>

            </div>

            <div>
                <h3>Dart – Class Inheritance and Method Overriding</h3>
                <p className="source-code1">
                    void main() &#123; <br />  
                    &emsp;Child c = new Child(); <br />  
                    &emsp;c.m1(12); <br />  
                    &#125; <br /> 
                    class Parent &#123; <br />  
                    &emsp;void m1(int a)&#123; print("value of a &dollar;&#123;a&#125;"); <br />   
                    &#125; <br />   
                    class Child extends Parent &#123; <br /> 
                    &emsp;@override <br />  
                    &emsp;void m1(int b) &#123; <br />  
                    &emsp;&emsp;print("value of b &dollar;&#123;b&#125;"); <br />  
                    &emsp;&#125; <br />  
                    &#125; 
                </p>
                <p>Method Overriding is a mechanism by which the child class redefines a method in its parent class.The number and type of the function parameters must match while overriding the method. In case of a mismatch in the number of parameters or their data type, the Dart compiler throws an error.</p>

            </div>

            <div>
                <h3>The static Keyword</h3>
                <p className="source-code1">
                    class StaticMem &#123; <br />  
                    &emsp;static int num; <br />  
                    &emsp;static disp() &#123; <br />  
                    &emsp;&emsp;print("The value of num is &dollar;&#123;StaticMem.num&#125;"); <br />  
                    &emsp;&#125; <br />  
                    &#125; <br />   
                    void main() &#123; <br />  
                    &emsp;StaticMem.num = 12; <br />  
                    &emsp;{"// initialize the static variable } "} <br />  
                    &emsp;StaticMem.disp(); <br />  
                    &emsp;{"// invoke the static method "} <br />  
                    &#125;
                </p>
                <p>The static keyword can be applied to the data members of a class, i.e., fields and methods. A static variable retains its values till the program finishes execution. Static members are referenced by the class name.</p>

            </div>

            <div>
                <h3>The super Keyword</h3>
                <p className="source-code1">
                    void main() &#123; <br />  
                    &emsp;Child c = new Child(); <br />  
                    &emsp;c.m1(12); <br />  
                    &#125; <br />   
                    class Parent &#123; <br />  
                    &emsp;String msg = "message variable from the parent class"; <br />  
                    &emsp;void m1(int a)&#123; print("value of a &dollar;&#123;a&#125;");&&emsp;#125; <br />  
                    &#125; <br />  
                    class Child extends Parent &#123; <br />  
                    &emsp;@override <br />  
                    &emsp;void m1(int b) &#123; <br />  
                    &emsp;&emsp;print("value of b &dollar;&#123;b&#125;"); <br />  
                    &emsp;&emsp;super.m1(13); <br />  
                    &emsp;&emsp;print("$&123;super.msg&123;"); <br />  
                    &emsp;&#125; <br />  
                    &#125; <br /> 
                </p>
                <p>The super keyword is used to refer to the immediate parent of a class. The keyword can be used to refer to the super class version of a variable, property, or method.</p>

            </div>
            <br />

            <div className="source">
               <a className="main-source" href="https://www.tutorialspoint.com/dart_programming/dart_programming_classes.htm" target="_blank" rel="noopener noreferrer">source</a>
           </div>

            <hr className="horizontal-line" />
            
            <div className="mock-test">
               <h2 className="OptionalMock-test">Optional Mock Test</h2>

               <div className="test-container">
                  <span> <input id="input-class" />&nbsp; Students &#123;</span>
                  <p></p>
                  <span>&emsp;<input id="input-class1" /> main() &#123;</span>
                  <p>&emsp;String name = "Aaron";</p>
                  <p>&emsp;print("This is a void function");</p>
                  <p>&emsp;return name;</p>
                  <span>&emsp;<input id="input-class2" /></span>
                  <p>&#125;</p>
               </div>

                <div className="test-container">
                  <button className="inner-button" type="button" onClick={this.changeClass}>Done</button>
              </div>

              <div className="test-container ">
                  <h1 id="correct-class" className="correct">Correct!!</h1>
              </div>

            </div>
        </div>
        
        </div>
    }
}


export default Classes;