const guys = ['Aritro', 'Debrati', 'Aratrik', 'Sujay'];
const girls = ['Rupkatha', 'Poulami', 'Madhulika', 'Sharanya'];
const combined = guys.concat(girls);
guys.sort();
girls.sort();
combined.sort();

guys.concat(['None of the above']);
girls.concat(['None of the above']);
combined.concat(['None of the above']);

export { guys, girls, combined };