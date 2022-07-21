import axios from 'axios'

type ParamsApi = {
    _limit: number
}
export const getNews = (): Promise<any> => {
    const url: string = 'https://api.spaceflightnewsapi.net/v3/articles'
    const params: ParamsApi = {_limit: 5}
    return axios.get(url, {params})
}

export const getBlogPosts = (): Promise<any> => {
    const url: string = 'https://api.spaceflightnewsapi.net/v3/blogs'
    const params: ParamsApi = {_limit: 5}
    return axios.get(url, {params})
}