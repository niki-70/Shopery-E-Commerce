import Button from "../../../common/Button/Button";

function HeroSection(){

    return(
        <>
        <div className="container mx-auto flex items-center gap-5">
            <div className="relative">
                <div className="absolute top-10 left-4/5 bg-orange-400 rounded-full w-20 h-20 text-white place-items-center  pt-3">
                    <h4 className="font-bold text-xl">70%</h4>
                    <p>OFF</p>
                </div>
                <img src="src/assets/Images/Image.png" alt="" />
            </div>
            <div>
                <p className="text-green-600 mb-4 text-2xl">Welcome to shopery</p>
                <h1 className="text-7xl font-bold text-green-950">Fresh & Healthy Organic Food</h1>
                <p className="text-green-800 text-2xl my-4">Free shipping on all your order. we deliver, you enjoy</p>
                <Button icon={<img src="src/assets/images/icons/rightArrow.png"/>}>Shop Now</Button>
            </div>
        </div>
        </>
    )
}

export default HeroSection;