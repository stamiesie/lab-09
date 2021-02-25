import React, { Component } from 'react'
import { addBook } from './api-utils';

export default class CreatePage extends Component {
    state = {
        title: '',
        category_id: 1,
        author: '',
        price: 1,
        hardcover: false,
        shipping: 'yes',
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

        // use POST function to give new book entered into state to the POST endpoint
        const book = await addBook(this.state);
        console.log(book);
        // redirect to list page
        this.props.history.push('/books');
    }



    render() {
        // console.log(this.state)
        return (
            <div>
                <h1>Create Page</h1>
                <div className="create-page">
                    {/* controlled inputs take all the power away from the DOM forms */}
                    <form onSubmit={this.handleSubmit}>
                        <label>Title
                    <input value={this.state.title} onChange={this.handleTitleChange} />
                        </label>

                        <label>Category
                <select value={this.state.category} onChange={this.handleCategoryChange}>
                                <option value={1}>Fiction</option>
                                <option value={2}>Non-Fiction</option>
                            </select>
                        </label>

                        <label>Author
                <input value={this.state.author} onChange={this.handleAuthorChange} />
                        </label>

                        <label>Price
                <input value={this.state.price} onChange={this.handlePriceChange} type="number" />
                        </label>

                        <label>Hardcover
                <input value={this.state.hardcover} onChange={this.handleHardcoverChange} type="checkbox" />
                        </label>

                        <label>Shipping
                <select value={this.state.shipping} onChange={this.handleShippingChange}>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </label>

                        <button>Add Book</button>
                    </form>
                </div>
            </div>
        )
    }
}
