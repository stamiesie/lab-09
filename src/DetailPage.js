import React, { Component } from 'react'
import { getBook, updateBook, getCategories, getCategoryId } from './api-utils';

export default class DetailPage extends Component {
    state = {
        title: '',
        category_id: 1,
        author: '',
        price: 1,
        hardcover: false,
        shipping: 'yes',
    }
    // on load we want the form filled with the book that was clicked on to edit/delete.  Use the getBook function with the book ID from params
    componentDidMount = async () => {
        await getCategories();

        const {
            title,
            category_id,
            author,
            price,
            hardcover,
            shipping,
        } = await getBook(this.props.match.params.bookId);

        // const category_id = getCategoryId(book, categories);

        this.setState({
            title: title,
            category_id: category_id,
            author: author,
            price: price,
            hardcover: hardcover,
            shipping: shipping
        })


    }

    handleTitleChange = (e) => this.setState({ title: e.target.value })

    handleCategoryChange = (e) => this.setState({ category: Number(e.target.value) })

    handleAuthorChange = (e) => this.setState({ author: e.target.value })

    handlePriceChange = (e) => this.setState({ price: Number(e.target.value) })

    handleHardcoverChange = () =>
        this.setState({
            // if hardcover is true, make it false or vice versa (starts as false in state)
            hardcover: !this.state.hardcover
        })

    handleShippingChange = (e) => this.setState({ shipping: e.target.value })

    handleSubmit = async (e) => {
        e.preventDefault();

        // use PUT function to give new book entered into state to the PUT endpoint
        await updateBook(this.props.match.params.bookId, this.state);
        // redirect to list page
        this.props.history.push('/books');
    }



    render() {
        // console.log(this.state)
        return (
            <div>
                <h1>Detail Page</h1>
                <div className="create-page">
                    {/* controlled inputs take all the power away from the DOM forms */}
                    <form onSubmit={this.handleSubmit}>
                        <label>Title
                    <input value={this.state.title} onChange={this.handleTitleChange} />
                        </label>

                        <label>Category
                <select value={this.state.category} onChange={this.handleCategoryChange}>
                                <option value={1} selected={this.state.category_id === 1}>Fiction</option>
                                <option value={2} selected={this.state.category_id === 2}>Non-Fiction</option>
                            </select>
                        </label>

                        <label>Author
                <input value={this.state.author} onChange={this.handleAuthorChange} />
                        </label>

                        <label>Price
                <input value={this.state.price} onChange={this.handlePriceChange} type="number" />
                        </label>

                        <label>Hardcover
                <input value={this.state.hardcover} type="checkbox" onChange={this.handleHardcoverChange} checked={this.state.hardcover} />
                        </label>

                        <label>Shipping
                <select value={this.state.shipping} onChange={this.handleShippingChange}>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </label>

                        <button>Update Book</button>
                    </form>
                </div>
            </div>
        )
    }
}
