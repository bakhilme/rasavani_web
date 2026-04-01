(function () {
    var navToggle = document.querySelector('.nav-toggle');
    var navItems = document.querySelector('.nav-items');

    if (navToggle && navItems) {
        navToggle.addEventListener('click', function () {
            var isOpen = navItems.classList.toggle('is-open');
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }
})();
