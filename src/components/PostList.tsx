import { PropsWithChildren } from "react";
import { Post } from "../interface/Post.interface";
import { PostRow } from "./PostRow";
import '../css/PostList.css'
// use media to see if exceed max width then add max width for body
export default function PostList(props: PropsWithChildren<{posts: Post[]}>) {
    return (
        <div className="FlexContainer">
            <ul className="ListWrapper">
                {props.posts.map((post) => ( 
                    <PostRow post={post}/>
                ))}
            </ul>
        </div>
    )
}