import React, {useState, useEffect} from "react";
import CharacterPost from "../character/Character";
import {getCharacterForUser} from "../../api/apiHelper";

const ProfileCharacters = ({user}) => {
    const [characters, setCharacters] = useState([]);
    
    async function getUserCharacters() {
        const chars = await getCharacterForUser(user);
        setCharacters(await chars);
    }
    
    useEffect(() => {
        getUserCharacters();
    }, []);
    
    return(
        <>
            {characters != undefined &&
                <div className={'postsMain'}>

                    {characters.map(c => <CharacterPost character={c}/>)}

                </div>
            }
        </>

    )
}

export default ProfileCharacters;
