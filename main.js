const openShopping = document.querySelector('.shopping')
const closeShopping = document.querySelector('.closeChopping')
const list = document.querySelector('.list')
const listCard = document.querySelector('.list-card')
const body = document.querySelector('body')
const total = document.querySelector('.total')
const quantity = document.querySelector('.quantity')

openShopping.addEventListener('click', () => {
  body.classList.add('active')
})

closeShopping.addEventListener('click', () => {
   body.classList.remove('active')
})

const products = [
  {
    id: 1,
    name: 'Kyrie Signature Shoe',
    image : 'bb.jpg',
    price:  6500
  },
  {
    id: 2,
    name: 'Jordan 1-Dior',
    image : 'j1 x dior.webp',
    price: 6500
  },
  {
    id: 3,
    name: 'Travis-Scott retro low',
    image : 'ts.jpeg',
    price: 6500
  },
  {
    id: 11,
    name: 'Adidas Yeezy 350 V2',
    image : 'yeezy.jpeg',
    price: 5500
    
  },
  {
    
    id: 5,
    name: 'Vans old skool',
    image : 'oldskool.jpeg',
    price: 4500
  },
  {
    id: 6,
    name: 'Air force',
    image : 'aj1.jpeg',
    price: 6000
  },
  {
    id: 4,
    name: 'Coverse',
    image : 'converse.png',
    price: 6000
    
  },
  {
    id: 12,
    name: 'Air-max-97',
    image : 'air-max-97.png',
    price: 6000
    
  },
  {
    id: 7,
    name: 'Jordan 4',
    image : 'aj4.jpg',
    price: 600
    
  },
  {
    id: 10,
    name: 'Curry x Under-Armour',
    image : 'ccc.jpg',
    price: 6000
  },
  {
    id: 9,
    name: 'Rick-and-Morty',
    image : 'ram.jpeg',
    price: 6000
   
  },
  {
    id: 8,
    name: 'Jordan 1 Panda',
    image : 'aj1p.jpg',
    price: 5500
  }
]

const listCards = []

const initialApp = () => {
  products.forEach((value, key) => {
    let newDiv = document.createElement('div')
    newDiv.classList.add('item')
    newDiv.innerHTML = `
      <img src="img/${value.image}" alt="">
      <div class="title">${value.name}</div>
      <div class="price">Rs ${value.price.toLocaleString()} </div>
      <button class="add" onclick="addToCart(${key})">Add to cart</button>
    `
    list.appendChild(newDiv)

  })
}

initialApp()


const addToCart = (id) => {
  if (listCards[id] == null) {
    listCards[id] = products[id]
    listCards[id].quantity = 1
  }

  reloadCard()
}

const reloadCard = () => {
  listCard.innerHTML = ''
  let count = 0
  let totalPrice = 0
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price
    count = count + value.quantity

    if (value != null){
      let newDiv = document.createElement('li')
      newDiv.innerHTML = `
        <div class="img">
          <img src="img/${value.image}" >
        </div>

        <div>${value.name}</div>
        <div>Rs ${value.price.toLocaleString()}</div>
        <div>${value.quantity}</div>

        <div>
          <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
          <div class="count">${value.quantity}</div>
          <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
        </div>
      
      `
      
      listCard.appendChild(newDiv)

    }

  })
  total.innerHTML = totalPrice.toLocaleString()
  quantity.innerHTML =count

}

const changeQuantity = (key, quantity) => {
  if (quantity == 0) {
    delete listCards[key]
  } else {
    listCards[key].quantity = quantity
    listCards[key].price = quantity * listCards[key].price
  }

  reloadCard()
}


