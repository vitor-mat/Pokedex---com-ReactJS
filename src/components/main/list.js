import React, { useEffect } from "react"
import "../../style/main/list.css"
import Pokebola from "../../images/main/list/pokebola-img.png"


export default function(props){

    function selected(value){
            document.getElementById("item-1").style = "background: white"
            document.getElementById("item-2").style = "background: white"
            document.getElementById("item-3").style = "background: white"
            document.getElementById("item-4").style = "background: white"
            document.getElementById("item-5").style = "background: white"
            document.getElementById("item-6").style = "background: white"
            document.getElementById("item-7").style = "background: white"
            document.getElementById("item-8").style = "background: white"
            document.getElementById("item-9").style = "background: white"
            document.getElementById("item-10").style = "background: white"

            document.getElementById(value || "item-1").style = "background: red; color: white"
    }

    useEffect(() => {
        selected()
    }, [true])

    return(
        <div id="navegation">
            <div id="user">
                <img src={Pokebola} />
                <span>POKEDEX</span>
            </div>
            <div id="names">
                <ul>
                    <li id="item-1" onClick={() => {
                        selected("item-1")
                        props.getIndiceFromMain(props.pokemonsIndicesFromMain[0])
                        props.getNameFromMain(props.pokemonsNamesFromMain[0])

                        }}>

                        {props.pokemonsIndicesFromMain[0]}# {props.pokemonsNamesFromMain[0]}

                    </li>
                    <li id="item-2" onClick={() => {
                        selected("item-2")
                        props.getIndiceFromMain(props.pokemonsIndicesFromMain[1])
                        props.getNameFromMain(props.pokemonsNamesFromMain[1])
                        }}>

                        {props.pokemonsIndicesFromMain[1]}# {props.pokemonsNamesFromMain[1]}

                    </li>
                    <li id="item-3" onClick={() => {
                        selected("item-3")
                        props.getIndiceFromMain(props.pokemonsIndicesFromMain[2])
                        props.getNameFromMain(props.pokemonsNamesFromMain[2])
                        }}>

                        {props.pokemonsIndicesFromMain[2]}# {props.pokemonsNamesFromMain[2]}

                    </li>
                    <li id="item-4" onClick={() => {
                        selected("item-4")
                        props.getIndiceFromMain(props.pokemonsIndicesFromMain[3])
                        props.getNameFromMain(props.pokemonsNamesFromMain[3])
                        }}>

                        {props.pokemonsIndicesFromMain[3]}# {props.pokemonsNamesFromMain[3]}

                    </li>
                    <li id="item-5" onClick={() => {
                        selected("item-5")
                        props.getIndiceFromMain(props.pokemonsIndicesFromMain[4])
                        props.getNameFromMain(props.pokemonsNamesFromMain[4])
                        }}>

                        {props.pokemonsIndicesFromMain[4]}# {props.pokemonsNamesFromMain[4]}

                    </li>
                    <li id="item-6" onClick={() => {
                        selected("item-6")
                        props.getIndiceFromMain(props.pokemonsIndicesFromMain[5])
                        props.getNameFromMain(props.pokemonsNamesFromMain[5])
                        }}>

                        {props.pokemonsIndicesFromMain[5]}# {props.pokemonsNamesFromMain[5]}

                    </li>
                    <li id="item-7" onClick={() => {
                        selected("item-7")
                        props.getIndiceFromMain(props.pokemonsIndicesFromMain[6])
                        props.getNameFromMain(props.pokemonsNamesFromMain[6])
                        }}>

                        {props.pokemonsIndicesFromMain[6]}# {props.pokemonsNamesFromMain[6]}

                    </li>
                    <li id="item-8" onClick={() => {
                        selected("item-8")
                        props.getIndiceFromMain(props.pokemonsIndicesFromMain[7])
                        props.getNameFromMain(props.pokemonsNamesFromMain[7])
                        }}>

                        {props.pokemonsIndicesFromMain[7]}# {props.pokemonsNamesFromMain[7]}

                    </li>
                    <li id="item-9" onClick={() => {
                            if(Number(props.pokemonsIndicesFromMain[8]) < 1119){
                                selected("item-9")
                                props.getIndiceFromMain(props.pokemonsIndicesFromMain[8])
                                props.getNameFromMain(props.pokemonsNamesFromMain[8])
                            }else{
                                alert("Is empty")
                            }
                        }}>

                        {props.pokemonsIndicesFromMain[8]}# {props.pokemonsNamesFromMain[8]}

                    </li>
                    <li id="item-10" onClick={() => {
                        if(Number(props.pokemonsIndicesFromMain[9]) < 1119){
                            selected("item-10")
                            props.getIndiceFromMain(props.pokemonsIndicesFromMain[9])
                            props.getNameFromMain(props.pokemonsNamesFromMain[9])  
                        }else{
                            alert("Is empty")
                        }

                        }}>

                        {props.pokemonsIndicesFromMain[9]}# {props.pokemonsNamesFromMain[9]}

                    </li>
                </ul>
            </div>
            <div id="buttons">
                <div className="btn" onClick={() => {
                    props.beforeFucntionFromMain()
                }}>

                </div>
                <div className="btn" onClick={() => {
                    props.nextFucntionFromMain()
                }}>

                </div>
            </div>
        </div>
    )
}