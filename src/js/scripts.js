import { Octokit } from "octokit";

const octokit = new Octokit({ 
    auth: 'YOUR-TOKEN'
  });
  

const form = document.querySelector('.form')



form.addEventListener('submit', e => {

    e.preventDefault();
    const formData = new formData(form);
    console.log(formData.get('nombre'));

})

