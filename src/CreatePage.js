import React, { Component } from 'react'

export default class CreatePage extends Component {
    render() {
        return (
            <div>
                <h1>Create Page</h1>
                <div className="create-page">

                    <form >
                        <label>Title
                    <input />
                        </label>

                        <label>Category
                <select>
                                <option value={1}>Fiction</option>
                                <option value={2}>Non-Fiction</option>
                            </select>
                        </label>

                        <label>Author
                <input />
                        </label>

                        <label>Price
                <input type="number" />
                        </label>

                        <label>Hardcover
                <input type="checkbox" />
                        </label>

                        <button>Add Book</button>
                    </form>
                </div>
            </div>
        )
    }
}
