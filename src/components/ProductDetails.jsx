import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket } from '../redux/slices/basketSlice';

function ProductDetails() {

    const {id} = useParams()
    //productSlice'daki products listesini çekiyorum. Store'da product diye kayıtlı
    const {products,selectedProduct} = useSelector((store)=>store.product)

    const {price,image,title,description} = selectedProduct

    const [count,setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const dispatch = useDispatch(0)

    useEffect(()=>{
        getProductById()
    },[])

    const getProductById = ()=>{
        products && products.map((product)=>{
            if(product.id == id){
                dispatch(setSelectedProduct(product))
            }
        })
    }

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }

        dispatch(addToBasket(payload))
    }

  return (
    <div style={{marginTop:"30px",display:"flex",flexDirection:"row",justifyContent:"center"}}>
        <div style={{marginRight:"45px"}}>
            <img src={image} width={275} height={400} style={{border:"1px solid lightgrey", boxShadow:"1px 4px 3px lightgray", borderRadius:"5px", padding:"30px"}}  />
        </div>
        <div>
            <h1 style={{fontFamily:"arial", fontSize:"35px"}}>
                {title}</h1>
            <hr />
            <h3 style={{fontFamily:"tohama",fontSize:"20px"}}>
                {description}</h3>
            <hr />
            <h1 style={{fontSize:"50px",fontFamily:"arial",fontWeight:"bold",color:"#B22222"}}>
                {price}$</h1>

            <div style={{display:"flex", alignItems:"center"}}>
                <CiCirclePlus onClick={increment} style={{fontSize:"40px",marginRight:"15px", cursor:"pointer"}}/>
                <span style={{fontSize:"35px"}}>{count}</span>
                <CiCircleMinus onClick={decrement} style={{ cursor:"pointer",  fontSize:"40px", marginLeft:"15px"}}/>
            </div>

            <div>
                <button 
                onClick={addBasket}
                style={{marginTop:"25px", 
                border:"none", 
                padding:"15px",
                cursor:"pointer",
                backgroundColor:"#B22222",
                borderRadius:"5px",
                color:"white",
                fontWeight:"bold",
                fontSize:"20px"}}>
                Sepete Ekle</button>
            </div>

        </div>
        
        
    </div>
  )
}

export default ProductDetails