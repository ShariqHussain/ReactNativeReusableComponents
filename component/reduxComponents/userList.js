import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { getUserList } from '../redux/action'
import { useDispatch, useSelector } from 'react-redux'


const UserList = () =>{
    const dispatch = useDispatch()
    const userList = useSelector((state)=>state.reducer)
   // console.warn("in Component",userList.length);
  
    //console.warn("in Component",userList[0]["users"]);
    const userListData = userList[0]["users"]
    console.warn("in Component", userListData.length)

   useEffect(()=>{
    dispatch(getUserList())
   },[])
    return(
        <View style = {{flex :1}}>
            <ScrollView>
            {
                userListData.length ? userListData.map((item)=>(<Text style = {{fontSize:25}}>{item.firstName}</Text>)) : null
            }
            </ScrollView>
            
        </View>
    )
}



export default UserList;