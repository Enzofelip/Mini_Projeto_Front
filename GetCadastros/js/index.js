const getCadastros = document.getElementById("pos-Cadasrtos");
const loading = document.getElementById("loading");

const urlSearcParams = new URLSearchParams(window.location.search);
const postId = urlSearcParams.get("id")

const postEdit = document.querySelector("main")
const InputName = document.getElementById("name");
const InputAge = document.getElementById("age");
const InputCity = document.getElementById("city");
const form = document.getElementById("form");

const openNav = document.getElementById("botaoOpen")
const myNav = document.getElementById("myNav")

openNav.addEventListener('click', () => {
   myNav.style.width = "100%"
})

myNav.addEventListener('click', () => {
    myNav.style.width = "0"
})




async function getDados(){
    const response = await fetch("http://localhost:3001/cadastros")

        console.log(response)

        const data = await response.json();

        console.log(data);
        

        loading.classList.add("hiden")

        data.map((post) => {
            const div = document.createElement("div");
            const title = document.createElement("h2");
            const idade = document.createElement("p");
            const cidade = document.createElement("h3");
            const botao = document.createElement("button");
            const btnEdit = document.createElement("a")
           
            botao.innerText = "Deletar";
            btnEdit.innerText = "Editar";
            title.innerText = post.name;
            idade.innerText = post.age;
            cidade.innerText = post.city
            const idDados = JSON.stringify(post.id)

           
            botao.addEventListener('click', async() => {
                console.log("Certo");
                console.log(post.id)
                await fetch(`http://localhost:3001/${idDados}`, {
                    method: "DELETE",
                    headers: {
                        'Content-type': 'application/json'
                    },
                }).then(response => console.log(response))
            })
             
           
            btnEdit.setAttribute("href", `./edit.html?id=${post.id}`)
                
            div.appendChild(title);
            div.appendChild(idade);
            div.appendChild(cidade);
            div.appendChild(botao);
            div.appendChild(btnEdit)
          
            getCadastros.appendChild(div);
        })
}


if(!postId){
    getDados()
}else{
    console.log(postId);

    
class usuarios {
    constructor(name, age, city){
        this.name = name,
        this.age = age,
        this.city = city
    }

    async cadastrar(){

        const  name = this.name;
        const  age = this.age;
        const  city = this.city

        let informacoes = {
            name: name,
            age: age,
            city: city
        }

        informacoes = JSON.stringify(informacoes);
        console.log(informacoes)
       await fetch(`http://localhost:3001/${postId}`, {
            
            method: "PATCH",
            body: informacoes,
            headers:{
                "Content-type": "application/json",
            },
        }).then(response => console.log(response))

        window.location.href = "./cadastros.html"
    }
}

    form.addEventListener('submit', async(e) => {
        e.preventDefault();

        const nameValue = InputName.value;
        const ageValue = InputAge.value;
        const cityValue = InputCity.value

        if(nameValue && ageValue && cityValue){
            const usuario = new usuarios(nameValue, ageValue, cityValue)
            usuario.cadastrar()
        }
    })
}

