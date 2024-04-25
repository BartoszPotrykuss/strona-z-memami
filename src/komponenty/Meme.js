import React, { useState } from 'react'
import '../style/Meme.css'

const Meme = (props) => {
    // Stan dla polubienia mema
    const [liked, setLiked] = useState(false);
    // Stan dla stylu przycisku polubienia
    const [buttonStyle, setButtonStyle] = useState({ backgroundColor: '' });
    // Stan dla tekstu przycisku polubienia
    const [textButton, setTextButton] = useState("Polub mema");
    // Stan dla aktualnie wpisywanego komentarza
    const [comment, setComment] = useState("");
    // Stan dla listy komentarzy
    const [comments, setComments] = useState([]);

// Obsługa kliknięcia przycisku polubienia mema
const handleLikeClick = () => {
    // Odwrócenie stanu polubienia mema
    setLiked(!liked);

    // Zmiana stylu przycisku w zależności od stanu polubienia
    if (liked) {
        // Jeśli mem był wcześniej polubiony, zmień kolor przycisku na czerwony
        setButtonStyle({ backgroundColor: 'red' });
        // Zmiana tekstu przycisku na "Polubiono"
        setTextButton("Polubiono");
    }
    else {
        // Jeśli mem nie był wcześniej polubiony, zmień kolor przycisku na niebieski
        setButtonStyle({ backgroundColor: '#3498db' });
        // Zmiana tekstu przycisku na "Polub mema"
        setTextButton("Polub mema")
    }
};

// Obsługa dodawania komentarza do mema
const handleAddComment = () => {
    // Sprawdzenie, czy wprowadzony komentarz nie jest pusty
    if (comment.trim() !== "") {
        // Dodanie nowego komentarza do listy komentarzy
        setComments([...comments, comment]);
        // Wyczyszczenie pola wprowadzania komentarza po dodaniu
        setComment("");
    }
};

    return (
        <div className="meme">
            {/* Wyświetlenie obrazka mema */}
            <img src={props.src} alt={props.alt} />
            {/* Przycisk polubienia mema */}
            <button className='buttonLike' onClick={handleLikeClick} style={buttonStyle}>
                {textButton}
            </button>
            {/* Pole do dodawania komentarza */}
            <p>Dodaj komentarz:</p>
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)}/>
            {/* Przycisk dodawania komentarza */}
            <button className='buttonComment' onClick={handleAddComment}>Dodaj</button>
            {/* Wyświetlenie listy komentarzy */}
            <div className='comments'>
                {comments.map((comment, index) => (
                    <div key={index}>{index+1}. {comment}</div>
                ))}
            </div>
        </div>
    );
}

export default Meme