import React, { PropsWithChildren } from "react";
import { Post } from "../interface/Post.interface";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
// use media to see if exceed max width then add max width for body
export default function PostList(props: PropsWithChildren<{
    posts: Post[], 
    handleOnClick: (event: React.MouseEvent<HTMLLIElement>) => void
}>) {
    return (
        <List sx={{padding: '0 16px 0 0 '}}>
            {props.posts.map((post, index) => ( 
                    <ListItemButton sx={{padding: "0px"}} key={index}>
                        <ListItem value={index} onClick={props.handleOnClick}>
                            <ListItemText
                                sx={{padding: "5px 20px 5px 0px"}}
                                primary={index}/> 
                            <ListItemText sx={{width: "100%"}}primary={post.title}/>
                        </ListItem>
                    </ListItemButton>
            ))}
        </List>
    )
}