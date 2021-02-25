import React, { Component } from 'react'
import { getBooks } from './api-utils';
import { Link } from 'react-router-dom';

export default class ListPage extends Component {
    state = {
        books: [],
    }

    componentDidMount = async () => {
        const books = await getBooks();
        console.log(books);

        this.setState({
            books: books,
        })
    }

    render() {
        return (
            <div>
                <h1 className="list-title">List Page</h1>
                <div className="list-booklist">

                    {this.state.books.map(book => <Link
                        to={`books/${book.id}`} key={book.name}>
                        <div className="list-book-item">
                            <p>Title: {book.title}</p>
                            <p> Category: {book.category}</p>
                            <p>Author: {book.author}</p>
                            <p> Price: ${book.price}</p>
                            <p>{book.hardcover ? 'Hardcover' : 'Paperback'}</p>
                            <p>Shipping: {book.shipping}</p>
                        </div>
                    </Link>
                    )}
                </div>
            </div >
        )
    }
}
