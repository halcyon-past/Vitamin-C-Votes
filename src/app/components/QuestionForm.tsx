"use client";

import React, { useState } from 'react';
import { questions } from '../lib/questions';


const QuestionForm = () => {
  const [responses, setResponses] = useState(
    questions.reduce((acc, _, index) => ({ ...acc, [index]: '' }), {})
  );

  const handleChange = (index: any, event: any) => {
    setResponses({
      ...responses,
      [index]: event.target.value,
    });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const submissionData = {
      ...responses,
    };

    try {
      const response = await fetch('/api/submitdata', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Submission successful!');
      } else {
        alert(`Submission failed: ${result.message}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Submission failed.');
    }
  };

  return (
    <div className="flex justify-center p-4">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-4">Questionnaire</h2>
        {questions.map((q, index) => (
          <div key={index} className="mb-4">
            <label className="block text-white mb-1">{q.question}</label>
            <select
              value={responses[index]}
              onChange={(event) => handleChange(index, event)}
              className="w-full p-2 border border-gray-600 bg-gray-700 text-white rounded-md"
            >
              <option value="" disabled>Select an option</option>
              {q.answers.map((answer, i) => (
                <option key={i} value={answer}>
                  {answer}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">
          Submit
        </button>
      </form>
    </div>
  );
};

export default QuestionForm;
