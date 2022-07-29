import { Post } from '../interface/Post.interface';
import '../scss/PostRow.scss'
import styled from 'styled-components';
import { ThemeContext } from '../context/Theme';
import { useContext, useState } from 'react';
interface PostAsProp {
    post: Post;
    index: number;
    handleOnClick: (event: React.MouseEvent<HTMLLIElement>) => void
}
const Title = styled.div`
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    margin-top: 4px;
    margin-botton: 4px;
`;
const RowIndex = styled.div`
        align-self: center;
        min-width: 56px;
    `;
const RowContainerLi = styled.li`
    @media (min-width: 0px) {
            display: flex;
            flex-direction: row;
            padding-top: 8px;
            padding-bottom: 8px;
            padding-left: 12px;
            padding-right: 0px;
            text-align: left; 
            border-bottom-style: solid; 
            border-bottom-color: rgba(0, 0, 0, 0.12);
            border-width: 0px 0px 1px;
            text-align-last: left;
            flex-basis: 100%;
            width: 100%;
            margin-left:27px;
            padding-left: 0;
            cursor: pointer;
    }

    @media (min-width: 600px) {
            display: flex; 
            text-align: left; 
            border-bottom-style: solid; 
            border-bottom-color: rgba(0, 0, 0, 0.12);
            border-width: 0px 0px 1px;
            text-align-last: left;
            margin-left: 0;
            padding-left: 0;
            cursor: pointer;
        }
    }
    .ActiveRowContainer:active {
        background-color: rgb(225,225,225);
        transition-property: background-color;
        transition-duration: 150ms;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    @keyframes ActiveRowContainer {
        from {
            opacity: 1;
            transform: scale(0)
        }
    
        to {
            opacity: 0;
            transform: scale(10);
        }
    }
`
function backgroundColorBasedOnHoverAndTheme(isLightTheme: boolean, isHover: boolean) {
    if(isHover) {
        if(isLightTheme) {
            return 'rgb(245,245,245)';
        }
        else {
            return '#494c4f';
        }
    }
    else {
        return 'inherit';
    }
}
export function PostRow(props: PostAsProp) {
    const { isLightTheme } = useContext(ThemeContext);
    const [hover, setHover] = useState(false);
    return (
        <RowContainerLi value={props.index} onClick={props.handleOnClick}
            onMouseEnter={() => {
                setHover(true);
            }}
            onMouseLeave={() => {
                setHover(false);
            }}
            style={{
                backgroundColor: backgroundColorBasedOnHoverAndTheme(isLightTheme, hover)
            }}
        >
            <RowIndex 
                style={{
                    color:isLightTheme ? 'rgba(0, 0, 0, 0.54)' : 'white'
                }}>{props.index}</RowIndex>
            <Title>{props.post.title}</Title>
        </RowContainerLi>

    )
}