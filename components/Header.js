function Header({ cartItems, user, onAuthClick, onCartClick }) {
    try {
        const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
        const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        
        const handleNavigation = (route) => {
            Router.navigate(route);
            setIsMobileMenuOpen(false);
        };
        
        return (
            <header data-name="header" data-file="components/Header.js" className="bg-white shadow-lg sticky top-0 z-50 border-b-2 border-orange-500">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div 
                            className="flex items-center cursor-pointer"
                            onClick={() => handleNavigation('home')}
                        >
                            <i className="fas fa-motorcycle text-xl md:text-2xl text-orange-500 mr-2"></i>
                            <h1 className="text-lg md:text-2xl font-bold text-gray-800">MotoSport</h1>
                        </div>
                        
                        <nav className="hidden md:flex space-x-8">
                            <a 
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation('home');
                                }}
                                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
                            >
                                Inicio
                            </a>
                            <a 
                                href="#" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation('home');
                                }}
                                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
                            >
                                Catálogo
                            </a>
                            <a 
                                href="#" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavigation('contact');
                                }}
                                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
                            >
                                Contacto
                            </a>
                        </nav>
                        
                        <div className="flex items-center space-x-2 md:space-x-4">
                            <button
                                onClick={onCartClick}
                                className="relative p-2 text-gray-700 hover:text-orange-500 transition-colors"
                            >
                                <i className="fas fa-shopping-cart text-lg md:text-xl"></i>
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center cart-badge">
                                        {cartCount}
                                    </span>
                                )}
                            </button>
                            
                            <button
                                onClick={onAuthClick}
                                className="bg-orange-500 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium text-sm md:text-base"
                            >
                                <span className="hidden sm:inline">{user ? user.name : 'Iniciar Sesión'}</span>
                                <span className="sm:hidden"><i className="fas fa-user"></i></span>
                            </button>
                            
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 text-gray-700 hover:text-orange-500"
                            >
                                <i className="fas fa-bars text-lg"></i>
                            </button>
                        </div>
                    </div>
                    
                    {isMobileMenuOpen && (
                        <div className="md:hidden border-t border-orange-200 py-4">
                            <nav className="flex flex-col space-y-2">
                                <a 
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation('home');
                                    }}
                                    className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
                                >
                                    Inicio
                                </a>
                                <a 
                                    href="#" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation('home');
                                    }}
                                    className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
                                >
                                    Catálogo
                                </a>
                                <a 
                                    href="#" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavigation('contact');
                                    }}
                                    className="text-gray-700 hover:text-orange-500 transition-colors font-medium py-2"
                                >
                                    Contacto
                                </a>
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}
