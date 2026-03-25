function CartTotal() {
  return (
    <>
      <div className="cart m-auto w-fit border border-gray-400 rounded-2xl p-6">
        <div className="mb-6">
          <p className="font-bold">Cart Total</p>
        </div>

        <div className="flex justify-between mb-4">
          <p className="text-gray-500">Subtotal:</p>
          <p>$84.00</p>
        </div>

        <hr className="mb-4 text-gray-400" />

        <div className="flex justify-between mb-4">
          <p className="text-gray-500">Shipping:</p>
          <p>Free</p>
        </div>

        <hr className="mb-4 text-gray-400" />

        <div className="flex justify-between mb-4">
          <p className="text-gray-500">Total:</p>
          <p className="font-bold">$84.00</p>
        </div>

        <div>
          <button className="flex items-center gap-2 rounded-4xl cursor-pointer font-medium bg-green-600 text-white px-20 py-3">
            Proceed to checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default CartTotal;
