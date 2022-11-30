// loose form of a class

interface User {
    readonly _id : number,
    name : string,
    email : string,
    googleId? : string,
    startTrial : () => string,
    provideDiscount(name : string , percent : number) : number
}

let customer : User = {
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

export {}


