import { initNavigation } from './components/toggle.js';
import { initMenu } from './components/recipes.js';
import { initGallery } from './components/gallery.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initMenu();
    initGallery();
});