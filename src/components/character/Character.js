import React from "react";
import Table from "react-bootstrap/Table";

export const Character = ({character}) => {
    return(
        <Table striped bordered hover className={'characterTable'}>
            <thead>
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
            </thead>
            <tbody>
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
            </tbody>
        </Table>
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