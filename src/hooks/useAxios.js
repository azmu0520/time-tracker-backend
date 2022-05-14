import axios from 'axios'

const { REACT_APP_BASE_URL } = process.env
export const useAxios = () => {
    const request = async ({
        url = '',
        method = 'get',
        body = null,
        headers = {},
        includeToken = true
    }) => {
        return await axios({
            method,
            url: `${REACT_APP_BASE_URL}${url}`,
            data : {
                ...body
            },
            headers: {
                Authorization : `${
                    includeToken && `Bearer ${localStorage.getItem('token')}`
                }`,
                "Content-Type": "application/json",
                ...headers,
            }
        }).then((res) => res).catch(err => err)
    }
    return {request}
}
