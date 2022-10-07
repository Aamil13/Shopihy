import React, { useState } from 'react'
import {useContext} from 'react'
import Context from "../../DataContext"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


const Row = ({item}) => {
    
     const {cartitem , setCartItem, alreadyad, setAlreadyad} = useContext(Context);
    const [qty , setQty] = useState(1);
    const [check , setCheck] = useState(false);
    

    const handleadditem = () =>{
        const itemtopush = {
          item:item,
          qty : qty,
        }
        if(check == true){

            if(!alreadyad){
              setCartItem([...cartitem, itemtopush])
            window.alert('Item Added to Cart Successfully')
            setAlreadyad(true)
            }else{
              setQty(Number(qty) + 1);
            
              setCartItem([...cartitem, itemtopush])
                window.alert('Quantity Increased')}
        }else{alert("Please check the box")}
      }
      
      const handleqty = (e) =>{
        if(e.target.value >= 1 ){
            setQty(e.target.value);
        }else if(e.target.value < 1){
            setQty(1)
      }
    }

    const handlecheck = ()=>{
        if(check == false){
            setCheck(true)
        }else{setCheck(false) 
        }
    }
   

  return (
    <>
        <tr>
        <td><img style={{width:"50px",height:"50px"}} src={item?.image} alt="" /></td>
        <td className='text-primary'><u>{item?.title}</u></td>
        <td className='text-primary'><u>{item?.color}</u></td>
        <td>{item.stock ? <span className='text-success'><EmojiEmotionsIcon/> In Stock</span>  : <span className='text-secondary'><SentimentVeryDissatisfiedIcon/> out of stock</span>  }</td>
        <td>{item?.price}</td>
        <td className='d-flex gap-2 pb-5 justify-content-end'>
        <div ><input onChange={(e)=>handleqty(e)} value={qty} className='quantity' type="number" /></div>
        <div><button onClick={handleadditem} className='cart px-3 text-light'><ShoppingCartIcon/></button></div>
        <div><input onChange={handlecheck} checked={check} className='checkb' type="checkbox" /></div>
        </td>
      </tr>
    </>
  )
}

export default Row
