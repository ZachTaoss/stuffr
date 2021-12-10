const url = "/api/v1/products";
const fileFormDom = document.querySelector(`.file-form`);

const nameinput = document.querySelector("#name");
const priceinput = document.querySelector(`#price`);
const imageinput = document.querySelector("#image");

const container = document.querySelector(`.container`);

const submitbtn = document.querySelector(".file-form");
let imageValue;

fileFormDom.addEventListener(`submit`, async (e) => {
    e.preventDefault();
    const nameValue = nameinput.value
    const priceValue = priceinput.value
    try{
        const product = {name: nameValue, price: priceValue, image: imageValue};

        await axios.post(url,product);
        fetchProducts();
    } catch (err) {
        console.log(err)
    }
})

imageinput.addEventListener(`change`, async (e) => {
  const imageFile = e.target.files[0];
  const formData = new FormData();
  formData.append("image", imageFile);
  // console.log([...formData.keys()])
  try {
    const {
      data: {
        image: { src },
      },
    } = await axios.post(`${url}/uploads`, formData, {
      headers: {
        "Content-Type": "multipart / form-data",
      },
    });
    imageValue = src;
  } catch (err) {
    imageValue = null;
    console.log(error);
  }
});
async function fetchProducts() {
  try {
    const {
      data: { products },
    } = await axios.get(url);
    const tempProducts = products.map((each) => {
      return `<article class="product"> <img src="${each.image}" alt="${each.name}" class="img"> <footer><p>${each.name}</p><spam>${each.price}</span></footer></article>`;
    });
    container.innerHTML = tempProducts;
  } catch (error) {
    console.log(error);
  }
}

fetchProducts();
