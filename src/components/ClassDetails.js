import _ from 'lodash';
import React from 'react';

export default function ClassDetails(props) {
    const {results} = props;

    if(_.isNil(results)){
        return <h2>Loading...</h2>
    }
    console.log(results);
    // let items= results.data.proficiencies;
    // let item;
    // console.log(items)
    // let itemList=[];
    // items.forEach((item, index=> {
    //     itemList.push(<li key={index}>{item}</li>)
    // }))
    // console.log(itemList)



    return (
        <div>
            <h4>{results.data.name}</h4>
            <p>Hit die: {results.data.hit_die}</p>
            <p>Proficiencies: <p></p>{results.data.proficiencies.map(data=><element><p>{data.name}</p></element>)}</p>
            <p>Starting equipment: <p></p>{results.data.starting_equipment.map(data=><element><p>{data.equipment.name}</p></element>)}</p>
            <p>Subclasses: <p></p>{results.data.subclasses.map(data=><element><p>{data.name}</p></element>)}</p>
            <p>Saving throws: <p></p>{results.data.saving_throws.map(data=><element><p>{data.name}</p></element>)}</p>

            {/* <p>Saving throws: {results.data.subclasses.map(data=><element>{data.name}</element>)}</p> */}



        </div>
    )
}
//     const {element} = props;
//     console.log(element);

//     return (
//         <div>
//             <h4>{element.name}</h4>
//             <p>{element.proficiencies.name}</p>
//         </div>
//     )
// }



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