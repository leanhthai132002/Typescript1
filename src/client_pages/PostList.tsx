import React, { useEffect, useState} from "react";
import { getPosts } from "../client_api/post";
import {Link} from 'react-router-dom';
type POST = {
    id: number,
    title: string,
    desc: string,
    author: string,
    category: string,
    thumbnail: string,
    status: number
};

export default function PostList(){
    const [posts, setPosts] = useState<POST[]>([]);

    const handleGetPosts = async () => {
        const respose =await getPosts();
        setPosts(respose.data);
    };

    useEffect(()=>{
        handleGetPosts();
    }, []);

    return(
        <div>
        <div><Link to={'/posts/create'}><button>
            Tạo mới bài viết
        </button></Link></div>
        <div>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Tiêu đề</td>
                        <td>Mô tả</td>
                        <td>Tác Giả</td>
                        <td>Danh mục</td>
                        <td>Ảnh</td>
                        <td>Trạng thái</td>
                        <td>Hành động</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        posts.map(post => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.desc}</td>
                                <td>{post.author}</td>
                                <td>{post.category}</td>
                                <td>{post.thumbnail}</td>
                                <td>{post.status ? 'Kích hoạt': 'Không kích hoạt'}</td>
                                <td> </td>
                                <td><Link to={`/posts/edit/${post.id}`}>Chỉnh sửa</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
    )
};