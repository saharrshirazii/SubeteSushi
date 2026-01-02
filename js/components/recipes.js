import { recipes } from './data.js';

export function initMenu() {
    const sectionCenter = document.querySelector('.section-center');
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (!sectionCenter) return;

    // Detect if we're in a subdirectory (like /en/) and adjust image paths
    const isSubdirectory = window.location.pathname.includes('/en/');
    const imgPrefix = isSubdirectory ? '../' : '';

    const displayMenuItems = (items) => {
        if (items.length < 1) {
            sectionCenter.innerHTML = `<h3>No items found in this category.</h3>`;
            return;
        }
        sectionCenter.innerHTML = items.map(item => `
            <article class="menu-item">
                <img src="${imgPrefix}${item.img}" alt="${item.title} - Fresh Japanese sushi from Subete Sushi Göteborg" class="photo" />
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

    displayMenuItems(recipes);

    filterBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const category = e.currentTarget.dataset.id;
            // Highlight active button 
            filterBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');

            if (category === "all") {
                displayMenuItems(recipes);
            } else {
                const filtered = recipes.filter(item => item.category === category);
                displayMenuItems(filtered);
            }
        });
    });
}