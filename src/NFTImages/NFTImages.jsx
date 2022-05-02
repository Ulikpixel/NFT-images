import { useState } from 'react';
import './NFTImages.css';

const NFTImages = ({ part = 7, parts = [], ...props }) => {
    const [effect, setEffect] = useState(false);
    const columns = [];
    const currentUser = 'Uluk';
    
    for(let i = 1; i <= part; i++) {
        columns.push(i)
    }

    const valid = owner => {
        if(owner === currentUser) return 'blue'
        if(owner !== currentUser && owner !== null) return 'red'
        return 'green'
    }
    console.log({ ...props, parts: parts.map(el => ({ ...el, img: 'ссылка на фрагмент' }))})
    const num = columns.map(() => `${100 / part}%`).join(' ');
    return (
        <div 
            className='wrapper'
            style={{ gridTemplateColumns: num, gridTemplateRows: num }}
        >
            {parts.length > 0 && parts.map((item, idx) => 
                <div
                    className={`block ${effect === item.owner ? valid(item.owner) : ''}`}
                    onClick={() => setEffect(item.owner)}
                    key={idx}
                    style={{ 
                        gridColumnStart: item.y, 
                        gridRowStart: item.x,
                        border: `solid ${effect === item.owner ? '3' : '2'}px ${valid(item.owner)}`,
                    }}
                >
                    <img src={item.img} alt="image" />
                </div>
            )}
        </div>
    )
}

export default NFTImages;