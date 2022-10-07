import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import {useContext} from 'react'
import Context from "../../DataContext"
import CRow from './CRow';
import "./qqq.css"
import { useNavigate } from 'react-router-dom';

const Checksum = () => {

  const {cartitem ,totalp, setCartItem,setTotalp} = useContext(Context);

  

  
  
const group = {};

cartitem.forEach(e => {    
   const o =  group[e.item.id] = group[e.item.id] || {...e, qty: 0}
   o.qty += Number(e.qty)
   
})

const res = Object.values(group)






const navigate = useNavigate()
  const handleDelete = (id) =>{
    let newItem = res.filter((item)=>item.item.id !== id)
    setCartItem(newItem)
    window.alert('Product Removed From Cart.')
    if(newItem.length === 0 ){
      setTotalp(0)
    }
  }

  

  return (
    <div className='d-flex justify-content-between p-4'>
        <Table className='w-75' >
      <thead>
        <tr className='' style={{height:'60px'}}>
          <th style={{width:'400px'}} className="text-center pb-3">Product</th>
         
          
        
          <th className='pb-3' style={{width:'150px'}}>Price</th>
          <th className='pb-3' style={{width:'200px'}}>Quantity</th>
          <th className='pb-3' style={{width:'100px'}}>Sub Total</th>
        </tr>
      </thead>
      <tbody className=''>
        
        
       {res?.map((item,idx)=>(
        
          <CRow key={idx} item={item} handleDelete={handleDelete} res={res}/>
       ))}

      </tbody>
      </Table>
      <div className=' ms-3 cc shadow-sm' >
        <h4 className='mt-4 ms-3 fw-bold'>Cart Totals</h4>
        <p className='mt-4 fw-semibold mx-3 d-flex justify-content-between'><div >Sub Total</div> <div className='text-primary'>${(totalp).toFixed(2)}</div></p>
        <hr className='ms-3' style={{width:"270px"}} />
        <p className='fw-bold  mx-3 d-flex justify-content-between fs-5'><div>Total</div> <div className='text-primary'>${(totalp).toFixed(2)}</div> </p>
        <button className='ms-4 bg-primary text-light' onClick={()=>navigate('/thank')}>PROCEED TO CHECKOUT</button>
        
      </div>
    </div>
  )
}

export default Checksum