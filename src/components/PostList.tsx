import React, { PropsWithChildren } from "react";
import { Post } from "../interface/Post.interface";
import { PostRow } from "./PostRow";
import '../scss/PostList.scss'
// use media to see if exceed max width then add max width for body
export default function PostList(props: PropsWithChildren<{
    posts: Post[], 
    handleOnClick: (event: React.MouseEvent<HTMLLIElement>) => void
}>) {
    return (
        <div className="FlexContainer">
            <ul className="ListWrapper">
                {props.posts.map((post, index) => ( 
                    <PostRow 
                        key={index}
                        post={post}
                        index={index}
                        handleOnClick={props.handleOnClick}/>
                ))}
            </ul>
        </div>
    )
}