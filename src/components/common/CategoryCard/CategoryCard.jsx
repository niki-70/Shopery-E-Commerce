function CategoryCard({name, count, image}) {
    return(
        <> 
        <div  className="group m-5 w-max px-8 py-6 rounded border border-gray-400 hover:border-green-900 hover:shadow-xl/30">
            <div className="pb-4">
                <img src={image} alt="" />
            </div>
            <div className="place-items-center">
                <h3 className="group text-green-800">{name}</h3>
                <p className=" text-gray-600 text-xs">{count}Products</p>
            </div>
        </div>
        </>
    )
}

export default CategoryCard;