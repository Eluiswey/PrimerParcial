function App() {
    try {
        const [currentRoute, setCurrentRoute] = React.useState('home');
        const [selectedMotorcycle, setSelectedMotorcycle] = React.useState(null);
        const [cartItems, setCartItems] = React.useState([]);
        const [user, setUser] = React.useState(null);
        const [showCart, setShowCart] = React.useState(false);
        const [showAuth, setShowAuth] = React.useState(false);

        React.useEffect(() => {
            const handleRouteChange = () => {
                setCurrentRoute(Router.getRoute());
                setSelectedMotorcycle(Router.getParams().motorcycle || null);
            };

            window.addEventListener('routechange', handleRouteChange);
            return () => window.removeEventListener('routechange', handleRouteChange);
        }, []);

        const handleAddToCart = (motorcycle) => {
            if (!user) {
                setShowAuth(true);
                return;
            }

            setCartItems(prev => {
                const existing = prev.find(item => item.id === motorcycle.id);
                if (existing) {
                    return prev.map(item =>
                        item.id === motorcycle.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    );
                }
                return [...prev, { ...motorcycle, quantity: 1 }];
            });
        };

        const handleUpdateQuantity = (id, quantity) => {
            if (quantity <= 0) {
                handleRemoveItem(id);
                return;
            }
            setCartItems(prev =>
                prev.map(item =>
                    item.id === id ? { ...item, quantity } : item
                )
            );
        };

        const handleRemoveItem = (id) => {
            setCartItems(prev => prev.filter(item => item.id !== id));
        };

        const handleLogin = (formData) => {
            setUser({ name: formData.name || 'Usuario', email: formData.email });
            setShowAuth(false);
        };

        const handleRegister = (formData) => {
            setUser({ name: formData.name, email: formData.email });
            setShowAuth(false);
        };

        const handleCheckout = () => {
            alert('¡Compra realizada con éxito! Gracias por tu compra.');
            setCartItems([]);
            setShowCart(false);
        };

        const handleViewDetails = (motorcycle) => {
            Router.navigate('detail', { motorcycle });
        };

        const renderCurrentPage = () => {
            switch (currentRoute) {
                case 'contact':
                    return <Contact />;
                case 'detail':
                    return (
                        <ProductDetail
                            motorcycle={selectedMotorcycle}
                            onAddToCart={handleAddToCart}
                            onBack={() => Router.navigate('home')}
                        />
                    );
                default:
                    return (
                        <Home
                            motorcycles={motorcyclesData}
                            onAddToCart={handleAddToCart}
                            onViewDetails={handleViewDetails}
                        />
                    );
            }
        };

        return (
            <div data-name="app" data-file="app.js">
                <Header
                    cartItems={cartItems}
                    user={user}
                    onAuthClick={() => setShowAuth(true)}
                    onCartClick={() => setShowCart(true)}
                />

                {renderCurrentPage()}

                <Cart
                    isOpen={showCart}
                    cartItems={cartItems}
                    onClose={() => setShowCart(false)}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveItem={handleRemoveItem}
                    onCheckout={handleCheckout}
                />

                <AuthModal
                    isOpen={showAuth}
                    onClose={() => setShowAuth(false)}
                    onLogin={handleLogin}
                    onRegister={handleRegister}
                />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
