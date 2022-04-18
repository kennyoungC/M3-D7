`use strict`;
const tbody = document.querySelector(`tbody`);
const getUsers = async () => {
  try {
    const usersData = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await usersData.json();
    tbody.innerHTML = ``;
    response.forEach((element) => {
      tbody.innerHTML += users(element);
    });
    const sortBtn = document.querySelector(`.sort-btn`);
    sortBtn.addEventListener(`click`, (e) => {
      const sorted = response.sort((a, b) =>
        a.name.toLowerCase() > b.name.toLowerCase()
          ? 1
          : a.name.toLowerCase() < b.name.toLowerCase()
          ? -1
          : 0
      );
      tbody.innerHTML = ``;
      if (e.target.innerText === "ASC") {
        e.target.textContent = `DESC`;
        sorted.forEach((element) => {
          tbody.innerHTML += users(element);
        });
      } else {
        e.target.innerText = "ASC";
        sorted.reverse().forEach((el) => {
          tbody.innerHTML += users(el);
        });
      }
    });
    const ul = document.querySelector(`.address-list`);
    ul.innerHTML = ``;
    const addressFormat = response.map((el) => el.address);
    addressFormat.forEach((address) => {
      ul.innerHTML += `<li>${Object.values(address).filter(
        (el) => typeof el !== `object`
      )}</li>`;
    });
  } catch (err) {
    console.log(err);
  }
};

const displayAllNames = async () => {
  try {
    const ol = document.querySelector(`ol`);
    if (ol.children.length > 0) return;
    const usersData = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await usersData.json();
    const names = response.map((el) => el.name);
    names.forEach((name) => {
      ol.innerHTML += `<li>${name}</li>`;
    });
  } catch (err) {
    console.error(err);
  }
};

const users = (data) => `<tr> 
<th scope="row">${data.id}</th>

<td><a href="details.html?id=${data.id}">${data.name}</a></td>
<td>${data.username}</td>
<td>${data.email}</td>
<td>${data.phone.slice(0, 13)}</td>
<td>${data.website}</td>

</tr>`;
window.onload = () => {
  getUsers();
};
const dropDown = document.querySelector(".dropdown");
dropDown.addEventListener("click", async (e) => {
  if (e.target.classList.contains("dropdown-item")) {
    const searchQuery = document.querySelector(`input`).value;
    const query = e.target.innerText.toLowerCase();
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await response.json();
    const tbody = document.querySelector(`tbody`);
    tbody.innerHTML = ``;
    usersData
      .filter((elem) => elem[query].includes(searchQuery.toLowerCase()))
      .forEach((element) => {
        tbody.innerHTML += users(element);
      });
  }
});
