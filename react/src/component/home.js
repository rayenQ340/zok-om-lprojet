
import "../styles/home.css";
import Products from './products';
import AboutUs from './aboutus';
import Navbar from './navbar';

const Home = () => {

  return (
    <div className="home_body"> 
      <Navbar />
        <div>
            <div className="home-container" >
              <div className="text-container">
                <h1 className="text">Control Your Hive, Connect Your Bees. Everywhere, Everytime!</h1>
                <p>Meet the Smart BeeHive, Your Modern Monitoring BeeHives Partner</p>
                <button className="custom-button4">
                  <span className="button-text99">Get access</span>
                </button>
              </div>
            </div>
          </div>
    <div className="container">
        <AboutUs />
      </div>
      <div className="container">
        <Products />
      </div>
      </div>
  );
}

export default Home;
