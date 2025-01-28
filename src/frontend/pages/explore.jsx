import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './explore.css';
import { useState } from 'react';

// API imports:


export const Explore = () => {
    const [cusinies, setCusinies] = useState([])

    const cuisinesWithImages = [
        { cuisine: 'Italian', image: 'https://i.pinimg.com/736x/09/f9/75/09f975f599ade373312a08fdf2eabf3a.jpg' },
        { cuisine: 'Mexican', image: 'https://i.pinimg.com/236x/0e/2c/85/0e2c859cf0cf769b442065538e5a2239.jpg' },
        { cuisine: 'Indian', image: 'https://i.pinimg.com/236x/af/23/30/af2330f598175d2745f0fbc1db3db483.jpg' },
        { cuisine: 'Chinese', image: 'https://i.pinimg.com/474x/38/2b/e8/382be895ccae84bf656146a30a633d63.jpg' },
        { cuisine: 'Japanese', image: 'https://i.pinimg.com/236x/1f/5b/ba/1f5bba978e62bc1d04ae390ff7688d35.jpg' },
        { cuisine: 'French', image: 'https://i.pinimg.com/236x/8a/41/5f/8a415ffc4c86b5f538bf953145ab0b40.jpg' },
        { cuisine: 'American', image: 'https://i.pinimg.com/474x/36/83/fc/3683fc8d8130f3052fb33578402a3ce0.jpg' },
        { cuisine: 'Mediterranean', image: 'https://i.pinimg.com/236x/ca/93/a1/ca93a15221d89333da4f58226441fa21.jpg' },
        { cuisine: 'Thai', image: 'https://i.pinimg.com/236x/56/91/3e/56913e2cc2823e0cf25a03edeb80724c.jpg' },
        { cuisine: 'Spanish', image: 'https://i.pinimg.com/474x/5c/1d/d7/5c1dd761ef939f62fae321cc83430ef4.jpg' },
        { cuisine: 'Greek', image: 'https://i.pinimg.com/474x/fd/e8/78/fde878ac1176a76f6b1720a306d87b06.jpg' },
        { cuisine: 'Korean', image: 'https://i.pinimg.com/474x/b8/cc/dc/b8ccdc0e75b524cb0f7949787f133be9.jpg' },
        { cuisine: 'Turkish', image: 'https://i.pinimg.com/236x/95/12/7e/95127ee8d9158640d5a103ca2829f88a.jpg' },
        { cuisine: 'Lebanese', image: 'https://i.pinimg.com/236x/2f/ce/a4/2fcea4e7f7ea5bd962dc988f5026bfb3.jpg' },
        { cuisine: 'Vietnamese', image: 'https://i.pinimg.com/236x/8d/b4/b4/8db4b45be7c79cd09eb7f46de1b76490.jpg' }
    ];

    return (
        <>
            <h1>Cuisines:</h1>
            <div className="scroll-container">
            {cuisinesWithImages.map((item, index) => (
                <div className="card card-e text-bg-dark"  key={index}>
                    <img src={item.image} className="card-img" alt={item.cuisine} />
                    <div className="card-img-overlay">
                        <h5 className="card-title">{item.cuisine}</h5>
                    </div>
                </div>
            ))}
            </div>
            

            <br />
            <h1>Ingredients:</h1>
            <div className="scroll-container">
                <div className="card card-e text-bg-dark" style={{ width: "18rem" }}>
                    <img src="https://i.pinimg.com/474x/7d/fb/ff/7dfbff2096437f8baa9937c69da4d811.jpg" className="card-img" alt="caption" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Milk</h5>
                    </div>
                </div>
                <div className="card card-e text-bg-dark" style={{ width: "18rem" }}>
                    <img src="https://i.pinimg.com/474x/7d/fb/ff/7dfbff2096437f8baa9937c69da4d811.jpg" className="card-img" alt="caption" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Cheese</h5>
                    </div>
                </div>
                <div className="card card-e text-bg-dark" style={{ width: "18rem" }}>
                    <img src="https://i.pinimg.com/474x/7d/fb/ff/7dfbff2096437f8baa9937c69da4d811.jpg" className="card-img" alt="caption" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Bread</h5>
                    </div>
                </div>
                <div className="card card-e text-bg-dark" style={{ width: "18rem" }}>
                    <img src="https://i.pinimg.com/474x/7d/fb/ff/7dfbff2096437f8baa9937c69da4d811.jpg" className="card-img" alt="caption" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Milk</h5>
                    </div>
                </div>
                <div className="card card-e text-bg-dark" style={{ width: "18rem" }}>
                    <img src="https://i.pinimg.com/474x/7d/fb/ff/7dfbff2096437f8baa9937c69da4d811.jpg" className="card-img" alt="caption" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Cheese</h5>
                    </div>
                </div>
                <div className="card card-e text-bg-dark" style={{ width: "18rem" }}>
                    <img src="https://i.pinimg.com/474x/7d/fb/ff/7dfbff2096437f8baa9937c69da4d811.jpg" className="card-img" alt="caption" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Bread</h5>
                    </div>
                </div>
                <div className="card card-e text-bg-dark" style={{ width: "18rem" }}>
                    <img src="https://i.pinimg.com/474x/7d/fb/ff/7dfbff2096437f8baa9937c69da4d811.jpg" className="card-img" alt="caption" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Milk</h5>
                    </div>
                </div>
                <div className="card card-e text-bg-dark" style={{ width: "18rem" }}>
                    <img src="https://i.pinimg.com/474x/7d/fb/ff/7dfbff2096437f8baa9937c69da4d811.jpg" className="card-img" alt="caption" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Cheese</h5>
                    </div>
                </div>
                <div className="card card-e text-bg-dark" style={{ width: "18rem" }}>
                    <img src="https://i.pinimg.com/474x/7d/fb/ff/7dfbff2096437f8baa9937c69da4d811.jpg" className="card-img" alt="caption" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Bread</h5>
                    </div>
                </div>
            </div>

            <br />
            <h1>Diets:</h1>
            <div className="scroll-container">
                <div className="card card-e text-bg-dark" style={{ width: "18rem" }}>
                    <img src="https://i.pinimg.com/236x/a6/5b/b7/a65bb742f7cea05d4c9ca82ed4a1f35c.jpg" className="card-img" alt="caption" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Protein</h5>
                    </div>
                </div>
                <div className="card card-e text-bg-dark" style={{ width: "18rem" }}>
                    <img src="https://i.pinimg.com/236x/a6/5b/b7/a65bb742f7cea05d4c9ca82ed4a1f35c.jpg" className="card-img" alt="caption" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Gluten Free</h5>
                    </div>
                </div>
                <div className="card card-e text-bg-dark" style={{ width: "18rem" }}>
                    <img src="https://i.pinimg.com/236x/a6/5b/b7/a65bb742f7cea05d4c9ca82ed4a1f35c.jpg" className="card-img" alt="caption" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Dairy Free</h5>
                    </div>
                </div>
                <div className="card card-e text-bg-dark" style={{ width: "18rem" }}>
                    <img src="https://i.pinimg.com/236x/a6/5b/b7/a65bb742f7cea05d4c9ca82ed4a1f35c.jpg" className="card-img" alt="caption" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Protein</h5>
                    </div>
                </div>
                <div className="card card-e text-bg-dark" style={{ width: "18rem" }}>
                    <img src="https://i.pinimg.com/236x/a6/5b/b7/a65bb742f7cea05d4c9ca82ed4a1f35c.jpg" className="card-img" alt="caption" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Gluten Free</h5>
                    </div>
                </div>
                <div className="card card-e text-bg-dark" style={{ width: "18rem" }}>
                    <img src="https://i.pinimg.com/236x/a6/5b/b7/a65bb742f7cea05d4c9ca82ed4a1f35c.jpg" className="card-img" alt="caption" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Dairy Free</h5>
                    </div>
                </div>
                <div className="card card-e text-bg-dark" style={{ width: "18rem" }}>
                    <img src="https://i.pinimg.com/236x/a6/5b/b7/a65bb742f7cea05d4c9ca82ed4a1f35c.jpg" className="card-img" alt="caption" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Protein</h5>
                    </div>
                </div>
                <div className="card card-e text-bg-dark" style={{ width: "18rem" }}>
                    <img src="https://i.pinimg.com/236x/a6/5b/b7/a65bb742f7cea05d4c9ca82ed4a1f35c.jpg" className="card-img" alt="caption" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Gluten Free</h5>
                    </div>
                </div>
                <div className="card card-e text-bg-dark" style={{ width: "18rem" }}>
                    <img src="https://i.pinimg.com/236x/a6/5b/b7/a65bb742f7cea05d4c9ca82ed4a1f35c.jpg" className="card-img" alt="caption" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Dairy Free</h5>
                    </div>
                </div>
            </div>
            <footer>[tip:  hold shift + scroll on pc to scroll horizontally]</footer>
        </>
    );
};
