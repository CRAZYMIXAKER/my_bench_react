import {useMemo, useState} from "react";

export const useVacancies = (vacancies, query, filters) => {
    const [result, setResult] = useState(vacancies);

    const filteredAndSearchedVacancies = useMemo(() => {

        if (query) {
            console.log('asda');
            setResult(result.filter(vacancy => vacancy.description.toLowerCase().includes(query.toLowerCase())));
        }

        if (Object.keys(filters).length > 0) {
            console.log('jjjjj')
            // console.log(Object.entries(filters)[0][0]);
            // console.log(Object.entries(filters)[0][1][0].name);

            // result = result.filter(vacancy => vacancy.role.includes('Designer'));
            // result = Object.entries(filters).map(filter => vacancies.filter[0].includes(filter[1][0].name));

            // result = Object.entries(filters).map(filter => result.filter(vacancy => {
            //     console.log(filter[1][0].name);
            //     return vacancy[filter[0]].includes(filter[1][0].name);
            // }));

            console.log(filters);
            console.log(result);

            // return Object.entries(filters).map(filter => vacancies.filter[0].includes(filter[1][0].name));

        }

        return result;
    }, [vacancies, query, filters]);

    return filteredAndSearchedVacancies;
}
