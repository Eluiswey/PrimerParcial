function Cart({ isOpen, cartItems, onClose, onUpdateQuantity, onRemoveItem, onCheckout }) {
    try {
        const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        if (!isOpen) return null;
        
        return (
            <div data-name="cart" data-file="components/Cart.js" className="fixed inset-0 z-50 modal-backdrop">
                <div className="flex items-center justify-center min-h-screen p-2 md:p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm md:max-w-md max-h-[90vh] md:max-h-96 overflow-hidden">
                        <div className="flex items-center justify-between p-3 md:p-4 border-b">
                            <h2 className="text-lg md:text-xl font-bold text-gray-800">Carrito</h2>
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-gray-700 p-1"
                            >
                                <i className="fas fa-times text-lg md:text-xl"></i>
                            </button>
                        </div>
                        
                        <div className="p-3 md:p-4 overflow-y-auto" style={{maxHeight: 'calc(90vh - 200px)'}}>
                            {cartItems.length === 0 ? (
                                <p className="text-gray-500 text-center py-8 text-sm md:text-base">Tu carrito está vacío</p>
                            ) : (
                                <div className="space-y-3 md:space-y-4">
                                    {cartItems.map(item => (
                                        <div key={item.id} className="flex items-center space-x-2 md:space-x-3 bg-gray-50 p-2 md:p-3 rounded-lg">
                                            <img src={item.image} alt={item.name} className="w-10 h-10 md:w-12 md:h-12 object-cover rounded" />
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-xs md:text-sm font-semibold text-gray-800 truncate">{item.name}</h4>
                                                <p className="text-xs md:text-sm text-gray-600">${item.price.toLocaleString()}</p>
                                            </div>
                                            <div className="flex items-center space-x-1 md:space-x-2">
                                                <button
                                                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                                    className="w-5 h-5 md:w-6 md:h-6 bg-gray-200 rounded text-xs flex items-center justify-center"
                                                >
                                                    -
                                                </button>
                                                <span className="text-xs md:text-sm min-w-[20px] text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                                    className="w-5 h-5 md:w-6 md:h-6 bg-gray-200 rounded text-xs flex items-center justify-center"
                                                >
                                                    +
                                                </button>
                                                <button
                                                    onClick={() => onRemoveItem(item.id)}
                                                    className="text-red-500 hover:text-red-700 ml-1 md:ml-2 p-1"
                                                >
                                                    <i className="fas fa-trash text-xs"></i>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                        
                        {cartItems.length > 0 && (
                            <div className="border-t p-3 md:p-4">
                                <div className="flex justify-between items-center mb-3">
                                    <span className="font-bold text-base md:text-lg">Total: ${total.toLocaleString()}</span>
                                </div>
                                <button
                                    onClick={onCheckout}
                                    className="w-full btn-primary text-white py-2 md:py-3 rounded-lg text-sm md:text-base font-medium"
                                >
                                    Proceder al Pago
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Cart component error:', error);
        reportError(error);
    }
}
