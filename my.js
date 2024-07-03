let input = document.querySelector(".input");
let button = document.querySelector(".button");
let wraper = document.querySelector(".wrapr");
let del = document.querySelector(".del");

function create(value, id) {
  return `
    <div class="item">
                <div class="left">
                    <p>${value}</p>
                </div>
                <div class="right">
                    <button>
                        <i class="fa-regular fa-pen-to-square"></i>
                        <span>edit</span>
                    </button>
                    <button data-id="${id}"  class="delete-item">
                        <i class="fa-solid fa-trash-can"></i>
                        <span class="del">dal</span>
                    </button>
                </div>
    </div>
    `;
}
button &&
  button.addEventListener("click", function (event) {
    event.preventDefault();
    let todo = input.value;
    input.value = "";
    if (todo.length < 6) {
      alert("eng kamida 7ta soz yozing");
      input.focus();
      input.style.outlineColor = "red";
      return;
    }
    let item = create(todo);
    wraper.innerHTML += item;
  });
function saveitem(value) {
  const todo = {
    name: value,
    status: "bajarilmagan",
    id: Date.now(),
  };
  let data = [];
  if (localStorage.getItem("todos")) {
    data = JSON.parse(localStorage.getItem("todos"));
  }
  data.push(todo);
  localStorage.setItem("todos", JSON.stringify(data));

  let item = createitem(input.value, todo.id);
  wraper.innerHTML += item;
}
// del.addEventListener('click',function() {
//     let ite =document.querySelector('.item').style.display = "none";
// })
document.addEventListener("DOMContentLoaded", function () {
  let data = [];
  if (localStorage.getItem("todos")) {
    data = JSON.parse(localStorage.getItem("todos"));
  }
  if (data.length > 0) {
    data.forEach(function (value) {
      let item = create(value.name, value.id);
      wraper.innerHTML += item;
    });
  }
  let deletebuton = document.querySelectorAll(".delete-item");
  deletebuton.length > 0 && deletebuton.forEach(function(element){
  element.addEventListener("click", function (element) {
      element.addEventListener("klick", function (event) {
        event.preventDefault();
        let id = this.getAttribute("data-id");

        if (isdelit && id) {
          let copied = JSON.parse(JSON.stringify(users));
          copied = copied.filter(function (el) {
            return el.id != id;
          });
          localStorage.setItem("todos", JSON.stringify(copied));
          window.location.reload();
        }
      });
    });
})
})
