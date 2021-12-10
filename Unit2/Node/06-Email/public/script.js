const url = "/api/v1/products"
const fileFormDom = document.querySelector(`.file-form`)

const nameinput = document.querySelector("#name")
const priceinput = document.querySelector(`#price`)
const imageinput = document.querySelector("#image")

const container = document.querySelector(`container`)

let imageValue;

imageinput.addEventListener(`change`,async(e)=>{
    const imageFile = e.target.files[0];
    const formData = new formData()
    formData.append("image",imageFile)
    console.log([...formData.keys()])
    try{
        const{
            data: {
                image: {
                    src
                }
            }
        } = await axios.post(`${url}/uploads`,formData,{
            headers :{
                "Content-Type" : "multipart / form-data"
            }
        })
        imageValue = src
    }catch(err){
        imageValue = null
        console.log(error)
    }
})

