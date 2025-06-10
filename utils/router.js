const Router = {
    currentRoute: 'home',
    params: {},
    
    navigate(route, params = {}) {
        this.currentRoute = route;
        this.params = params;
        window.dispatchEvent(new CustomEvent('routechange'));
    },
    
    getRoute() {
        return this.currentRoute;
    },
    
    getParams() {
        return this.params;
    }
};

window.Router = Router;
