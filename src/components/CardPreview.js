import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

function CardPreview({ data }) {
    const cardRef = useRef();

    const dummy = {
        name: "Your Name",
        title: "Your Title",
        email: "your.email@example.com",
        phone: "+91 1234567890",
        website: "www.example.com",
        company: "Company Name",
        image: ""
    };

    const card = data && data.name ? data : dummy;

    const handleDownload = () => {
        if (!cardRef.current) return;

        html2canvas(cardRef.current, {
            scale: 2,
            useCORS: true,
            backgroundColor: null
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `${card.name.replace(/\s/g, '_')}_card.png`;
            link.href = canvas.toDataURL();
            link.click();
        }).catch(err => {
            console.error('Error generating image:', err);
        });
    };

    return (
        <>
            <h3 className="text-center mb-3">🖼 Live Preview</h3>

            <div
                ref={cardRef}
                className="mx-auto"
                style={{
                    width: '100%',
                    maxWidth: '400px',
                    background: 'linear-gradient(135deg, #f0f4ff, #dbeafe)',
                    borderRadius: '15px',
                    padding: '30px',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                    textAlign: 'center',
                    fontFamily: 'Poppins, sans-serif'
                }}
            >
                {card.image && (
                    <img
                        src={card.image}
                        alt="Profile"
                        style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '3px solid #4f46e5',
                            marginBottom: '15px'
                        }}
                    />
                )}
                <h2 style={{ fontWeight: 600, color: '#1e3a8a' }}>{card.name}</h2>
                <p style={{ color: '#475569', fontSize: '18px', marginBottom: '10px' }}>{card.title}</p>
                <p style={{ margin: 0 }}>📧 <span style={{ fontWeight: 500 }}>{card.email}</span></p>
                <p style={{ margin: 0 }}>📞 <span style={{ fontWeight: 500 }}>{card.phone}</span></p>
                <p style={{ margin: 0 }}>🌐 <span style={{ fontWeight: 500 }}>{card.website}</span></p>
                <p style={{ margin: 0 }}>🏢 <span style={{ fontWeight: 500 }}>{card.company}</span></p>
            </div>

            <button className="btn btn-success mt-4 w-100" onClick={handleDownload}>
                ⬇️ Download Card as Image
            </button>
        </>
    );
}

export default CardPreview;
