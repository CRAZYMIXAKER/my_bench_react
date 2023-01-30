import React from 'react';

const InformationListItem = (props) => {
    return (
        <div style={{display: "flex"}}>
            {props.post.id}
            <h1>{props.post.role}</h1>
            <div>{props.post.seniority}</div>
            <div>{props.post["main-task"]}</div>
            <div>{props.post.rate}</div>
            <div>{props.post.english}</div>
            <div>{props.post.location}</div>
            <div>{props.post.posted}</div>
            <div>{props.post.description}</div>
            <div>{props.post["company-location"]}</div>
            <div>{props.post.wordload}</div>
            <div>@{props.post.telegram}</div>
            <div>{props.post.email}</div>
            <div>{props.post.company}</div>
        </div>
    );
};

export default InformationListItem;