const form = document.querySelector('.form')



form.addEventListener('submit', e => {

    e.preventDefault();
    const formData = new formData(form);
   console.log(formData.get('nombre'));
    
})

