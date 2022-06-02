import React, { useState, useEffect } from 'react';
function Setting() {
  const [loading, setLoading] = useState(false);
  const [options, setOption] = useState(null);
  const [questionCategory, setQuestionCategory] = useState('');
  useEffect(() => {
    const apiUrl =
      'https://opentdb.com/api.php?amount=40&category=9&difficulty=easy&type=multiple';

    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setOptions(response.trivia_categories);
      });
  }, [setOption]);

  const handleCategoryChange = (e) => {
    setQuestionCategory(e.target.value);
  };

  if (!loading) {
    return (
      <div>
        <div>
          <h2>Select Category:</h2>
          <select value={questionCategory} onChange={handleCategoryChange}>
            <option>All</option>
            {options &&
              options.map((option) => (
                <option value={option.id} key={option.id}>
                  {option.name}
                </option>
              ))}
          </select>
        </div>
      </div>
    );
  } else {
    <p>Loading</p>;
  }
}
export default Setting;
