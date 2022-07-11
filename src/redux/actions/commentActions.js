import axios from 'axios';
import apiUrl from '../../url';

const commentsActions = {
   
    addComment: (comment) => {

        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {

            if (comment.comment !== "") {
                const res = await axios.post(`${apiUrl}mytinerary/itineraries/comment`, { comment }, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
                return res
            }
            else {
                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        view: true,
                        message: "Enter a comment to save it",
                        success: false
                    }
                })
            }
        }

    },
    
    modifiComment: (commentData) => {

        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.put(`${apiUrl}mytinerary/itineraries/comment/edit`, { commentData }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            dispatch({
                type: 'MESSAGE',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })

            return res
        }
    },
    deleteComment: (id) => {

        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post(`${apiUrl}mytinerary/itineraries/comment/${id}`, {}, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }

            })
            dispatch({
                type: 'MESSAGE',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        }
    },

}

export default commentsActions;