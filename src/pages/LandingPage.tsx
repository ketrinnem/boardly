import styled from "@emotion/styled"
import LogIn from "../components/LogIn/LogIn"

export const LandingPage = () => {

    return <Wrapper>
        <Title>BOARDLY</Title>
        <LogIn />
    </Wrapper>
}

const Wrapper = styled.div`
background-color: #02132e;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Title = styled.h1`
color: white;
font-size: 48px;
`
