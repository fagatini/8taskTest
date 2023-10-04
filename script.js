var cardsElem = document.getElementById("cards");
var page = 1,
  elemNum = 6,
  total_pages = 0;

function next() {
  if (page <= total_pages) {
    page++;
    getUsers();
    checkButtons();
  }
}

function prev() {
  if (page > 1) {
    page--;
    getUsers();
    checkButtons();
  }
}

function setFirst() {
  page = 1;
  getUsers();
  checkButtons();
}

function setLast() {
  page = total_pages;
  getUsers();
  checkButtons();
}

function checkButtons() {
  document.getElementById("next").disabled = !(page < total_pages);
  document.getElementById("last").disabled = !(page < total_pages);
  document.getElementById("prev").disabled = !(page > 1);
  document.getElementById("first").disabled = !(page > 1);
}

function createCustomElement(user) {
  var tag = document.createElement("div");
  var fioAndEmail = document.createElement("div");
  var fio = document.createElement("div");
  fio.innerHTML = user.first_name + " " + user.last_name;
  var email = document.createElement("div");
  email.innerHTML = user.email;
  var image = document.createElement("img");
  image.src = user.avatar;
  fioAndEmail.appendChild(fio);
  fioAndEmail.appendChild(email);
  tag.appendChild(image);
  tag.appendChild(fioAndEmail);
  tag.style.border = "1px solid black";
  tag.style.display = "flex";
  tag.style.gap = "10px";
  tag.style.margin = "10px";
  tag.style.width = "500px";
  return tag;
}

async function getUsers() {
  const response = await fetch(`https://reqres.in/api/users?page=${page}&`);
  const users = await response.json();
  //console.log(users.data.sort((a,b)=>a.first_name>b.first_name?1:-1));
  //уже отсортирована, уже отпаганирована, собственно такие вещи делают беки
  //невозможно сделать это одновременно, пока нет всех данных смысл сортировать
  while (cardsElem.firstChild) {
    cardsElem.removeChild(cardsElem.lastChild);
  }
  total_pages = users.total_pages;
  users.data.forEach((user) => {
    var customElement = createCustomElement(user);
    cardsElem.appendChild(customElement);
  });
  checkButtons();
}

getUsers();
