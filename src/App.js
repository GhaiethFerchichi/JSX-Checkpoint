import img from "./img/imageInSrc.jpg";
import vid from "./vid/myVideo.mp4";

import "./css/style.css";

function App() {
  return (
    <div className='App'>
      <div className='divStyle'></div>
      <h1 className='title red'>Ghaieth Ferchichi</h1>
      <br />
      <img src={img} alt='imageInSrc' />
      <br />
      <img src='/imageInPublic.jpg' alt='imageInPublic' />
      <video width='320px' height='240px' controls>
        <source src={vid} type='video/mp4' />
      </video>
    </div>
  );
}

export default App;
