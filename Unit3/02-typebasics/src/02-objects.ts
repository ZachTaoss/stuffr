enum Role {
    "ADMIN",
    "READ_ONLY" ,
    "AUTHOR",
}

const person :{
    name:string,
    age:number,
    hobbies: string[],
    role:Role;
} = {
    name:`timmy`,
    age:15,
    hobbies: [`soccer`,`cooking`],
    role: Role.ADMIN,
};

const product :{
    name:string,
    age:number,
    hobbies: string[],
    description: [number,string];
} = {
    name:`timmy`,
    age:15,
    hobbies: [`soccer`,`cooking`],
    description: [1234,`soccerball`],
};

//! pushing to tuples skips the length and type
//? product.description.push(`testing`)