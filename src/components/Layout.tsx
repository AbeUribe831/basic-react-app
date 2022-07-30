import { Grid } from "@mui/material";
import { PropsWithChildren } from "react";
import { MyAppBar } from "./style/MyAppBar";

export default function Layout(props: PropsWithChildren) {
    return (
        <>
            <MyAppBar >My Basic App</MyAppBar>
            <Grid minHeight={'100vh'}>{props.children}</Grid>
        </>
    )
}