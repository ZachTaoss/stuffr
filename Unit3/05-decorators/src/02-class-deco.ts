//! property deco - this takes 2 arg
//* target which is the constructor
//* name of the property
function PropLog(target: any, propertyName: string | Symbol) {
  console.log("PROPERTY DECO");
  console.log(target, propertyName);
}

//! accessor deco - 3 args (setter/getter)
//* target
//* name
//* description of the accessor method

// function MetLog(target: any, name: string, description: PropertyDescriptor) {
//   console.log(`DECO`);
//   console.log(target);
//   console.log(name);
//   console.log(description);
// }

function ParLog(target: any, name: string, position:number) {
    console.log(`PARAMETER DECO`);
    console.log(target);
    console.log(name);
    console.log(position);
  }

class Product {
  title: string;
  @PropLog
  private _price: number;

//   @AccLog
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error(`invaild price`);
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

//   @MetLog
  getPriceWithTax(@ParLog tax: number = 0.12) {
    return this._price * (1 + tax);
  }
}
