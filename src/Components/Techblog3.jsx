import React from 'react';
import img1 from './title2/tech3.jpg';
import img2 from './img31.webp';
import background from './sciback2.jpeg';

const Techblog3 = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Tech Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>Hunting Cosmic Blobs: New AI Program Unveils Elusive Plasmoids</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}>July 29, 2024</span>
          <span style={styles.author}> | Princeton Plasma Physics Laboratory</span>
        </div>

        {/* First Paragraph */}
        <p style={styles.paragraph}>
          <b>Researchers at the Princeton Plasma Physics Laboratory have developed a machine learning program to detect plasmoids in outer space, which could significantly improve our understanding of magnetic reconnection—a phenomenon that affects satellites and the power grid. By analyzing data from spacecraft in the magnetosphere with a program trained on simulated data, the team aims to advance our knowledge of how plasmoids influence reconnection processes. Credit: Kyle Palmer / PPPL Communications Department</b>
        </p>

        {/* First Image */}
        <div style={styles.imageWrapper}>
          <img
            src={img1}
            alt="Science Illustration"
            style={styles.img1}
          />
          <p style={styles.caption}>Figure 1: Researchers at the Princeton Plasma Physics Laboratory have developed a machine learning program to detect plasmoids in outer space, which could significantly improve our understanding of magnetic reconnection—a phenomenon that affects satellites and the power grid.</p>
        </div>

        {/* Second Paragraph */}
        <p style={styles.paragraph}>
        
        Scientists at PPPL have created a machine learning program to identify space plasma formations called plasmoids, aiming to better understand and manage the impacts of magnetic reconnection on satellites and power systems.

In the cosmic game of hide and seek, scientists have gained a new advantage. Physicists at the U.S. Department of Energy’s Princeton Plasma Physics Laboratory (PPPL) have created a computer program that uses machine learning to identify blobs of plasma in outer space, known as plasmoids. Uniquely, this program has been trained with simulated data.<br></br><br></br>

The program will sift through reams of data gathered by spacecraft in the magnetosphere, the region of outer space strongly affected by Earth’s magnetic field, and flag telltale signs of the elusive blobs. Using this technique, scientists hope to learn more about the processes governing magnetic reconnection, a process that occurs in the magnetosphere and throughout the universe that can damage communications satellites and the electrical grid.<br></br><br></br>

Scientists believe that machine learning could improve plasmoid-finding capability, aid the basic understanding of magnetic reconnection, and allow researchers to better prepare for the aftermath of reconnection-caused disturbances.<br></br><br></br>

“As far as we know, this is the first time that anyone has used artificial intelligence trained on simulated data to look for plasmoids,” said Kendra Bergstedt, a graduate student in the Princeton Program in Plasma Physics, which is based at PPPL. Bergstedt was the first author of the paper reporting the results in Earth and Space Science. The work pairs the Lab’s growing expertise in computational sciences with its long history of exploring magnetic reconnection.<br></br>

<h2 style={styles.subheading}>Looking for a link</h2>
Scientists want to find reliable, accurate methods for detecting plasmoids so they can determine whether they affect magnetic reconnection, a process consisting of magnetic field lines separating, violently reattaching, and releasing tremendous amounts of energy. When it occurs near Earth, reconnection can trigger a cascade of charged particles falling into the atmosphere, disrupting satellites, mobile phones, and the electrical grid. “Some researchers believe that plasmoids aid fast reconnection in large plasmas,” said Hantao Ji, professor of astrophysical sciences at Princeton University and a distinguished research fellow at PPPL. “But those hypotheses haven’t been proven yet.”<br></br><br></br>

