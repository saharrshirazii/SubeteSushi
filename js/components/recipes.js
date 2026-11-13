import { recipes } from './data.js';
import { recipesEn } from './data-en.js';


export function initMenu(language = null) {
    const sectionCenter = document.querySelector('.section-center');
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (!sectionCenter) return;

    // Auto-detect language from URL if not provided
    if (!language) {
        language = window.location.pathname.includes('/en/') ? 'en' : 'sv';
    }

    // Choose correct data
    const menuData = language === 'en' ? recipesEn : recipes;

    // Handle image paths
    const isSubdirectory = window.location.pathname.includes('/en/');
    const imgPrefix = isSubdirectory ? '../' : '';

    // Lunch info shown above the lunch items
    const lunchNote = language === 'en'
        ? `<div class="lunch-note"><h3>Lunch Menu</h3><p>Served daily 12:00 - 15:00</p><p>Add a 330 ml soda (+20 kr) or a miso soup (+20 kr)</p></div>`
        : `<div class="lunch-note"><h3>Lunchmeny</h3><p>Serveras dagligen: 12:00 - 15:00</p><p>Lägg till en 330 ml burkläsk (+20 kr) eller en misosoppa (+20 kr)</p></div>`;

    // "All" view hides Lunch items (they duplicate regular menu rolls)
    const regularItems = menuData.filter(item => item.category !== 'Lunch');

    const displayMenuItems = (items, showLunchNote = false) => {
        if (items.length < 1) {
            sectionCenter.innerHTML = `<h3>No items found in this category.</h3>`;
            return;
        }

        sectionCenter.innerHTML = (showLunchNote ? lunchNote : '') + items.map(item => `
            <article class="menu-item">
                <img 
                  src="${imgPrefix}${item.img}" 
                  alt="${item.title} - Subete Sushi" 
                  class="photo"
                />
                <div class="item-info">
                    <div>
                        <h4>${item.title}</h4>
                        <h4 class="price">${item.price} sek</h4>
                    </div>
                    <p class="item-text">${item.desc}</p>
                </div>
            </article>
        `).join("");
    };

    displayMenuItems(regularItems);

    filterBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const category = e.currentTarget.dataset.id;

            filterBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');

            if (category === "all") {
                displayMenuItems(regularItems);
            } else {
                const filtered = menuData.filter(
                  item => item.category === category
                );
                displayMenuItems(filtered, category === 'Lunch');
            }
        });
    });
}