const main = document.querySelector('#principal-container');
const btn_generate =document.querySelector('#btn_generate');
// const quanty = document.querySelector('')

create_Cards();

function create_Cards() {
    foods.forEach((food) => {
    const card = document.createElement('div');
    const title_card = document.createElement('h2');
    const button_card = document.createElement('button');
    const image_color = document.createElement('img');

    title_card.style.marginBottom='2vh';                                                                                     
    button_card.textContent = 'Add';
    title_card.textContent = food.name.toUpperCase();
    image_color.src = food.img;

    card.classList.add('card');

    card.appendChild(title_card);
    card.appendChild(image_color);
    card.appendChild(button_card);
    main.appendChild(card);
  }); 
}

// btn_generate.addEventListener('click', count_cards )

// function count_cards() {
    
// }



