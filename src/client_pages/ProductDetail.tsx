import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { getProduct } from '../client_api/product';
import {PRODUCT_TYPE} from './ProductList'
function ProductDetail() {
    const {id} = useParams();

    const [product, setProduct] = useState<PRODUCT_TYPE>();

    const handleGetProductDetail = async () => {
        const response = await getProduct(id);
        setProduct(response.data);
    }

    useEffect(() => {
        handleGetProductDetail();
    }, []);

    return (
        <div>
            Product Detail component
            <p>ID: {product?.id}</p>
            <p>Name: {product?.name}</p>
            <p>Price: {product?.price}</p>
        </div>
    );
}

export default ProductDetail;