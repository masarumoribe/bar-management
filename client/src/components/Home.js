import logo from '../assets/logo.png'
import './Home.css'

function Home(){
    return(
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Muromachi Bar & Lounge</h1>
        </header>
    )
}

export default Home;