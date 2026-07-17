 /*!--page contact JavaScript for Dropdown Menus and Form Redirects --*/
    // Append Contact Translations directly to prevent file sync omissions
    document.addEventListener("DOMContentLoaded", () => {
        if(typeof translations !== 'undefined') {
            translations.km.contact_title = "📞 ទំនាក់ទំនងមកយើងខ្ញុំ";
            translations.km.contact_subtitle = "លោកអ្នកអាចអញ្ជើញមកហាងផ្ទាល់ ទំនាក់ទំនងតាមទូរសព្ទ ឬផ្ញើសារមកយើងខ្ញុំបានគ្រប់ពេល";
            translations.km.card_info_title = "ហាងលក់ម៉ូតូ ខុន ដាវី";
            translations.km.lbl_address = "📍 ទីតាំងហាង៖";
            translations.km.val_address = "ភូមិបឹងធំខាងលិច ឃុំអង្គសុរភី ស្រុកកំពង់ត្រាច ខេត្តកំពត";
            translations.km.lbl_phone = "📞 លេខទូរសព្ទ៖";
            translations.km.lbl_hours = "⏰ ម៉ោងធ្វើការ៖";
            translations.km.val_hours = "រៀងរាល់ថ្ងៃ (7:30 ព្រឹក - 6:00 ល្ងាច)";
            translations.km.btn_tg_chat = "Telegram ចុចទីនេះ";
            translations.km.card_form_title = "💬 ផ្ញើសារសាកសួរព័ត៌មានលឿន";
            translations.km.form_msg = "សូមបញ្ចូលសារដែលលោកអ្នកចង់សួរ៖";
            translations.km.btn_send_tg = "ផ្ញើទៅកាន់ Telegram ភ្លាមៗ";
            translations.km.card_map_title = "🗺️ ផែនទីមកកាន់ហាង";

            translations.en.contact_title = "📞 Contact Us";
            translations.en.contact_subtitle = "You are welcome to visit our shop, call us, or send us an instant online message anytime.";
            translations.en.card_info_title = "Khun Davy Motor Shop";
            translations.en.lbl_address = "📍 Shop Location:";
            translations.en.val_address = "Boeung Thom Khang Lech Village, Ang Sorophi Commune, Kampong Trach District, Kampot Province";
            translations.en.lbl_phone = "📞 Phone Numbers:";
            translations.en.lbl_hours = "⏰ Working Hours:";
            translations.en.val_hours = "Every day (7:30 AM - 6:00 PM)";
            translations.en.btn_tg_chat = "Chat on Telegram";
            translations.en.card_form_title = "💬 Quick Inquiry Message";
            translations.en.form_msg = "Enter your message here:";
            translations.en.btn_send_tg = "Send to Telegram Instantly";
            translations.en.card_map_title = "🗺️ Store Location Map";
            
            // Re-run language parsing engines 
            const currentLang = localStorage.getItem("selectedLang") || "km";
            if(typeof setLanguage === 'function') setLanguage(currentLang);
        }
    });

    // Setup message redirection to Telegram
    document.getElementById("sendTgBtn").addEventListener("click", () => {
        const textMessage = document.getElementById("quickMessage").value;
        if(textMessage.trim() !== "") {
            const formattedUrl = "https://t.me/phannaoun?text=" + encodeURIComponent(textMessage);
            window.open(formattedUrl, '_blank');
        } else {
            alert("សូមបញ្ចូលសារខ្លះៗមុននឹងចុចផ្ញើ! / Please enter a message before sending!");
        }
    });