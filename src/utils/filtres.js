export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const clearFilter = (name) => {
    console.log(name)
}

export const saveFilter = (e) => {
    e.preventDefault();
    let formName = e.target.name;
    let formValues = [];

    Object.values(e.target).map(item => {
        item.checked && formValues.push(item.name);
    });
    // return setFilter({...filter, filters: {[formName]: formValues}})
}