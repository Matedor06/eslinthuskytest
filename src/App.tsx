import { useEffect, useState } from 'react';
import './App.css';
import type { Pizza } from './types/Pizza';
import apiClient from './api/apiClient';

function App() {
    const [pizzak, setPizzak] = useState<Array<Pizza>>([]);

    useEffect(() => {
        apiClient.get('/pizzak').then((response) => setPizzak(response.data));
    }, []);

    return (
        <div>
            {pizzak.map((i) => (
                <h1 key={i.id}>{i.nev}</h1>
            ))}
        </div>
    );
}

export default App;