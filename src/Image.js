import React from 'react'
import YonceBlake from './YonceBlake.jpg'

console.log(YonceBlake)
class Image extends React.Component{
 render(){
   return <img src={YonceBlake} alt = ""/>;
 }
}

export default Image;
