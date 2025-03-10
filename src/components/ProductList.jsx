import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice';
import Product from '../components/Product';

function ProductList() {

    const dispatch = useDispatch();
    const {products,filteredProducts} = useSelector((store)=> store.product)

    // console.log("Products:" , getAllProducts)
    // console.log("Filtered products: ", filteredProducts)

    useEffect(()=>{
        dispatch(getAllProducts())
    },[])

  return (
    <div className='flex-row' style={{flexWrap:"wrap", marginTop:"25px"}}>
        {
            filteredProducts && filteredProducts.map((product)=>{
                return <Product key={product.id} product={product}/>
            })
        }
    </div>
  )
}

export default ProductList