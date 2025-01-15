/* Open & Close Side-Menu */

const buttonElement = document.querySelector('.menuToggle');

buttonElement.addEventListener('click', function () {
    let menu = document.getElementById("menu");
    let expanded = this.getAttribute('aria-expanded') === 'true';

    this.setAttribute('aria-expanded', !expanded);
    menu.style.width = expanded ? "0" : window.innerWidth < 820 ? "60%" : "30%";
    menu.style.border = expanded ? "none" : "1px solid #4831d4";
});

function closeMenu() {
    let menu = document.getElementById("menu");
    let button = document.querySelector('.menuToggle');

    menu.style.width = "0";
    menu.style.border = "none";
    button.setAttribute('aria-expanded', false);
}

/* Submit Contact Form */

const form = document.querySelector('.contact-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json',
        },
    }).then(response => {
        if (response.ok) {
            alert('Ευχαριστούμε για το μήνυμά σας! Θα επικοινωνήσουμε μαζί σας σύντομα!');
            form.reset();
        } else {
            alert('Ουπς! Υπήρξε πρόβλημα κατά την υποβολή της φόρμας σας.');
        }
    }).catch(() => {
        alert('Ουπς! Υπήρξε πρόβλημα κατά την υποβολή της φόρμας σας.');
    });
});
