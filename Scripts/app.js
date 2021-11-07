const main = document.querySelector('#principal-container');
const btn_generate =document.querySelector('#btn_generate');
const shopping_card = document.querySelector('#products');
const overlay = document.querySelector("#overlay");
const popup= document.querySelector("#popup");
const btn_close_popup = document.querySelector("#btn-close-popup");
const shoppingCart_container= document.querySelector(".shoppingCart-container");

food_cart=[];


function create_Cards() {
    foods.forEach((food) => {
    const card = document.createElement('div');
    const image_food = document.createElement('img');
    const card_content =document.createElement('div');
    const title_card = document.createElement('h2');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const button_card = document.createElement('button');

    

    title_card.style.marginBottom='2vh';                                                                                     
    button_card.textContent = 'Add';
    title_card.textContent = food.name;
    description.textContent=food.descrip;
    price.textContent=food.price;
    image_food.src = food.img;

    price.classList.add('price');
    card_content.classList.add('cardContent');
    card.classList.add('card');
    button_card.setAttribute('id', food.id);  
    button_card.addEventListener('click', add_cart);

    
    card.appendChild(image_food);
    card.appendChild(card_content);
    card_content.appendChild(title_card);
    card_content.appendChild(description);
    card_content.appendChild(price);
    card_content.appendChild(button_card);
    main.appendChild(card);

    

  }); 
}



shopping_card.addEventListener('click', show_cart)


function show_cart(){
  overlay.classList.add('activate');
  popup.classList.add('activate');
}

btn_close_popup.addEventListener('click', close_cart)

function close_cart(){
  overlay.classList.remove('activate');
  popup.classList.remove('activate');
}



const show_food_cart = () => {
  // shoppingCart_container.innerHTML = '';
  let lista = [...new Set(food_cart)]; 
  
  lista.forEach(item => {
      const todos_productos = foods.filter(foods => {
          return foods.id === parseInt(item);
      })
      console.log(todos_productos);
      console.log(todos_productos[0].name);
      
      const nombre = document.createElement('p');
      nombre.textContent=todos_productos[0].name;

      shoppingCart_container.appendChild(nombre);


      // let cont = 0;

      // for(let id of food_cart) {
      //     if(id === item) {
      //         cont++;
      //     }
      // }


     
      // const card_producto_cart = document.createElement('div');
      // const name = document.createElement('p');
      // const price = document.createElement('p');
      // const contador = document.createElement('p');
      // const btn_suma = document.createElement('button');
      // const btn_resta = document.createElement('button');
      // const btn_eliminar = document.createElement('button');

      // btn_suma.setAttribute('id', todos_productos[0].id);
      // btn_resta.setAttribute('id',todos_productos[0].id);
      // btn_eliminar.setAttribute('id',todos_productos[0].id);

      // name.textContent = todos_productos[0].name;
      // price.textContent = todos_productos[0].descrip;
      // btn_suma.textContent = '+';
      // btn_resta.textContent = '-'
      // btn_eliminar.textContent = 'X';
      // contador.textContent = cont;

      // card_producto_cart.classList.add('card_producto')
      // card_producto_cart.appendChild(name);
      // card_producto_cart.appendChild(price);
      // card_producto_cart.appendChild(contador)
      // card_producto_cart.appendChild(btn_suma);
      // card_producto_cart.appendChild(btn_resta);
      // card_producto_cart.appendChild(btn_eliminar);

      // btn_suma.addEventListener('click', agregarCarrito);
      // btn_resta.addEventListener('click', restarProducto);
      // btn_eliminar.addEventListener('click', eliminarProducto)
      // shoppingCart_container.appendChild(card_producto_cart);

        
  })
}



const add_cart = (event) => {
  food_cart.push(event.target.getAttribute('id'));
  show_food_cart();
}

create_Cards();








