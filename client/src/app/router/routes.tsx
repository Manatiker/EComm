import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../../feature/about/AboutPage";
import Catalog from "../../feature/Catalog/Catalog";
import ProductDetails from "../../feature/Catalog/ProductDetails";
import ContactPage from "../../feature/contact/ContactPage";
import HomePage from "../../feature/home/HomePage";
import App from "../layout/App";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'catalog', element: <Catalog /> },
            { path: 'catalog/:id', element: <ProductDetails /> },
            { path: 'about', element: <AboutPage /> },
            { path: 'contact', element: <ContactPage /> }
        ]
    }
])


