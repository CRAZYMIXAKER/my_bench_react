import InformationListItem from "./InformationListItem";
import '../styles/components/InformationList.scss'
import {MdOutlineArrowDropDown} from "react-icons/md";
import React from "react";

const InformationList = ({vacancies}) => {

    if (!vacancies.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены
            </h1>
        )
    }

    return (
        <main className="information-wrapper">
            <table role="table" className="table">
                <tbody className="table-header">
                <tr role="row">
                    <td colSpan="1">
                        <div className="table-td-main"><span></span></div>
                    </td>
                    <td colSpan="1">
                        <div className="table-td-main"><span>Role</span></div>
                    </td>
                    <td colSpan="1">
                        <div className="table-td-main"><span>Seniority</span></div>
                    </td>
                    <td colSpan="1">
                        <div className="table-td-main"><span>Main Stack</span></div>
                    </td>
                    <td colSpan="1">
                        <div className="table-td-main">
                            <button>
                                <span>Rate</span>
                                <span className="svg">
                                    <MdOutlineArrowDropDown/>
                                </span>
                            </button>
                        </div>
                    </td>
                    <td colSpan="1">
                        <div className="table-td-main"><span>English</span></div>
                    </td>
                    <td colSpan="1">
                        <div className="table-td-main"><span>Location</span></div>
                    </td>
                    <td colSpan="1">
                        <div className="table-td-main">
                            <button><span>Posted</span>
                                <span><MdOutlineArrowDropDown/></span>
                            </button>
                        </div>
                    </td>
                    <td colSpan="1">
                        <div className="table-td-main"><span></span></div>
                    </td>
                </tr>
                </tbody>
                <tbody className="table-body" role="rowgroup">
                {vacancies.map(vacancy => <InformationListItem post={vacancy} key={vacancy.id}/>)}
                </tbody>
            </table>
        </main>
    );
};

export default InformationList;

