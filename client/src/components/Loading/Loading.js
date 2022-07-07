import React from 'react';
import gif from '../../assets/Fidget-spinner.gif';
import styles from './loading.module.css';

export default function Loading ({setLoading}){
 return(
     <div>
         <div className = { styles.loader }>
             <img src= { gif } alt=''/>
         </div>
         <div>
             {
                 setTimeout(() =>{
                     setLoading(false)
                 }, 2000)
             }
         </div>
     </div>
 )
}