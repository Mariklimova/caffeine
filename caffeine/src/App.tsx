import Header from "./components/Header/Header"
import styled, { createGlobalStyle } from 'styled-components'
import img from './assets/coffeeImage.png'
import coffee from './assets/coffeeBeans.png'
import coffeeMenu1 from './assets/Cappuccino.svg'
import coffeeMenu2 from './assets/ChaiLatte.svg'
import coffeeMenu3 from './assets/Macchiato.svg'
import coffeeMenu4 from './assets/Expresso.svg'
import coffee_beans from './assets/coffeeBeans.svg'
import badge from './assets/badge.svg'
import coffee_cup from './assets/coffeeCup.svg'
import best_price from './assets/bestPrice.svg'

const coffies = [
  { id: 1, title: 'Cappuccino', description: 'Coffee 50% | Milk 50%', price: '$8.50', img: coffeeMenu1 },
  { id: 2, title: 'Chai Latte', description: 'Coffee 50% | Milk 50%', price: '$8.50', img: coffeeMenu2 },
  { id: 3, title: 'Macchiato', description: 'Coffee 50% | Milk 50%', price: '$8.50', img: coffeeMenu3 },
  { id: 4, title: 'Expresso', description: 'Coffee 50% | Milk 50%', price: '$8.50', img: coffeeMenu4 },
];

const advantages = [
  { id: 1, title: 'Supreme Beans', description: 'Beans that provides great taste', icon: coffee_beans },
  { id: 2, title: 'High Quality', description: 'We provide the highest quality', icon: badge },
  { id: 3, title: 'Extraordinary', description: 'Coffee like you have never tasted', icon: coffee_cup },
  { id: 4, title: 'Affordable Price', description: 'Our Coffee prices are easy to afford', icon: best_price },
];

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

    .button {
      background: #F9C06A;
      padding: 14px 27px;
      border-radius: 24px;
      color: #1E1E1E;
      max-width: 134px;
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

  .content {
    display: flex;
    flex-direction: column;
    gap: 29px;

    h2 {
      font-family: Playfair Display;
      font-size: 54px;
      font-weight: 700;
      color: #603809;
    }
    p {
      font-family: Playfair Display;
      font-size: 20px;
      font-weight: 400;
      color: #707070;


    }

    .button {
      background: #F9C06A;
      padding: 14px 27px;
      border-radius: 24px;
      color: #1E1E1E;
      max-width: 134px;
    }
    
  }
`

const MenuList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 82px auto 0;
    gap: 24px;

  h2 {
    font-family: Playfair Display;
    font-size: 54px;
    font-weight: 700;
    color: #603809;
  }

  p {
    font-family: Playfair Display;
    font-size: 20px;
    font-weight: 400;
    color: #707070;
  }

  .content {
    display: flex;
    flex-wrap:wrap;
    gap: 20px;
  }
  .menu_card {
    border: 1px solid #F9C06A6B;
    max-width: 280px;
    height:364px;
    text-align: center;
    background: #FFF9F1;


    .coffeeMenu1, .coffeeMenu2, .coffeeMenu3, .coffeeMenu4 {
      width: 280px;
      height: 222px;
      background-size: contain;
      background-repeat: no-repeat;
    }
   
    h3 {
      font-family: Playfair Display;
      font-size: 22px;
      font-weight: 700;
      color: #603809;
      margin-top: 14px;
    }

    .description {
      font-family: Playfair Display;
      font-size: 16px;
      font-weight: 400;
      color: #1E1E1E;
      margin: 6px auto;
    }

    .price {
      font-family: Playfair Display;
      font-size: 18px;
      font-weight: 700;
      color: #603809;
    }
    .btn_order {
      background: #F9C06A;
      padding: 14px 27px;
      border-radius: 24px;
      color: #1E1E1E;
      max-width: 135px;
      margin: 18px auto 82px;
      font-family: Playfair Display;
      font-size: 16px;
      font-weight: 700;
    }
  }
  `

const Advantages = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 82px auto;
    gap: 20px;

  h2 {
    font-family: Playfair Display;
    font-size: 54px;
    font-weight: 700;
    color: #603809;
  }

  p {
    font-family: Playfair Display;
    font-size: 20px;
    font-weight: 400;
    color: #707070;
  }

  .advantages_content {
    display: flex;
    flex-wrap:wrap;
    gap: 20px;

    .advantages_card {
      border: 1px solid #F9C06A6B;
      max-width: 280px;
      height: 284px;
      text-align: center;
      background: #FFF9F1;
      padding: 36px 43px;
    
      .coffee_beans, .badge, .coffee_cup, .best_price {
        width: 88px;
        height: 88px;
        background-size: contain;
        background-repeat: no-repeat;
      }
        
      h3 {
        font-family: Playfair Display;
        font-size: 22px;
        font-weight: 700;
        color: #603809;
        margin: 25px auto 8px;
      }
  
    }
  }
  .important {
    font-family: Playfair Display;
    font-size: 20px;
    font-weight: 700;
    color: #603809;
  }
  .button {
    background: #F9C06A;
    padding: 14px 27px;
    border-radius: 24px;
    color: #1E1E1E;
    max-width: 135px;
    margin: 18px auto 82px;
    font-family: Playfair Display;
    font-size: 16px;
    font-weight: 700;
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
        <button className="button">Learn More</button>
      </div>
      <div>
        <img src={coffee} alt="coffee" />
      </div>
    </CoffeeDiscovery>

    <MenuList>
      <h2>Enjoy a new blend of coffee style</h2>
      <p>Explore all flavours of coffee with us. There is always a new cup worth experiencing.</p>
      <div className="content">
        {coffies.map((el) =>
          <div className="menu_card" key={el.id}>
            <img src={el.img} alt="" />
            <h3>{el.title}</h3>
            <p className="description">{el.description}</p>
            <p className="price">{el.price}</p>
            <button className="btn_order">Order Now</button>
          </div>
        )}
      </div>
    </MenuList>
    <Advantages>
      <h2>Why are we different?</h2>
      <p>We don’t just make your coffee, we make your day!</p>
      <div className="advantages_content">
        {advantages.map((el) =>
          <div className="advantages_card" key={el.id}>
            <img src={el.icon} alt="" />
            <h3>{el.title}</h3>
            <p>{el.description}</p>
          </div>
        )}
      </div>
      <p>Great ideas start with great coffee, Lets help you achieve that</p>
      <p className="important">Get started today.</p>
      <button className="button">Join Us</button>
    </Advantages>

  </>

}
export default App

