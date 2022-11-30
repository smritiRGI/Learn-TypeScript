const fruits  : [] = []

fruits.push("Mango");

const vegetables : string[] = []

vegetables.push("tomato");

// another syntax
const series : Array<string>  = []

series.push("Flash");

type User = {
    name : string;
    email : string;
}
const subscribedUsers : Array<User> = [];
const recentlyAddedUsers : User[] = [];

subscribedUsers.push({
    name : "Smriti",
    email : "smritirastogi@gmail.com"
})

const mlModel : number[][] = [
    [255,233,234],
    []
]

export {}
