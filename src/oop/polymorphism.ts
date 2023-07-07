/*
You can achieve ad hoc polymorphism by using arguments that 
behave differently depending on the type. Let's look at an add method that
 works generically and changes behavior accordingly.
*/
interface GenericAdd<AddType> {
    add: (x: AddType, y: AddType) => AddType;
  }
  
  class GenericNumber implements GenericAdd<number> {
    add(x: number, y: number) {
      return x + y;
    } // number + number
  }
  
  class GenericString implements GenericAdd<string> {
    add(x: string, y: string) {
      return x + y;
    } // string + string
  }
  
  const genericNumber = new GenericNumber();
  genericNumber.add(1, 2); // 3
  
  const genericString = new GenericString();
  genericString.add("Hello", ", Mammals!"); // Hello, Mammals!
  