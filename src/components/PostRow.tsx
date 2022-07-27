import { PropsWithChildren } from 'react';
import { Post } from '../interface/Post.interface';
import '../css/PostRow.css'

interface PostAsProp {
    post: Post
}
export function PostRow(props: PropsWithChildren<PostAsProp>) {
    return (
        <div className='RowContainer'>
            <div className="rowIndex">{props.post.id}</div>
            <div style={{flexGrow: 0, flexShrink: 1, flexBasis: "auto", marginTop: '4px', marginBottom: '4px'}}>{props.post.title}</div>
        </div>
    )
}