# Models

## Product 
- name\*
    - String

- price\*
    - number

- image\*
    - String(this is the url to the image)

# Controllers 

### Uploading images 
- uploadImage
    - takes a req.files and places that file to the local storage
### Products 

- Create Product
    - create a document on the DB of a new product 
- getAllProducts 
    - find all products on DB 

# Routes
### ProducstRoute
- "/" 
    - post - createProduct 
    - get - getAllProduct 
- "/uploads"
    - post - uploadProductImage