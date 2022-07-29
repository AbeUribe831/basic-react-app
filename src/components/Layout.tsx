import { PropsWithChildren, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/Theme";
import { Appbar } from "./Appbar";

const FlexMainContentWrapper = styled.div`
        display: flex;
        minHeight: 100vh;
`;
export default function Layout(props: PropsWithChildren) {
    const { isLightTheme } = useContext(ThemeContext);
    
    return ( 
        <>
            <Appbar></Appbar>
            <FlexMainContentWrapper
                style={{backgroundColor: isLightTheme ? 'white' : '#212121'}}>{props.children}</FlexMainContentWrapper>
        </>
    )
}