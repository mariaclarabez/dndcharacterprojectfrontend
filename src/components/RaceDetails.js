import _ from 'lodash';
import Navigation from './navigation';

export default function RaceDetails(props) {
    const {results} = props;

    if(_.isNil(results)){
        return <h2>Loading...</h2>
    }
    console.log(results);

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
                    <p><span className="item-content-title">Age</span>: {results.data.age}</p>
                    <p><span className="item-content-title">Alignment</span>: {results.data.alignment}</p>
                    <p><span className="item-content-title">Languages</span>: {results.data.language_desc}</p>
                    <p><span className="item-content-title">Size</span>: {results.data.size}</p>
                    <p><span className="item-content-title">Size Description</span>: {results.data.size_description}</p>
                    <p><span className="item-content-title">Speed</span>: {results.data.speed}</p>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}