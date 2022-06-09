import { Facebook, Google, Instagram, Telegram, YouTube } from '@mui/icons-material'
import './footer.scss'

const Footer = () => {
  return (
   <div className="footer">
        <div className='mainFooter'>
            <div className="about">
                <img src="https://cdn.alibaba.ir/h2/desktop/assets/images/shawl_logotype-d8721a14.svg" alt="" />
                <p className='tel'>تلفن پشتیبانی:   ۹۸۷۶۵۴۳۲۱۰ </p>
                <p className='address'>دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه چهارم، بن‌بست گل‌ها، پلاک 1</p>
            </div>
            <div className="fLists">
                    <ul className="fList">
                    <li className="fListItem title">تبلیغات در بازار</li>
                    <li className="fListItem">درباره ما </li>
                    <li className="fListItem">تماس با ما </li>
                    <li className="fListItem">توسعه دهندگان</li>
                    <li className="fListItem">فرصت های شغلی</li>
                    <li className="fListItem">جایزه</li>
                    </ul>
                    <ul className="fList">
                    <li className="fListItem title">بلاگ بازار</li>
                    <li className="fListItem">خبرها</li>
                    <li className="fListItem">فنی بازار </li>
                    <li className="fListItem">توسعه دهندگان</li>
                    <li className="fListItem">فرصت های شغلی</li>
                    <li className="fListItem">جایزه</li>
                    </ul>
                    <ul className="fList">
                    <li className="fListItem title">شرایط استفاده</li>
                    <li className="fListItem">حریم خصوصی</li>
                    <li className="fListItem">پشتیبانی </li>
                    <li className="fListItem">توسعه دهندگان</li>
                    <li className="fListItem">فرصت های شغلی</li>
                    <li className="fListItem">جایزه</li>
                    </ul>
            </div>
        </div>
        <div className="subFooter">
            <p>کلیه حقوق این سرویس (وب‌سایت و اپلیکیشن‌های موبایل) محفوظ و متعلق به شرکت سفرهای علی‌بابا می‌باشد. (نسخه 1.98.3.1)</p>
            <div className="social">
                <Facebook className='socialIcon'/>
                <Instagram className='socialIcon'/>
                <Google className='socialIcon'/>
                <Telegram className='socialIcon'/>
                <YouTube className='socialIcon'/>
            </div>
        </div>
   </div>
  )
}

export default Footer