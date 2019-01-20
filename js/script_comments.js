
// prev EVOLUTION
// neem als vb Pikachu
//evolves_from_species
//name	"pichu"
//url	"https://pokeapi.co/api/v2/pokemon-species/172/"



function searchPok(){
// //Create the XHR Object
    var xhr1 = new XMLHttpRequest();
    console.log(xhr1);
    xhr1.onload = function() {
        if(xhr1.status == 200){
            var result = JSON.parse(xhr1.responseText);
            console.log (result);
            document.getElementById("id").innerHTML = result.id;
            document.getElementById("name").innerHTML = result.name;
                if (result.moves[1]== null) {
                   document.getElementById("moves").innerHTML = result.moves[0].move.name;
                } else {


                document.getElementById("moves").innerHTML = result.moves[0].move.name + " || " + result.moves[1].move.name + " || "
                + result.moves[2].move.name + " || " + result.moves[3].move.name;
                }

            document.getElementById("sprite").src = result.sprites.front_default;
            /*document.getElementById("evolution").innerHTML = result.data1.evolves_from_species.name;
            document.getElementById("img_evol").src = result.data2.sprites.front_default;

            //xhr2.open("GET","https://pokeapi.co/api/v2/pokemon-form/"+input+"/",true);


            //prev evolution : url: ($url + "pokemon/" + data1.evolves_from_species.name + "/")
             //('<img src="' + data2.sprites.front_default + '">')

            //en de 2de is de link met de foto*/

        }
    }
    xhr1.onerror = function(){
        alert("Er is iets mis gelopen bij de HttpRequest , probeer het opnieuw aub!");
    }
    //Call the open function, GET-type of request, url, true-asynchronous

    //get url doen met naam of id
    //deze loopt van 1 tot 803
    //genereerd een random pokémon

    //var idPok = Math.floor(Math.random() * 100);
    //xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + idPok, true);


    //zoek een Pokémon op naam
    //input field met id "search"
    var idSearch = document.getElementById("search").value;
    //var nameSearch = document.getElementById("name").value;

    xhr1.open("GET", "https://pokeapi.co/api/v2/pokemon/" + idSearch, true);
    //xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/" + nameSearch, true);



    //call send
    xhr1.send();
};

//____________________________

/*var xhr2 = new XMLHttpRequest();
console.log(xhr);
xhr2.onload = function() {
    if(xhr2.status == 200){
        var result = JSON.parse(xhr2.responseText);
        document.getElementById("evolution").innerHTML = result.data1.evolves_from_species.name;
        document.getElementById("img_evol").src = result.data2.sprites.front_default;
    }
}
xhr2.onerror = function(){
    alert("Er is iets mis gelopen bij de HttpRequest , probeer het opnieuw aub!");
}
var idSearch = document.getElementById("search").value;
xhr2.open("GET","https://pokeapi.co/api/v2/pokemon-form/" + idSearch + "/",true);
xhr2.send();
};*/




// verouderder code !!!

// ik had een oudere versie
//maak gebruik van xhr.onload want die komt pas door als readyState 4 is
//dus schrijf maw een functie onload en onerror
//want ik kreeg 3x de alert message , nl als de readyState van 0 naar 4 in stapjes gaat
//quote kwam wel direct door

/*        function genQuote() {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var result = JSON.parse(xhr.responseText);
                    console.log (result);
                    document.getElementById("response").innerHTML = result.quote;
                }
                else{
                    alert("Er is iets mis gelopen bij de HttpRequest , probeer het opnieuw aub!");
                }
            };


    //Call the open function, GET-type of request, url, true-asynchronous
    xhr.open("GET", "https://thatsthespir.it/api", true);

    //call send
    xhr.send();
};*/
