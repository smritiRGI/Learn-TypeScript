// A generic type can be substitued with any other type.
interface Contact {
    name :string , 
    phone : number
}

function clone<T>(source : T) : T {
    return Object.apply({}, source)
}

const a : Contact = {
    name : "smriti",
    phone : 6164030638
}

const b : Contact = clone(a)

const schedule  = { startDate : Date.now() , endDate : new Date("31/12/2022")}

const copySchedule = clone(schedule)

export {}