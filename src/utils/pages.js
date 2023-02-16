export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
    let result = [];
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)
    }
    return result;
}

export const changePage = (page) => {
    scrollToTop();
    return page;
}

export const prevPage = (page) => {
    if (page !== 1) {
        scrollToTop();
        return page - 1;
    }
}

export const nextPage = (page, totalPages) => {
    if (page < totalPages) {
        scrollToTop();
        return page + 1;
    }
}