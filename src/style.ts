import styled, { createGlobalStyle } from 'styled-components';
import img from './assets/coffeeImage.png';
import bg_coffee from './assets/BackgroundCoffe.png';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-style:normal;
    color:#707070;
    font: 500 14px Playfair Display;
  }

  body {
    background-color: 'fff';
  }

  button {
    background-color:transparent;
    border: none;
  }
`;
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

    @media (max-width: 900px) {
      padding: 5%;
    }

    @media (max-width: 400px) {
      gap: 10px;
    }

    p {
      font: 500 22px Playfair Display;
      color: #ffffff;
      max-width: 527px;

      @media (max-width: 400px) {
        font-size: 18px;
      }
    }

    h1 {
      max-width: 527px;
      font: 400 220px Clicker Script;
      text-align: left;
      color: #ffffff;

      @media (max-width: 500px) {
        font-size: 120px;
      }
    }

    .button {
      background: #f9c06a;
      padding: 14px 27px;
      border-radius: 24px;
      color: #1e1e1e;
      max-width: 142px;
      cursor: pointer;
      font: 700 16px Playfair Display;
    }
  }
`;
const CoffeeDiscovery = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1180px;
  margin: auto;
  gap: 90px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }

  @media (max-width: 900px) {
    padding: 2%;
    gap: 50px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 29px;

    @media (max-width: 600px) {
      text-align: center;
      align-items: center;
    }

    h2 {
      font: 700 54px Playfair Display;
      color: #603809;
    }

    p {
      font: 400 20px Playfair Display;
      color: #707070;
    }

    .button {
      background: #f9c06a;
      padding: 14px 27px;
      border-radius: 24px;
      color: #1e1e1e;
      max-width: 142px;
      cursor: pointer;
      font: 700 16px Playfair Display;
    }
  }

  @media (max-width: 900px) {
    .img_coffee {
      width: 50%;
      height: 50%;
    }
  }
  @media (max-width: 400px) {
    .img_coffee {
      width: 100%;
      height: 100%;
    }
  }
`;

const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 82px auto 0;
  gap: 24px;

  @media (max-width: 900px) {
    padding: 2%;
  }

  h2 {
    font: 700 54px Playfair Display;
    color: #603809;
    text-align: center;

    @media (max-width: 900px) {
      font-size: 48px;
    }
  }

  p {
    font: 400 20px Playfair Display;
    color: #707070;
    text-align: center;
  }

  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;

    @media (max-width: 1200px) {
      gap: 50px;
    }
  }
  .menu_card {
    border: 1px solid #f9c06a6b;
    max-width: 280px;
    height: 364px;
    text-align: center;
    background: #fff9f1;
    transition: transform 0.3s ease;

    &:hover {
      background-color: #f9c06a6b;
      transform: scale(1.1);
      cursor: default;
    }

    .coffeeMenu1,
    .coffeeMenu2,
    .coffeeMenu3,
    .coffeeMenu4 {
      width: 280px;
      height: 222px;
      background-size: contain;
      background-repeat: no-repeat;
    }

    h3 {
      font: 700 22px Playfair Display;
      color: #603809;
      margin-top: 14px;
    }

    .description {
      font: 400 16px Playfair Display;
      color: #1e1e1e;
      margin: 6px auto;
    }

    .price {
      font: 700 18px Playfair Display;
      color: #603809;
    }

    .btn_order {
      background: #f9c06a;
      padding: 14px 27px;
      border-radius: 24px;
      color: #1e1e1e;
      max-width: 135px;
      margin: 18px auto 82px;
      font: 700 16px Playfair Display;
      cursor: pointer;
    }
  }
`;

