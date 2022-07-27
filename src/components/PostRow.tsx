import { PropsWithChildren } from 'react';
import { Post } from '../interface/Post.interface';
import '../css/PostRow.css'

interface PostAsProp {
    post: Post;
    index: number;
    handleOnClick: (event: React.MouseEvent<HTMLLIElement>) => void
}
export function PostRow(props: PropsWithChildren<PostAsProp>) {
    return (
        <li key={props.index} value={props.index} className='RowContainer' onClick={props.handleOnClick}>
            <div className="rowIndex">{props.index}</div>
            <div style={{flexGrow: 0, flexShrink: 1, flexBasis: "auto", marginTop: '4px', marginBottom: '4px'}}>{props.post.title}</div>
        </li>
    )
}