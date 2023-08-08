import axios from 'axios';

export const GET_PERSON ='GET_PERSON';
export const GET_PERSON_SUCCESS = 'GET_PERSON_SUCCESS';
export const GET_PERSON_ERROR= 'GET_PERSON_ERROR'
export const SET_IS_FETCHING = 'SET_IS_FETCHING'


export const getPerson=()=>dispatch=>{
    //表明正在进行数据处理----setIsFetching(true)
    dispatch(setIsFetching(true))
    axios.get('https://randomuser.me/api/')
         .then(res=>{
            //console.log(res.data.results)
             dispatch(getPersonSuccess(res.data.results[0]))
         })
         .catch(err=>{
            //console.log(err.response)
             const information = `${err.response.status}:${err.response.data}`
             console.log(information)
             dispatch(getError(information))
         })
     return {type:"GET_PERSON",payload:{data:'hello'}}   
//return {type:"GET_PERSON",payload:{data:'hello'}}   
//它只是为了保证在 getPerson 被调用时有一个默认的 action 被分发，以避免出现异常情况。
//真正的用户数据获取和状态更新是通过 getPersonSuccess 和 getError 函数中的 action 来实现的。
}
const setIsFetching=(isFetching)=>{
    return{type:SET_IS_FETCHING,payload:isFetching}
}
const getPersonSuccess=(person)=>{
    return{type:GET_PERSON_SUCCESS,payload:person}
}

const getError=(infor)=>{
    return { type: GET_PERSON_ERROR ,payload:infor}
}

