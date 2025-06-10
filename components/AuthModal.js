function AuthModal({ isOpen, onClose, onLogin, onRegister }) {
    try {
        const [isLoginMode, setIsLoginMode] = React.useState(true);
        const [formData, setFormData] = React.useState({
            email: '',
            password: '',
            name: '',
            confirmPassword: ''
        });
        
        if (!isOpen) return null;
        
        const handleSubmit = (e) => {
            e.preventDefault();
            if (isLoginMode) {
                onLogin(formData);
            } else {
                if (formData.password !== formData.confirmPassword) {
                    alert('Las contraseñas no coinciden');
                    return;
                }
                onRegister(formData);
            }
        };
        
        return (
            <div data-name="auth-modal" data-file="components/AuthModal.js" className="fixed inset-0 z-50 modal-backdrop">
                <div className="flex items-center justify-center min-h-screen p-2 md:p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm md:max-w-md border border-orange-200 max-h-[95vh] overflow-y-auto">
                        <div className="flex items-center justify-between p-4 md:p-6 border-b border-orange-100">
                            <h2 className="text-lg md:text-xl font-bold text-gray-800">
                                {isLoginMode ? 'Iniciar Sesión' : 'Registrarse'}
                            </h2>
                            <button
                                onClick={onClose}
                                className="text-gray-500 hover:text-orange-500 transition-colors p-1"
                            >
                                <i className="fas fa-times text-lg md:text-xl"></i>
                            </button>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="p-4 md:p-6">
                            {!isLoginMode && (
                                <div className="mb-4">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Nombre Completo
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                        required
                                    />
                                </div>
                            )}
                            
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                    className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    required
                                />
                            </div>
                            
                            <div className="mb-4">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Contraseña
                                </label>
                                <input
                                    type="password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                    required
                                />
                            </div>
                            
                            {!isLoginMode && (
                                <div className="mb-6">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                        Confirmar Contraseña
                                    </label>
                                    <input
                                        type="password"
                                        value={formData.confirmPassword}
                                        onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                                        className="w-full px-3 py-2 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                                        required
                                    />
                                </div>
                            )}
                            
                            <button
                                type="submit"
                                className="w-full btn-primary text-white py-2 md:py-3 rounded-lg mb-4 font-medium text-sm md:text-base"
                            >
                                {isLoginMode ? 'Iniciar Sesión' : 'Registrarse'}
                            </button>
                            
                            <p className="text-center text-xs md:text-sm text-gray-600">
                                {isLoginMode ? '¿No tienes cuenta?' : '¿Ya tienes cuenta?'}
                                <button
                                    type="button"
                                    onClick={() => setIsLoginMode(!isLoginMode)}
                                    className="text-orange-500 hover:text-orange-600 ml-1 font-medium"
                                >
                                    {isLoginMode ? 'Regístrate' : 'Inicia Sesión'}
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('AuthModal component error:', error);
        reportError(error);
    }
}
