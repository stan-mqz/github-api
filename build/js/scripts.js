const form = document.querySelector(".form");
const input = document.querySelector(".form__text");
const button = document.querySelector(".form__submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = input.value;
  fetchData(name);
  form.reset();
});


input.addEventListener('input', (e) => {
    if (e.target.value === '') {
        button.disabled = true
    } else {
        button.disabled = false
    }
})

const fetchData = (name) => {
  fetch(`https://api.github.com/users/${name}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Not Found");
      }

      return res.json();
    })

    .then((data) => {
      const { id, login, followers, avatar_url, public_repos } = data;
      addELements(id, login, followers, avatar_url, public_repos);
    })

    .catch((err) => {
      throw new Error(err);
    });
};

const addELements = (id, login, followers, avatar_url, public_repos) => {
  const body = document.querySelector("body");
  const info = document.createElement("DIV");
  const infoContent = document.createElement("DIV");
  const img = document.createElement("IMG");
  const p = document.createElement("P");
  const ul = document.createElement("UL");
  const idUser = document.createElement("LI");
  const followersUser = document.createElement("LI");
  const repositoriesUser = document.createElement("LI");

  info.classList.add("info");
  infoContent.classList.add("info__content");
  img.classList.add("info__img");
  p.classList.add("info__name");
  ul.classList.add("info__list");
  idUser.classList.add("info__list-item");
  followersUser.classList.add("info__list-item");
  repositoriesUser.classList.add("info__list-item");

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

};
