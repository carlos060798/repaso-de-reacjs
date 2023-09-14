import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// componentes de rutas
function AppRouter() {
    return (<>
        <Router>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="/contact" element={<h1>Contact</h1>} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </Router>
    
    </>  );
}

export default AppRouter;