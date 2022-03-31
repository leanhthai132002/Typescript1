import React from "react";
import {Routes, Route} from 'react-router-dom';
import Dashboard from "./client_pages/Dashbord";
import ClientLayout from "./client_pages/layout";
import ProductList from "./client_pages/ProductList";
import ProductDetail from "./client_pages/ProductDetail";
import ProductForm from "./client_pages/ProductForm";
import PostList from "./client_pages/PostList";
import PostForm from "./client_pages/PostForm";
import PostDetail from "./client_pages/PostDetail";

function AppClone(){
    return (
        <div>
            <h1>App clone</h1>
            <Routes>
                {/* <Route path={'/'} element={<Dashboard />} />
                <Route path={'/products'} element={<ProductList/>}/>
                <Route path={'/products/:id'} element={<ProductDetail/>} /> */}
                {/* bọc các route con bên trong
                Route bên ngoài sẽ định nghĩa layout
                element con sẽ đưuọc render vào oulet */}
                <Route path={'/'} element={<ClientLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path={'products'}>
                        <Route index element={<ProductList />} />
                        <Route path={':id'} element={<ProductDetail/>} />
                        <Route path={'create'} element={<ProductForm/>} />
                        <Route path={'edit/:id'} element={<ProductForm/>} />
                    </Route>
                    <Route path={'posts'}>
                        <Route index element={<PostList/>} />
                        <Route path={':id'} element={<PostDetail/>} />
                        <Route path={'create'} element={<PostForm/>} />
                        <Route path={'edit/:id'} element={<PostForm/>} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}
export default AppClone;