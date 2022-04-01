import AppClone from '../App_clone';
import api from './axios';

export const getBooks = () => {
    return api.get('/books');
};

export const getBook = (id:undefined|string) =>{
    return api.get(`/books/${id}`)
};

export const createBook = (data :any) =>{
    return api.post('/books',data);
};

export const deleteBook = (id: number|string) => {
    return api.delete(`/books/${id}`)
};

export const updateBook = (id:string|undefined, data :any) => {
    return api.put(`/books/${id}`, data)
}