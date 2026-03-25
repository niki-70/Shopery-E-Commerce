import React from 'react'
import HeroSection from './Sections/HeroSection'
import FeaturedServices from './Sections/FeaturedServices'
import DealOfTheMonth from './Sections/DealOfTheMonth'
import AboutSection from './Sections/AboutSection'
import Banner from './Sections/Banner'
import Logos from './Sections/Logos'
import ContactSection from './Sections/ContactSection'
import ProductsSection from './Sections/ProductsSection'

const Home = () => {
    return (
        <>
            <HeroSection />
            <FeaturedServices />
            <div className=' bg-gray-100'>
                <ProductsSection />
            </div>
            <AboutSection />
            <DealOfTheMonth />
            <Banner />
            <Logos />
            <ContactSection />
        </>
    )
}

export default Home
