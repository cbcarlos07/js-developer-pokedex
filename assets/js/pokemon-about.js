const changeContent = (key, val) => {
    const content = document.body.innerHTML;
    document.body.innerHTML = content.replace(key, val);
}

const lista = document.getElementById('bodyPokemon')

const query = location.href.split("?")
const findId = new URLSearchParams(query[1]);
const getId = findId.get('code')

const url = `https://pokeapi.co/api/v2/pokemon/${getId}/`

fetch(url)
.then((r) => r.json())
.then((json) => {
    changeContent("{imagem}", json.sprites.other.dream_world.front_default );
    changeContent("{species}", json.species.name );
    changeContent("{numero}", json.id );
    changeContent("{weight}", json.weight );
    changeContent("{height}", json.height );
    changeContent("{nome}", json.name );


    let _tipo = document.querySelector(".tipo-div");
    _tipo.innerHTML = json.types.map(e => `<li class="tipo ${e.type.name.trim()}">${e.type.name.trim()}</li>`).join('')

    let typeColor = document.querySelector(".colorType");
    typeColor.classList.add(json.types[0].type.name)
    

    let list = document.querySelector(".ability");
    list.innerHTML = json.abilities.map(e => e.ability.name).join(', ')

})

 
