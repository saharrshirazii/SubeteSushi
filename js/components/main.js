import { initNavigation } from './components/toggle.js';
import { initMenu } from './components/recipes.js';
import { initGallery } from './components/gallery.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();

    // Detect language from URL
    const isEnglish = window.location.pathname.includes('/en/');
    initMenu(isEnglish ? 'en' : 'sv');

    initGallery();
});