const Advantages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 82px auto;
  gap: 20px;

  h2 {
    font: 700 54px Playfair Display;
    color: #603809;
    text-align: center;
  }

  p {
    font: 400 20px Playfair Display;
    color: #707070;
    text-align: center;
  }

  .advantages_content {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    .advantages_card {
      border: 1px solid #f9c06a6b;
      max-width: 280px;
      height: 284px;
      text-align: center;
      background: #fff9f1;
      padding: 36px 43px;
      transition: transform 0.3s ease;

      &:hover {
        background-color: #f9c06a6b;
        transform: scale(1.1);
        cursor: default;
      }

      .coffee_beans,
      .badge,
      .coffee_cup,
      .best_price {
        width: 88px;
        height: 88px;
        background-size: contain;
        background-repeat: no-repeat;
      }

      h3 {
        font: 700 22px Playfair Display;
        color: #603809;
        margin: 25px auto 8px;
      }
    }
  }
  .important {
    font: 700 20px Playfair Display;
    color: #603809;
  }
  .button {
    background: #f9c06a;
    padding: 14px 27px;
    border-radius: 24px;
    color: #1e1e1e;
    max-width: 135px;
    margin: 18px auto 82px;
    font: 700 16px Playfair Display;
    cursor: pointer;
  }
`;
const VisitCard = styled.div`
  background-image: url(${bg_coffee});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  .wrapper_visit_card {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 5% 93px;
    max-width: 1366px;

    @media (max-width: 700px) {
      flex-wrap: wrap;
    }

    @media (max-width: 400px) {
      padding: 5%;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 22px;
      max-width: 575px;

      h2 {
        font: 700 54px Playfair Display;
        color: #ffffff;

        @media (max-width: 900px) {
          font-size: 40px;
        }
      }

      p {
        font: 500 22px Playfair Display;
        color: #ffffff;
      }

      .button {
        background: #f9c06a;
        padding: 14px 27px;
        border-radius: 24px;
        color: #1e1e1e;
        max-width: 142px;
        cursor: pointer;
        font: 700 16px Playfair Display;
      }
    }
  }
`;

const Feedback = styled.div`
  padding: 82px 153px;
  margin: auto;
  max-width: 1366px;

  @media (max-width: 1000px) {
    padding: 82px 70px;
  }

  @media (max-width: 500px) {
    padding: 30px;
  }

  h2 {
    font: 700 54px Playfair Display;
    color: #603809;
    margin-bottom: 16px;
    text-align: center;
  }

  p {
    font: 400 20px Playfair Display;
    color: #707070;
    text-align: center;
  }

  .arrow_left,
  .arrow_right {
    background: #f9c06a;
    border-radius: 16px;
    padding: 29px;
    width: 82px;
    top: 220px;
    position: absolute;
    cursor: pointer;

    @media (max-width: 500px) {
      padding: 20px;
      width: 70px;
    }
  }

  .arrow_left {
    left: -50px;

    @media (max-width: 500px) {
      left: -30px;
    }
  }

  .arrow_right {
    right: -50px;

    @media (max-width: 500px) {
      right: -30px;
    }
  }

  .slider {
    border: 1px solid #f9c06a6b;
    background-color: #fff9f1;
    position: relative;
    margin-top: 45px;
    height: 524px;

    .quotes {
      position: absolute;
      top: 50px;
      left: 30px;

      @media (max-width: 900px) {
        width: 10%;
        height: 10%;
        top: 0px;
        left: 10px;
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 129px 100px 101px;
      gap: 30px;

      @media (max-width: 900px) {
        padding: 50px 30px 30px;
      }

      h3 {
        font-family: Playfair Display;
        font-size: 32px;
        font-weight: 700;
        color: #603809;
      }

      p {
        font-family: Playfair Display;
        font-size: 18px;
        font-weight: 600;
        color: #707070;
        line-height: 36px;

        @media (max-width: 1000px) {
          font-size: 16px;
          line-height: 32px;
        }

        @media (max-width: 600px) {
          font-size: 12px;
          line-height: 24px;
        }
      }

      .avatar {
        position: absolute;
        bottom: -80px;
      }
    }
  }
`;

export { Global, BackgroundPreview, CoffeeDiscovery, MenuList, Advantages, VisitCard, Feedback };
