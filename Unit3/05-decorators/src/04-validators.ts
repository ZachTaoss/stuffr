interface ValidatorConfig {
    //! Tis is a class name where you want to validate some props 
    [ property: string ]: {
        //! stores the props that are goung to be validated and how 
        [validateableProp: string] : string[]
    }
}

//* registeredValidators {
//*     Course:{
//*         title: [ `required`, `postive`, `minlength`]
//*         price: [`postive`]
//*     }
//*}

//! This starts empty and we add to it everytime we use the deco
const registeredValidators: ValidatorConfig = {}

function Required(target: any, propName: string) {
    // registeredValidators
    // console.log(target);
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [`required`],
    }
}

function Postive(target: any, propName: string) {
    // registeredValidators
    // console.log(target);
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: [`postive`],
    }
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name]
    if(!objValidatorConfig){
        return true
    }
    let isVaild = true
    for(const prop in objValidatorConfig){
        for( const validator of prop ) {
            switch( validator ){
                case "required":
                    isVaild = isVaild && !! obj[prop]
                    break;
                    case"postive":
                    isVaild = isVaild && obj[prop] > 0
                    break
            }
        }
    }
    return isVaild
}

class Course{
    @Required
    title: string;
    @Postive
    price: number

    constructor(t: string, p: number){
        this.title = t,
        this.price = p
    }
}

const courseForm = document.querySelector("form")

courseForm?.addEventListener("submit",(e)=>{
    e.preventDefault();
    const titleEl = document.getElementById("title") as HTMLInputElement
    const priceEl = document.getElementById(`price`) as HTMLInputElement

    const title = titleEl.value
    const price = priceEl.value

    const createdCourse = new Course(title, + price);

    if(! validate(createdCourse)){
        console.error(`Invaild input ,try again`);
        return;
    }
    //! Normally this is the place where you save the object permeantally 
    console.log(createdCourse);
    
})