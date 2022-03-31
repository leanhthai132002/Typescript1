import AppClone from '../App_clone';
import api from './axios';

export const getProducts = () => {
    return api.get('/products');
};

export const getProduct = (id:undefined|string) =>{
    return api.get(`/products/${id}`)
};

export const createProduct = (data :any) =>{
    return api.post('/products',data);
};

export const deleteProduct = (id: number|string) => {
    return api.delete(`/products/${id}`)
};