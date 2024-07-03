let input=document.querySelector('.input')
let button=document.querySelector('.button')
let wraper=document.querySelector('.wrapr')
let del=document.querySelector('.del')

function create(value) {
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
                    <button>
                        <i class="fa-solid fa-trash-can"></i>
                        <span class="del">dal</span>
                    </button>
                </div>
    </div>
    `
}
button&&button.addEventListener('click',function(event) {
    event.preventDefault()
    let todo=input.value
    input.value=''
    if (todo.length<6) {
        alert('eng kamida 7ta soz yozing')
        input.focus()
        input.style.outlineColor="red"
        return;
    }
    let item=create(todo)
    wraper.innerHTML+=item
})
del.addEventListener('click',function() {
    let ite=document.querySelector('.item').style.display = "none";
})
