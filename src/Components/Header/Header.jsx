import BottomNav from './BottomNav/BottomNav'
import MiddNav from './MiddNav/MiddNav'
import TopNav from './TopNav/TopNav'
import './header.css'
const Header = () => {
return (
    <div>
        <TopNav />
        <MiddNav />
        <BottomNav />
    </div>
)
}

export default Header