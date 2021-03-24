import React, { useState, useEffect } from "react"
import "../style/main.css"
import List from "./main/list"
import Screen from "./main/screen"

export default function(){

    let [pokemonsNames, setPokemonsNames] = useState([])
    let [pokemonsIndices, setPokemonsIndices] = useState([])
    let [offsetValue, setOffsetValue] = useState(0)


    let [name, setName] = useState("")
    let [indice, setIndice] = useState("")

    useEffect(
        async function request(){
            try{
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(offsetValue).toString()}.`)
                const data = await response.json()
                setPokemonsNames(pokemonsNames = data.results.map((value) => value.name))
                setPokemonsIndices(pokemonsIndices = [offsetValue+1,offsetValue+2,offsetValue+3,offsetValue+4,offsetValue+5,offsetValue+6,offsetValue+7,offsetValue+8,offsetValue+9,offsetValue+10])
                return true
            }catch(error){
                console.error(error + " erro")
            }
        }, [offsetValue])

        const next = () => {
            if(offsetValue<1110){
                setOffsetValue(offsetValue = offsetValue + 10)
            }
        }
        const before = () => {
            if(offsetValue>0){
                setOffsetValue(offsetValue = offsetValue - 10)
            }
        }

        const getName = (value) => {
            setName(name = value)
        }
        const getIndice = (value) => {
            setIndice(indice = `#${value} - `)
        }

    return(
        <div id="pokedex">
            <List pokemonsNamesFromMain={pokemonsNames} pokemonsIndicesFromMain = {pokemonsIndices} 
            nextFucntionFromMain={next} beforeFucntionFromMain={before} 
            getNameFromMain={getName} getIndiceFromMain={getIndice}/>
            <Screen nameFromMain={name} indiceFromMain={indice}/>
        </div>
    )
}
