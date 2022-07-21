import axios from 'axios'

export const getNews = () => {
    const url = 'https://api.spaceflightnewsapi.net/v3/articles'
    const params = {_limit: 5}
    return axios.get(url, {params})
}

export const getBlogPosts = () => {
    const url = 'https://api.spaceflightnewsapi.net/v3/blogs'
    const params = {_limit: 5}
    return axios.get(url, {params})
}