import React, {useState} from 'react';
import {MdFavoriteBorder, MdExpandMore} from "react-icons/md";

const InformationListItem = ({vacancy, showHideRowTable, dropdownRow}) => {

    return (
        <>
            <tr
                role="row"
                key={vacancy.id}
                onClick={() => showHideRowTable(vacancy.id)}
            >
                <td role="cell" width="10px">
                    <span><MdExpandMore/></span>
                </td>
                <td data-title="Role" width="121px">
                    <span>{vacancy.role}</span>
                </td>
                <td data-title="Seniority" width="121px">
                    <span>{vacancy.seniority}</span>
                </td>
                <td data-title="Main Stack" width="270px">
                    {/*<div>{vacancy["main-stack"]}</div>*/}
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
                    <span>{vacancy.english}</span>
                </td>
                <td data-title="Location" width="auto">
                    <span>{vacancy.location}</span>
                </td>
                <td data-title="Posted" width="auto">
                    <span>{vacancy.posted}</span>
                </td>
                <td data-title="Favorite" width="40px">
                <span>
                    <MdFavoriteBorder/>
                </span>
                </td>
            </tr>

            {(dropdownRow === vacancy.id) &&
                (<tr className="">
                    <td colSpan="4">
                        <div className="">
                            <h4> Description </h4>
                            <pre className="">
                            {vacancy.description}
                        </pre>
                        </div>
                        <div className="">
                            <a href="/company/sloboda-studio"> Company Name: {vacancy.company} </a>
                        </div>
                    </td>
                    <td>
                        <div className="">
                            <h4 className="">Company Location</h4>
                            <div className="">
                                {/*svg*/}
                                <span>{vacancy["company-location"]}</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="">
                            <h4 className="">Workload</h4>
                            <span>{vacancy.workload}</span>
                        </div>
                    </td>
                    <td colSpan="3">
                        <div className="">
                            {/*<div>@{vacancy.telegram}</div>*/}
                            <a href="https://t.me/slobodapartner" target="_blank" className="">Telegram</a>
                            {/*<div>{vacancy.email}</div>*/}
                            <a href="mailto:y.tretyak@sloboda-studio.com" className="">Email</a>
                        </div>
                    </td>
                </tr>)
            }
        </>
    );
};

export default InformationListItem;