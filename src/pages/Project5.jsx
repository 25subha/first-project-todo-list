import React, { useEffect, useState } from 'react'
import Category from '../components/Category'
import Product from '../components/Product'
import axios from 'axios';


const Project5 = () => {
  let [finalcat, setFinalcat] = useState([]);
  let [finalPro, setFinalPro] = useState([]);
  let [catName, setCatName] = useState('');
  let [loding, setLoding] = useState(false)
  let getCategory = () => {
    axios.get("https://dummyjson.com/products/category-list")
    .then((res)=>res.data)
    .then((finalres) => {
      setFinalcat(finalres)
    })
  };

  let getProduct = () => {
    axios.get("https://dummyjson.com/products")
    .then((respro) => respro.data)
    .then((finalres) => {
      setFinalPro(finalres.products)
      // console.log(finalPro)
    })
  }

  useEffect(() => {
    getCategory()
    getProduct()
    setLoding(true)
  },[]);
   useEffect(() => {
    if (catName !== '') {
      axios.get( `https://dummyjson.com/products/category/${catName}`)
      .then((rescat) => rescat.data)
      .then((finalcat)=> {
        setFinalPro(finalcat.products)
        setLoding(false)
      })
    }
   },[catName])
  return (
    <div>
        <div className='max-w-[1320px] mx-auto my-16 '>
            <h1 className='text-center text-[40px] font-bold pb-12 '>product</h1>
            <div className='grid grid-cols-[30%_auto] gap-20'>
                <div className='' >
                    <Category Finalcat ={finalcat} setCatName={setCatName}/>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    <Product finalPro ={finalPro} />
                    <img src="https://cdn.pixabay.com/animation/2023/11/30/10/11/10-11-02-622_256.gif" className={` ${loding ? '' : 'hidden'}`} alt="" />
                    
                   
                </div>
                </div>
        </div>
    </div>
  )
}

export default Project5