export function initMenu() {
  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
  }

// recipes page
// items

const recipes = [
  {
    id: 1,
    title: "20 Piece Sushi",
    category: "Nigiri and Maki",
    price: 260,
    img: "img/20PieceSushi.jpg",
    desc: `4 salmon, 2 shirimp, 1 tuna, 1 gunkan, 1 unagi, 1 trout, 10 special maki rolls.`
  },
  {
    id: 2,
    title: "30 Piece Family Sushi",
    category: "Nigiri and Maki",
    price: 395,
    img: "img/30PieceFamilySushi.jpg",
    desc: `6 salmon, 2 shrimp, 2 tuna, 1 gunkan, 1 black fish, 2 unagi, 1 white fish, 10 special maki rolls, 5 maki rolls.`
  },
  {
    id: 3,
    title: "9 Piece Sushi",
    category: "Nigiri and Maki",
    price: 120,
    img: "img/9PieceSushi.jpg",
    desc: `2 salmon, 1 shrimp, 1 tuna, 1 white fish and 4 maki rolls.`
  },
  {
    id: 4,
    title: "11 Piece Sushi",
    category: "Nigiri and Maki",
    price: 145,
    img: "img/11PieceSushi.jpg",
    desc: `3 salmon, 1 shrimp, 1 tuna, 1 white fish, 1 unagi and 4 maki rolls.`
  },
  {
    id: 5,
    title: "13 Piece Sushi",
    category: "Nigiri and Maki",
    price: 180,
    img: "img/13PieceSushi.jpg",
    desc: `3 salmon, 1 shrimp, 1 tuna, 1 gunkan, 1 unagi, 1 trout and 5 maki rolls.`
  },
  {
    id: 6,
    title: "Vegetarian 11 Piece Sushi",
    category: "Nigiri and Maki",
    price: 140,
    img: "img/Vegetarian11PieceSushi.jpg",
    desc: `2 avocado, 1 bell pepper, 2 tofu, 1 gunkan, 5 maki rolls.`
  },
  { id: 7,
    title: "Vegetarian 9 Piece Sushi",
    category: "Nigiri and Maki",
    price: 120,
    img: "img/Vegetarian9PieceSushi.jpg",
    desc: `2 avocado, 1 bell pepper, 2 tofu and 4 maki rolls.`
  },
  {
    id: 8,
    title: "15 Piece Sushi",
    category: "Nigiri and Maki",
    price: 190,
    img: "img/item-08.jpeg",
    desc: `4 salmon, 2 shirimp, 1 tuna, 1 gunkan, 1 unagi, 1 trout, 5 maki rolls.`
  },
  {
    id: 9,
    title: "Tiramisu",
    category: "Dessert",
    price: 25,
    img: "img/item-09.jpeg",
    desc: `Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.`
  },
  
]

const sectionCenter = document.querySelector(".section-center");

const filterBtns = document.querySelectorAll(".filter-btn");

// load items
window.addEventListener("DOMContentLoaded", function(){
  displayMenuItems(recipes);
});
// filter buttons
filterBtns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const category = e.currentTarget.dataset.id;
    const menuCategory = recipes.filter(function(menuItem){
    if(menuItem.category === category){
      return menuItem;
    }
  });
    if(category === "all"){
      displayMenuItems(recipes);
    } else {
      displayMenuItems(menuCategory);
    }
});
});


function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
    //console.log(item);
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <div>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price} sek</h4>
            </div>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
};
}