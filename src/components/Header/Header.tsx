import styled from 'styled-components';
// import right from './assets/icons-drop-down.jpg';
import { useState } from 'react';

const Wrapper = styled.div`
  max-width: 1220px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 0;
  margin: auto;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    padding: 2%;
  }

  h1 {
    font: 400 35px Clicker Script;
    color: #ffffff;
  }

  button:first-child {
    display: block;
    color: #ffffff;
    cursor: pointer;
    transition: border-bottom 3s ease;

    &:hover {
      text-decoration: underline;
    }
  }

  .btn_active {
    background: #f9c06a;
    padding: 14px 27px;
    border-radius: 24px;
    color: #1e1e1e;
    cursor: pointer;

    @media (max-width: 400px) {
      padding: 7px 14px;
      border-radius: 12px;
    }
  }

  .container {
    display: flex;
    gap: 35px;

    @media (max-width: 400px) {
      gap: 15px;
      flex-wrap: wrap;
      flex-direction: column;
    }
  }

  .navigation {
    display: flex;
    /* display:none; */
    gap: 60px;
    cursor: pointer;

    @media (max-width: 900px) {
      gap: 30px;
    }
    p {
      color: #ffffff;
    }
  }

  ul {
    display: flex;
    gap: 10px;
    list-style: none;
  }

  .drop_menu {
    display: none;
    flex-direction: column;
    cursor: pointer;

    div {
      width: 25px;
      height: 3px;
      background: white;
      margin: 4px 0;
    }

    @media (max-width: 700px) {
      display: flex;
    }
  }

  .menu {
    display: flex;
    /* gap: 60px; */

    @media (max-width: 700px) {
      display: ${props => (props.isOpen ? 'flex' : 'none')};
      flex-direction: column;
      position: absolute;
      top: 70px;
      /* background-color: #333;  */
      background-color: #f9c06a;
      width: 100%;
      left: 0;
      padding: 20px 0;
    }
  }
`;

//       /* .dropdown-content {
//         display: none;
//         position: absolute;
//         right: 0;
//         background-color: #f9f9f9;
//         min-width: 160px;
//         box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
//         z-index: 1;

//         /* .dropdown-content p {
//           color: black;
//           padding: 12px 16px;
//           display: block;
//         } */
//       /* }  */
//     /* } */

const Header = () => {
  const nav: string[] = ['Home', 'Menu', 'About Us', 'Contact Us'];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Wrapper isOpen={isOpen}>
      <h1>Caffeine</h1>
      <div className="drop_menu" onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </div>
      <div className="navigation">
        <ul className={`menu ${isOpen ? 'active' : ''}`}>
          {nav.map(el => (
            <li key={el}>
              <p>{el}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="container">
        <button>Sign In</button>
        <button className="btn_active">Sign Up</button>
      </div>
    </Wrapper>
  );
};

export default Header;
