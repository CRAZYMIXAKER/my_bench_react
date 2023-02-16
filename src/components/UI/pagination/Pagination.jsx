import React from 'react';
import {getPagesArray} from "../../../utils/pages";
import "./Pagination.scss"
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";

const Pagination = ({totalPages, page, changePage, nextPage, prevPage}) => {
    let pagesArray = getPagesArray(totalPages);

    return (
        <div className="pagination">
            <div className="pagination-wrapper">
                {totalPages > 1 &&
                    <button
                        className="pagination-wrapper-page _button"
                        onClick={() => prevPage(page)}
                        disabled={page === 1}
                        type="button"
                    >
                        <BsArrowLeftShort/>
                    </button>
                }

                {pagesArray.map(p =>
                    <span
                        onClick={() => changePage(p)}
                        key={p}
                        className={page === p ? 'pagination-wrapper-page _current' : 'pagination-wrapper-page'}>
                        {p}
                    </span>
                )}

                {totalPages > 1 &&
                    <button
                        className="pagination-wrapper-page _button"
                        onClick={() => nextPage(page)}
                        disabled={page === totalPages}
                        type="button"
                    >
                        <BsArrowRightShort/>
                    </button>
                }
            </div>
        </div>
    );
};

export default Pagination;