interface Rectangle {
    length : number ,
    breadth : number ,
    getArea : (l : number , b : number) => number
}

let figure1 : Rectangle = {
   length : 30,
   breadth : 30,
   getArea : (length , breadth) => {
       return length*breadth
   }
}

// reopening the interface is like you can add additional properties to interface
interface Rectangle {
    getPerimeter : (l:number , b:number) => number
}

interface Square extends Rectangle {
    getdiagonal : (l:number) => number
}
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

// Differences Between Type Aliases and Interfaces
// Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

// Interface	Type
// Extending an interface

// interface Animal {
//   name: string
// }

// interface Bear extends Animal {
//   honey: boolean
// }

// const bear = getBear() 
// bear.name
// bear.honey
        
// Extending a type via intersections

// type Animal = {
//   name: string
// }

// type Bear = Animal & { 
//   honey: boolean 
// }

// const bear = getBear();
// bear.name;
// bear.honey;
        
// Adding new fields to an existing interface

// interface Window {
//   title: string
// }

// interface Window {
//   ts: TypeScriptAPI
// }

// const src = 'const a = "Hello World"';
// window.ts.transpileModule(src, {});
        
// A type cannot be changed after being created

// type Window = {
//   title: string
// }

// type Window = {
//   ts: TypeScriptAPI
// }

//  // Error: Duplicate identifier 'Window'.

        