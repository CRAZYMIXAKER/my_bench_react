import {useMemo} from "react";

export const useVacancies = (vacancies, query, filters) => {
    return useMemo(() => {
        const filteredAndSortedArray = vacancies.filter(vacancy => vacancy.description.toLowerCase().includes(query.toLowerCase()));

        // setFiltered(sorted);
        console.log(filteredAndSortedArray)
        if (Object.keys(filters).length > 0) {
            console.log('useVacancies - filter');
            console.log(filters);

            Object.entries(filters).forEach((filter) => {
                filter[1].forEach((item) => {
                    // setFiltered((filtered) => {
                    //     return [...filtered, searchedVacancies.filter(vacancy => vacancy[filter[0]].includes(item.name))]
                    // });
                })
            })

        }

        return filteredAndSortedArray;
    }, [query, filters, vacancies]);
}
