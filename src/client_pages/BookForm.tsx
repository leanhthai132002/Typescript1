import { create } from "domain";
import React, { useState } from "react";
import { createBook } from "../client_api/book";
import {useNavigate} from 'react-router-dom';
function BookForm () {
    const navigate = useNavigate();

    //State lưu giá trị của 2 input, được cập nhật khi input onchange
    const [nameValue, setNameValue] = useState<string>('');
    const [priceValue, setPriceValue] = useState<string>('');
    const [categoriesValue, setcategoriesValue] = useState<string>('');
    const [messages, setMessage] = useState<string[]>([]);

    const onValidate = (data: {name: string, price: number, categories: string}) => {
        const validateMessage = [];
        if (!data.name){
            validateMessage.push('Ten không được trống');
        }else if(data.name.length<6){
            validateMessage.push('Tên phải dài hơn 6 kí tự');
        }


        if (!data.price){
            validateMessage.push('Giá không được trống');
        }else if(data.price<1){
            validateMessage.push('Giá không được <= 0');
        }
        
        
        if (!data.categories){
            validateMessage.push('Giá không được trống');
        }else if(data.categories.length<1){
            validateMessage.push('Giá không được <= 0');
        }

        return validateMessage;
    }

    const handleSubmit = async () => {
        const submitData = {
            name: nameValue,
            price: +priceValue,
            categories: categoriesValue,
        };

        const validate = onValidate(submitData);
        if (validate.length === 0) {
            messages.length && setMessage([]);
            const response = await createBook(submitData);
            if (response.status === 201){
                navigate('/books')
            }
        }else{
            setMessage(validate);
        }
        
    }
    return (
        <div>
            <h1>Thêm Mới sách</h1>
            <div>
                <form>
                    <div>
                        <label htmlFor="name">Tên SP</label>
                        <input 
                            type="text" 
                            id="name" 
                            onChange={(event) => setNameValue(event.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="price">Giá</label>
                        <input 
                            type="number" 
                            id="price"
                            onChange={(event) => setPriceValue(event.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="price">Danh mục</label>
                        <input 
                            type="text" 
                            id="categories"
                            onChange={(event) => setcategoriesValue(event.target.value)}/>
                    </div>
                    <div>
                        <button
                            onClick={()=> handleSubmit()}
                            type="button">Submit</button>
                    </div>
                </form>
                <div>
                    {
                        messages.length > 0
                        ? <ul>
                            {
                                messages.map((messages, index) => (
                                    <li key={index}>{messages}</li>
                                ))
                            }
                        </ul>
                        :null
                    }
                </div>
            </div>
        </div>
    );
};
export default BookForm;