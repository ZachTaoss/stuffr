function Autobind(_:any, _2: string, descriptor:PropertyDescriptor) { 
    const originalMethod = descriptor.value;
    console.log(originalMethod);
    
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this)
            return boundFn
        }
    }
    return adjDescriptor
 }




class Printer{
    message = `This works`

    //! Without binding this will dhow undefined because there is no constructor defined 
    showMessage(){
        console.log(this.message);
        
    }
}

const p = new Printer()
p.showMessage()

const buttonE1 = document.querySelector(`button`)!;
// buttonE1.addEventListener("click",p.showMessage.bind(p))
buttonE1.addEventListener("click",p.showMessage)