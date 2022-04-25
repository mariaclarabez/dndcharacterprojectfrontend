import React from "react";

const WikiItem = ({
    data =   {
        "title": "races"
    }
}) => {
    return(
        <div className={`wikiItem`}>
            <span>{data.title}</span>
        </div>
    )
}

export default WikiItem;