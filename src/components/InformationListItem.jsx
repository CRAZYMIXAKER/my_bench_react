import React from 'react';

const InformationListItem = (props) => {
    return (
        <div>
            {props.post.id}
            <h1>{props.post.title}</h1>
            <div>{props.post.body}</div>
        </div>
    );
};

export default InformationListItem;