import React, { useState } from 'react';
import axios from 'axios';

function First() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [tax, setTax] = useState('');
    const [response, setResponse] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const item = {
            name: name,
            description: description,
            price: parseFloat(price),
            tax: parseFloat(tax) || null
        };

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/items/`, item);
            setResponse(res.data);
        } catch (error) {
            console.error('Error creating item:', error);
        }
    };

    return (
        <div>
            <h1>Create Item</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description: </label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label>Price: </label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Tax: </label>
                    <input
                        type="number"
                        value={tax}
                        onChange={(e) => setTax(e.target.value)}
                    />
                </div>
                <button type="submit">Create Item</button>
            </form>

            {response && (
                <div>
                    <h2>Response from Backend:</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default First;
