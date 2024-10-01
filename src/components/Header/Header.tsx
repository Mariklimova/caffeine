import styled from 'styled-components';

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
    font-family: Clicker Script;
    font-size: 35px;
    font-weight: 400;
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
  }

  .container {
    display: flex;
    gap: 35px;
  }

  .navigation {
    display: flex;
    gap: 60px;

    @media (max-width: 900px) {
      gap: 30px;
    }
    p {
      color: #ffffff;
    }
  }
`;
const Header = () => {
  const nav: string[] = ['Home', 'Menu', 'About Us', 'Contact Us'];

  return (
    <>
      <Wrapper>
        <h1>Caffeine</h1>
        <div className="navigation">
          {nav.map((el, i) => (
            <p key={i}>{el}</p>
          ))}
        </div>

        <div className="container">
          <button>Sign In</button>
          <button className="btn_active">Sign Up</button>
        </div>
      </Wrapper>
    </>
  );
};
export default Header;
