interface User {
    name :string , 
    phone : number
}

function clone<T1 , T2>(source : T1) : T2 {
    return Object.apply({}, source)
}


const a : User = {
    name : "smriti",
    phone : 6164030638
}

const b : User = clone(a)

export {}