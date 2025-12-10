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
    desc: `4 salmon, 2 shirimp, 1 tuna, 1 gunkan, 1 unagi, 1 trout, 10 special maki rolls`
  },
  {
    id: 2,
    title: "30 Piece Family Sushi",
    category: "Nigiri and Maki",
    price: 395,
    img: "img/30PieceFamilySushi.jpg",
    desc: `6 salmon, 2 shrimp, 2 tuna, 1 gunkan, 1 black fish, 2 unagi, 1 white fish, 10 special maki rolls, 5 maki rolls`
  },
  {
    id: 3,
    title: "9 Piece Sushi",
    category: "Nigiri and Maki",
    price: 120,
    img: "img/9PieceSushi.jpg",
    desc: `2 salmon, 1 shrimp, 1 tuna, 1 white fish and 4 maki rolls`
  },
  {
    id: 4,
    title: "11 Piece Sushi",
    category: "Nigiri and Maki",
    price: 145,
    img: "img/11PieceSushi.jpg",
    desc: `3 salmon, 1 shrimp, 1 tuna, 1 white fish, 1 unagi and 4 maki rolls`
  },
  {
    id: 5,
    title: "13 Piece Sushi",
    category: "Nigiri and Maki",
    price: 180,
    img: "img/13PieceSushi.jpg",
    desc: `3 salmon, 1 shrimp, 1 tuna, 1 gunkan, 1 unagi, 1 trout and 5 maki rolls`
  },
  {
    id: 6,
    title: "Vegetarian 11 Piece Sushi",
    category: "Nigiri and Maki",
    price: 140,
    img: "img/Vegetarian11PieceSushi.jpg",
    desc: `2 avocado, 1 bell pepper, 2 tofu, 1 gunkan, 5 maki rolls`
  },
  { id: 7,
    title: "Vegetarian 9 Piece Sushi",
    category: "Nigiri and Maki",
    price: 120,
    img: "img/Vegetarian9PieceSushi.jpg",
    desc: `2 avocado, 1 bell pepper, 2 tofu and 4 maki rolls`
  },
  {
    id: 8,
    title: "15 Piece Sushi",
    category: "Nigiri and Maki",
    price: 190,
    img: "img/15PieceSushi.jpg",
    desc: `4 salmon, 2 shirimp, 1 tuna, 1 gunkan, 1 unagi, 1 trout, 5 maki rolls`
  },

  {
    id: 9,
    title: "10 Piece Seared Salmon",
    category: "Nigiri/ Flambeed Nigiri",
    price: 160,
    img: "img/10PieceSearedSalmon.jpg",
    desc: `Lightly grilled salmon and chili mayonnaise`
  },

  {
    id: 10,
    title: "Single Nigiri",
    category: "Nigiri/ Flambeed Nigiri",
    price: 20,
    img: "img/SingleNigiri.jpg",
    desc: ``
  },

  {
    id: 11,
    title: "10 Piece Nigiri",
    category: "Nigiri/ Flambeed Nigiri",
    price: 150,
    img: "img/10PieceNigiri.jpg",
    desc: `5 salmon, 5 avocado`
  },

  {
    id: 12,
    title: "10 Piece Nigiri",
    category: "Nigiri/ Flambeed Nigiri",
    price: 150,
    img: "img/10PieceNigiri2.jpg",
    desc: `10 salmon`
  },

  {
    id: 13,
    title: "Tempura Shrimp 6 pcs",
    category: "Appetizers",
    price: 60,
    img: "img/TempuraShrimp6pcs.jpg",
    desc: ``
  },

  {
    id: 14,
    title: "Temaki",
    category: "Appetizers",
    price: 65,
    img: "img/Temaki.jpg",
    desc: `Fried shrimp/Tuna/Salmon/Vegetarian, Avocado, Chives, Cucumber`
  },

  {
    id: 15,
    title: "Karaago",
    category: "Appetizers",
    price: 60,
    img: "img/Karaago.jpg",
    desc: ``
  },

  {
    id: 16,
    title: "Kimch Salad",
    category: "Appetizers",
    price: 60,
    img: "img/KimchSalad.jpg",
    desc: ``
  },

   {
    id: 17,
    title: "Miso Soup",
    category: "Appetizers",
    price: 20,
    img: "img/MisoSoup.jpg",
    desc: ``
  },

  {
    id: 18,
    title: "Edamame",
    category: "Appetizers",
    price: 50,
    img: "img/Edamame.jpg",
    desc: ``
  },

  {
    id: 19,
    title: "Vegan/Vegetarian Roll",
    category: "Special Makimono Rolls",
    price: 165,
    img: "img/Vegansk-VegetariskRoll.jpg",
    desc: `Cucumber, Mango, Pickled red onion, Avocado`
  },

  {
    id: 20,
    title: "Spicy Salmon Roll",
    category: "Special Makimono Rolls",
    price: 190,
    img: "img/SpicySalmonRoll.jpg",
    desc: `Salmon, Avocado, Cucumber, Mango, Pickled red onion, Spicy sauce`
  },

  {
    id: 21,
    title: "Spicy Tuna Roll",
    category: "Special Makimono Rolls",
    price: 180,
    img: "img/SpicyTunaRoll.jpg",
    desc: `Tuna, Avocado, cucumber, Mango, Pickled red onion, Spicy sauce`
  },  

  {
    id: 22,
    title: "Tempura Roll",
    category: "Special Makimono Rolls",
    price: 180,
    img: "img/TempuraRoll.jpg",
    desc: `Avocado, Cucumber, Chives, Salad, Fried shrimp`
  },

  {
    id: 23,
    title: "Volcano Fried Roll",
    category: "Special Makimono Rolls",
    price: 170,
    img: "img/VolcanoFriedRoll.jpg",
    desc: `Cucumber, Salad, Spring onion, Avocado, Spicy salmon, Chili mayonnaise`
  },

  {
    id: 24,
    title: "Philadelphia Roll",
    category: "Special Makimono Rolls",
    price: 170,
    img: "img/PhiladephiaRoll.jpg",
    desc: `Avocado, Cucumber, Salad, Lighty seared salmon on top, Cream cheese`
  },

  {
    id: 25,
    title: "California Roll",
    category: "Special Makimono Rolls",
    price: 160,
    img: "img/CaliforniaRoll.jpg",
    desc: `Avocado, Cucumber, Crab, Japanese mayonnaise`
  },
  {
    id: 26,
    title: "Marinated Salmon/Tuna/Karaage",
    category: "Subete Poke Bowl",
    price: 175,
    img: "img/MarinatedSalmon-Tuna-Karaage.jpg",
    desc: `Avocado, Pickled red oninon, Rice, Mango, Edamame, Wakame, Gari, Salad mix with dressing`
  },
  {
    id: 27,
    title: "Vegan/ Vegetarian",
    category: "Subete Poke Bowl",
    price: 165,
    img: "img/MarinatedSalmon-Tuna-Karaage.jpg",
    desc: `Marinated tofu/ Fried tofu, Rice, Avocado, Wakame, Gari, Pickled red onion, Salad and Mango`
  },
  {
    id: 28,
    title: "Salmon Teryaki",
    category: "Japanese Hot Dishes",
    price: 170,
    img: "img/SalmonTeriyaki.jpg",
    desc: `Fried salmon, Rice, Salad mix with dressing`
  },
  {
    id: 29,
    title: "Yakinuki",
    category: "Japanese Hot Dishes",
    price: 170,
    img: "img/Yakinuki.jpg",
    desc: `Sliced beef, Rice, Salad mix with dressing`
  },
  {
    id: 30,
    title: "Yakitori",
    category: "Japanese Hot Dishes",
    price: 160,
    img: "img/Yakitori.jpg",
    desc: `Chiken skewers, Rice, Salad mix with dressing`
  },
  {
    id: 31,
    title: "Dumplings",
    category: "Japanese Hot Dishes",
    price: 160,
    img: "img/Dumplings.jpg",
    desc: `Vegan/ Vegetarian/ Chiken/ Shrimp, Rice, Salad mix with dressing`
  },
  {
    id: 32,
    title: "Karaage",
    category: "Japanese Hot Dishes",
    price: 170,
    img: "img/Karaage.jpg",
    desc: `Marinated, Fried chiken with panko, Rice, Salad mix with dressing`
  },
  {
    id: 33,
    title: "Bento Box",
    category: "Japanese Hot Dishes",
    price: 190,
    img: "img/Karaage.jpg",
    desc: `Salmon/ Chicken Skewers/ Beef/ Karaage,  3 pieces of nigiri, Rice, Salad mix with dressing`
  },
]

const sectionCenter = document.querySelector(".section-center");


const filterBtns = document.querySelectorAll(".filter-btn");

// load items
window.addEventListener("DOMContentLoaded", function(){
  displayMenuItems(recipes);
});

// filter buttons
if (filterBtns && filterBtns.length > 0) {
  filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
      const category = (e.currentTarget.dataset.id || '').trim();
      const normalizedCategory = category.toLowerCase();
      if (normalizedCategory === "all"){
        displayMenuItems(recipes);
        return;
      }
      const menuCategory = recipes.filter(function(menuItem){
        const itemCat = (menuItem.category || '').toString().trim().toLowerCase();
        return itemCat === normalizedCategory;
      });
      displayMenuItems(menuCategory);
    });
  });
}


function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){
    //console.log(item);
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" loading="lazy"/>
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