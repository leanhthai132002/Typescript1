import AppClone from '../App_clone';
import api from './axios';

export const getPosts = () => {
    return api.get('/post');
};

export const getPost = (id:string|undefined) => {
    return api.get(`/post/${id}`);
};

export const creatPost = (data :any) =>{
    return api.post('/post',data);
};

export const deletePost = (id: number|string) => {
    return api.delete(`/post/${id}`);
}

export const updatePost = (id:string|undefined, data :any) => {
    return api.put(`/post/${id}`, data);
};