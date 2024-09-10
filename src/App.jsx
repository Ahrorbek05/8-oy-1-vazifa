import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductCard from './components/Cards';

function App() {
    const language = useSelector((state) => state.language.lang);

    const texts = {
        en: {
            home: "Home",
            about: "About",
            products: "Products",
            subscribe: "Subscribe",
            clone: "Clone now",
        },
        uz: {
            home: "Bosh sahifa",
            about: "Haqida",
            products: "Mahsulotlar",
            subscribe: "Obuna bo‘lish",
            clone: "Klone qil",
        },
        ru: {
            home: "Главная",
            about: "О нас",
            products: "Продукты",
            subscribe: "Подписаться",
            clone: "Клонировать сейчас",
        }
    };

    return (
        <div className="App">
            <Header texts={texts[language]} />
            <Hero />
            <ProductCard />
            <Footer subscribeText={texts[language].subscribe} />
        </div>
    );
}

export default App;
