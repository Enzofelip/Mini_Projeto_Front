// const form = document.getElementById("form");
// const nome = document.getElementById("name");
// const age = document.getElementById("age");
// const city = document.getElementById("city");



// const PegandoDados = async() => {
    
//     // const user = new EditCadastro(idDados);
//     // user.Editar()

// }

// PegandoDados()



// class EditCadastro {
//     constructor(name, age, city){
//         this.name = name,
//         this.age = age,
//         this.city = city,
//         this.data = data
//     }
 

//     async Editar(){
//         const name = this.name;
//         const age = this.age;
//         const city = this.city


//         let dadosEdit = {
//             name,
//             age,
//             city
//         }

//         dadosEdit = JSON.stringify(dadosEdit);

//         const response = await fetch(`http://localhost:3001/${dadosId}`, {
//             method: "PATCH",
//             body: dadosEdit,
//             headers: {
//                 'Content-type': 'application/json'
//             },
//         })

//         await response.json()
//     }
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const nameValue = nome.value;
//     const ageValue = age.value;
//     const cityValue = city.value;

//     if(nameValue && ageValue && cityValue){
//         const usuario = new EditCadastro(nameValue, ageValue, cityValue)
//         usuario.Editar()
//     }

// })