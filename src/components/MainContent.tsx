import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "../css/MainContent.css"
import { Post } from "../interface/Post.interface";
import { CurrentPost } from "./CurrentPost";
import PostList from "./PostList";

const postUrl = 'https://jsonplaceholder.typicode.com/posts';
export function MainContent() {
    const { postId } = useParams();
    const navigate = useNavigate();
    
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        axios.get(postUrl).then(response => {
            console.log(response.data);
            const postsFromData: Post[] = [];
            if(posts.length !== 0) {
                return;
            }
            for(const data of response.data) {
                postsFromData.push(data as Post);
            }
            setPosts(postsFromData);
        })
    }, [posts.length]);
    
    const [currentId, setCurrentId] = useState<number>(0);
    useEffect(() => {
        const id = postId ? parseInt(postId) : 0
        setCurrentId(id)
    }, [postId]);

    const handleOnClickRow = (event: React.MouseEvent<HTMLLIElement>) => {
        const idOfRow = event.currentTarget.value;
        setCurrentId(idOfRow);
        navigate(`/${idOfRow}`);    
    }
    return (
        <div className="mainBody">
            <PostList 
                posts={posts}
                handleOnClick={handleOnClickRow}/> 
            {posts.length!==0 && <CurrentPost post={posts[currentId]}/>}
        </div>
    )
}