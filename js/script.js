function searchPok(){

//first request
    var xhr1 = new XMLHttpRequest();
    //var xhr2 = new XMLHttpRequest();

    var idSearch = document.getElementById("search").value;
    xhr1.open("GET", "https://pokeapi.co/api/v2/pokemon/" + idSearch, true);
    //xhr2.open('GET', 'https://pokeapi.co/api/v2/pokemon-species/'+ idSearch , true);

    console.log(xhr1);
    xhr1.onload = function() {
        if(xhr1.status == 200){
            var pok = JSON.parse(xhr1.responseText);
            console.log (pok);
            document.getElementById("id").innerHTML = pok.id;
            document.getElementById("name").innerHTML = pok.name;
                if (pok.moves[1]== null) {
                   document.getElementById("moves").innerHTML = pok.moves[0].move.name;
                } else {
                document.getElementById("moves").innerHTML = pok.moves[0].move.name + " || " + pok.moves[1].move.name + " || "
                + pok.moves[2].move.name + " || " + pok.moves[3].move.name;
                }
            document.getElementById("sprite").src = pok.sprites.front_default;
        }
    }
    xhr1.onerror = function(){
        alert("Er is iets mis gelopen bij de HttpRequest , probeer het opnieuw aub!");
    }
    xhr1.send();

//second request
    var xhr2 = new XMLHttpRequest();
    var idSearch = document.getElementById("search").value;
    xhr2.open('GET', 'https://pokeapi.co/api/v2/pokemon-species/'+ idSearch, true);


    console.log(xhr2);
    xhr2.onload = function() {
        if(xhr2.status == 200){
            var pok_evol = JSON.parse(xhr2.responseText);
            document.getElementById('prev_evol').innerHTML = pok_evol.id;

                if (pok_evol.evolves_from_species!=null){
                    console.log(pok_evol.evolves_from_species.name)
                    document.getElementById('prev_evol').innerHTML = pok_evol.evolves_from_species.name;
                    }
                else {
                document.getElementById('prev_evol').innerHTML="This pokémon does not have a pre-evolution!";
                }
        }
    }
    xhr2.onerror = function(){
        alert("Er is iets mis gelopen bij de HttpRequest , probeer het opnieuw aub!");
    }
    xhr2.send();

//dit stuk zit ik mee in de knoei!!
//third request - image of previous evolution
    /*var xhr3 = new XMLHttpRequest();
    //var idSearch = document.getElementById("search").value;
    var pokemonPre = JSON.parse(xhr3.responseText);
    xhr3.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + pokemonPre.evolves_from_species.name, true);

    xhr3.onload = function() {
        if(xhr3.status == 200){
            var pok_evol_img = JSON.parse(xhr3.responseText);
            document.getElementById('prev_evol').innerHTML = pok_evol_img.id;
            document.getElementById('prev_evol_img').src = pok_evol_img.sprites.front_default;
        }
    }
    xhr3.onerror = function(){
        alert("Er is iets mis gelopen bij de HttpRequest , probeer het opnieuw aub!");
    }
    xhr3.send();*/
}; //close function searchPok
