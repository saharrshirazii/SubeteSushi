
// Detect if we're in a subdirectory (like /en/) and adjust image paths
const isSubdirectory = window.location.pathname.includes('/en/');
const imgBasePath = isSubdirectory ? '../img/gallery/' : 'img/gallery/';

const images = [
    { src: `${imgBasePath}01.jpg`, title: 'Sushi Roll', },
    { src: `${imgBasePath}03.jpg`, title: 'Fresh Fish' },
    { src: `${imgBasePath}05.jpg`, title: 'Japanese Dish' },
    { src: `${imgBasePath}07.jpg`, title: 'Chef Special' },
    { src: `${imgBasePath}09.jpg`, title: 'Nigiri' },
    { src: `${imgBasePath}11.jpg`, title: 'Poke Bowl' },
    { src: `${imgBasePath}13.jpg`, title: 'Salmon' },
    
  ];
export function initGallery() {
    const gallery = document.getElementById('gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('close');
    const prevBtn = document.querySelector('.prev-arrow');
    const nextBtn = document.querySelector('.next-arrow');


    if (!gallery || !lightbox) return;

    let startIndex = 0;

    // 1. Render Gallery Items
    const render = () => {
        gallery.innerHTML = '';
        for (let i = 0; i < 6; i++) { // Show 6 at a time
            const idx = (startIndex + i) % images.length;
            const item = document.createElement('div');
            item.className = 'gallery-item visible';
            item.innerHTML = `
                <img src="${images[idx].src}" alt="${images[idx].title}">
                <div class="overlay">${images[idx].title}</div>
            `;
            gallery.appendChild(item);
        }
    }

    // NEXT
  nextBtn?.addEventListener('click', () => {
    startIndex = (startIndex + 1) % images.length;
    render();
  });

  // PREVIOUS
  prevBtn?.addEventListener('click', () => {
    startIndex = (startIndex - 1 + images.length) % images.length;
    render();
  });
    // setInterval(() => {
    //     startIndex = (startIndex + 1) % images.length;
    //     render();
    // }, 3000);

    // 2. Lightbox Functions
    function openLightbox(src) {
        lightbox.classList.add('active'); // Show modal
        lightboxImg.src = src; 
        
        // Reset opacity to 0 first, then fade in
        lightboxImg.style.opacity = '0';
        setTimeout(() => {
            lightboxImg.style.opacity = '1';
        }, 50);
    }

    function closeLightbox() {
        lightboxImg.style.opacity = '0';
        setTimeout(() => {
            lightbox.classList.remove('active');
        }, 300);
    }

    // 3. MAIN FIX: Event Delegation
    // We listen to the whole gallery container.
    gallery.addEventListener('click', (e) => {
        // Did we click inside a gallery item?
        const item = e.target.closest('.gallery-item');
        
        if (item) {
            // Find the image inside that specific item
            const img = item.querySelector('img');
            if (img) {
                openLightbox(img.src);
            }
        }
    });

    // 4. Close Event Listeners
    closeBtn.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', (e) => {
        // Close if clicking the dark background (not the image)
        if (e.target !== lightboxImg) {
            closeLightbox();
        }
    });
    

    render();
}