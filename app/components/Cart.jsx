export function Cart({ cartItems, onClose }) {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="mt-3 text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Shopping Cart</h3>
            <div className="mt-2 px-7 py-3">
              {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {cartItems.map((item) => (
                    <li key={item.id} className="py-4 flex">
                      <img className="h-10 w-10 rounded-full" src={item.image} alt={item.title} />
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-medium text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-500">
                          ${item.price.toFixed(2)} x {item.quantity}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-4">
                <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
              </div>
            </div>
            <div className="items-center px-4 py-3">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  