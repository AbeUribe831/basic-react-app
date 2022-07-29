import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../context/Theme"
import "../scss/Appbar.scss"

const AppbarDiv = styled.div`
    @media (min-width: 0px) {
        min-height: 48px;
        padding-left: 16px;
        padding-right: 16px;   
    }
    @media (min-width: 600px) {
        min-height: 64px;
        padding-left: 24px;
        padding-right: 24px;
    }
    display: flex;
    flex-direction: column;
    width: 100%;
    color: white;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
    position: fixed;
    padding-left: 24px;
    padding-right: 24px;
    justify-content: center;
`;
export function Appbar() {
    const { isLightTheme, toggleTheme } = useContext(ThemeContext);
    return (
        <AppbarDiv style={{backgroundColor: isLightTheme ? 'rgb(25, 118, 210)' : '#0c1117'}}>
            <div className="appName">My Basic App</div>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </AppbarDiv>
    )
} 