import React, { useState, useEffect } from 'react'
import '../../style/main/screen.css'
import Unknown from '../../images/main/screen/unknown.jpg'

export default function(props){
    let  [numberPage, setNumberPage] = useState(1)

    const name = props.nameFromMain || "BULBASAUR"
    const indice = `${props.indiceFromMain}`
    
    
    let [imgNormal, setImgNormal] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")
    let [imgShyne, setImgShyne] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png")
    let [type, setType] = useState(["grass", "poison"])
    let [description, setDescription] = useState("A strange seed was planted on its back at birth.The plant sprouts and grows with this POKéMON.")

    useEffect(
        async function requestData(){
            try{
                const response1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.nameFromMain}`)
                const data1 = await response1.json()
                setType(type = data1.types.map(value => value.type.name) || [] )
                setImgNormal(imgNormal = data1.sprites.front_default || Unknown)
                setImgShyne(imgNormal = data1.sprites.front_shiny || Unknown)


                const response2 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${props.nameFromMain}`)
                const data2 = await response2.json()
                setDescription(data2.flavor_text_entries[0].flavor_text)
                return true
            }catch(error){
                console.error(error + " erro")
            }
        },[props])

        const getNumber = (e) => {
            setNumberPage(numberPage = Number(e.target.value))
        }

    return(
        <div id="screen">
            <div id="name-title">
                <h1>{`${indice || "#1 - "}${name}`}</h1>
            </div>
            <div id="images">
                <div className="img-childrens">
                <img src={imgNormal}></img>
                <span>normal</span>
                </div>
                <div className="img-childrens">
                <img src={imgShyne}></img>
                <span>shyne</span>
                </div>
            </div>
            <div id="informations">
                <div>
                    <h2>Type:</h2>
                    <span>{type.join(", ")}</span>
                </div>
                <div>
                    <h2>Description:</h2>
                    <span>{description}</span>
                </div>
            </div>
            <div id="pokedex-footer">
                <input type="number" min="1" max="1118" placeholder="Type nº"onChange={(e) => getNumber(e)}/>
                <button onClick={() => {
                    props.goToFromMain(numberPage)


                }}>Go to</button>
            </div>
        </div>
    )
}