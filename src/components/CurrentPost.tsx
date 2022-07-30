import { PropsWithChildren } from "react";
import { Post } from "../interface/Post.interface";
import { CurrentPostBox } from "./style/CurrentPostBox";
import { Image } from "./style/Image";
import { PostBody } from "./style/PostBody";
import { PostTitle } from "./style/PostTitle";
export function CurrentPost(props: PropsWithChildren<{post: Post}>) {
    return (
        <CurrentPostBox overflow={"hidden"} borderRadius={"2%"}>
            <Image src={`https://picsum.photos/200/300`} alt=""/>
            <PostTitle
                paddingLeft={2}
            >{props.post.title}</PostTitle>
            <PostBody
                paddingLeft={2}
                paddingRight={2}
                paddingBottom={2}>
                    {props.post.body}
            </PostBody>
        </CurrentPostBox>
    )
}