function ProductDetail({ motorcycle, onAddToCart, onBack }) {
    try {
        if (!motorcycle) return null;
        
        return (
            <div data-name="product-detail" data-file="pages/ProductDetail.js" className="min-h-screen bg-orange-50 py-4 md:py-8">
                <div className="container mx-auto px-4">
                    <button
                        onClick={onBack}
                        className="mb-4 md:mb-6 flex items-center text-orange-500 hover:text-orange-600 font-medium text-sm md:text-base"
                    >
                        <i className="fas fa-arrow-left mr-2"></i>
                        Volver al catálogo
                    </button>
                    
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-200">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-4 md:p-8">
                                <img 
                                    src={motorcycle.image} 
                                    alt={motorcycle.name}
                                    className="w-full h-60 md:h-80 object-cover rounded-lg"
                                />
                            </div>
                            
                            <div className="p-4 md:p-8">
                                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">{motorcycle.name}</h1>
                                <p className="text-xl md:text-2xl font-bold text-orange-500 mb-4 md:mb-6">
                                    ${motorcycle.price.toLocaleString()}
                                </p>
                                
                                <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8">{motorcycle.description}</p>
                                
                                <div className="grid grid-cols-2 gap-2 md:gap-4 mb-6 md:mb-8">
                                    <div className="bg-orange-50 p-3 md:p-4 rounded-lg border border-orange-200">
                                        <h3 className="font-semibold text-orange-700 mb-1 md:mb-2 text-sm md:text-base">Motor</h3>
                                        <p className="text-gray-700 text-xs md:text-sm">{motorcycle.specs.engine}</p>
                                    </div>
                                    <div className="bg-orange-50 p-3 md:p-4 rounded-lg border border-orange-200">
                                        <h3 className="font-semibold text-orange-700 mb-1 md:mb-2 text-sm md:text-base">Potencia</h3>
                                        <p className="text-gray-700 text-xs md:text-sm">{motorcycle.specs.power}</p>
                                    </div>
                                    <div className="bg-orange-50 p-3 md:p-4 rounded-lg border border-orange-200">
                                        <h3 className="font-semibold text-orange-700 mb-1 md:mb-2 text-sm md:text-base">Peso</h3>
                                        <p className="text-gray-700 text-xs md:text-sm">{motorcycle.specs.weight}</p>
                                    </div>
                                    <div className="bg-orange-50 p-3 md:p-4 rounded-lg border border-orange-200">
                                        <h3 className="font-semibold text-orange-700 mb-1 md:mb-2 text-sm md:text-base">Velocidad Máx.</h3>
                                        <p className="text-gray-700 text-xs md:text-sm">{motorcycle.specs.topSpeed}</p>
                                    </div>
                                </div>
                                
                                <button
                                    onClick={() => onAddToCart(motorcycle)}
                                    className="w-full btn-primary text-white py-2 md:py-3 rounded-lg text-base md:text-lg font-semibold"
                                >
                                    <i className="fas fa-cart-plus mr-2"></i>
                                    Agregar al Carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ProductDetail component error:', error);
        reportError(error);
    }
}
