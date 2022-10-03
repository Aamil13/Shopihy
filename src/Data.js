import React,{useEffect} from 'react'
import axios from 'axios'
import {useContext} from 'react'
import Context from "./DataContext"

const Data = () => {

    const {setPreData,setUpdateData} = useContext(Context);
    

   

    const callApi = async()=>{
       
       try{
        let res = await axios.get('https://fakestoreapi.com/products?limit=10');
        if(res?.data?.length){
            res?.data.map((item,i)=>{
                return i%2 ? (item.color = "red", item.stock = true, item.size = ['S','M']) : (item.color = 'black', item.stock = false, item.size = ['L','XL'])
            })
            setPreData(res.data)
            setUpdateData(res.data)
            
        }
       }catch(err){
            console.log(err)
       }
    }


     useEffect(() => {
        callApi()
            
    },[])

    

  return (
    <>

    
    </>
  )
}

export default Data