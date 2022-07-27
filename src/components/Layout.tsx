import { PropsWithChildren } from "react";
import { Appbar } from "./Appbar";

export default function Layout(props: PropsWithChildren) {
    return ( 
        <>
            <Appbar></Appbar>
            <div style={{display: "flex", minHeight: '100vh'}}>{props.children}</div>
        </>
    )
}