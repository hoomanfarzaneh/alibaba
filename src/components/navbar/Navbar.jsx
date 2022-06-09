import './navbar.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="right">
            <img src="https://seeklogo.com/images/A/alibaba-logo-38978598F1-seeklogo.com.png" alt="" />
            <div className="tabs">
                <span className='flyTab'>
                    <p>پرواز</p>
                    <KeyboardArrowDownIcon className='icon' />
                </span>
                <span className='vr'></span>
                <p>قطار</p>
                <span className='vr'></span>
                <p>اتوبوس</p>
                <span className='vr'></span>
                <p>تور</p>
                <span className='vr'></span>
                <p>هتل</p>
                <span className='vr'></span>
                <p>ویلا و اقامتگاه</p>
                <span className='vr'></span>
                <span className='flyTab'>
                    <p>بیشتر</p>
                    <KeyboardArrowDownIcon className='icon' />
                </span>
            </div>
        </div>
        <div className="left">
            <div className='check'> 
                <span><FactCheckOutlinedIcon /></span>
                 <p>پیگیری خرید </p>
            </div>
            <div className='check'>
                <span><PersonOutlineOutlinedIcon /></span>
                <p>ورود یا ثبت نام</p> 
            </div>
        </div>
    </div>
  )
}

export default Navbar