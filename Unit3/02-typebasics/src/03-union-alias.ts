let Unknown: unknown;

Unknown = `test`

const add2 = (n1: number) => {
    console.log(n1);
    
}

//* This is how you can make a unknown variable a different varaiable like number or string in this case its number 
if(typeof(Unknown) === `number`){
    add2(Unknown)
}else{
    console.log(Unknown);
    
}


type Combinable = number | string;
type Converision = "as-num" | "as-string"


const combine = (
    input1: Combinable,
    input2: Combinable,
    convert: Converision,

):Combinable => {
    let result = Combinable
    if(convert == "as-num"){
        return + input1 +  + input2
    }
    if (convert == "as-str"){
        return "" + input1 + input2
    }else {
        return "not a vaild convert"
    }
}


enum Title {
    "New",
    "Experince",
    "Vet",
}
type Hero = {
    health: number,
    name: string,
    status: [strength: Number, dexterity: Number, intelligence: Number],
    inventory: [items:[ name : string, quantity: number, price: number]]
    title: Title 
}

function errorCatch(message:string , code: number) : never {
    throw new Error(message + ` ` + code)
}