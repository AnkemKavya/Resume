// Function to prompt browser print/save-to-PDF layout
function printResume() {
    window.print();
}

// Fixed missing '@' in your email string if you need to manipulate or validate elements dynamically later
document.addEventListener("DOMContentLoaded", () => {
    const emailLink = document.querySelector('a[href^="mailto:"]');
    if (emailLink && emailLink.getAttribute('href') === 'mailto:ankemkavyaa03gmail.com') {
        emailLink.setAttribute('href', 'mailto:ankemkavyaa03@gmail.com');
    }
});