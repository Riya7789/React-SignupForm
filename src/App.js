import fbImg from './facebook.png'
import twitterImg from './twitter.png'
import googleImg from './google.png'
import './App.css';
import Header from './Header';
import Button from './Button';
import myForm from './Form';       

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Button">
      <Button
        imageSrc={fbImg}
        name="Facebook"
        color="btn facebook"
      />
      <Button
        imageSrc={twitterImg}
        name="Twitter"
        color="btn twitter"
      />
      <Button
        imageSrc={googleImg}
        name="Google"
        color="btn google"
      />

      </div>
    </div>
  );
}

export default App;
