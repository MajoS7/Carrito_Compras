const main = document.querySelector('#principal-container');
const btn_generate =document.querySelector('#btn_generate');
const shopping_card = document.querySelector('#products');
const overlay = document.querySelector("#overlay");
const popup= document.querySelector("#popup");
const btn_close_popup = document.querySelector("#btn-close-popup");
const shoppingCart_container= document.querySelector(".shoppingCart-container");
const totel =document.querySelector('#total');
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

const subtract_food = (event) => {
  let item = event.target.getAttribute('id') 
  food_cart.splice(parseInt(food_cart.indexOf(item)),1)
  show_food_cart();
}



const show_food_cart = () => {
  shoppingCart_container.innerHTML = '';
  let lista = [...new Set(food_cart)]; 
  
  lista.forEach(item => {

      const todos_productos = foods.filter(foods => {
          return foods.id === parseInt(item);
      })
      let cont = 0;
      let total=0;
      
      

      for(let id of food_cart) {
          if(id === item) {
            cont++;
            total=total+parseInt(todos_productos[0].price);
            todos_productos[0].totalv=total;
          }
          
      }
      let sumatoria=0;
      foods.forEach((food) => {
        sumatoria=sumatoria+food.totalv;
      })
      

      
      
      
      
      const card = document.createElement('div');
      const imagen = document.createElement('img');
      const cardContent = document.createElement('div');
      // const deletec = document.createElement('p');
      const title_card=document.createElement('h2');
      const info=document.createElement('p');
      const containerQuantityNumber= document.createElement('div');
      const quantity =document.createElement('h4');
      const quantityNumber=document.createElement('div');
      const sum =document.createElement('p');
      const number=document.createElement('p');
      const subtract=document.createElement('p');
      const pricecart=document.createElement('p');

      sum.setAttribute('id', todos_productos[0].id);
      subtract.setAttribute('id',todos_productos[0].id);


      card.classList.add('card');
      cardContent.classList.add('cardContent');
      // deletec.classList.add('delete');
      containerQuantityNumber.classList.add('quantityNumber');
      quantity.style.fontStyle='oblique';
      quantityNumber.classList.add('numberQuantity');
      sum.classList.add('circle');
      subtract.classList.add('circle');
      pricecart.classList.add('price');

      // deletec.textContent='X';
      imagen.src=todos_productos[0].img;
      title_card.textContent=todos_productos[0].name;
      info.textContent=todos_productos[0].descrip;
      quantity.textContent='Cantidad';
      sum.textContent='+';
      number.textContent=cont;
      subtract.textContent='-';
      pricecart.textContent=total;
      // totel.textContent=sumatoria;

      // card.appendChild(deletec);
      card.appendChild(imagen);
      cardContent.appendChild(title_card);
      cardContent.appendChild(info);
      cardContent.appendChild(containerQuantityNumber);
      containerQuantityNumber.appendChild(quantity);
      containerQuantityNumber.appendChild(quantityNumber);
      quantityNumber.appendChild(subtract);
      quantityNumber.appendChild(number);
      quantityNumber.appendChild(sum);
      cardContent.appendChild(pricecart);
      card.appendChild(cardContent);
      // card.appendChild(totel);


      sum.addEventListener('click', add_cart);
      subtract.addEventListener('click', subtract_food);



      shoppingCart_container.appendChild(card);

      
      /////btn_eliminar.setAttribute('id',todos_productos[0].id);
      ///// btn_eliminar.addEventListener('click', eliminarProducto)
        
  })
}





const add_cart = (event) => {
  food_cart.push(event.target.getAttribute('id'));
  show_food_cart();
}

create_Cards();








