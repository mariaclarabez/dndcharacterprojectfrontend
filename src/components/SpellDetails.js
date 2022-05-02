import _ from 'lodash'
import Navigation from './navigation';
import './search.css'

export default function SpellDetails(props) {
    const {results} = props;
    console.log(results);

    if(_.isNil(results)){
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <div className={"row header"}>
                <span>Dungons and Dragons Forum</span>
            </div>
            <div className={"row flex-noWrap"}>
                <div className={"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 leftComponent"}>
                    <Navigation active={'Search'}/>
                </div>
                <div className={"col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10 mainComponent"}>
                    <div className={'mainDetails'}>
                        <div className='item-title'><b>{results.data.name}</b></div>
                        <div className='item-content'>
                        <p><span className="item-content-title">Spell Description</span>: {results.data.desc}</p>
                        <p><span className="item-content-title">Casting Time</span>: {results.data.casting_time}</p>
                        <p><span className="item-content-title">Duration</span>: {results.data.duration}</p>
                        <p><span className="item-content-title">Range</span>: {results.data.range}</p>
                        <p><span className="item-content-title">Material</span>: {results.data.material}</p></div>
                    </div>
                </div>
            </div>
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