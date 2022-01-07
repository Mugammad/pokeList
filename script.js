let pokelist = "https://pokeapi.co/api/v2/pokemon";

getPokeList(pokelist)

function getPokeList(link){
    fetch(link)
    .then((resultes) => resultes.json())
    .then((pokemon) => {
        console.log(pokemon);
        document.querySelector("#pokeList").innerHTML = ""
        pokemon.results.forEach(species => {
            document.querySelector("#pokeList").innerHTML += `
                <button class="btn btn-danger" onclick="getPokemon('${species.url}')">${species.name}</button>
            `
        });
        document.querySelector("#pokeList").innerHTML += `
            <button class="btn btn-danger" onclick="getPokeList('${pokemon.previous}')">PREVIOUS</button>
            <button class="btn btn-danger" onclick="getPokeList('${pokemon.next}')">NEXT</button>
        `
        
    });
}


function getPokemon(url){
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById("output").innerHTML = `
            <div class="col-12">
                <img src="${data.sprites.front_default}" alt="pokemon">
                <h2>${data.name}</h2>
            </div>
            <div class="col-6">
                <p><b>Type:</b> ${data.types[0].type.name}</p>
                <p><b>Ability:</b> ${data.abilities[0].ability.name}</p>
            </div>
            <div class="col-6">
                <p><b>Weight:</b> ${data.weight}</p>
                <p><b>Height:</b> ${data.height}</p> 
            </div>
            <div class="col-12">
                <h4>Stats:</h4>
            </div>
            
        `
        document.getElementById("stats").innerHTML = ''
        data.stats.forEach(element => {
            document.getElementById("stats").innerHTML += `
                <div class="text-center col-6">
                    <p><b>${element.stat.name}:</b> ${element.base_stat}</p>
                </div>
            `
        });
    }).catch(error => {
        console.log(error)
        alert("no pokemon by that name")
    });
}

fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById("output").innerHTML = `
            <div class="col-12">
                <img src="${data.sprites.front_default}" alt="pokemon">
                <h2>${data.name}</h2>
            </div>
            <div class="col-6">
                <p><b>Type:</b> ${data.types[0].type.name}</p>
                <p><b>Ability:</b> ${data.abilities[0].ability.name}</p>
            </div>
            <div class="col-6">
                <p><b>Weight:</b> ${data.weight}</p>
                <p><b>Height:</b> ${data.height}</p> 
            </div>
            <div class="col-12">
                <h4>Stats:</h4>
            </div>
            
        `

        document.getElementById("stats").innerHTML = ''
        data.stats.forEach(element => {
            document.getElementById("stats").innerHTML += `
                <div class="text-center col-6">
                    <p><b>${element.stat.name}:</b> ${element.base_stat}</p>
                </div>
            `
        });
    });

function findPokemon(){
    const name = document.querySelector("#pokeFinder").value.toLowerCase()

    let url = `https://pokeapi.co/api/v2/pokemon/${ name }`

    try{
        if(name == '') throw "You didn't type anything";
        getPokemon(url)
    }catch(err){
        alert(err)
    }
    
}