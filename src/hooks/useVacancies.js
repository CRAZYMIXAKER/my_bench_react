import {useMemo} from "react";

export const useVacancies = (vacancies, query, filters) => {
    return useMemo(() => {
        let filteredAndSortedArray = [];
        const searchedArray = vacancies.filter(vacancy => vacancy.description.toLowerCase().includes(query.toLowerCase()));

        // console.log(filteredAndSortedArray)
        if (Object.keys(filters).length > 0) {
            console.log('useVacancies - filter');
            // console.log(filters);

            Object.entries(filters).forEach((filter) => {
                filter[1].forEach((item) => {
                    console.log(searchedArray.filter((vacancy) => vacancy[filter[0]].includes(item.name)));
                    filteredAndSortedArray = [...filteredAndSortedArray, searchedArray.filter(
                        (vacancy) => vacancy[filter[0]].includes(item.name)
                    )]
                })
            })
        } else {
            filteredAndSortedArray = searchedArray;
            // console.log(filteredAndSortedArray)
        }
        console.log(filteredAndSortedArray)

        return filteredAndSortedArray;
    }, [query, filters, vacancies]);
}
