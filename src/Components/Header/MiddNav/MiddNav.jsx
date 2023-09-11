import './middnav.css'
import { HiOutlineShoppingBag } from 'react-icons/Hi'
import { BsSearch } from 'react-icons/Bs'
<<<<<<< HEAD
=======
import { BsPersonBoundingBox } from 'react-icons/Bs'

>>>>>>> 0a3d97895db48b85c1dfec4729ec437316ff60d8
const MiddNav = () => {
return (
    <>
        <div className="middnav">
<<<<<<< HEAD
            <div className="container-midd">
=======
            <div className="container-middnav">
>>>>>>> 0a3d97895db48b85c1dfec4729ec437316ff60d8
                <div className="logo">
                    <a href="#"><img src="/src/assets/Logo_1.jpg" alt="" /></a>
                </div>
                <div className="search">
                    <input type="text" placeholder='Search Here..' />
                    <span><BsSearch /></span>
                </div>
                <div className="cart">
<<<<<<< HEAD
                    <span><HiOutlineShoppingBag /></span>
                    <span className='count'>0</span>
=======
                    <span className='login'><BsPersonBoundingBox /></span>
                    <span className='bag'><HiOutlineShoppingBag />
                        <span className='count'>0</span>
                    </span>
                    <a href="#">
                        <img src="/src/assets/uae.jpg" alt="" />
                    </a>
>>>>>>> 0a3d97895db48b85c1dfec4729ec437316ff60d8
                </div>
            </div>
        </div>
    </>
)
}

export default MiddNav