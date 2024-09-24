import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import ReservationsPage from './ReservationsPage';
import OrderPage from './OrderPage';
import LoginPage from './LoginPage';

function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/reservations" element={<ReservationsPage />} />
                <Route path="/order" element={<OrderPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </main>
    );
}

export default Main;
