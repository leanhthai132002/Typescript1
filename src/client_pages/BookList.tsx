import React, { Component, useEffect, useState } from 'react';
import { getBooks, deleteBook } from '../client_api/book';
import {Link} from 'react-router-dom';

class BookListOld extends Component {
    state = {
        count: 0
    };
    componentDidMount() {
        console.log('didmount', this.state.count);
    }
    componentDidUpdate() {
        console.log('didupdate', this.state.count);
    }

    render() {
        return (
            <div onClick={() => this.setState({
                count: this.state.count + 1
            })}>
                BookList Class
                <div>{this.state.count}</div>
            </div>
        )
    }
}

export type BOOK_TYPE = {

    id: number | string,
    name: string,
    price: number,
    categories: string,
};

function BookList() {

    const [books, setBooks] = useState<BOOK_TYPE[]>([]);


    const handleGetBooks = async () => {
        const response = await getBooks();
        setBooks(response.data);
    };

    const handleDelete = async (id: number|string) => {

        const response = await deleteBook(id);
        console.log(response);
        if(response.status === 200){
            handleGetBooks();
        }
        
    };
    
    console.log(books);

    useEffect(() => {
        handleGetBooks();
    }, []);

    return (
        <div>
            <div>
                <Link to={'/books/create'}>
                    <button>Tạo Sách</button>
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Category_id</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book => (
                            <tr key={book.id}>
                                <td>{book.id}</td>
                                <td>{book.name}</td>
                                <td>{book.price}</td>
                                <td>{book.categories}</td>
                                <td><Link to={`/books/${book.id}`}><button>Detail</button></Link> </td>
                                <td><Link to={`/books/edit/${book.id}`}><button>Edit</button></Link></td>
                                <td><button onClick={() => handleDelete(book.id)}>Delete</button></td>
                                
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
}

export default BookList;