import './topnav.css'
import { FiPhoneCall } from 'react-icons/Fi'
import { FiMail } from 'react-icons/Fi'

const TopNav = () => {
    return (
        <>
            <div className="topnav">
                <div className="container-topnav">
                    <div className="contact">
                        <p> +971504880044 <FiPhoneCall /></p>
                    </div>
                    <div className="mail">
                        <a href="#">sales@nabdualqalam.ae <FiMail /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNav