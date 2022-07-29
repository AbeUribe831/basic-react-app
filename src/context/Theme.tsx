import { createContext, PropsWithChildren, useState } from "react";

const initialState = true;

interface Context {
    isLightTheme: boolean;
    toggleTheme: () => void;
}
export const ThemeContext = createContext<Context>({isLightTheme: initialState, toggleTheme: () => {}});

export default function ThemeProvider(props:PropsWithChildren) {
    const [isLightTheme, setToggleLightTheme] = useState(initialState);

    const toggleTheme = () => {
        setToggleLightTheme(!isLightTheme);
    }
    return (
        <ThemeContext.Provider value={{isLightTheme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )

}
