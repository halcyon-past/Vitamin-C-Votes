const guys = ['Aritro Saha', 'Debrati Ta', 'Aratrik', 'Sujay Ghosh', 'Jaish Das', 'Ayishik', 'Aneek Saha','Biswajyoti Dutta','Ashrit Saha','Rayan','Pratyush','Soham Pal','Samiddho Chatterjee','Aritra Ganai','Aritra Sengupta','Aritra Bhadra','Subhadeep Paul','Sayan Deb','Sattwik','Dilnawaz','Parthiba','Mainak','Hridik Dasgupta','Sagar Mondal','Priyam Chowdhury','Pabak Kundu','Siddhabrata','Aniket Chattopadhya','Ayanjit Chakraborty','Sayan Nath','Sayak','Souhardya','Debdwaipayan Biswas','Spandan Mukherjee','Spandan Bhowmick','Ankan Routh','Barneel'];
const girls = ['Rupkatha De', 'Poulami Karmakar', 'Madhulika Majumder', 'Sharanya Giri','Nayoneeka','Dhriti','Diksha Banik','Nandini','Sreyashi','Aishani','Diya Das','Rishima Chowdhury','Priya Jha','Meghna'];
const combined = guys.concat(girls);
guys.sort();
girls.sort();
combined.sort();

guys.concat(['None of the above']);
girls.concat(['None of the above']);
combined.concat(['None of the above']);

export { guys, girls, combined };