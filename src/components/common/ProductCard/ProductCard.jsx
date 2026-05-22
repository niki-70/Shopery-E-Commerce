import { useCart } from "../../../context/CartContext";
import Heart from "../../../assets/Images/icons/Heart.png";
import Vector4 from "../../../assets/Images/icons/Vector (4).png";

function ProductCard({ id, name, price, image }) {
  const { isInCart, toggleProduct } = useCart();
  const inCart = isInCart(id);
  return (
    <>
      <div className="productCard group/card relative h-2xl mt-7 bg-white w-max rounded border border-white transition duration-300 ease-in-out hover:border-green-700">
        <div className="productCardImg w-60 object-cover">
          <img
            className="productCardBg rounded w-full h-full self-center"
            src={image}
            alt={name}
          />

          <div className="absolute top-2.5 right-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
            <img
              className="rounded-6xl p-2.5 mt-1 block cursor-pointer"
              src={Heart}
              alt=""
            />
            <img
              className="rounded-6xl p-2.5 mt-1 block cursor-pointer"
              src={Vector4}
              alt=""
            />
          </div>
        </div>

        <div className="productCardInfo flex justify-between p-2">
          <div>
            <p className="mt-2.5 text-gray-600">{name}</p>
            <h4 className="mb-2.5">${price}</h4>
          </div>

          <div
            className={`group/cart rounded-full p-2.5 transition duration-300 h-max ${
              inCart ? "bg-green-600 text-white" : "hover:bg-green-600"
            }`}
            role="button"
            onClick={() => toggleProduct({ id, name, price, image })}
          >
            <svg
              className="transition-colors duration-300 group-hover/cart:text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6.66667 8.33333H4.16667L2.5 17.5H17.5L15.8333 8.33333H13.3333M6.66667 8.33333V5.83333C6.66667 3.99239 8.15905 2.5 10 2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333V8.33333M6.66667 8.33333H13.3333M6.66667 8.33333V10.8333M13.3333 8.33333V10.8333"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
