import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface WrapperProps {
  open: boolean;
}

const Wrapper = styled.div<WrapperProps>`
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

  h2 {
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
    font: 500 14px Playfair Display;

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
    gap: 60px;
    list-style: none;
    padding: 0;

    @media (max-width: 800px) {
      gap: 30px;
    }
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
    align-items: center;

    @media (max-width: 700px) {
      display: ${props => (props.open ? 'flex' : 'none')};
      flex-direction: column;
      position: absolute;
      top: 60px;
      background-color: #f9c06a;
      border-radius: 20px;
      z-index: 1;
      width: 30%;
      left: 110px;
      padding: 20px 0;
      text-align: center;

      li {
        &:hover {
          background-color: #f7a11f;
          border-radius: 20px;
          width: 100%;
          padding: 15px 0;
          margin: 0;
        }
      }
    }
  }
`;

const Header = () => {
  const nav: string[] = ['Home', 'Menu', 'About Us', 'Contact Us'];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper open={isOpen}>
      <motion.h2 initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 2 }}>
        Caffeine
      </motion.h2>
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
        <motion.button whileHover={{ scale: 1.1, backgroundColor: '#f7a11f' }} className="btn_active">
          Sign Up
        </motion.button>
      </div>
    </Wrapper>
  );
};

export default Header;
