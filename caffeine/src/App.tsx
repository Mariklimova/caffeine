import Header from "./components/Header/Header"
import styled, { createGlobalStyle } from 'styled-components'
import img from './assets/coffeeImage.png'
import coffee from './assets/coffeeBeans.png'

// const coffies = [
//   { id: 1, title: 'Cappuccino', description: 'Coffee 50% | Milk 50%', price: '$8.50', img: coffeeMenu1 },
//   { id: 2, title: 'Chai Latte', description: 'Coffee 50% | Milk 50%', price: '$8.50', img: coffeeMenu2 },
//   { id: 3, title: 'Macchiato', description: 'Coffee 50% | Milk 50%', price: '$8.50', img: coffeeMenu3 },
//   { id: 4, title: 'Expresso', description: 'Coffee 50% | Milk 50%', price: '$8.50', img: coffeeMenu4 },
// ];

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-style:normal;
    color:#707070;
    font-family: Playfair Display;
    font-size: 14px;
    font-weight: 500;
  }

  body {
    background-color: 'fff';
  }

  button {
    background-color:transparent;
    border: none;
  }
`
const BackgroundPreview = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  .landing {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
    padding: 5% 0;
    max-width: 1220px;

    p {
      font-family: Playfair Display;
      font-size: 22px;
      font-weight: 500;
      color: #FFFFFF;
      max-width: 527px;
    }

    h1 {
      max-width: 527px;
      font-family: Clicker Script;
      font-size: 220px;
      font-weight: 400;
      text-align: left;
      color: #FFFFFF;
    }
    
  }

  
  `
const CoffeeDiscovery = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1180px;
    margin: auto;
    gap: 90px;
.content{
  display: flex;
  flex-direction: column;
  gap: 29px;
  h2 {
    font-family: Playfair Display;
    font-size: 54px;
    font-weight: 700;
    color: #603809;
  }
  p{
    font-family: Playfair Display;
    font-size: 20px;
    font-weight: 400;
    color: #707070;


  }

}
`
const App = () => {


  return <>
    <Global />
    <BackgroundPreview>
      <Header />
      <div className="landing">
        <p>We’ve got your morning covered with</p>
        <h1>Coffee</h1>
        <p>
          It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our
          customers.
        </p>
        <button className="button">Order Now</button>
      </div>
    </BackgroundPreview>

    <CoffeeDiscovery>
        <div className="content">
          <h2>Discover the best coffee</h2>
          <p>
            Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a
            cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you
            have ever tasted.
          </p>
          <button className="button">Order Now</button>
        </div>
        <div>
          <img src={coffee} alt="coffee" />
        </div>
      </CoffeeDiscovery>

    <div className="menu">
      <h2>Enjoy a new blend of coffee style</h2>
      <p>Explore all flavours of coffee with us. There is always a new cup worth experiencing.</p>
      <div className="content">
        {/* {coffies.map(el => (
          
        ))} */}
      </div>
    </div>

  </>

}
export default App

