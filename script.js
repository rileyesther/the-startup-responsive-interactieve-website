document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > window.innerHeight * 2 || document.documentElement.scrollTop > window.innerHeight * 2) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});

function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.display = (mobileMenu.style.display === 'block' || mobileMenu.style.display === '') ? 'none' : 'block';
}

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Your existing code

    // Function to toggle the dropdown
    function toggleDropdown() {
        var dropdownContent = document.querySelector(".dropdown-content");
        dropdownContent.classList.toggle("show");
    }
    

    // Attach the toggleDropdown function to the dropdown button click event
    var dropdownBtn = document.querySelector(".dropdown-btn");
    dropdownBtn.addEventListener("click", toggleDropdown);
    
    function highlightOption(element) {
        element.classList.add("highlight");
    }
    
    function unhighlightOption(element) {
        element.classList.remove("highlight");
    }

    function selectFilter(filter) {
        // Your implementation here
    }
    
    
    // Close the dropdown when clicking outside of it
    window.addEventListener("click", function (event) {
        if (!event.target.matches(".dropdown-btn")) {
            var dropdownContent = document.querySelector(".dropdown-content");
            if (dropdownContent.classList.contains("show")) {
                dropdownContent.classList.remove("show");
            }
        }
    });
});
