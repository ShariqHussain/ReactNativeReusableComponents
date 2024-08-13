import { StyleSheet, Text, View } from "react-native";

// export const Home = (props) => {

//     // params destructuring is an object
//     const {name,age} = props.route.params;
//     return (
//         <View  style = {styles.container}>
//             <Text style={{ fontSize: 30 }}>Home Screen</Text>
//             <Text style={{ fontSize: 30 }}>Name : {name}</Text>
//             <Text style={{ fontSize: 30 }}>Age : {age}</Text>
            
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container : {
//         flex :1,
//         justifyContent : 'center',
//         alignItems : 'center'

//     }

// })


//Uncomment above for passDataNavigationView.js

  const Home = () => {

    // params destructuring is an object
    return (
        <View  style = {styles.container}>
            <Text style={{ fontSize: 30 }}>Home Screen</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex :1,
        justifyContent : 'center',
        alignItems : 'center'

    }

})

export default Home;

