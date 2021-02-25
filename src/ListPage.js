import React, { Component } from 'react'
import { getBooks } from './api-utils';

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

                    {this.state.books.map(book =>
                        <div className="list-book-item">
                            <p>Title: {book.title}</p>
                            <p> Category: {book.category}</p>
                            <p>Author: {book.author}</p>
                            <p> Price: ${book.price}</p>
                            {/* <p>{book.hardcover ? 'Is is a hardcover?'}</p> */}
                            {/* <p>book.shipping</p> */}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
