import React from 'react'

const Thank = () => {
  return (
    <div className='my-5 p-5 text-center'>
        <h1 className='fw-light'>Thank You For Shopping With Us.</h1>
        <h4 className='fw-light'>Do visit again for more exciting and offers.</h4>

        <div className='d-flex justify-content-center'>
            <button className='btn btn-primary my-5' onClick={()=> window.location.href='/'}>Continue Shopping</button>
        </div>
    </div>
  )
}

export default Thank