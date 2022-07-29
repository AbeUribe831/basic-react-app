import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "../scss/MainContent.scss"
import { Post } from "../interface/Post.interface";
import { CurrentPost } from "./CurrentPost";
import PostList from "./PostList";
import { ThemeContext } from "../context/Theme";
import styled from "styled-components";

const postUrl = 'https://jsonplaceholder.typicode.com/posts';
const MainBody = styled.div`
    @media (min-width: 0px) {
        padding-top: 48px;
    }
    @media (min-width: 600px) {
        padding-top: 80px;
    }
        width: 100%;
        padding-left: 16px;
        padding-right: 16px; 
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-right: auto;
        margin-left: auto;
        max-width: 1200px;
}`
export function MainContent() {
    const { isLightTheme } = useContext(ThemeContext); 
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
        <MainBody style={{color: isLightTheme ? 'black' : 'white'}}>
            <PostList 
                posts={posts}
                handleOnClick={handleOnClickRow}/> 
            {posts.length!==0 && <CurrentPost post={posts[currentId]}/>}
        </MainBody>
    )
}