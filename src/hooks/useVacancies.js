import {useMemo, useState} from "react";

export const useVacancies = (vacancies, query, filters) => {
    const [result, setResult] = useState(vacancies);

    const searchedVacancies = useMemo(() => {
        const sorted = vacancies.filter(vacancy => vacancy.description.toLowerCase().includes(query.toLowerCase()));
        setResult(sorted);
        return sorted;
    }, [vacancies, query]);

    const filteredVacancies = useMemo(() => {
        const sorted = [];

        if (Object.keys(filters).length > 0) {
            console.log('useVacancies - filter')
            // console.log(Object.entries(filters)[0][0]);
            // console.log(Object.entries(filters)[0][1][0].name);

            const sorted = searchedVacancies.filter(vacancy => vacancy.role.includes('PM'));
            setResult(sorted);

            // result = Object.entries(filters).map(filter =>
            // vacancies.filter[0].includes(filter[1][0].name));

            // result = Object.entries(filters).map(filter => result.filter(vacancy => {
            //     console.log(filter[1][0].name);
            //     return vacancy[filter[0]].includes(filter[1][0].name);
            // }));

            // return Object.entries(filters).map(filter => vacancies.filter[0].includes(filter[1][0].name));
        }

        return sorted;
    }, [filters, query]);

    return result;
}
