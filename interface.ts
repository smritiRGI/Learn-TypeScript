// loose form of a class

interface User {
    readonly _id : number,
    name : string,
    email : string,
    googleId? : string,
    startTrial : () => string,
    provideDiscount(name : string , percent : number) : number
}

let customerOne : User = {
    _id : 22,
    name : "Smriti",
    email : "smritirastogi@gmail.com",
    startTrial : () => {
        return "Trial started"
    },
    provideDiscount : () =>{
        return 10
    }
}

let customerTwo : User = {
    _id : 33,
    name :"Kirti",
    email : "kirti123@gmail.com",
    startTrial : () => {
        return "Trial started"
    },
    provideDiscount : (name = "kirti20" , discount = 20) => {
        return discount
    }
}


export {}


