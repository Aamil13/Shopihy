import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import "./main.css"
import Header from "../Navbar/Header";
import Row from "../Row/Row";
import {useContext} from 'react'
import Context from "../../DataContext"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

const Main = () => {
  const {predata, updateData, setUpdateData} = useContext(Context);
  const [nameSort, setNameSort] = useState(true)

  
const handleSort = (val)=>{
  let newData = predata;
  if(val === 'name'){
    if(nameSort === true){
      newData.sort((a,b)=>a.title.localeCompare(b.title));
      setNameSort(false)
      setUpdateData([...newData])
    }else{
      newData.sort((a,b)=>b.title.localeCompare(a.title));
      setNameSort(true)
      setUpdateData([...newData])
    }
    
  }else if(val === 'color'){
    if(nameSort === true){
      newData.sort((a,b)=>a.color.localeCompare(b.color));
      setNameSort(false)
      setUpdateData([...newData])
    }else{
      newData.sort((a,b)=>b.color.localeCompare(a.color));
      setNameSort(true)
      setUpdateData([...newData])
    }
  }else if(val === 'stock'){
    if(nameSort === true){
      newData.sort((a,b)=>a.stock - b.stock);
      setNameSort(false)
      setUpdateData([...newData])
    }else{
      newData.sort((a,b)=>b.stock - a.stock);
      setNameSort(true)
      setUpdateData([...newData])
    }
  }else if(val === 'price'){
    if(nameSort === true){
      newData.sort((a,b)=>a.price - b.price);
      setNameSort(false)
      setUpdateData([...newData])
    }else{
      newData.sort((a,b)=>b.price - a.price);
      setNameSort(true)
      setUpdateData([...newData])
    }

}
}


  return (
   
      <>
      <Header/>
      {updateData.length ?
    <Table>
      <thead>
        <tr className='bg-light'>
          <th style={{width:'100px'}}>Images </th>
          <th style={{width:'400px',cursor:'pointer'}} onClick={()=>handleSort('name')}> Name <UnfoldMoreIcon/> </th>
          <th style={{width:'200px',cursor:'pointer'}} onClick={()=>handleSort('color')}>Color <UnfoldMoreIcon/></th>
          <th style={{width:'200px',cursor:'pointer'}} onClick={()=>handleSort('stock')}>Stock <UnfoldMoreIcon/></th>
          <th style={{width:'200px',cursor:'pointer'}} onClick={()=>handleSort('price')}>Price <UnfoldMoreIcon/></th>
          <th style={{width:'300px'}} className='text-end'>Buy </th>
        </tr>
      </thead>
      <tbody>
        
       
      { updateData.map((item,indx)=>(
        <Row key={indx} item={item}/>
       ))} 
       
       

       

      </tbody>
    </Table> :
    <h1 className='fw-light my-5 text-center text-secondary w-100'>No Item Found</h1>
}
    </>

  )
}

export default Main