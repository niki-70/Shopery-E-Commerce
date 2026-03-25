import React from 'react'
import productSections from '../../../../assets/Data/products'
import ProductCard from '../../../common/ProductCard/ProductCard'
import ProductList from '../../../common/ProductList/ProductList'
import SaleCard from '../../../SaleCard/SaleCard'

const ProductsSection = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className="flex justify-between p flex-wrap">
                    {productSections.featured.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>
                <div className='flex'>
                    <div className="grid grid-cols-3 gap-6 px-6">
                        <div>
                            <h3 className="mb-4 font-semibold">Hot Deals</h3>
                            {productSections.hotDeals.map((item) => (
                                <ProductList
                                    key={item.id}
                                    name={item.name}
                                    img={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                        <div>
                            <h3 className="mb-4 font-semibold">Best Seller</h3>
                            {productSections.bestSeller.map((item) => (
                                <ProductList
                                    key={item.id}
                                    name={item.name}
                                    img={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                        <div>
                            <h3 className="mb-4 font-semibold">Top Rated</h3>
                            {productSections.topRated.map((item) => (
                                <ProductList
                                    key={item.id}
                                    name={item.name}
                                    img={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    </div>
                    <SaleCard />
                </div>
            </div>
        </>
    )
}

export default ProductsSection
