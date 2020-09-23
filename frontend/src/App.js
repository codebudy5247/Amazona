import React from 'react';
import data from './data';
import './App.css';


function App() {

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <div className="App">
       <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <a href="index.html">amazona</a>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="Signin.html">SignIN</a>
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul style= {{listStyleType:"none"}}>
                <li>
                    <a href="index.html">Laptops</a>
                </li>

                <li>
                    <a href="index.html">Mobiles</a>
                </li>

                <li>
                    <a href="index.html">Pants</a>
                </li>

                <li>
                    <a href="index.html">Shirts</a>
                </li>

            </ul>
        </aside>

        <main className="main">
            <div className="content">
                <ul className="products">
                    {
                        data.product.map(product=><li>
                            <div className="product">
                                <img className="product-image" src={product.image} alt="product" />
                                <div className="product-description">
                        <a href="product.html">{product.name}</a>
                                </div>
                                <div className="product-brand">{product.brand}</div>
                                <div className="product-price">${product.price} <small>Save $95.13 (17%)</small></div>
                                <div className="product-rating">{product.rating} Stars <a href="reviews.html">({product.numReview})</a></div>
                                <div className="delivery">FREE Delivery By Amazona</div>
    
                            </div>
                        </li>)
                    }
                  

                </ul>
            </div>

        </main>
        <footer className="footer">
            All Right reserved.
        </footer>
    </div>
    </div>
  );
}

export default App;
