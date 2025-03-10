import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Container from '@mui/material/Container';
import PageContainer from './container/PageContainer';
import Header from './components/Header';
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateBasket, setDrawer } from './redux/slices/basketSlice';


function App() {


  const {products,drawer,totalAmount} = useSelector((store)=> store.basket)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(calculateBasket())
  }, [])

  return (
   <div>
     <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer className='drawer' anchor='right' open={drawer} onClose={()=>dispatch(setDrawer())} >
         {(
            products && products.map((product) => {
              return(
                <div key={product.id}>
                  <div className='flex-row' style={{padding:"20px"}}>
                    <img style={{marginRight:"5px"}} src={product.image} width={50} height={50}/>
                    <p style={{width:"320px",marginRight:"5px",fontFamily:"arial"}}>{product.title}({product.count})</p>
                    <p style={{fontWeight:"bold",marginRight:"10px", width:"60px"}}>{product.price}$</p>
                    <button style={{padding:"5px", backgroundColor:"#B22222",borderRadius:"5px",border:"none",color:"#fff",width:"40px"}}>Sil</button>
                </div>
                </div>
              )
            })
         )}
          <div>
              <p style={{fontFamily:"arial",fontWeight:"bold",marginLeft:"10px",marginTop:"30px"}}>Toplam Tutar: {totalAmount.toFixed(4)}$</p>
          </div>
        
        </Drawer>
                            
     </PageContainer>
   </div>
  )
}

export default App
