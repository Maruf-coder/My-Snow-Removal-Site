document.addEventListener('DOMContentLoaded', function () {
    // Form event listeners
    var helpForm = document.getElementById('helpForm');

    if (helpForm) helpForm.addEventListener('submit', submitAssistanceForm);

    // Additional function to open the quote form modal
    var quoteButton = document.getElementById('quoteButton');
    if (quoteButton) {
        quoteButton.addEventListener('click', openQuoteModel);
    }
});

function openQuoteModel() {
    // Redirect to assistance_form.html when the "Get a Quote" button is clicked
    window.location.href = 'assistance_form.html';
}


function toggleAssistanceForm() {
    var form = document.getElementById('helpForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function submitAssistanceForm(event) {
    event.preventDefault();
    // Basic assistance form submission logic
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var request = document.getElementById('request').value;
    alert('Assistance form submitted successfully!');
}

function goToHome() {
    window.location.href = 'index.html';
}

function goToServices() {
    window.location.href = 'services.html';
}

function goToContact() {
    window.location.href = 'contact.html';
}

function goToAbout() {
    window.location.href = 'about.html';
}
