// Shortcuts
const $ = document.querySelector.bind(document);
const e = document.createElement.bind(document);
const t = document.createTextNode.bind(document);

// UI elements
const card = $('#card');
const heading = $('#heading');
const form = $('#loan-form');
const amount = $('#amount');
const interest = $('#interest');
const years = $('#years');
const monthlyPayment = $('#monthly-payment');
const totalPayment = $('#total-payment');
const totalInterest = $('#total-interest');
const results = $('#results');
const loading = $('#loading');

// Functions
function clearError() {
    $('#error-div').remove();
}

function showError(error) {
    // Create Div
    const errorDiv = e('div');

    // Assign ID
    errorDiv.id = 'error-div';

    // Add Bootstrap classes
    errorDiv.classList.add('alert', 'alert-danger');

    // Add text
    errorDiv.appendChild(t(error));

    // Insert in DOM
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
}

// Event handlers
function handleSubmit(e) {
    e.preventDefault();

    loading.style.display = 'block';
    results.style.display = 'none';

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    // Check if number is finite
    if (isFinite(monthly)) {
        setTimeout(() => {
            const totalPaymentValue = monthly * calculatedPayments;
            monthlyPayment.value = monthly.toFixed(2);
            totalPayment.value = totalPaymentValue.toFixed(2);
            totalInterest.value = (totalPaymentValue - principal).toFixed(2);
            loading.style.display = 'none';
            results.style.display = 'block';
        }, 2000);
    } else {
        loading.style.display = 'none';
        results.style.display = 'none';
        showError('Please check your numbers');
    }
}

function setupEventListeners() {
    form.addEventListener('submit', handleSubmit);
}

setupEventListeners();
