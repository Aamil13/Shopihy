import React,{useState} from 'react'
import {Link} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Header.css"
import {Undo} from "@mui/icons-material"
import {useContext} from 'react'
import Context from "../../DataContext"


const Header = () => {
  const {predata, updateData, setUpdateData} = useContext(Context);
  const [cat, setCat] = useState('')
  const [sz, setSz] = useState('')

  const sortByCat = (val)=>{
    setCat(val)
    let newData = predata;
    if(val !== 'all'){
      let catData = newData.filter((item)=> item.category === val)
      setUpdateData(catData)
    }else{
      setUpdateData(newData)
    }
  }

  const sortBySize = (val)=>{
    setSz(val)
    let newData = updateData.length ? updateData :  predata;
    if(val !== 'all'){
      let sizeData = newData.filter((item)=> item.size.includes(val))
      setUpdateData(sizeData)
    }else{
      setUpdateData(newData)
    }
  }

  const reset = ()=>{
    setSz('')
    setCat('')
    setUpdateData(predata)
    
  }

  const handleSearch = (val) =>{
    let newData = predata;
    let searchedData = newData.filter((x)=>x.title.toLowerCase().includes(val.toLowerCase()))
  
      setUpdateData(searchedData)
  }

  return (
    <>
      {[ 'xl'].map((expand) => (
        <Navbar key={expand}  expand="md" className="mb-3">
          <Container fluid>
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Shopihy
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <div className='w-100 d-flex gap-2 nav-flex'>
                <div className=''>
                    <select className='hselect' value={cat} onChange={(e)=>sortByCat(e.target.value)} >
                        <option className='op' value="jewelery">Jewelery</option>
                        <option value="" selected hidden ></option>
                        <option className='op' value="electronics">Electronics</option>
                        <option className='op' value="men's clothing">Clothing</option>
                        <option className='op' value="all">All</option>
                    </select>
                </div>

                <div className=''>
                    <select className='hselect' value={sz} onChange={(e)=>sortBySize(e.target.value)} >
                        <option className='op' value="S">S</option>
                        <option value="" selected hidden >size</option>
                        <option className='op' value="M">M</option>
                        <option className='op' value="L">L</option>
                        <option className='op' value="XL">XL</option>
                        <option className='op' value="all">All</option>
                    </select>
                </div>

                <button className='btt text-primary nw' onClick={reset}><Undo/> reset</button>
            </div>
                
               <div className='d-flex gap-2 nw'>
                <label >Search:</label>
                <input className='search' type="text" onChange={(e)=>handleSearch(e.target.value)}/>
               </div>

               <div className='nw'><Link to="/cart"> <button className='addtoc'>Add to cart</button></Link></div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Header