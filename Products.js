/*!--page producte JavaScript Execution Extension Mapping --*/

    // Append product language strings dynamically into the international dictionary configuration
    document.addEventListener("DOMContentLoaded", () => {
        if(typeof translations !== 'undefined') {
            translations.km.prod_title = "ម៉ូតូមកថ្មីៗ និងពេញនិយមបំផុត";
            translations.km.prod_subtitle = "មានធានាគុណភាពផ្លូវការពីហាង និងសេវាកម្មរំលស់រហ័សទាន់ចិត្ត";
            translations.km.badge_new = "មកថ្មី";
            translations.km.badge_hot = "លក់ដាច់";
            translations.km.badge_promo = "ប្រូម៉ូសិន";
            translations.km.cat_manual = "ម៉ូតូលេខ";
            translations.km.cat_auto = "ម៉ូតូអូតូ";
            translations.km.cat_sport = "ម៉ូតូធំ / ស្ព័រ";
            translations.km.specs_dream = "⚡ ម៉ាស៊ីន: 125cc | ⛽ ប្រព័ន្ធសាំង: ប៊ិច (FI)";
            translations.km.specs_scoopy = "⚡ ម៉ាស៊ីន: 110cc | 🔑 ប្រព័ន្ធសោ: ឆ្លាតវៃ (Smart Key)";
            translations.km.specs_adv = "⚡ ម៉ាស៊ីន: 160cc | 🛑 ប្រព័ន្ធហ្វ្រាំង: ABS";
            translations.km.lbl_loan = "រំលស់៖";
            translations.km.lbl_month = "ខែ";
            translations.km.btn_chat = "💬 ឆាតសួរ";
            translations.km.btn_detail = "មើលលម្អិត";

            translations.en.prod_title = "Newest & Most Popular Motorbikes";
            translations.en.prod_subtitle = "Official store quality warranty with instant easy leasing packages.";
            translations.en.badge_new = "New";
            translations.en.badge_hot = "Hot Sale";
            translations.en.badge_promo = "Promo";
            translations.en.cat_manual = "Manual Transmission";
            translations.en.cat_auto = "Automatic Transmission";
            translations.en.cat_sport = "Sport / Big Bike";
            translations.en.specs_dream = "⚡ Engine: 125cc | ⛽ Fuel System: PGM-FI";
            translations.en.specs_scoopy = "⚡ Engine: 110cc | 🔑 Ignition: Smart Key System";
            translations.en.specs_adv = "⚡ Engine: 160cc | 🛑 Brakes: ABS Enabled";
            translations.en.lbl_loan = "Loan:";
            translations.en.lbl_month = "mo";
            translations.en.btn_chat = "💬 Inquiry";
            translations.en.btn_detail = "Details";
            
            // Re-render strings to match stored active preference
            const activeLang = localStorage.getItem("selectedLang") || "km";
            if(typeof setLanguage === 'function') setLanguage(activeLang);
        }
    });