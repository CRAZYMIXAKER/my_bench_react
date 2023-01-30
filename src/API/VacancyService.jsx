import axios from "axios";

export default class VacancyService {
    static async getAll(limit = 30, page = 1) {
        const response = await axios.get('https://mockend.com/CRAZYMIXAKER/my_bench_react/vacancy', {
            params: {
                limit: limit,
                offset: page
            }
        });
        return response;
    }

    static async getById(id) {
        return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }
}