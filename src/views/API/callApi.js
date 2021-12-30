import { axios } from "axios";

const callApi = (valueKeySearch = '', page = 1, type = 0) => {
    const state = {
        option: {
            URL_API: 'https://api.themoviedb.org/3/movie',
            TYPE_API: 'popular',
            KEY_API: 'api_key=060b588ac069998e4bd8b640b6ecacaa',
            LANGUAGE_API: 'language=en-US',
            PAGE_API: page
        },
        optionSearch: {
            URL_API_SEARCH: `https://api.themoviedb.org/3/search/movie?query=${valueKeySearch}`,
            gay: 'https://api.themoviedb.org/3/search/movie?query=gay&api_key=060b588ac069998e4bd8b640b6ecacaa'
        }
    }
    const axiosFetch = async () => {
        const { URL_API, TYPE_API, KEY_API, LANGUAGE_API, PAGE_API } = state.option
        const { URL_API_SEARCH } = state.optionSearch
        const link = `${URL_API}/${TYPE_API}?${KEY_API}&${LANGUAGE_API}&page=${PAGE_API}`,
            linkSearch = `${URL_API_SEARCH}&${KEY_API}&page=${PAGE_API}`
        if (type == 0) {
            let listData = {}
            await require('axios').get(link)
                .then((res) => listData = res.data)
                .catch((err) => console.log(err))
            return listData;
        } else if (type == 1) {
            let listData = {}
            await require('axios').get(linkSearch)
                .then((res) => listData = res.data)
                .catch((err) => console.log(err))
            return listData;
        }
    }
    const results = axiosFetch()
    return results;
}
export default callApi;