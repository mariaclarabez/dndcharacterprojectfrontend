import React from "react";

export const Character = ({character}) => {
    return(
        <table>
            <tr>
                <td> Name</td>
                <td> Class</td>
                <td> Race</td>
                <td> Campaign</td>
                <td> Wisdom</td>
                <td> Charisma</td>
                <td> Strength</td>
                <td> Dexterity</td>
                <td> Intelligence</td>
                <td> Constitution</td>
            </tr>
            <tr>
                <td> {character.char_name}</td>
                <td> {character.class_name}</td>
                <td> {character.race_name}</td>
                <td> {character.campaign_name}</td>
                <td> {character.wisdom}</td>
                <td> {character.charisma}</td>
                <td> {character.strength}</td>
                <td> {character.dexterity}</td>
                <td> {character.intelligence}</td>
                <td> {character.constitution}</td>
            </tr>
        </table>
    )
}

const CharacterPost = ({character}) => {
    return (
        <div className={'post'}>
            <Character character={character}/>
        </div>
    )
}

export default CharacterPost;