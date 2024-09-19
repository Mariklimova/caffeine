import styled from "styled-components"

const Wrapper = styled.div`
    max-width: 1220px;  
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2% 0;
    margin: auto;
    h1 {
        font-family: Clicker Script;
        font-size: 35px;
        font-weight: 400;
        color: #FFFFFF;
    }

    button {
        display: block;
        color: #FFFFFF;
    }

    .btn_active {
        background: #F9C06A;
        padding: 14px 27px;
        border-radius: 24px;
        color: #1E1E1E;
    }

    .container {
        display: flex;
        gap: 35px;
    }

    .navigation {
        display: flex;
        gap: 60px;

        p {
            color: #FFFFFF;
        }
    }
`
const Header = () => {
    const nav: string[] = ['Home', 'Menu', 'About Us', 'Contact Us']

    return <>
        <Wrapper>
            <h1>Caffeine</h1>
            <div className="navigation">
                {nav.map((el, i) => <p key={i}>{el}</p>)}
            </div>

            <div className="container">
                <button>Sign In</button>
                <button className="btn_active">Sign Up</button>
            </div>

        </Wrapper>
    </>
}
export default Header