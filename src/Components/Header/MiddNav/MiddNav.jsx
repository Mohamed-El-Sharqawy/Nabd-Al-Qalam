import './middnav.css'
import { HiOutlineShoppingBag } from 'react-icons/Hi'
import { BsSearch } from 'react-icons/Bs'
import { BsPersonBoundingBox } from 'react-icons/Bs'

const MiddNav = () => {
return (
    <>
        <div className="middnav">
            <div className="container-middnav">
                <div className="logo">
                    <a href="#"><img src="/src/assets/Logo_1.jpg" alt="" /></a>
                </div>
                <div className="search">
                    <input type="text" placeholder='Search Here..' />
                    <span><BsSearch /></span>
                </div>
                <div className="cart">
                    <span className='login'><BsPersonBoundingBox /></span>
                    <span className='bag'><HiOutlineShoppingBag />
                        <span className='count'>0</span>
                    </span>
                    <a href="#">
                        <img src="/src/assets/uae.jpg" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </>
)
}

export default MiddNav