The researchers want to know whether plasmoids can change the rate at which reconnection occurs. They also want to gauge how much energy reconnection imparts to the plasma particles. “But to clarify the relationship between plasmoids and reconnection, we have to know where the plasmoids are,” Bergstedt said. “That’s what machine learning could help us do.”
          
        
        </p>

        {/* Second Image */}
        <div style={styles.imageWrapper}>
          <img
            src={img2}
            alt="Cave and mountain"
            style={styles.img2}
          />
          <p style={styles.caption}>Figure 2:Two loop antennas (radius: 3.6 centimeters) can transfer power between each other from 18 centimeters apart. Credit: Nam Ha-Van/Aalto University</p>
        </div>

        {/* Third Paragraph */}
        <p style={styles.paragraph}>
        The scientists used computer-generated training data to ensure the program could recognize a range of plasma signatures. Typically, plasmoids created by computer models are idealized versions based on mathematical formulas with shapes — like perfect circles — that do not often occur in nature. If the program were trained only to recognize these perfect versions, it might miss those with other shapes. To prevent those misses, Bergstedt and Ji decided to use artificial, deliberately imperfect data so the program would have an accurate baseline for future studies. “Compared to mathematical models, the real world is messy,” Bergstedt said. “So we decided to let our program learn using data with fluctuations that you would get in actual observations. For instance, rather than beginning our simulations with a perfectly flat electrical current sheet, we give our sheet some wobbles. We’re hoping that the machine learning approach can allow for more nuance than a strict mathematical model can.” This research builds on past attempts in which Bergstedt and Ji wrote computer programs that incorporated more idealized models of plasmoids.<br></br><br></br>

The use of machine learning will only become more common in astrophysics research, according to the scientists. “It could particularly be helpful when making extrapolations from small numbers of measurements, as we sometimes do when studying reconnection,” said Ji. “And the best way to learn how to use a new tool is to actually use it. We don’t want to stand on the sidelines and miss an opportunity.”<br></br><br></br>

Bergstedt and Ji plan to use the plasmoid-detecting program to examine data being gathered by NASA’s Magnetospheric Multiscale (MMS) mission. Launched in 2015 to study reconnection, MMS consists of four spacecraft flying in formation through plasma in the magnetotail, the area in space pointing away from the sun that is controlled by Earth’s magnetic field.<br></br><br></br>

The magnetotail is an ideal place to study reconnection because it combines accessibility with scale. “If we study reconnection by observing the sun, we can only take measurements from afar,” Bergstedt said. “If we observe reconnection in a laboratory, we can put our instruments directly into the plasma, but the sizes of the plasmas would be smaller than those typically found in space.” Studying reconnection in the magnetotail is an ideal middle option. “It’s a large and naturally occurring plasma that we can measure directly using spacecraft that fly through it,” Bergstedt said.<br></br><br></br>

As Bergstedt and Ji improve the plasmoid-detecting program, they hope to take two significant steps. The first is performing a procedure known as domain adaptation, which will help the program analyze datasets that it has never encountered before. The second step involves using the program to analyze data from the MMS spacecraft. “The methodology we demonstrated is mostly a proof of concept since we haven’t aggressively optimized it,” Bergstedt said. “We want to get the model working even better than it is now, start applying it to real data, and then we’ll just go from there!”<br></br><br></br>

Reference: “A Novel Method to Train Classification Models for Structure Detection in In Situ Spacecraft Data” by K. Bergstedt and H. Ji, 11 June 2024, Earth and Space Science.
DOI: 10.1029/2023EA002965
          
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '20px',
  },
  container: {
    padding: '30px',
    fontFamily: "'Merriweather', serif",
    lineHeight: '1.8',
    color: '#333',
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adds a slight white overlay to improve text readability
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#2c3e50',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  subtitle: {
    fontSize: '1.5rem',
    fontWeight: 'normal',
    marginBottom: '10px',
    color: '#34495e',
  },
  description: {
    fontSize: '1.2rem',
    margin: '0 auto',
    width: '80%',
    textAlign: 'center',
    marginBottom: '10px',
    color: '#666',
  },
  metadata: {
    textAlign: 'center',
    fontSize: '0.9rem',
    color: '#999',
    marginBottom: '20px',
  },
  date: {
    marginRight: '10px',
  },
  author: {
    marginLeft: '10px',
  },
  paragraph: {
    fontSize: '1.1rem',
    marginBottom: '25px',
    color: '#4a4a4a',
    textAlign: 'justify',
  },
  subheading: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginTop: '20px',
    color: '#34495e',
  },
  imageWrapper: {
    textAlign: 'center',
    marginBottom: '25px',
  },
  img1: {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
  img2: {
    width: '60%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
  caption: {
    fontSize: '0.9rem',
    color: '#7f8c8d',
    marginTop: '10px',
  },
};

export default Techblog3;
