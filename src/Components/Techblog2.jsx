import React from 'react';
import img1 from './title2/tech2.jpg';
import img2 from './title2/tech21.jpg';
import background from './sciback2.jpeg';

const Techblog2 = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Tech Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>Revolutionizing Wireless Power: Scientists Achieve Breakthrough in Long-Distance Charging Efficiency</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}>October 16, 2023</span>
          <span style={styles.author}> | Aalto University</span>
        </div>

        {/* First Paragraph */}
        <p style={styles.paragraph}>
          <b>Current wireless charging pads, primarily utilizing induction over short distances, have demonstrated high efficiency but only within close proximity to the device being charged. New research now suggests that by harnessing the power of radiation suppression in the loop antennas, not only can devices be charged over significantly longer distances with over 80% efficiency, but also in various orientations, paving the way for a new era of wireless power transfer applicable to a myriad of devices, from mobile gadgets to biomedical implants.</b>
        </p>

        {/* First Image */}
        <div style={styles.imageWrapper}>
          <img
            src={img1}
            alt="Science Illustration"
            style={styles.img1}
          />
          <p style={styles.caption}>Figure 1: Current wireless charging pads, primarily utilizing induction over short distances, have demonstrated high efficiency but only within close proximity to the device being charged.</p>
        </div>

        {/* Second Paragraph */}
        <p style={styles.paragraph}>
        
        <h2 style={styles.subheading}>Factoring in radiation loss is essential for efficient long-distance wireless power transmission. </h2>
Engineers at Aalto University have developed an improved method for long-distance wireless charging. By enhancing the interaction between transmitting and receiving antennas and leveraging the “radiation suppression” phenomenon, they’ve deepened our theoretical understanding of wireless power transfer beyond the traditional inductive methods, a significant advancement in the field.<br></br>

<h2 style={styles.subheading}>Achieving Efficiency Over Longer Distances </h2>
Charging over short distances, such as through induction pads, uses magnetic near fields to transfer power with high efficiency, but at longer distances the efficiency dramatically drops. New research shows that this high efficiency can be sustained over long distances by suppressing the radiation resistance of the loop antennas that are sending and receiving power.
          
        
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
        Previously, the same lab created an omnidirectional wireless charging system that allowed devices to be charged at any orientation. Now, they have extended that work with a new dynamic theory of wireless charging that looks more closely at both near (non-radiative) and far (radiative) distances and conditions. In particular, they show that high transfer efficiency, over 80 percent, can be achieved at distances approximately five times the size of the antenna, utilizing the optimal frequency within the hundred-megahertz range.<br></br><br></br>

“We wanted to balance effectively transferring power with the radiation loss that always happens over longer distances,” says lead author Nam Ha-Van, a postdoctoral researcher at Aalto University. “It turns out that when the currents in the loop antennas have equal amplitudes and opposite phases, we can cancel the radiation loss, thus boosting efficiency.”<br></br>

<h2 style={styles.subheading}>A Universal Approach to Assessing Wireless Power Transfer</h2>
The researchers created a way to analyze any wireless power transfer system, either mathematically or experimentally. This allows for a more thorough evaluation of power transfer efficiency, at both near and far distances, which hasn’t been done before. They then tested how charging worked between two loop antennas (see image) positioned at a considerable distance relative to their sizes, establishing that radiation suppression is the mechanism that helps boost transfer efficiency.<br></br><br></br>

“This is all about figuring out the optimal setup for wireless power transfer, whether near or far,” says Ha-Van. “With our approach, we can now extend the transfer distance beyond that of conventional wireless charging systems, while maintaining high efficiency.” Wireless power transfer is not just important for phones and gadgets; biomedical implants with limited battery capacity can also benefit. The research of Ha-Van and colleagues can also account for barriers like human tissue that can impede charging.<br></br><br></br>

Reference: “Effective Midrange Wireless Power Transfer with Compensated Radiation Loss” by N. Ha-Van, C.R. Simovski, F.S. Cuesta, P. Jayathurathnage and S.A. Tretyakov, 20 July 2023, Physical Review Applied.<br></br>
DOI: 10.1103/PhysRevApplied.20.014044
          
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

export default Techblog2;
