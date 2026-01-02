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

    const displayMenuItems = (items) => {
        if (items.length < 1) {
            sectionCenter.innerHTML = `<h3>No items found in this category.</h3>`;
            return;
        }

        sectionCenter.innerHTML = items.map(item => `
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

    displayMenuItems(menuData);

    filterBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const category = e.currentTarget.dataset.id;

            filterBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');

            if (category === "all") {
                displayMenuItems(menuData);
            } else {
                const filtered = menuData.filter(
                  item => item.category === category
                );
                displayMenuItems(filtered);
            }
        });
    });
}