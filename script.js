// document.getElementById('leadForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     let name = document.getElementById('name').value.trim();
//     let email = document.getElementById('email').value.trim();
//     let phone = document.getElementById('phone').value.trim();
//     let country = document.getElementById('country').value;

//     if (!name || !email || !phone || !country) {
//         alert('Please fill in all fields.');
//         return;
//     }

//     alert('Form submitted successfully!');
// });
document.getElementById('leadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch('form-handler.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => console.error('Error:', error));
});
