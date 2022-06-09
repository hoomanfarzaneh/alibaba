import './header.scss'
import { AirplanemodeActiveOutlined, AirportShuttleOutlined, DirectionsTransitOutlined, FestivalOutlined, FlightTakeoffOutlined, HomeWorkOutlined, LuggageOutlined} from '@mui/icons-material';
const Header = () => {
  return (
    <div className="header">
        <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-770e8dd7.webp" alt="" />
        <div className="mainHeader">
            <div className="headerList">
                <div className="headerListItem">
                    <AirplanemodeActiveOutlined className="headerIcon active"/>
                    <span className='active'>پرواز داخلی</span>
                </div>
                <div className="headerListItem">
                    <FlightTakeoffOutlined className="headerIcon"/>
                    <span>پرواز خارجی</span>
                </div>
                <div className="headerListItem">
                    <DirectionsTransitOutlined className="headerIcon"/>
                    <span>قطار</span>
                </div>
                <div className="headerListItem">
                    <AirportShuttleOutlined className="headerIcon"/>
                    <span> اتوبوس</span>
                </div>
                <div className="headerListItem">
                    <LuggageOutlined className="headerIcon"/>
                    <span>تور </span>
                </div>
                <div className="headerListItem">
                    <HomeWorkOutlined className="headerIcon"/>
                    <span>هتل </span>
                </div>
                <div className="headerListItem">
                    <FestivalOutlined className="headerIcon"/>
                    <span>اقامتگاه </span>
                </div>
            </div>
            <hr />
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <input className="inputStart" type="text" placeholder='مبدا' />
                    <input className="inputEnd" type="text" placeholder='مقصد' />
                </div>
                <div className="headerSearchItem">
                    <input className="inputStart" type="text" placeholder='تاریخ رفت' />
                    <input className="inputEnd" type="text" placeholder='تاریخ برگشت' />
                </div>
                <input className="personItem" type="text" placeholder='تعداد نفرات' />
                <button>جستجو</button>
            </div> 
        </div>   
    </div>
  )
}

export default Header