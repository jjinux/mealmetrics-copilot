import React, { useState } from 'react';
import axios from 'axios';

const RecipeInfo = () => {
    const [recipe, setRecipe] = useState('');
    const [nutrition, setNutrition] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8080/openai/generateinfo', { recipe });
            setNutrition(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>Find nutrition facts for any recipe</h1>
            <textarea
                value={recipe}
                onChange={(e) => setRecipe(e.target.value)}
                placeholder="Enter your recipe here..."
            />
            <button onClick={handleSubmit}>Submit</button>
            <div>
                <h2>Nutrition facts</h2>
                <p>{nutrition}</p>
            </div>
        </div>
    );
}

export default RecipeInfo;
