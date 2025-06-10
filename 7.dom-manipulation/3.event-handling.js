// 1. click event 
const button = document.getElementById('myButton');  // addEventListener():- Binds an event to an element
button.addEventListener('click', () => {
    alert('Button Click');
});

// 2. Mouse events
button.addEventListener('mouseover', () => {
    console.log('Mouse hovered over the Button');
});

// 3. Keyboard events
const input = document.getElementById('name');
input.addEventListener('keydown', (event) => {
    console.log(`Key pressed: ${event.key}`);
});


// 4. form event HTML
const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log("Form submited", event);

    const formData = new FormData(form);
    console.log('Name: ', formData.get('username'));

    // Iterate through the form data
    for(const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }
});