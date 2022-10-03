import React, { useEffect, useState } from 'react'
import {useContext} from 'react'
import Context from "../../DataContext"
import CloseIcon from '@mui/icons-material/Close';



const CRow = ({item, handleDelete}) => {

    const {cartitem, setTotalp, setCartItem} = useContext(Context);

    const [qty , setQty] = useState(item?.qty)
    const singleItem = item?.item;
    
   const handleqty = (val)=>{
    if(val === "dec" ){
        if(qty > 1){
            let tempQty = qty - 1;
            setQty(Number(qty) - 1);
            item.qty = tempQty;
           setCartItem([...cartitem])
        }
    }else{
        let tempQ2 = qty + 1;
        setQty(Number(qty) + 1);
        item.qty = tempQ2;
        setCartItem([...cartitem])
    }

    }

   

    const totalprice = () =>{
        let p = 0
        cartitem.map((itm)=>(
            
           p += itm.item.price * Number(itm.qty)
        ))
        setTotalp(p)
    }
    

    useEffect(() => {  
        totalprice();       
}, [cartitem])

  return (
    <>
        <tr >
        <td>
            <div className='d-flex'>
                <div className='pt-2 me-3' style={{cursor:'pointer'}} onClick={()=>handleDelete(item.item.id)}><CloseIcon/></div>
                <div>
                <img style={{width:"50px",height:"50px"}} src={singleItem?.image} alt="" />
                </div>
                <div className='ms-4'>
                {singleItem?.title}
                </div>
            </div>
            
        </td>
        
        <td>$ {singleItem?.price}</td>
        <td>
            <div className='d-flex justify-content-between qqq' >
                <div><button onClick={()=>handleqty("dec")}>-</button></div>
                <div className=''><h5 className='pt-2'>{qty}</h5></div>
                <div><button onClick={()=>handleqty("asc")} >+</button></div>
            </div>
        </td>
        <td className='text-primary'>$ {(singleItem?.price * qty).toFixed(2)}</td>
      </tr>

     
    </>
  )
}

export default CRow