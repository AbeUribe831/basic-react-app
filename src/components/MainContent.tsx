import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Post } from "../interface/Post.interface";
import { CurrentPost } from "./CurrentPost";
import PostList from "./PostList";
import { Grid } from "@mui/material";
import { CurrentPostGridItem, PostListGridItem } from "./style/GridItem";

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
        <Grid 
            container 
            flexDirection={"row"}
            flexWrap={"wrap"}
            paddingTop={"80px"}
            maxWidth={1200}
            alignSelf={'center'}
            marginRight={'auto'}
            marginLeft={'auto'}
            >
            <PostListGridItem>
                <PostList
                    posts={posts}
                    handleOnClick={handleOnClickRow}/>
            </PostListGridItem>
            {posts.length!==0 &&
                <CurrentPostGridItem>
                    <CurrentPost post={posts[currentId]}/>
                </CurrentPostGridItem>
            }
        </Grid>
    )
}