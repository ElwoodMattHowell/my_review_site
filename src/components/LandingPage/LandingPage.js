// src/components/LandingPage.js

import React from 'react';
import './LandingPage.css';
import Navbar from '../NavBar/Navbar.js';
import adsumi from "../images/LandingPage/adsumi.png";

function LandingPage() {

  const thingsList = [
    {
      id: 1,
      title: 'Adsumudi Math Game',
      description: "I recently purchased the ADSUMUDI math game, and I have to say, it's been an absolute hit in my classroom. As a TAG (talented and gifted) teacher working with students of all ages and abilities, I was looking for a versatile tool that could adapt to different skill levels, and ADSUMUDI exceeded my expectations.  One of the standout features of this game is the star rating for difficulty on each card, which makes it incredibly easy to differentiate for my students. I've used it with both my kindergarten students and middle schoolers, and it's a winner for all ages. The ability to customize the game's difficulty is a game-changer, ensuring that every playthrough offers a unique and engaging experience.  For my kindergarteners, I grouped the one-star cards together, and we tackled 2-step equations. It's been a fantastic way to introduce math concepts while keeping the learning fun. They take turns, or they can write their ideas on a whiteboard, fostering interactive and collaborative learning.  With my middle school students, it's a whole different ballgame. I stack the cards, and they tackle at least 3-step equations, sometimes even more challenging ones. The competitive element adds excitement - they race to solve equations, which keeps them engaged and eager to learn. Of course, you can always opt for a turn-based approach if you prefer.  The double-sided, sturdy cards are a plus, and the design is universally appealing. The clear and legible numbers make it easy for all ages to understand and engage with the game. I was so impressed that I got a set for my middle school math teacher friend, and I highly recommend ADSUMUDI for anyone looking to make math learning a blast!  In summary, ADSUMUDI is a versatile, engaging, and educational game that's suitable for learners of all ages and abilities. Whether you're a teacher like me or a parent looking to make math fun at home, this game is a fantastic addition to your toolkit. Don't miss out on the fun and learning this game brings to the table!",
      imageUrl: adsumi, // Placeholder image URL
    },
    {
      id: 2,
      title: 'Item 2',
      description: 'Description for Item 2',
      imageUrl: 'https://via.placeholder.com/150', // Placeholder image URL
    },
    // Add more items as needed
  ];

  return (
    <div className="landing-page">
      <Navbar />
      <header>
        <h1>Offline Educational Games</h1>
      </header>
      <section>
        <h2>Featured Items</h2>
        <ul className="item-list">
          {thingsList.map((item) => (
            <li key={item.id} className="item">
              <img src={item.imageUrl} alt={`Item ${item.id}`} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>
      <footer>
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
}

export default LandingPage;
