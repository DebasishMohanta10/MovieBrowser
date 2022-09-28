import image1 from '../image2.png';
import Hero from './hero';
const Home = () => {
    return (
      <div className="header">
        <div className='details'>
            <img src={image1} alt="Rocket" className="header-img img-fluid" />
            <Hero heading="Hello, Welcome to Movie Browser!" text="This is my First Site Made using React." />
            <br/>
            <button type="button" className="btn btn-lg btn-outline-primary">Learn More</button>
        </div>
      </div>
    )
  }

export default Home;