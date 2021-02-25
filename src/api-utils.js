import request from 'superagent';

const URL = 'https://dry-crag-76586.herokuapp.com';

export async function getBooks() {
    const response = await request.get(`${URL}/books`);

    return response.body;
}

export async function getBook(id) {
    const response = await request.get(`${URL}/books/${id}`);

    return response.body;
}

export async function addBook(newBook) {
    const response = await request.post(`${URL}/books`)
        .send(newBook)

    return response.body;
}

export async function updateBook(id, newBook) {
    const response = await request.put(`${URL}/books/${id}`)
        .send(newBook)

    return response.body;
}

export async function deleteBook(id) {
    const response = await request.delete(`${URL}/books/${id}`);

    return response.body;
}

export async function getCategories() {
    const response = await request.get(`${URL}/categories`);

    return response.body;
}