import React from 'react';
import {MdFavoriteBorder, MdExpandMore} from "react-icons/md";

const InformationListItem = (props) => {
    return (
        <tr role="row">
            <td role="cell" width="10px">
                <div></div>
                <span><MdExpandMore/></span>
            </td>
            <td data-title="Role">
                <div>Role</div>
                <span>Backend</span></td>
            <td data-title="Seniority">
                <div>Seniority</div>
                <span>Junior</span></td>
            <td data-title="Main Stack">
                <div>Main Stack</div>
                <div>
                    <div><span>Ruby</span></div>
                    <div><span>Ruby on Rails</span></div>
                    <div><span>Javascript</span></div>
                    <div><span>HTML</span></div>
                    <div><span>CSS</span></div>
                </div>
            </td>
            <td data-title="Rate">
                <div>Rate</div>
                <b>TBD</b></td>
            <td data-title="English">
                <div>English</div>
                <span>Upper-Intermediate</span></td>
            <td data-title="Location">
                <div>Location</div>
                <span>Select location</span></td>
            <td data-title="Posted">
                <div>Posted</div>
                <span>21 days ago</span></td>
            <td data-title="Favorite">
                <span>
                            <MdFavoriteBorder/>

                </span>
            </td>

            {/*{props.post.id}*/}
            {/*<h1>{props.post.role}</h1>*/}
            {/*<div>{props.post.seniority}</div>*/}
            {/*<div>{props.post["main-task"]}</div>*/}
            {/*<div>{props.post.rate}</div>*/}
            {/*<div>{props.post.english}</div>*/}
            {/*<div>{props.post.location}</div>*/}
            {/*<div>{props.post.posted}</div>*/}
            {/*<div>{props.post.description}</div>*/}
            {/*<div>{props.post["company-location"]}</div>*/}
            {/*<div>{props.post.wordload}</div>*/}
            {/*<div>@{props.post.telegram}</div>*/}
            {/*<div>{props.post.email}</div>*/}
            {/*<div>{props.post.company}</div>*/}
        </tr>
    );
};

export default InformationListItem;