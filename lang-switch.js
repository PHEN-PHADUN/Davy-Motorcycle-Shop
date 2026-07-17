// 1. Dictionary containing complete Khmer and English translations
const translations = {
    km: {
        shop_title: "ហាងលក់ម៉ូតូ ដាវី",
        nav_home: "ទំព័រដើម ▾",
        sub_promo: "ការប្រម៉ូសិន",
        sub_new: "ម៉ូតូមកដល់ថ្មី",
        nav_products: "ប្រភេទម៉ូតូ",
        nav_installment: "សេវាកម្មរំលស់",
        nav_contact: "ទាក់ទងយើង",
        hero_title: "ស្វាគមន៍មកកាន់ហាង លក់ម៉ូតូដាវី",
        hero_desc: "មានលក់ម៉ូតូស៊េរីថ្មីៗ គុណភាពខ្ពស់ និងតម្លៃសមរម្យ",
        section_title: "ម៉ូតូក្នុងស្តុកថ្ងៃនេះ",
        price_label: "តម្លៃ៖",
        ask_price: "សាកសួរ",
        btn_telegram: "កុម្ម៉ង់តាម Telegram",
        card4_title: "ម៉ូតូមកដល់ថ្មីៗ ច្រើនជម្រើស",
        card4_desc: "គុណភាពខ្ពស់ ១០០%",
        btn_more: "មើលបន្ថែម",
        footer_shop: "ហាងម៉ូតូ ដាវី - ទីតាំង៖ ខេត្តកំពត",
        footer_phone: "ទូរស័ព្ទ៖"
    },
    en: {
        shop_title: "Da Vy Motor Shop",
        nav_home: "Home ▾",
        sub_promo: "Promotions",
        sub_new: "New Arrivals",
        nav_products: "Motorbikes",
        nav_installment: "Installment",
        nav_contact: "Contact Us",
        hero_title: "Welcome to Da Vy Motor Shop",
        hero_desc: "We sell the newest motorbike models with premium quality and fair prices.",
        section_title: "Motorbikes in Stock Today",
        price_label: "Price:",
        ask_price: "Inquire",
        btn_telegram: "Order via Telegram",
        card4_title: "New Arrivals Available",
        card4_desc: "100% Top Quality Guaranteed",
        btn_more: "View More",
        footer_shop: "Da Vy Motor Shop - Location: Kampot Province",
        footer_phone: "Phone:"
    }
};

// 2. Function to update text on the page based on selected language
function setLanguage(lang) {
    localStorage.setItem("selectedLang", lang);

    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    if (lang === "en") {
        document.getElementById("lang-en").style.fontWeight = "bold";
        document.getElementById("lang-km").style.fontWeight = "normal";
    } else {
        document.getElementById("lang-km").style.fontWeight = "bold";
        document.getElementById("lang-en").style.fontWeight = "normal";
    }
}

// 3. Event listeners for language links
document.getElementById("lang-km").addEventListener("click", (e) => {
    e.preventDefault();
    setLanguage("km");
});

document.getElementById("lang-en").addEventListener("click", (e) => {
    e.preventDefault();
    setLanguage("en");
});

// 4. Dom Load Event
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("selectedLang") || "km";
    setLanguage(savedLang);
});

// 5. Dropdown Menu Trigger Setup
document.getElementById('homeMenuLink').addEventListener('click', function(event) {
    event.preventDefault(); 
    event.stopPropagation(); // Stop window handler from firing instantly
    var dropdown = document.getElementById('homeDropdown');
    dropdown.classList.toggle('show');
});

// Close dropdown if clicked completely outside
window.addEventListener('click', function(event) {
    if (!event.target.matches('#homeMenuLink')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});

