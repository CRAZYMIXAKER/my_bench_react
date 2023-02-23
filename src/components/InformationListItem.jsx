import React from 'react';
import {
    MdFavoriteBorder,
    MdExpandMore,
    MdOutlineLocationOn
} from "react-icons/md";

const InformationListItem = ({vacancy, showHideRowTable, dropdownRow}) => {
    const additionalClass = (dropdownRow === vacancy.id) ? '_revert' : '';
    return (
        <>
            <tr
                role="row"
                key={vacancy.id}
                onClick={() => showHideRowTable(vacancy.id)}
            >
                <td role="cell" width="10px">
                    <span> <MdExpandMore className={additionalClass}/></span>
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
                (<tr className="additional-information">
                    <td colSpan="4">
                        <div className="additional-information-description">
                            <h4 className="additional-information-title"> Description </h4>
                            <pre>
                                {/*{vacancy.description}*/}
                                9 years of commercial experience in software development
                                Experience with working on an ICO project (cryptocurrency exchange)
                                Experience as CTO and Tech Lead
                                Programming Technologies:
                                Python, Flask, PHP, Laravel, CodeIgniter, Kohana, Javascript, Node, React, Angular, Vue.js, jQuery, HTML, CSS3
                            </pre>
                        </div>
                        <div className="additional-information-company">
                            <a href="/company/sloboda-studio">
                                Mixaker interprice
                                {/*{vacancy.company} */}
                            </a>
                        </div>
                    </td>
                    <td>
                        <div className="additional-information-location">
                            <h4 className="additional-information-title">Company Location</h4>
                            <div className="location-body">
                                <MdOutlineLocationOn/>
                                <span>{vacancy["company-location"]}</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="additional-information-workload">
                            <h4 className="additional-information-title">Workload</h4>
                            <span>{vacancy.workload}</span>
                        </div>
                    </td>
                    <td colSpan="3">
                        <div className="additional-information-contacts">
                            {/*<div>@{vacancy.telegram}</div>*/}
                            <a href="https://t.me/mixaker" target="_blank" className="contacts-link">Telegram</a>
                            {/*<div>{vacancy.email}</div>*/}
                            <a href="mailto:zombisuki@gmail.com" className="contacts-link">Email</a>
                        </div>
                    </td>
                </tr>)
            }
        </>
    );
};

export default InformationListItem;