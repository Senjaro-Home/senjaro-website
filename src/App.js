import android from "./assets/images/android.png";
import ios from "./assets/images/ios.png";
import mshangao from "./assets/images/mshangao.png";
import facebook from "./assets/images/facebook.png";
import instagram from "./assets/images/instagram.png";
import twitter from "./assets/images/twitter.png";
import logo from "./assets/images/logo.png"
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav> 
          <img src={logo} className="logo" alt="warning button" />
          <a href="/#" className="nav-item active">Home</a>
          <a href="/#" className="nav-item">About</a>
          <a href="/#" className="nav-item">Contact Us</a>
        </nav>
        <img src={mshangao} className="warning-logo" alt="warning button" />
        <p className="text">
          Our website is under construction 🚧 but you can still download our
          mobile application and enjoy our service.
        </p>

        <div className="img">
          <a href="https://play.google.com/store/apps/details?id=com.senjaro&hl=en&gl=US" rel="noopener noreferrer">
            <img src={android} className="App-logo-android" alt="android app logo"  />
          </a>

          <a href="https://apps.apple.com/tz/app/senjaro/id1474006471#?platform=iphone
          " rel="noopener noreferrer">
            <img src={ios} className="App-logo-ios" alt="ios-app-logo" />
          </a>
        </div>
        <div className="social-media-icons">
          <a href="https://www.facebook.com/senjarotz" target="_blank" rel="noreferrer">
            <img src={facebook} className="socail-media fb" alt="facebook logo" />
          </a>
          <a href="https://www.instagram.com/senjaro_tz/" target="_blank" rel="noreferrer">
            <img src={instagram} className="socail-media ig" alt="instagram logo" />
          </a>
          <a href="https://twitter.com/Senjarotz" target="_blank" rel="noreferrer">
            <img src={twitter} className="socail-media twt" alt="twitter logo" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
