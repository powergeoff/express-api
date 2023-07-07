/*
This pillar is all about restricting access and decoupling software modules. 
TypeScript makes this information hiding technique achievable via a class.
*/

class Base {
    private hiddenA = 0;
    #hiddenB = 0;
   
    printInternals() {
      console.log(this.hiddenA); // works
      console.log(this.#hiddenB); // works
    }
  }
   
  const obj = new Base();
  console.log(obj.printInternals())
  //console.log(obj.hiddenA); // these two bomb
  //console.log(obj.#hiddenB);

  /*
  A class isn’t the only tool available in your TypeScript arsenal. 
  Utility types like Pick<Type, Keys>, Omit<Type, Keys>, Readonly<Type>, and NonNullable<Type> can also limit access.
  */

  interface Todo {
    title: string;
    description?: string; // string | undefined
    completed: boolean;
  }
   
  type TodoPreview1 = Pick<Todo, "title" | "completed">;
   
  const todo1: TodoPreview1 = {
    //explicit typing
    title: "Clean room",
    completed: false,
    //description: "x", // duck typing is NOT allowed
  };
   
  type TodoPreview2 = Omit<Todo, "description" | "completed">;
   
  const todo2: TodoPreview2 = {
    title: "Clean room",
  };
   
  const todo3: Readonly<Todo> = {
    title: "Delete inactive users",
    completed: true,
  };
   
  //todo3.completed = false; // bombs
   
  const todo4: Todo = {
    ...todo1,
    description: "Doing shores is fun",
  };
   
  const description: NonNullable<string | undefined> =
    // bombs without null coalescing
    todo4.description ?? "";