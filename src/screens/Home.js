import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div>
            <div><Navbar /></div>
            <div>
                <div className="card mt-3 w-50" style={{"width":"18rem;" , "maxHeight":"360px"}}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is important text</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100  bg-success'>
                                {Array.from(Array(6),(e,i)=>{
                                    return(
                                        <option key={i+1} value={i+1}>{i+1}</option>
                                    )
                                })}
                            </select>
                            
                            <select className='m-2 h-100  bg-success rounded'>
                                <option value="half" >Half</option>
                                <option value="full" >Full</option>
                            </select>

                            <div className='d-inline h-100 fs-5'>
                                total  Price
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div><Footer></Footer></div>
        </div>
    )
}
