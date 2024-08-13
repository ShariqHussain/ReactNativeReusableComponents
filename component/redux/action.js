import {ADD_TO_CART, USER_LIST} from './constants'
import {REMOVE_FROM_CART} from './constants'

export function addTocart(item)
{
    return{
        type : ADD_TO_CART,
        data : item
    }
}

export function removefromcart(item)
{
    return{
        type : REMOVE_FROM_CART,
        data : item
    }
}


export function getUserList()
{
    return{
        type : USER_LIST
    }
}

