import styled from 'styled-components';
import bg_coffe_short from './assets/backgroundCoffeShort.png';
import bg_coffe_beans from './assets/CoffeBeansBackground.png';
import facebook from './assets/facebook.svg';
import instagram from './assets/instagram.svg';
import youtube from './assets/youtube.svg';
import twitter from './assets/twitter.svg';

const BackgroundFooter = styled.div`
  background-image: url(${bg_coffe_short});
  width: 100%;
  height: 374px;
  background-size: cover;
  background-position: center;
  margin-top: 82px;

  @media (max-width: 600px) {
    width: 0;
    height: 0;
  }
`;
const BackgroundCoffeBeans = styled.div`
  background-image: url(${bg_coffe_beans});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 66px;
    padding: 162px 2% 50px;

    @media (max-width: 700px) {
      flex-wrap: wrap-reverse;
    }

    .info_text {
      display: flex;
      flex-direction: column;
      max-width: 380px;
      gap: 20px;

      h1 {
        font: 400 54px Clicker Script;
        color: #ffffff;

        @media (max-width: 900px) {
          font-size: 40px;
        }
      }

      p {
        font: 400 14px Playfair Display;
        color: #ffffff;
        line-height: 22px;

        @media (max-width: 900px) {
          font-size: 12px;
          line-height: 18px;
        }
      }

      .images {
        display: flex;
        gap: 20px;

        .facebook,
        .instagram,
        .youtube,
        .twitter {
          cursor: pointer;
          width: 24px;
          height: 24px;
          background-size: contain;
          background-repeat: no-repeat;

          &:hover {
            transform: scale(1.1);
          }
        }

        .facebook {
          background-image: url(${facebook});
        }

        .instagram {
          background-image: url(${instagram});
        }

        .youtube {
          background-image: url(${youtube});
        }

        .twitter {
          background-image: url(${twitter});
        }
      }
    }

    .info_menu {
      display: flex;
      justify-content: space-between;
      gap: 66px;

      @media (max-width: 400px) {
        gap: 33px;
      }

      h2 {
        font: 700 26px Playfair Display;
        color: #ffffff;
        margin: 0 0 55px;

        @media (max-width: 900px) {
          font-size: 20px;
          margin: 0 0 15px;
        }
      }

      p {
        font: 400 18px Playfair Display;
        color: #ffffff;

        @media (max-width: 900px) {
          font-size: 14px;
        }
      }

      .info_contact,
      .info_company,
      .info_about {
        max-width: 332px;
        display: flex;
        flex-direction: column;
        gap: 22px;
      }

      .info_contact {
        h2 {
          margin-bottom: 31px;

          @media (max-width: 900px) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;
const Footer = () => {
  return (
    <>
      <BackgroundFooter></BackgroundFooter>
      <BackgroundCoffeBeans>
        <div className="wrapper">
          <div className="info_text">
            <h1>Bean Scene</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className="images">
              <div className="facebook"></div>
              <div className="instagram"></div>
              <div className="youtube"></div>
              <div className="twitter"></div>
            </div>
          </div>
          <div className="info_menu">
            <div className="info_about">
              <h2>About</h2>
              {['Menu', 'Features', 'News & Blogs', 'Help & Supports'].map((el, i) => (
                <p key={i}>{el}</p>
              ))}
            </div>
            <div className="info_company">
              <h2>Company</h2>
              {['How we work', 'Terms of service', 'Pricing', 'FAQ'].map((el, i) => (
                <p key={i}>{el}</p>
              ))}
            </div>
            <div className="info_contact">
              <h2>Contact Us</h2>
              {[
                'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016',
                '+1 202-918-2132',
                'beanscene@mail.com',
                'www.beanscene.com',
              ].map((el, i) => (
                <p key={i}>{el}</p>
              ))}
            </div>
          </div>
        </div>
      </BackgroundCoffeBeans>
    </>
  );
};
export default Footer;
