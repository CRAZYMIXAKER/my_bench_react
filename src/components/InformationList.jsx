import InformationListItem from "./InformationListItem";
import '../styles/components/InformationList.scss'
import {MdOutlineArrowDropDown} from "react-icons/md";
import React from "react";
import Pagination from "./UI/pagination/Pagination";

const InformationList = ({vacancies, page, changePage, totalPages, nextPage, prevPage}) => {

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
                    <td colSpan="1" width="10px">
                        <div className="table-td-main"><span></span></div>
                    </td>
                    <td colSpan="1" width="121px">
                        <div className="table-td-main"><span>Role</span></div>
                    </td>
                    <td colSpan="1" width="121px">
                        <div className="table-td-main"><span>Seniority</span></div>
                    </td>
                    <td colSpan="1" width="270px">
                        <div className="table-td-main"><span>Main Stack</span></div>
                    </td>
                    <td colSpan="1" width="168px">
                        <div className="table-td-main">
                            <button>
                                <span>Rate</span>
                                <span className="svg">
                                    <MdOutlineArrowDropDown/>
                                </span>
                            </button>
                        </div>
                    </td>
                    <td colSpan="1" width="auto">
                        <div className="table-td-main"><span>English</span></div>
                    </td>
                    <td colSpan="1" width="auto">
                        <div className="table-td-main"><span>Location</span></div>
                    </td>
                    <td colSpan="1" width="auto">
                        <div className="table-td-main">
                            <button><span>Posted</span>
                                <span><MdOutlineArrowDropDown/></span>
                            </button>
                        </div>
                    </td>
                    <td colSpan="1" width="40px">
                        <div className="table-td-main"><span></span></div>
                    </td>
                </tr>
                </tbody>
                <tbody className="table-body" role="rowgroup">
                {vacancies.map(vacancy => <InformationListItem post={vacancy} key={vacancy.id}/>)}
                </tbody>
            </table>

            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
                nextPage={nextPage}
                prevPage={prevPage}
            />
        </main>
    );
};

export default InformationList;

