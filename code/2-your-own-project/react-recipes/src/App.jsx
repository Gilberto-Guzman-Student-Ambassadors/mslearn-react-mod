import React from 'react';
import RecipeTitle from './RecipeTitle';
import './index.css';

function App() {
    return (
        // Este es el elemento raíz
        <article>
            {/* Este es el elemento anidado */}
            <h1>Recipe Manager</h1>
            <RecipeTitle />
        </article>
    )
}

export default App;