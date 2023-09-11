import './landing.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { TbHeartPlus } from 'react-icons/tb'
import { AiOutlineStar } from 'react-icons/ai'
// import { BsEye } from 'react-icons/Bs'
const Landing = () => {
const responsive = {
    superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
    },
    desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
    },
    tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
    },
    mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
    }
};
return (
    <>
        <div className="images-container">
                    <h1>Best Sellers</h1>
            <div className="cards">
                <div className="slider">
                    <Carousel responsive={responsive}>
                        <div className="book-img">
                            <img src="/src/assets/حكايات وردان.jpeg" alt="" />
                        </div>
                        <div className="book-img">
                            <img src="/src/assets/زايد نبراس الحكمه.jpeg" alt="" />
                        </div>
                        <div className="book-img">
                            <img src="/src/assets/فكر و العب.JPG" alt="" />
                        </div>
                        <div className="book-img">
                            <img src="/src/assets/مغامرات فى ارض الفايكنج.JPG" alt="" />
                        </div>
                        <div className="book-img">
                            <img src="/src/assets/أنبياء الله فى قصصهم عبره.jpeg" alt="" />
                        </div>
                        <div className="book-img">
                            <img src="/src/assets/المسبار الجديد 1.JPG" alt="" />
                        </div>
                        <div className="book-img">
                            <img src="/src/assets/الدوده مورى.JPG" alt="" />
                        </div>
                        <div className="book-img">
                            <img src="/src/assets/كوكب الوفاق.jpeg" alt="" />
                        </div>
                    </Carousel>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/أنبياء الله فى قصصهم عبره.jpeg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>God’s prophets in their stories are examples</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                            {/* <BsEye /> */}
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/أشعه اكس.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>X-Ray</p>
                        <span className='price'>20 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/اخبرني عن خوفك.jpg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Tell me about your fear</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/اسرار الفضاء مع هزاع و أصدقائه.jpeg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Space secrets with Hazza and his friends.</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/اصابع مشغوله.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Busy fingers</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/الأخطبوط المشاكس.jpg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>The naughty octopus</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/الاحلام.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>The dreams</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/الاخرين.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Others</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/البيئه.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Environment</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/الدوده مورى.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Worm murray</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/السنع.jpeg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>The metacarpals</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/الصيد المين.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Precious catch</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="banner">
                    <img src="/src/assets/poster_half_page.jpeg" alt="" />
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/المسبار الجديد 1.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>The new probe</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/بدر و شمس.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Badr and shams</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/بدر و بدور فى الرياضيات.jpeg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Badr and bdur in mathematics</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/بدر و بدور فى الفضاء.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Badr and bdur in space</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/بدر و بدور فى خليه النحل.jpeg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Badr and bdur in the beehive</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/تأملات فى الايات و الاحاديث.jpeg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Reflections on verses and hadiths</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/تباشير رمضان.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Ramadan good news</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/تنميه الشباب العربى.jpeg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Arab youth development</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/ثلاث جدائل.jpg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Three strands</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/جدتي نجيبة.jpg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>My grandmother Najibeh</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/حرف بلا نقطه.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Character without a dot</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/حسام و يوم الامتحان.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Hossam and the day of the exam</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/حلم طل.jpg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>A dream came true</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/دوما بأمان.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>ِAlways safe</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/ذات نهار.jpg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>One day</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/رحله فى عقل نمله.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>A journey into the mind of an ant</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/زايد نبراس الحكمه.jpeg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Zayed Nebras wisdom</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/شجاعه سوسن.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Sawsan’s courage</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/ضياء و تاج النور.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Diya and the crown of light</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/فتيات متألقات.jpeg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Sparkling girls</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/فكر و العب.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Think and play</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/كنت شجره.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>I was a tree</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/كوكب الوفاق.jpeg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Planet Accord</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/لا احب الغضب.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>I don’t like anger</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/لماذا بيتي لايطير.jpg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Why doesn’t my house fly?</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/ليالى جدتى سلامه.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Slamah’s grandmother’s nights</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/مغامرات فى ارض الفايكنج.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Adventures in the land of the Vikings</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/مفاتيح النجاح.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Keys to success</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/من أين يأتي الضجيج.jpg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Where does the noise come from?</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/نرفض.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>We refuse</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/هو انسان.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>He is a human</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/وردان يروى.jpeg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Wardan narrates</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/وردان يخط.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Wardan is writing</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/وردان يلعب.jpeg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Wardan is playing</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/وردان يسبح.JPG" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Wardan is swimming</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/وردان يتدرب.jpeg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Wardan is training</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/وردان يبستن.jpeg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>Wardan is gardening</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-img">
                        <img src="/src/assets/يوميات ايباد.jpg" alt="" />
                    </div>
                    <div className="card-caption">
                        <p className='caption'>iPad diary</p>
                        <span className='price'>19 AED</span>
                    </div>
                    <div className="shopping">
                        <div className="icons">
                            <TbHeartPlus />
                            <AiOutlineStar />
                        </div>
                        <button className="btn">Add to cart</button>
                    </div>
                </div>
                {/* <div className="banner">
                    <img src="/src/assets/poster_half_page.jpeg" alt="" />
                </div> */}
            </div>
        </div>
    </>
)
}
export default Landing