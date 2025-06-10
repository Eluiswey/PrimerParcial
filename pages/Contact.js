function Contact() {
    try {
        return (
            <div data-name="contact" data-file="pages/Contact.js" className="min-h-screen bg-orange-50 py-8 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8 md:mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contáctanos</h1>
                        <p className="text-lg md:text-xl text-gray-600">
                            Estamos aquí para ayudarte con todas tus necesidades de motocicletas
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-orange-200">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h2>
                            
                            <div className="space-y-4 md:space-y-6">
                                <div className="flex items-center">
                                    <i className="fas fa-map-marker-alt text-orange-500 text-xl mr-4"></i>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Dirección</h3>
                                        <p className="text-gray-600">Av. Motocicletas 123, Ciudad Deportiva</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center">
                                    <i className="fas fa-phone text-orange-500 text-xl mr-4"></i>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Teléfono</h3>
                                        <p className="text-gray-600">+52 (55) 1234-5678</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center">
                                    <i className="fas fa-envelope text-orange-500 text-xl mr-4"></i>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Email</h3>
                                        <p className="text-gray-600">info@motosport.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center">
                                    <i className="fas fa-clock text-orange-500 text-xl mr-4"></i>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Horarios</h3>
                                        <p className="text-gray-600">Lun - Vie: 9:00 AM - 7:00 PM</p>
                                        <p className="text-gray-600">Sáb: 9:00 AM - 5:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-orange-200">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h2>
                            
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Nombre Completo
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Asunto
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Mensaje
                                    </label>
                                    <textarea
                                        rows="4"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    ></textarea>
                                </div>
                                
                                <button
                                    type="submit"
                                    className="w-full btn-primary text-white py-3 rounded-lg font-semibold"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        alert('¡Mensaje enviado! Te contactaremos pronto.');
                                    }}
                                >
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Contact component error:', error);
        reportError(error);
    }
}
