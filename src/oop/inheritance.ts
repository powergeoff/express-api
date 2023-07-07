interface Pingable {
    ping(): void;
    //ping: () => void;
    //same thing above
  }
   
  class Sonar implements Pingable {
    ping() {
      console.log("sonar ping!");
    }
  }

  /*
  EXTENDS VS IMPLEMENTS
  Short version
extends means:
The new class is a child. It gets benefits coming with inheritance. It has all the properties and methods of its parent. 
It can override some of these and implement new ones, but the parent stuff is already included.

implements means:
The new class can be treated as the same "shape", but it is not a child. It could be passed to any method where 
Person is required, regardless of having a different parent than Person.
  */