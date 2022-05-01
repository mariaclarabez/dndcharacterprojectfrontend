import _ from 'lodash'

export default function SpellDetails(props) {
    const {results} = props;
    console.log(results);

    if(_.isNil(results)){
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h4>{results.data.name}</h4>
            <p>Spell description: {results.data.desc}</p>
            <p>Attack type: {results.data.attack_type}</p>
            <p>Casting time: {results.data.casting_time}</p>
            <p>Duration: {results.data.duration}</p>
            <p>Range: {results.data.range}</p>
            <p>Material: {results.data.material}</p>




        </div>
    )
}




// export default function Results(props) {
//     const {element} = props;
//     console.log(element);

//     return (
//         <Link to={"/details"+element.url.substring(4)}>
//             <div className='resultCard'>
//                 <h4>{element.name}</h4>
//             </div>
//         </Link>
//     );
// }