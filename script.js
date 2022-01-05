fetch("https://pokeapi.co/api/v2/pokemon")
    .then((resultes) => resultes.json())
    .then((pokemon) => {
        console.log(pokemon);
        pokemon.results.forEach(species => {
            document.querySelector("#pokeList").innerHTML += `
                <button class="btn btn-danger" onclick="getPokemon('${species.url}')">${species.name}</button>
            `
        });
    });

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
        data.stats.forEach(element => {
            document.getElementById("output").innerHTML += `
                <div class="text-center">
                    <p>${element.stat.name}: ${element.base_stat}</p>
                </div>
            `
        });
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
        data.stats.forEach(element => {
            document.getElementById("output").innerHTML += `
                <div class="text-center">
                    <p>${element.stat.name}: ${element.base_stat}</p>
                </div>
            `
        });
    });
    