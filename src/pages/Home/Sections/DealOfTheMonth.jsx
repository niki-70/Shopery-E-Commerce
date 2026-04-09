
import Button from '../../../common/Button/Button'

const DealOfTheMonth = () => {
    return (
        <>
            <div className="flex items-center justify-around bg-gray-100">
                <div>
                    <img src="src/assets/Images/sections/dealofthemonth.png" alt="" />
                </div>
                <div className='flex flex-col text-center items-center'>
                    <p className='text-green-600 text-sm font-medium'>BEST DEALS</p>
                    <h2 className='text-3xl font-medium'>Our Special Products</h2>
                    <h2 className='text-3xl font-medium'>Deal of the Month</h2>
                    <div className="timer flex">
                        <div className="days bg-white p-4 rounded-xl m-3 w-20">
                            <h2 className='text-green-600 text-3xl'>00</h2>
                            <p className='text-sm'>DAYS</p>
                        </div>
                        <div className="hours bg-white p-4 rounded-xl m-3 w-20">
                            <h2 className='text-green-600 text-3xl'>02</h2>
                            <p className='text-sm'>HOURS</p>
                        </div>
                        <div className="mins bg-white p-4 rounded-xl m-3 w-20">
                            <h2 className='text-green-600 text-3xl'>18</h2>
                            <p className='text-sm'>MINS</p>
                        </div>
                        <div className="secs bg-white p-4 rounded-xl m-3 w-20">
                            <h2 className='text-green-600 text-3xl'>46</h2>
                            <p className='text-sm'>SECS</p>
                        </div>
                    </div>
                    <Button icon={<img src="src/assets/images/icons/rightArrow.png" alt="" />}>
                        Shop Now
                    </Button>
                </div>
                <div>
                    <img src="src/assets/Images/sections/dealofthemonth2.png" alt="" />

                </div>
            </div>
        </>
    )
}

export default DealOfTheMonth
