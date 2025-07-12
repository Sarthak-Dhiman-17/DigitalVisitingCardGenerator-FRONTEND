// CardViewer.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CardViewer() {
    const { id } = useParams();
    const [card, setCard] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/cards/${id}`)
            .then(response => setCard(response.data))
            .catch(err => setError("Card not found or error occurred."));
    }, [id]);

    if (error) return <div className="alert alert-danger">{error}</div>;

    if (!card) return <div className="text-center">Loading...</div>;

    return (
        <div className="card shadow p-4 text-center">
            {card.image && <img src={card.image} alt="Profile" className="rounded-circle mb-3" width="100" height="100" />}
            <h4 className="fw-bold">{card.name}</h4>
            <p className="text-muted">{card.title}</p>
            <p className="mb-1">📧 {card.email}</p>
            <p className="mb-1">📞 {card.phone}</p>
            <p className="mb-1">🌐 {card.website}</p>
            <p className="mb-0">🏢 {card.company}</p>
        </div>
    );
}

export default CardViewer;
