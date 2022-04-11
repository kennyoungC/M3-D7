`use strict`;
const tbody = document.querySelector(`tbody`);
const getUsers = async () => {
  const usersData = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await usersData.json();
  tbody.innerHTML = ``;
  response.forEach((element) => {
    tbody.innerHTML += users(element);
  });
};

const filterUserEmail = async () => {
  try {
    const query = document.querySelector(`input`).value;
    const usersData = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await usersData.json();
    const tbody = document.querySelector(`tbody`);
    tbody.innerHTML = ``;
    response
      .filter((elem) => elem.email.toLowerCase().includes(query.toLowerCase()))
      .forEach((element) => {
        tbody.innerHTML += users(element);
      });
  } catch (err) {
    console.error(err);
  }
};
const filterUserName = async () => {
  try {
    const query = document.querySelector(`input`).value;
    const usersData = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await usersData.json();
    tbody.innerHTML = ``;
    response
      .filter((elem) =>
        elem.username.toLowerCase().includes(query.toLowerCase())
      )
      .forEach((element) => {
        tbody.innerHTML += users(element);
      });
  } catch (err) {
    console.error(err.message);
  }
};
const filterName = async () => {
  try {
    const query = document.querySelector(`input`).value;
    const usersData = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await usersData.json();
    const tbody = document.querySelector(`tbody`);
    tbody.innerHTML = ``;
    response
      .filter((elem) => elem.name.toLowerCase().includes(query.toLowerCase()))
      .forEach((element) => {
        tbody.innerHTML += users(element);
      });
  } catch (err) {
    console.error(err);
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
const users = (data) => ` <tr>
<th scope="row">${data.id}</th>
<td>${data.name}</td>
<td>${data.username}</td>
<td>${data.email}</td>
<td>${data.phone.slice(0, 13)}</td>
<td>${data.website}</td>
</tr>`;
window.onload = () => {
  getUsers();
  // displayAllNames();
};
