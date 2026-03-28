 import Button from "../../common/Button/Button"
 function ErrorPage() {

    return(
        <>
        <div className="place-items-center my-40">
            <img src="src/assets/Images/Illustration.png" alt="" />
            <h2 className="font-bold text-2xl">Oops! page not found</h2>
            <p className="text-gray-400 text-xs py-5 ">Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros. <br /> Maecenas sagittis tortor at metus mollis</p>
            <Button>Back to Home</Button>
        </div>

        </>
    )
    
}

export default ErrorPage