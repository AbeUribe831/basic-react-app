import { useEffect, useState } from "react";

export default function Loading() {
    const [elipsis, setElipsis] = useState('.')
    useEffect(() => {
        setTimeout(() => {
            if(elipsis.length < 3) {
                setElipsis(elipsis + '.')
            }
            else {
                setElipsis('.')
            }
        }, 500);
    },[elipsis])
    return (
        <div style={{
            minHeight: "100%", 
            width:"100%", 
            fontSize: "32px",
            fontWeight: "bold",
            justifyContent: "center",
            alignItems: "center",
            display: 'flex',
            }}>
            <div>
                Loading{elipsis}
            </div>
        </div>
    )
}