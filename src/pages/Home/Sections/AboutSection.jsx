import React from 'react'
import Button from '../../../components/common/Button/Button'
import about from "../../../assets/Images/sections/about.png";
import Check from "../../../assets/Images/icons/Check.png";
import rightArrow from "../../../assets/Images/icons/rightArrow.png";

const AboutSection = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="grid grid-cols-2 items-center">
                    <div className='m-5'>
                        <img src={about} alt="" />
                    </div>
                    <div className='m-5 w-2xl'>
                        <h2 className='text-4xl font-bold'>100% Trusted <br /> Organic Food Store</h2>
                        <div className='flex mt-5'>
                            <div className='m-1.5'>
                                <img src={Check} className='w-10' alt="" />
                            </div>
                            <div>
                                <h3 className='font-bold'>Healthy & natural food for lovers of healthy food.</h3>
                                <p>Ut quis tempus erat. Phasellus euismod bibendum magna non tristique. Pellentesque semper vestibulum elit sed condimentum. Nunc pretium fermentum interdum. </p>
                            </div>
                        </div>
                        <div className='flex my-5'>
                            <div className='m-1.5'>
                                <img src={Check} className='w-10' alt="" />
                            </div>
                            <div>
                                <h3 className='font-bold'>Every day fresh and quality products for you.</h3>
                                <p>Maecenas vehicula a justo quis laoreet. Sed in placerat nibh, a posuere ex. Morbi sem neque, aliquam sed orci et, rhoncus lobortis felis. Sed vestibulum nisl sit amet sapien.</p>
                            </div>
                        </div>
                        <Button icon={<img src={rightArrow} />}>Shop now</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection
