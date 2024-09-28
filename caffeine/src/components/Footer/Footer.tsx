import styled from 'styled-components'
import bg_coffe_short from "./assets/backgroundCoffeShort.png"
import bg_coffe_beans from "./assets/CoffeBeansBackground.png"

const BackgroundFooter = styled.div`
  background-image: url(${bg_coffe_short});
  width: 100%;
  height: 574px;
  background-size: cover;
  background-position: center;
`
const BackgroundCoffeBeans = styled.div`
  background-image: url(${bg_coffe_beans});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  .wrapper {
    display: flex;
    justify-content: space-between;
  }

`
const Footer = () => {
  return <>
    <BackgroundFooter></BackgroundFooter>
    <BackgroundCoffeBeans>
      <div className='wrapper'>
        <div className='info_text'>
          <h1>Bean Scene</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <div className='images'>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className='info_menu'>
          <div className='info_about'>
            <h2>About</h2>
            {['Menu', 'Features', 'News & Blogs', 'Help & Supports'].map((el, i) => <p key={i}>{el}</p>)}
          </div>
          <div className='info_company'>
            <h2>Company</h2>
            {['How we work', 'Terms of service', 'Pricing', 'FAQ'].map((el, i) => <p key={i}>{el}</p>)}
          </div>
        </div>
      </div>
    </BackgroundCoffeBeans>
  </>
}
export default Footer