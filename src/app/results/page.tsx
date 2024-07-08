"use client";
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { questions } from '../lib/questions';
import 'chart.js/auto';

const Results = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/viewdata');
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getChartData = (questionIndex) => {
    const responses = data.map((response) => response[questionIndex]);
    const counts = responses.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {});

    return {
      labels: Object.keys(counts),
      datasets: [
        {
          data: Object.values(counts),
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0',
            '#9966FF',
            '#FF9F40',
          ],
        },
      ],
    };
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" w-full flex flex-col items-center p-4">
      {questionsArray.map((question, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-center">{question.question}</h2>
          <div className="w-full max-w-md mx-auto">
            <Pie data={getChartData(index)} />
          </div>
        </div>
      ))}
    </div>
  );
};

const questionsArray = questions.map((q) => ({
  question: q.question,
}));

export default Results;
