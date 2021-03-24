import React from "react"
import "../../style/main/list.css"

export default function(props){
    return(
        <div id="navegation">
            <div id="user">

            </div>
            <div id="names">
                <ul>
                    <li onClick={() => {
                        props.getIndiceFromMain(props.pokemonsIndicesFromMain[0])
                        props.getNameFromMain(props.pokemonsNamesFromMain[0])
                        }}>

                        {props.pokemonsIndicesFromMain[0]}# {props.pokemonsNamesFromMain[0]}

                    </li>
                    <li onClick={() => {
                        props.getIndiceFromMain(props.pokemonsIndicesFromMain[1])
                        props.getNameFromMain(props.pokemonsNamesFromMain[1])
                        }}>

                        {props.pokemonsIndicesFromMain[1]}# {props.pokemonsNamesFromMain[1]}

                    </li>
                    <li onClick={() => {
                        props.getIndiceFromMain(props.pokemonsIndicesFromMain[2])
                        props.getNameFromMain(props.pokemonsNamesFromMain[2])
                        }}>

                        {props.pokemonsIndicesFromMain[2]}# {props.pokemonsNamesFromMain[2]}

                    </li>
                    <li onClick={() => {
                        props.getIndiceFromMain(props.pokemonsIndicesFromMain[3])
                        props.getNameFromMain(props.pokemonsNamesFromMain[3])
                        }}>

                        {props.pokemonsIndicesFromMain[3]}# {props.pokemonsNamesFromMain[3]}

                    </li>
                    <li onClick={() => {
                        props.getIndiceFromMain(props.pokemonsIndicesFromMain[4])
                        props.getNameFromMain(props.pokemonsNamesFromMain[4])
                        }}>

                        {props.pokemonsIndicesFromMain[4]}# {props.pokemonsNamesFromMain[4]}

                    </li>
                    <li onClick={() => {
                        props.getIndiceFromMain(props.pokemonsIndicesFromMain[5])
                        props.getNameFromMain(props.pokemonsNamesFromMain[5])
                        }}>

                        {props.pokemonsIndicesFromMain[5]}# {props.pokemonsNamesFromMain[5]}

                    </li>
                    <li onClick={() => {
                        props.getIndiceFromMain(props.pokemonsIndicesFromMain[6])
                        props.getNameFromMain(props.pokemonsNamesFromMain[6])
                        }}>

                        {props.pokemonsIndicesFromMain[6]}# {props.pokemonsNamesFromMain[6]}

                    </li>
                    <li onClick={() => {
                        props.getIndiceFromMain(props.pokemonsIndicesFromMain[7])
                        props.getNameFromMain(props.pokemonsNamesFromMain[7])
                        }}>

                        {props.pokemonsIndicesFromMain[7]}# {props.pokemonsNamesFromMain[7]}

                    </li>
                    <li onClick={() => {
                        props.getIndiceFromMain(props.pokemonsIndicesFromMain[8])
                        props.getNameFromMain(props.pokemonsNamesFromMain[8])
                        }}>

                        {props.pokemonsIndicesFromMain[8]}# {props.pokemonsNamesFromMain[8]}

                    </li>
                    <li onClick={() => {
                        props.getIndiceFromMain(props.pokemonsIndicesFromMain[9])
                        props.getNameFromMain(props.pokemonsNamesFromMain[9])
                        }}>

                        {props.pokemonsIndicesFromMain[9]}# {props.pokemonsNamesFromMain[9]}

                    </li>
                </ul>
            </div>
            <div id="buttons">
                <div class="btn" onClick={() => {
                    props.beforeFucntionFromMain()
                }}>

                </div>
                <div class="btn" onClick={() => {
                    props.nextFucntionFromMain()
                }}>

                </div>
            </div>
        </div>
    )
}