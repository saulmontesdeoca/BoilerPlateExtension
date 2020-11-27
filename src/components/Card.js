import React from 'react';
import { CopyBlock, tomorrowNightBlue } from "react-code-blocks";

const Card = (props) => {

    return (
        <div className="card shadow mb-4" >
            <div className="card-header py-3">
                <h6 className="text-primary font-weight-bold m-0">{props.title}</h6>
            </div>
            <CopyBlock
            language={props.language}
            text={props.code}
            showLineNumbers={false}
            theme={tomorrowNightBlue}
            wrapLines={true}
            codeBlock
            />
        </div>
    );
};

export default Card;