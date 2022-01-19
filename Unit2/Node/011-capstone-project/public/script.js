const url = '/api/v1/store';
const fileFormDOM = document.querySelector('.storeForm');

const nameInput = document.querySelector('#name');
const priceInput = document.querySelector('#price');
const ageInput = document.querySelector('#age');
const imageInput = document.querySelector('#image');
const storeForm = document.querySelector('.storeForm');

const container = document.querySelector('.container');
let imageValue;;
console.log(storeForm);
storeForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const priceValue = priceInput.value;
  const ageValue = ageInput.value;

  try {
    const store = {
      name: nameValue,
      price: priceValue,
      age: ageValue,
      image: imageValue,
    };

    await axios.post(url, store);
    fetchstores();
  } catch (error) {
    console.log(error);
  }
});

imageInput.addEventListener('change', async (e) => {
  const imageFile = e.target.files[0];
  const formData = new FormData();
  formData.append('image', imageFile);
  // console.log([...formData.keys()]);

  try {
    const {
      data: {
        image: { src },
      },
    } = await axios.post(`/api/v1/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    imageValue = src;
  } catch (err) {}
});

async function fetchstores() {
  try {
    console.log('hi');
    const {
      data: { store },
    } = await axios.get(url);
    console.log(store);
    const tempstores = store
      .map((each) => {
        return `<div class="product">
      <img src="${each.image}" alt="${each.name}" class="img"/>
      <footer>
      <p>${each.name}</p>
      <span>${each.price}</span>
      <img src="/public/media/AddToCart.png"/>
      </footer>
      </div>`;
      })
      .join('');
  } catch (error) {
    console.log(error);
  }
}

fetchstores();