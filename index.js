`use strict`;

const getUsers = async () => {
  const usersData = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await usersData.json();
  const tbody = document.querySelector(`tbody`);
  tbody.innerHTML = ``;
  response.forEach((element) => {
    tbody.innerHTML += users(element);
  });
};
const filterUserEmail = async () => {
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
};
const filterUserName = async () => {
  const query = document.querySelector(`input`).value;
  const usersData = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await usersData.json();
  const tbody = document.querySelector(`tbody`);
  tbody.innerHTML = ``;
  response
    .filter((elem) => elem.username.toLowerCase().includes(query.toLowerCase()))
    .forEach((element) => {
      tbody.innerHTML += users(element);
    });
};
const filterName = async () => {
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
};
