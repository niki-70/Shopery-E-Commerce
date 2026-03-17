function CategoryCard() {
    return(
        <> 
        <div  className="group m-5 w-max px-8 py-6 rounded border border-gray-400 hover:border-green-900 hover:shadow-xl/30">
            <div className="pb-4">
                <img src="src/assets/Images/categories/Group (3).png" alt="" />
            </div>
            <div className="place-items-center">
                <h3 className="group text-green-800">Vegetables</h3>
                <p className=" text-gray-600 text-xs">165 Products</p>
            </div>
        </div>
        </>
    )
}

export default CategoryCard;