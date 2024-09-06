const form = document.querySelector('.form')



form.addEventListener('submit', e => {

    e.preventDefault();
    const formData = new FormData(form);
    const getName = formData.get('nombre');
    fetchData(getName)
    form.reset();
})


const fetchData = (name) => {


    fetch(`https://api.github.com/users/${name}`)

        .then(res => {

            if (!res.ok) {

                throw new Error("Not Found");

            }

            return res.json()
        })

        .then(data => {

            const { id } = data;
            const { login } = data;
            const { followers } = data;
            const { avatar_url } = data;
            const {public_repos} = data;
            addELements(id, login, followers, avatar_url, public_repos)

            console.log(data);
            

        })

        .catch(err => console.log(err))

}


const addELements = (id, login, followers, avatar_url, public_repos ) => {

    const body = document.querySelector('body')
    const info = document.createElement('DIV');
    const infoContent = document.createElement('DIV');
    const img = document.createElement('IMG');
    const p = document.createElement('P');
    const ul = document.createElement('UL');
    const idUser = document.createElement('LI');
    const followersUser = document.createElement('LI');
    const repositoriesUser = document.createElement('LI');



    info.classList.add('info');
    infoContent.classList.add('info-content');
    img.src = avatar_url;
    p.innerText = login;
    idUser.innerText = `ID: ${id}`;
    followersUser.innerText = `Seguidores: ${followers}`;
    repositoriesUser.innerText = `Repositorios públicos: ${public_repos}`;

    body.appendChild(info);
    info.appendChild(infoContent);
    infoContent.appendChild(img);
    infoContent.appendChild(p);
    info.appendChild(ul);
    ul.appendChild(idUser);
    ul.appendChild(followersUser);
    ul.appendChild(repositoriesUser);

    // setTimeout(() => {
        
    //     info.remove(infoContent);
    //     infoContent.remove(img);
    //     infoContent.remove(p);
    //     infoContent.remove(ul);
    //     ul.remove(idUser);
    //     ul.remove(followersUser);
    //     ul.remove(repositoriesUser);

    // }, 5000);
}