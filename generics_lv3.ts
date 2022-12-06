interface Customer {
    name :string , 
    phone : number
}
interface Admin {
    id : number,
    name : string,
    phone : number 
}
// T2 should have all properties of T1
function clone<T1 , T2 extends T1>(source : T1) : T2 {
    return Object.apply({}, source)
}


const a : Customer = {
    name : "smriti",
    phone : 6164030638
}

const b  = clone<Customer , Admin>(a)
console.log(b)

export {}