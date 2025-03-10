import React, { useState } from 'react'
import '../css/Header.css'
import logo from '../images/logo2.png'
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Home from '../pages/Home';
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import Drawer from '@mui/material/Drawer';
import { setDrawer } from '../redux/slices/basketSlice';
import { filterProducts } from '../redux/slices/productSlice';


function Header() {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [theme,setTheme] = useState(false)    

    //Filtreleme için arama çubuğu statei
    const [searchItem, setSearchItem] = useState('')
 
    //Tema değiştirme
    const changeTheme = () => {
        const root = document.getElementById("root")

        if(theme){
            root.style.backgroundColor="black"
            root.style.color="white"
        }
        else{
            root.style.backgroundColor="white"
            root.style.color="black"
        }

        setTheme(!theme)
    }

    //Filtreleme
    const handleSearch = (e) => {
        setSearchItem(e.target.value)
        dispatch(filterProducts(e.target.value))
    }

    const {products} = useSelector((store)=>store.basket)


  return (
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px"}}>
        <div className='flex-row' onClick={() => navigate("/")}>
            <img className='logo' src={logo}/>
            <p className='logo-text'>Çalışkanlar Market</p>
        </div>
        <div className='flex-row'>
            <input className='search-input' type="text" placeholder='Bir şeyler ara:'
            value={searchItem} onChange={handleSearch}/>
            <div>
                {
                    theme ?  <FaRegMoon className='icon-theme' onClick={changeTheme}/> : <CiLight className='icon-theme' onClick={changeTheme}/>
                }
                <Badge onClick={()=>dispatch(setDrawer())} badgeContent={products.length} color="error">
                    <CiShoppingBasket style={{marginRight:"6px"}} className='icon'/>
                </Badge>
                
               
            </div>


        </div>
    </div>
  )
}

export default Header