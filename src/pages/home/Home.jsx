import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import './home.scss'
import { Android, Apple, ChevronLeft } from '@mui/icons-material';
import AccordionText from '../../components/accordion/AccordionText';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
    <Navbar />
    <Header /> 
    <div className="home">
        <img className='newsImg' src="https://cdn.alibaba.ir/h2/desktop/assets/images/breaking-news/1001safar-ea54cffc.png" alt="" />
        <div className="app">
          <div className="appDesc">
            <img className="qrImg" src="https://cdn.alibaba.ir/h2/desktop/assets/images/app-mobile/qrcode-97ae53b8.jpg" alt="" />
            <div className="appDetails">
              <h1>اپلیکیشن علی بابا</h1>
              <h2>سریع و مطمعن تر به سفر بروید</h2>
              <div className="downloadLink">
                <h3>مشاهده لینک های دانلود </h3>
                <ChevronLeft />
              </div>
              <div className="installLink">
                <Android />
                <Apple />
                <h4>قابل نصب بر روی android و ios</h4>
              </div>
            </div>
          </div>
          <img className='appImg' src="https://cdn.alibaba.ir/h2/desktop/assets/images/app-mobile/app-mobile@4x-a456f355.webp" alt="" />
        </div>
      <AccordionText />
      <Footer />
    </div>
    </>
  )
}

export default Home