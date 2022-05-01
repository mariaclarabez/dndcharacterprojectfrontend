import _ from 'lodash';
import React from 'react';
import Navigation from './navigation';

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
    <div className={"row header"}>
        <span>Dungons and Dragons Forum</span>
    </div>
    <div className={"row flex-noWrap"}>
        <div className={"col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 leftComponent"}>
            <Navigation active={'Home'}/>
        </div>
        <div className={"col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10 mainComponent"}>
            <div className='item-title'><b>{results.data.name}</b></div>
            <div className='item-content'>
                <p><span className="item-content-title">Hit die</span>: {results.data.hit_die}</p>
                <p><span className="item-content-title">Proficiencies</span>: <p></p>{results.data.proficiencies.map(data=><element><p>{data.name}</p></element>)}</p>
                <p><span className="item-content-title">Starting equipment</span>: <p></p>{results.data.starting_equipment.map(data=><element><p>{data.equipment.name}</p></element>)}</p>
                <p><span className="item-content-title">Subclasses</span>: <p></p>{results.data.subclasses.map(data=><element><p>{data.name}</p></element>)}</p>
                <p><span className="item-content-title">Saving throws</span>: <p></p>{results.data.saving_throws.map(data=><element><p>{data.name}</p></element>)}</p>
            </div>
        </div>
    </div>
</div>
    )
}


