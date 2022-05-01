import _ from 'lodash';

export default function RaceDetails(props) {
    const {results} = props;

    if(_.isNil(results)){
        return <h2>Loading...</h2>
    }
    console.log(results);

    return (
        <div>
            <h4>{results.data.name}</h4>
            <p>Age: {results.data.age}</p>
            <p>Alignment: {results.data.alignment}</p>
            <p>Languages: {results.data.language_desc}</p>
            <p>Size: {results.data.size}</p>
            <p>Size Description: {results.data.size_description}</p>
            <p>Speed: {results.data.speed}</p>




        </div>
    )
    // const {element} = props;


    // console.log(element);

    // return (
    //     <div>
    //         <h4>{element.name}</h4>
    //         <p>{element.alignment}</p>
    //     </div>
    // )
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