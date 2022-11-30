// generally tuples are used when we want the data to be in a particular order for example

let user : (number | string )[] = ["Smriti" , 1];
// or it can even be
user = [1 , "Smriti"]

let admin : [number , string , string] ;

// throws error as tuple maintains strict order admin = ["smriti"]
admin = [1 , "smriti" , "smritirastogi@gmail.com"]


type designer = [number , string] ;

let designers : designer = [1 , "Payal Keyal"];

export {}