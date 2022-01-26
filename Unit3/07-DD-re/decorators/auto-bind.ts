function Autobind(_: any, _2: any, desc: PropertyDescriptor) {
    const orginalMethod = desc.value;
    const newMethod: PropertyDescriptor = {
      get(){
        return orginalMethod.bind(this)
      }
    };
  
    return newMethod;
  }
  