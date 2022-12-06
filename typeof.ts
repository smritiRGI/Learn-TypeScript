const detectTypes = (val : number | string) => {
   if( typeof val === "number")
    return val + 6
   return val.toLowerCase()
}