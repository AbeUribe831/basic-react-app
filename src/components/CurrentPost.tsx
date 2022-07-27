import { PropsWithChildren } from "react";
import { Post } from "../interface/Post.interface";
import "../css/CurrentPost.css"

const postUrl = 'https://jsonplaceholder.typicode.com/posts';
export function CurrentPost(props: PropsWithChildren<{post: Post}>) {
    return (
        <div className="postContainer">
            <div className="innerContainer">
                <img style={{height: 200, width: "100%"}} src={`https://picsum.photos/200/300`} alt=""/>
                <div className="postTitle">{props.post.title}</div>
                <div className="postBody">{props.post.body}</div>
            </div>
        </div>
    )
}