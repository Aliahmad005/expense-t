import React from 'react';

const Word: React.FC = () => {
  const checkFoodCategory = (text: string): boolean => {
    const foodCategories = ['pizza', 'burger', 'apple'];
    const regex = new RegExp(`\\b(${foodCategories.join('|')})\\b`, 'i');
    return regex.test(text);
  };

  const handleTextCheck = () => {
    const text = 'I ate apple.';
    const isFood = checkFoodCategory(text);
    console.log(isFood); // Output: true
  };

  return (
    <div>
      <h1>kia hall hai</h1>
      <button className='bg-white' onClick={handleTextCheck}>
        Check Text for Food
      </button>
    </div>
  );
};

export default Word;
