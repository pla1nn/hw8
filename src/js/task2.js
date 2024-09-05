const form = document.getElementById('user-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const formData = {
        name: e.target.name.value,
        age: e.target.age.value,
    }

    const stringFormData = JSON.stringify(formData);

    try {
        const parsedFormData = JSON.parse(stringFormData);
        console.log('is valid', parsedFormData);
    } catch(error) {
        console.error('is invalif', error)
    }
}