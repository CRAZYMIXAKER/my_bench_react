import React from 'react';
import {getPagesArray} from "../../../utils/pages";
import "./Pagination.scss"
import {BsArrowLeftShort, BsArrowRightShort} from "react-icons/bs";
import MyButton from "../button/MyButton";

const Pagination = ({totalPages, page, changePage, nextPage, prevPage}) => {
    let pagesArray = getPagesArray(totalPages);

    return (
        <div className="pagination">
            <div className="pagination-wrapper">
                {totalPages > 1 &&
                    <MyButton
                        className="pagination-wrapper-page _button"
                        onClick={() => prevPage(page)}
                        disabled={page === 1}
                        type="button"
                    >
                        <BsArrowLeftShort/>
                    </MyButton>
                }

                {pagesArray.map(p =>
                    <span
                        key={p}
                        onClick={() => changePage(p)}
                        className={page === p ? 'pagination-wrapper-page _current' : 'pagination-wrapper-page'}>
                        {p}
                    </span>
                )}

                {totalPages > 1 &&
                    <MyButton
                        className="pagination-wrapper-page _button"
                        onClick={() => nextPage(page)}
                        disabled={page === totalPages}
                        type="button"
                    >
                        <BsArrowRightShort/>
                    </MyButton>
                }
            </div>
        </div>
    );
};

export default Pagination;