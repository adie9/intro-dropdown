
const close_icon = document.querySelector(".close-icon");
const nav_popup = document.querySelector(".nav-items");
const menu_icon = document.querySelector(".icon-menu");
const company_arrow = document.querySelector("#company-arrow");
const features_arrow = document.querySelector("#features-arrow");
const company_dropdown = document.querySelector("#company-dropdown");
const features_dropdown = document.querySelector("#features-dropdown");

function openMobileMenu() {
    nav_popup.style.display = "flex";
}

function closeMobileMenu() {
    nav_popup.style.display = "none";
}

function toggleFeatures() {
    if (features_dropdown.style.display == "none") {
        features_dropdown.style.display = "flex";
    } else {
        features_dropdown.style.display = "none";
    }
}

function toggleCompany() {
    if (company_dropdown.style.display == "none") {
        company_dropdown.style.display = "flex";
    } else {
        company_dropdown.style.display = "none";
    }
}



// Open mobile menu
menu_icon.addEventListener("click", openMobileMenu);

// Close mobile menu
close_icon.addEventListener("click", closeMobileMenu);

// Toggle dropdown
company_arrow.addEventListener("click", toggleCompany);

features_arrow.addEventListener("click", toggleFeatures);
