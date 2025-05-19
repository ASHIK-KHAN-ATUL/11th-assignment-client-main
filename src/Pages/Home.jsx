import React from 'react';
import BookCategories from '../Components/BookCategories';
import BorrowingTipsFAQ from '../Components/BorrowingTipsFAQ ';
import AvialableHotBooks from '../Components/AvialableHotBooks';
import Banners from '../Components/Banners';
import WhyChoseUs from '../Components/WhyChoseUs';
import Contact from '../Components/Contact';
import NeedLibroHub from '../Components/NeedLibroHub';
import UniqeLibroHub from '../Components/UniqeLibroHub';



const Home = () => {
    return (
        <div className='flex flex-col gap-20'>
            <Banners></Banners>
            <BookCategories></BookCategories>
            <BorrowingTipsFAQ></BorrowingTipsFAQ>
            <div className='w-[60%] mx-auto'>
                <AvialableHotBooks></AvialableHotBooks>
            </div>
            <WhyChoseUs></WhyChoseUs>
            <NeedLibroHub></NeedLibroHub>
            <UniqeLibroHub></UniqeLibroHub>
            <Contact></Contact>
        </div>
    );
};

export default Home;