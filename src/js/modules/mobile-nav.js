function mobileNav() {
	// Mobile nav button
	const navBtn = document.getElementById('mobile-nav-btn');
	const closeBtn = document.getElementById('close-mobile-nav');
	const nav = document.querySelector('.mobile-nav');
	const fade = document.querySelector('.mobile-nav-fade');

	function closeMobileNav () {
		nav.classList.remove('mobile-nav--open');
		fade.classList.remove('mobile-nav-fade--open');
		document.body.classList.toggle('no-scroll');
	}
	

	navBtn.onclick = function () {
		nav.classList.add('mobile-nav--open');
		fade.classList.add('mobile-nav-fade--open');
		document.body.classList.toggle('no-scroll');
	};

	closeBtn.onclick = closeMobileNav;

	fade.onclick = closeMobileNav;

	nav.addEventListener('click', function(e) {
		e.stopPropagation();
	})
}

export default mobileNav;