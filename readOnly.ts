type Product  = {
    // not editable
    readonly _id : string,
    name : string,
    price : number,
    // optional
    tags? : []
}

let shirt : Product = {
    _id : "100",
    name : "Levis Shirt Black",
    price : 2000
}

shirt.price = 3000;
// shirt._id = "102" throws error