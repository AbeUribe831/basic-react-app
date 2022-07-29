import { PropsWithChildren, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/Theme";
import { Post } from "../interface/Post.interface";
import "../scss/CurrentPost.scss"

const Image = styled.img`
    height: 200px;
    width: 100%;
`
const InnerPostContainer = styled.div`
@media (min-width: 0px) {
    width: 100%;
    overflow: hidden;
@media (min-width: 600px) {
    margin-left: 20px;
    margin-right: 20px;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
}

border-radius: 1%;
`;  
const PostTitle = styled.div`
font-weight: 400;
font-size: 1.5rem;
line-height: 1.334;
padding: 16px;


`;
const PostBody = styled.div`
@media (min-width: 600px) {
        border-radius: 4px;
}
color: rgba(0, 0, 0, 0.87);
box-shadow: rgb(0, 0, 0 / 20%) 0px 2px 1px -1px;
overflow: hidden;
text-align: left;
width: 100%;
padding: 16px 16px 24px 16px;
`;

export function CurrentPost(props: PropsWithChildren<{post: Post}>) {
    const { isLightTheme } = useContext(ThemeContext);

    return (
        <div className="postContainer">
            <InnerPostContainer style={{
                backgroundColor: isLightTheme ? 'white' : '#494c4f'
            }}>
                <Image src={`https://picsum.photos/200/300`} alt=""/>
                <PostTitle 
                    style={{
                        backgroundColor: isLightTheme ? 'white' : '#494c4f',
                        color: isLightTheme ? 'black' : 'white'
                    }}
                    className="postTitle">{props.post.title}</PostTitle>
                <PostBody
                    style={{
                        backgroundColor: isLightTheme ? 'white' : '#494c4f',
                        color: isLightTheme ? 'black' : 'white' 
                    }}>{props.post.body}</PostBody>
            </InnerPostContainer>
        </div>
    )
}