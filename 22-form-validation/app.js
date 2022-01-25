// Regex Validation Function
function showFormFieldValidity(fieldName, regex) {
    const field = document.getElementById(fieldName);
    if(!regex.test(field.value)) {
        return field.classList.add('is-invalid');
    }
    return field.classList.remove('is-invalid');
}


// Form Fields Event Listeners with Regexps for Validation
document
    .getElementById('name')
    .addEventListener('blur', () =>
        showFormFieldValidity('name', /^[a-zA-Z]{2,10}$/)
    );
document
    .getElementById('zip')
    .addEventListener('blur', () =>
        showFormFieldValidity('zip', /^[0-9]{5}(-[0-9]{4})?$/)
    );
document
    .getElementById('email')
    .addEventListener('blur', () =>
        showFormFieldValidity('email', /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)
    );
document
    .getElementById('phone')
    .addEventListener('blur', () =>
        showFormFieldValidity('phone', /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/)
    );
