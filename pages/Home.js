function Home({ motorcycles, onAddToCart, onViewDetails }) {
    try {
        return (
            <div data-name="home" data-file="pages/Home.js">
                <section className="hero-gradient text-white py-12 md:py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Motocicletas Deportivas</h1>
                        <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90 px-2">
                            Descubre la adrenalina pura con nuestra colección de motos deportivas de alta gama
                        </p>
                        <button className="bg-white text-orange-500 px-6 py-2 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base">
                            Ver Catálogo
                        </button>
                    </div>
                </section>
                
                <section className="py-8 md:py-16 bg-orange-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">
                            Nuestras Motocicletas
                        </h2>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                            {motorcycles.map(motorcycle => (
                                <ProductCard
                                    key={motorcycle.id}
                                    motorcycle={motorcycle}
                                    onAddToCart={onAddToCart}
                                    onViewDetails={onViewDetails}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                
                <section className="py-8 md:py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
                            <div className="p-4 md:p-6">
                                <i className="fas fa-shipping-fast text-3xl md:text-4xl text-orange-500 mb-3 md:mb-4"></i>
                                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">Envío Gratuito</h3>
                                <p className="text-sm md:text-base text-gray-600">Envío gratuito en todas las compras superiores a $15,000</p>
                            </div>
                            <div className="p-4 md:p-6">
                                <i className="fas fa-tools text-3xl md:text-4xl text-orange-500 mb-3 md:mb-4"></i>
                                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">Servicio Técnico</h3>
                                <p className="text-sm md:text-base text-gray-600">Mantenimiento y reparación especializada</p>
                            </div>
                            <div className="p-4 md:p-6">
                                <i className="fas fa-medal text-3xl md:text-4xl text-orange-500 mb-3 md:mb-4"></i>
                                <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800">Garantía</h3>
                                <p className="text-sm md:text-base text-gray-600">2 años de garantía en todas nuestras motocicletas</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('Home component error:', error);
        reportError(error);
    }
}
