import React, { useState } from 'react';
import CardForm from './components/CardForm';
import CardPreview from './components/CardPreview';
import './App.css';

function App() {
    const [cardData, setCardData] = useState({
        name: '',
        title: '',
        email: '',
        phone: '',
        website: '',
        company: '',
        image: '',
    });

    return (
        <div className="bg-light min-vh-100 py-5">
            <div className="container">
                <h1 className="text-center mb-4">💼 Digital Visiting Card Generator</h1>
                <div className="row g-5">
                    <div className="col-md-6">
                        <CardForm cardData={cardData} setCardData={setCardData} />
                    </div>
                    <div className="col-md-6">
                        <CardPreview data={cardData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
