import React from 'react';
import {MdFavoriteBorder, MdExpandMore} from "react-icons/md";

const InformationListItem = (props) => {
    return (
        <tr role="row">
            <td role="cell" width="10px">
                <span><MdExpandMore/></span>
            </td>
            <td data-title="Role" width="121px">
                <span>{props.post.role}</span>
            </td>
            <td data-title="Seniority" width="121px">
                <span>{props.post.seniority}</span>
            </td>
            <td data-title="Main Stack" width="270px">
                <div className="main-stack">
                    <div className="main-stack-item"><span>Ruby</span></div>
                    <div className="main-stack-item"><span>Ruby on Rails</span></div>
                    <div className="main-stack-item"><span>Javascript</span></div>
                    <div className="main-stack-item"><span>HTML</span></div>
                    <div className="main-stack-item"><span>CSS</span></div>
                    <div className="main-stack-item"><span>React</span></div>
                    <div className="main-stack-item"><span>Vue</span></div>
                </div>
            </td>
            <td data-title="Rate" width="168px">
                <b>TBD</b>
            </td>
            <td data-title="English" width="auto">
                <span>{props.post.english}</span>
            </td>
            <td data-title="Location" width="auto">
                <span>{props.post.location}</span>
            </td>
            <td data-title="Posted" width="auto">
                <span>{props.post.posted}</span>
            </td>
            <td data-title="Favorite" width="40px">
                <span>
                    <MdFavoriteBorder/>
                </span>
            </td>

            {/*{props.post.id}*/}
            {/*<div>{props.post["main-stack"]}</div>*/}
            {/*<div>{props.post.description}</div>*/}
            {/*<div>{props.post["company-location"]}</div>*/}
            {/*<div>{props.post.workload}</div>*/}
            {/*<div>@{props.post.telegram}</div>*/}
            {/*<div>{props.post.email}</div>*/}
            {/*<div>{props.post.company}</div>*/}
        </tr>
    );
};

export default InformationListItem;