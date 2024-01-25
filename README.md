# Backbase accelerator portal
create a user friendly overview of all our github repositories aka accelorators.

## description

Backbase is undertaking an initiative to revamp its official website by providing a refreshed catalog of available accelerators. This effort stems from the observed clutter on GitHub, where outdated files linger without utility.

The primary objective is to bring clarity and accessibility to users seeking current and pertinent information. Through this initiative, Backbase aims to streamline the user experience, making it effortless for companies and individuals to discover and access relevant accelerators.

The Accelerator Portal is designed to cater to a diverse audience keen on exploring more about Backbase's apps and services. Whether seeking information or examples, the portal serves as a comprehensive resource for those interested in the offerings provided by Backbase.


**mobile version**


![Screen Shot 2024-01-25 at 10 09 48](https://github.com/rileyesther/the-startup-responsive-interactieve-website/assets/144009597/85556023-f3a7-4314-a607-ce973e15da48)

**select menu**


![Screen Shot 2024-01-25 at 10 12 30](https://github.com/rileyesther/the-startup-responsive-interactieve-website/assets/144009597/47e4bb91-4307-4bc7-8124-a29fa81fe46e)

**dropdown menu**

![Screen Shot 2024-01-25 at 10 22 14](https://github.com/rileyesther/the-startup-responsive-interactieve-website/assets/144009597/51915af1-3148-4337-9f7b-e995e3a30bcc)


**scroll to top button**


![Screen Shot 2024-01-25 at 10 12 54](https://github.com/rileyesther/the-startup-responsive-interactieve-website/assets/144009597/7e700a1f-47fe-46ae-a086-939645b5ace1)

## what i have been able to achieve 

- **Navigation**: The header navigation and mobile menu provide easy access to different sections of the website.
- **Scroll-to-Top Button**: The inclusion of a scroll-to-top button enhances user navigation and experience.
- **Dropdown Menu**: The implementation of a dropdown menu for filtering demonstrates functionality and enhances user interaction.
- **JavaScript Functionality**: JavaScript functions like toggling the mobile menu and dropdown menu appear to be functioning as intended.

## areas for improvement 
- **Code Modularity**: The JavaScript code could benefit from improved modularity and organization, making it more maintainable.
- **Dropdown Behavior**: I could have Fine-tuned the behavior of the dropdown menu to close when an option is clicked and enhance the styling for a more polished look.
- **Consistency**: Ensuring consistency in styling across different sections of the website for a cohesive visual experience.

## code 

When creating this website i decided to focus more on the use of java.script rather than anything else. The reason for this is because i wanted to use this task to really challenge myself in the areas where i felt most weak. The fact that with this task we were told that our client merely wanted to see what we were capable of and how far with would come given our time span helped me realise rather quickly that i wanted to focus more on the functionality of the website rather than the design.

With html i have been able to creat a 

**drop down menu** :



```html
<div class="dropdown" onclick="toggleDropdown()">
    <div class="dropdown-btn">Filter <span class="arrow">&#9662;</span></div>
    <div class="dropdown-content" onmouseleave="closeDropdown()">
        <a href="#" onclick="selectFilter('A-Z')" onmouseover="highlightOption(this)" onmouseout="unhighlightOption(this)">Digital Banking</a>
        <a href="#" onclick="selectFilter('recent')" onmouseover="highlightOption(this)" onmouseout="unhighlightOption(this)">Digital Onboarding</a>
        <a href="#" onclick="selectFilter('viewed')" onmouseover="highlightOption(this)" onmouseout="unhighlightOption(this)">Digital Lending</a>
        <a href="#" onclick="selectFilter('viewed')" onmouseover="highlightOption(this)" onmouseout="unhighlightOption(this)">Digital Assist</a>
        <a href="#" onclick="selectFilter('viewed')" onmouseover="highlightOption(this)" onmouseout="unhighlightOption(this)">Digital Engage</a>
    </div>
</div>
```
**corresponding java.script code**:


```javascript
document.addEventListener("DOMContentLoaded", function () {

    // Function to toggle the dropdown
    function toggleDropdown() {
        var dropdownContent = document.querySelector(".dropdown-content");
        dropdownContent.classList.toggle("show");
    }

    // Attach the toggleDropdown function to the dropdown button click event
    var dropdownBtn = document.querySelector(".dropdown-btn");
    dropdownBtn.addEventListener("click", toggleDropdown);

    // Function to highlight an option on mouseover
    function highlightOption(element) {
        element.classList.add("highlight");
    }

    // Function to remove highlight on mouseout
    function unhighlightOption(element) {
        element.classList.remove("highlight");
    }

    // Placeholder function for selecting a filter
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
```


 **mobile menu**

```html
<div class="menu-icon" onclick="toggleMenu()">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
</div>

<div class="mobile-menu">
    <div class="mobile-menu-links">
        <a href="#" class="header-link" onclick="toggleMenu()">Product</a>
        <a href="#" class="header-link" onclick="toggleMenu()">Developers</a>
        <a href="#" class="header-link" onclick="toggleMenu()">Documentation</a>
        <a href="#" class="header-link" onclick="toggleMenu()">Delivery</a>
        <a href="#" class="header-link" onclick="toggleMenu()">Learning</a>
    </div>
</div>
```

**corresping java.script code**:

```javascript
function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.style.display = (mobileMenu.style.display === 'block' || mobileMenu.style.display === '') ? 'none' : 'block';
}
```

**scroll to top button**
## Scroll-to-Top Function

```javascript
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
```

