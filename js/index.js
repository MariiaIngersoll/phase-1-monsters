document.addEventListener("DOMContentLoaded", () => {
    fetchMonster()
    createForm()
    document.querySelector("#monster-form"),addEventListener("submit", (event) => {
        event.preventDefault()
        let name = document.querySelector("monster-name")
        let age = document.querySelector("monster-age")
        let description = document.querySelector("description-age")

        monsterObj = {
            name,
            age,
            description
        }
        console.log(monsterObj)

        postNewMonster(monster)
    })})

    

const createForm = () => {
    let formContainer = document.querySelector("#create-monster")
    let form = document.createElement("form")
    form.id = "monster-form"
    let nameInput = document.createElement('input')
    let nameLabel = document.createElement("label")
    let ageInput = document.createElement("input")
    let ageLabel = document.createElement("label")
    let descriptioninput = document.createElement("input")
    let ddescriptionLabel = document.createElement("label")
    let h2 = document.createElement("h2")
    h2.innerHTML = 'Create Monster'
    let button = document.createElement("button")
    button.innerText = "Make monster"
    nameInput.id = "monster-name"
    ageInput.id = "monster-age"
    descriptioninput.id = "description-age"


    nameLabel.innerText = 'name'
    ageLabel.innerText = 'age'
    ddescriptionLabel.innerText = 'description'

    form.append(nameLabel, nameInput, ddescriptionLabel, descriptioninput, ageLabel, ageInput, button)
    formContainer.append(h2, form)
}

const fetchMonster = () => {
    let monsterContainer = document.querySelector("#monster-container")

    fetch(" http://localhost:3000/monsters/?_limit=100&_page=1")
        .then(res => res.json())
        .then(monsterDara => {
            monsterDara.forEach(monster => {
                let card = document.createElement("div")
                let name = document.createElement("h2")
                let age = document.createElement('h4')
                let description = document.createElement("p")
                name.innerText = monster.name
                age.innerText = `Age ${monster.age}`
                description.innerText = `Bio ${monster.description}`

                card.append(name, age, description)
                monsterContainer.append(card)
            })
        })
}

const postNewMonster = (monster) => {
    fetch('http://localhost:3000/monsters', {
        headers:
        {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
            body: {name, age, description }
    })
        .then(resp => resp.json())
        .then(monster => console.log(monster))
}