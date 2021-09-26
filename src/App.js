import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="all">
      <div className="textbox generalbox" id="text_0">
        <p>  
          This is an example text 0.
        </p>
      </div>
      <div className="textbox generalbox" id="text_1">
        <p>  
          This is an example text 1.
        </p>
      </div>
      <div className="textbox generalbox" id="text_2">
        <p>  
          This is an example text 2.
        </p>
      </div>

      <div className="image generalbox" id='img_0'>
        <img src="https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/512/chrome.png" 
         alt="logo"/>
      </div>
      <div className="image generalbox" id='img_1'>
        <img  src="https://d33wubrfki0l68.cloudfront.net/06185f059f69055733688518b798a0feb4c7f160/9f07a/images/product-identity-assets/firefox.png" 
        alt="logo"/>
      </div>
      <div className="image generalbox" id='img_2'>
        <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Safari_browser_logo.svg/482px-Safari_browser_logo.svg.png" 
        alt="logo"/>
      </div>
    </div>
  );
}


export default App;
