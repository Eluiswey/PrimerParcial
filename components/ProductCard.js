function ProductCard({ motorcycle, onAddToCart, onViewDetails }) {
    try {
        return (
            <div data-name="product-card" data-file="components/ProductCard.js" className="bg-white rounded-xl shadow-lg overflow-hidden card-hover fade-in border border-gray-100">
                <div className="relative">
                    <img 
                        src={motorcycle.image} 
                        alt={motorcycle.name}
                        className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        ${motorcycle.price.toLocaleString()}
                    </div>
                </div>
                
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{motorcycle.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{motorcycle.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                        <div className="bg-orange-50 p-2 rounded border border-orange-200">
                            <span className="font-semibold text-orange-700">Motor:</span> 
                            <span className="text-gray-700 ml-1">{motorcycle.specs.engine}</span>
                        </div>
                        <div className="bg-orange-50 p-2 rounded border border-orange-200">
                            <span className="font-semibold text-orange-700">Potencia:</span> 
                            <span className="text-gray-700 ml-1">{motorcycle.specs.power}</span>
                        </div>
                    </div>
                    
                    <div className="flex space-x-2">
                        <button
                            onClick={() => onViewDetails(motorcycle)}
                            className="flex-1 btn-secondary py-2 px-4 rounded-lg text-sm font-medium"
                        >
                            Ver Detalles
                        </button>
                        <button
                            onClick={() => onAddToCart(motorcycle)}
                            className="flex-1 btn-primary text-white py-2 px-4 rounded-lg text-sm font-medium"
                        >
                            <i className="fas fa-cart-plus mr-1"></i>
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProductCard component error:', error);
        reportError(error);
    }
}
