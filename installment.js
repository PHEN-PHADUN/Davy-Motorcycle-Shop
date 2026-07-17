/*!--page Installment JavaScript Core Control Engines logic calculations --*/

    // Elements Mapping Hooks
    const bikePriceSlider = document.getElementById('bike-price');
    const downPaymentSlider = document.getElementById('down-payment');
    const loanTermSlider = document.getElementById('loan-term');

    const bikePriceVal = document.getElementById('bike-price-val');
    const downPaymentVal = document.getElementById('down-payment-val');
    const loanTermVal = document.getElementById('loan-term-val');
    const monthlyPaymentDisplay = document.getElementById('monthly-payment');

    // Constant Interest Variable Rate (1.2% per month)
    const MONTHLY_INTEREST_RATE = 0.012;

    // Mathematical Calculator Equation Engine logic
    function calculateLoan() {
        const totalCost = parseFloat(bikePriceSlider.value);
        const downPaymentPercent = parseFloat(downPaymentSlider.value);
        const monthsDuration = parseInt(loanTermSlider.value);

        // Update Slider Value labels text displays
        bikePriceVal.textContent = totalCost;
        downPaymentVal.textContent = downPaymentPercent;
        loanTermVal.textContent = monthsDuration;

        // Calculate Principal Financing Loan Amount Remainder
        const downPaymentAmount = totalCost * (downPaymentPercent / 100);
        const principalFinanced = totalCost - downPaymentAmount;

        // Simple interest standard calculation logic rule
        const totalInterestCost = principalFinanced * MONTHLY_INTEREST_RATE * monthsDuration;
        const totalRepayableSum = principalFinanced + totalInterestCost;
        const finalMonthlyInstallment = totalRepayableSum / monthsDuration;

        // Display results to user matching currency formatting pattern rules
        monthlyPaymentDisplay.textContent = "$" + finalMonthlyInstallment.toFixed(2);
    }

    // Attach Event Listeners to run updates on input configurations
    [bikePriceSlider, downPaymentSlider, loanTermSlider].forEach(slider => {
        slider.addEventListener('input', calculateLoan);
    });

    // Execute Initial Page Calculation
    calculateLoan();

    // Map Installment Context Translations Language Arrays directly inline to avoid link latency drops
    document.addEventListener("DOMContentLoaded", () => {
        if(typeof translations !== 'undefined') {
            translations.km.ins_title = "💰 សេវាកម្មបង់រំលស់រហ័សទាន់ចិត្ត";
            translations.km.ins_subtitle = "ឯកសារងាយៗ អនុម័តរហ័សក្នុងកំឡុងពេល ២៤ ម៉ោង ជាមួយដៃគូធនាគារជាច្រើន";
            translations.km.card_req_title = "📋 ឯកសារតម្រូវសម្រាប់អ្នកធ្វើការ និងអាជីវករ";
            translations.km.doc_id = "🆔 អត្តសញ្ញាណប័ណ្ណសញ្ជាតិខ្មែរ (ច្បាប់ដើម)";
            translations.km.doc_book = "🏠 សៀវភៅស្នាក់នៅ ឬសៀវភៅគ្រួសារ";
            translations.km.doc_salary = "💵 លិខិតបញ្ជាក់ប្រាក់ខែ ឬចុងសន្លឹកបើកប្រាក់ខែចុងក្រោយ (សម្រាប់អ្នកធ្វើការ)";
            translations.km.doc_biz = "📈 ប័ណ្ណប៉ាតង់ ឬកិច្ចសន្យាជួលតូប/ទីតាំង (សម្រាប់អាជីវករ)";
            translations.km.note_lbl = "💡 សម្គាល់៖";
            translations.km.note_txt = "មិនទាមទារប្រាក់កក់មុនក៏បាន (បង់រំលស់សុទ្ធ ១០០%) និងមានរយៈពេលបង់រំលស់រហូតដល់ ៣៦ ខែ។";
            translations.km.card_calc_title = "📊 ម៉ាស៊ីនគិតលេខរំលស់សាកល្បង";
            translations.km.slider_price = "💵 តម្លៃម៉ូតូសរុប (USD):";
            translations.km.slider_down = "📉 ប្រាក់កក់មុន (%):";
            translations.km.slider_term = "📅 រយៈពេលបង់រំលស់:";
            translations.km.lbl_months = "ខែ";
            translations.km.calc_est_payment = "ប្រាក់ត្រូវបង់ប្រចាំខែ (ប៉ាន់ស្មាន)*";
            translations.km.calc_notice = "*គិតក្នុងអត្រាការប្រាក់គំរូ 1.2% ក្នុងមួយខែ";

            translations.en.ins_title = "💰 Fast & Flexible Installment Services";
            translations.en.ins_subtitle = "Simple paperwork with quick approval guaranteed within 24 hours via multiple top bank partners.";
            translations.en.card_req_title = "📋 Required Documents for Employees & Merchants";
            translations.en.doc_id = "🆔 Cambodian National ID Card (Original Copy)";
            translations.en.doc_book = "🏠 Residence Book or Family Book Record";
            translations.en.doc_salary = "💵 Salary Confirmation Letter or Latest Payslip (For Employees)";
            translations.en.doc_biz = "📈 Business Patent License or Stall/Location Rental Agreement (For Merchants)";
            translations.en.note_lbl = "💡 Note:";
            translations.en.note_txt = "0% Down payment options available (100% full loan coverage) with installment tenure ranging up to 36 months.";
            translations.en.card_calc_title = "📊 Trial Installment Calculator Loan";
            translations.en.slider_price = "💵 Total Bike Value (USD):";
            translations.en.slider_down = "📉 Down Payment Rate (%):";
            translations.en.slider_term = "📅 Installment Tenure Period:";
            translations.en.lbl_months = "Months";
            translations.en.calc_est_payment = "Estimated Monthly Payment*";
            translations.en.calc_notice = "*Calculated using an illustrative sample monthly interest rate of 1.2%";

            // Automatically check and swap strings based on system cache context
            const initialLangSetting = localStorage.getItem("selectedLang") || "km";
            if(typeof setLanguage === 'function') setLanguage(initialLangSetting);
        }
    });



   


    

