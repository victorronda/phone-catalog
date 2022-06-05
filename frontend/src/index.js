import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import CatalogPage from "./pages/PhoneCatalogPage/PhoneCatalogPage";
import ProductDetailPage from "./pages/PhoneDetailPage/PhoneDetailPage";
import { PhoneContextProvider } from "./context/phones-context";
import NotFound from "./pages/NotFoundPage/NotFoundPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <PhoneContextProvider>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/*">
          <Route index element={<CatalogPage />} />
          <Route path="phones">
            <Route path=":phoneId">
              <Route path=":slug" element={<ProductDetailPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </PhoneContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
