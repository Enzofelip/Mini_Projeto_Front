
const Form = document.getElementById("form");
const nome = document.getElementById("name");
const age = document.getElementById("age");
const city = document.getElementById("city");
const openNav = document.getElementById("botaoOpen")
const myNav = document.getElementById("myNav")

openNav.addEventListener('click', () => {
   myNav.style.width = "100%"
})

myNav.addEventListener('click', () => {
    myNav.style.width = "0"
})



//URL da API
// const url = "https://localhost:3001/"
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
        const response = await fetch("http://localhost:3001/register", {
            
            method: "POST",
            body: informacoes,
            headers:{
                "Content-type": "application/json",
            },
        });
    
        await response.json()

        window.location.href = "../GetCadastros/cadastros.html"
    }
}

Form.addEventListener("submit", async(e) => {
    e.preventDefault();

    const nameValue = nome.value;
    const ageValue = age.value;
    const cityValue = city.value
    if(nameValue && ageValue && cityValue){
        const usuario = new usuarios(nameValue, ageValue, cityValue)
        usuario.cadastrar()
    }
})