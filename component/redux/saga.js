import {put, take, takeEvery} from 'redux-saga/effects'
import { USER_LIST, SET_USER_DATA } from './constants';
function* userList()
{
    let url = 'https://dummyjson.com/users'
    let data = yield fetch(url)
    data = yield data.json()
   // console.warn(data);
    yield put({type:SET_USER_DATA,data})
}


function* SagaData()
{
 yield takeEvery(USER_LIST,userList)
}

export default SagaData;