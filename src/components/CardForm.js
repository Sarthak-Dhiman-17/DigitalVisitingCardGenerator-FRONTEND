import React from 'react';
import axios from 'axios';

function CardForm({ cardData, setCardData }) {
    const handleChange = (e) => {
        setCardData({ ...cardData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting to:", `${process.env.REACT_APP_API_URL}/api/cards`);
        console.log("Card Data:", cardData);
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/api/cards`, cardData);
            alert('✅ Card submitted successfully!');
        } catch (err) {
            console.error("Submit error:", err);
            alert('❌ Failed to submit card.');
        }
    };

    return (
        <div className="card shadow p-4">
            <h3 className="mb-4 text-center">📝 Enter Card Details</h3>
            <form onSubmit={handleSubmit}>
                {['name', 'title', 'email', 'phone', 'website', 'company', 'image'].map((field) => (
                    <div className="mb-3" key={field}>
                        <label className="form-label text-capitalize">{field}</label>
                        <input
                            type="text"
                            name={field}
                            className="form-control"
                            placeholder={`Enter ${field}`}
                            value={cardData[field]}
                            onChange={handleChange}
                            required={field !== 'image'}
                        />
                    </div>
                ))}
                <button type="submit" className="btn btn-primary w-100">Generate Card</button>
            </form>
        </div>
    );
}

export default CardForm;
