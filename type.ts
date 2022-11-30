// creating custom types
type Rectangle = {
  length : number;
  breadth : number;
}

let calculateArea = (rectangle : Rectangle ) : number => {
   return rectangle.breadth * rectangle.length;
}

export {}