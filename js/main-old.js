import { toggleMenu } from './components/toggle-old.js';
import { initMenu } from './components/menu-old.js';
import { initGallery } from './components/gallery.js';



document.addEventListener('DOMContentLoaded', function () {
	const navToggle = document.querySelector('.nav-toggle');
	const links = document.querySelector('.menu-links');

	if (navToggle) {
		navToggle.addEventListener('click', function (e) {
			e.stopPropagation();
			toggleMenu();
		});
	}

	// close menu when clicking outside nav on mobile/tablet
	document.addEventListener('click', function (e) {
		if (!e.target.closest('.nav-center') && links && links.classList.contains('show-links')) {
			links.classList.remove('show-links');
		}
	});

	// ensure menu is closed when resizing to desktop
	window.addEventListener('resize', function () {
		if (window.innerWidth >= 800 && links) {
			links.classList.remove('show-links');
		}
	});

	// initialize menu (filters, items)
	try {
		initMenu();
	} catch (err) {
		// fail gracefully
	}
	initGallery();
});