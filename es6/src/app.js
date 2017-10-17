/*
    Les type de variables
    let = var
    cont = constante (variable non modifiable)
*/
    let userName = `Julien`
    const birthYear = 1979
    const actualYear = 2017
// 

/*
Concaténation et multiligne
*/
    let title = document.querySelector('h1')

    title.innerHTML = `
        Bonjour ${userName}
        <br>
        <em>Vous avez ${actualYear - birthYear}</em>
    `
// 

/*
Les fonction fléchées
*/
    const twice = (attr = 5) => attr * 2
    console.log( twice() )
// 

/*
REST parameter
*/
    let hobbies = (userName, ...hobbies) => {
        console.log(userName)

        for(let item of hobbies){
            console.log(item)
        }
    }

    hobbies(`Julien`, `CSS`, `JavaScript`, 34, true)
    hobbies(`Pierre`, `Cuisine`)
//

/*
SPREAD operator
*/
    let firstArray = [`Julien`, 54, true, birthYear]
    let secondArray = [`Toto`, ...firstArray]
    console.log(secondArray)
//