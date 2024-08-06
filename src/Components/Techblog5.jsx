import React from 'react';
import img1 from './title2/tech5.webp';
import img2 from './title2/tech52.webp';
import background from './sciback2.jpeg';

const Techblog5 = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Tech Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>Scientists Discover New Class of Semiconductor Nanocrystals</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}> August 2, 2024</span>
          <span style={styles.author}> | Naval Research Laboratory</span>
        </div>

        {/* First Paragraph */}
        <p style={styles.paragraph}>
          <b>U.S. Naval Research Laboratory scientists have identified a new class of semiconductor nanocrystals with bright ground-state excitons, potentially revolutionizing light-emitting devices. Their research, involving advanced modeling and collaboration, has pinpointed materials that emit light across a broad spectrum, promising advancements in LEDs, solar cells, and photodetectors. This breakthrough aims to resolve the dark-exciton problem and stimulate further research in bright-exciton nanostructures.</b>
        </p>

        {/* First Image */}
        <div style={styles.imageWrapper}>
          <img
            src={img1}
            alt="Science Illustration"
            style={styles.img1}
          />
          <p style={styles.caption}>Figure 1: U.S. Naval Research Laboratory scientists have identified a new class of semiconductor nanocrystals with bright ground-state excitons, potentially revolutionizing light-emitting devices.</p>
        </div>

        {/* Second Paragraph */}
        <p style={styles.paragraph}>
        NRL scientists have discovered new semiconductor nanocrystals with bright ground-state excitons, potentially revolutionizing light-emitting devices and resolving the dark-exciton problem.<br></br><br></br>

Scientists at the U.S. Naval Research Laboratory (NRL) have confirmed the identification of a new class of semiconductor nanocrystals with bright ground-state excitons. This significant advancement in optoelectronics was recently published in the American Chemical Society (ACS) journal, ACS Nano.<br></br><br></br>

The groundbreaking theoretical research could revolutionize the development of highly efficient light-emitting devices and other technologies.<br></br><br></br>

Generally, the lowest-energy exciton in nanocrystals is poorly emitting, earning the name “dark” exciton. Because it slows the emission of light, the dark exciton limits the performance of nanocrystal-based devices like lasers or light-emitting diodes (LEDs). Scientists have long sought to overcome the dark exciton.<br></br><br></br>

“We set out to find new materials in which the exciton ordering is inverted, so that the lowest-energy exciton is bright,” said John Lyons, Ph.D., from the Theory of Advanced Functional Materials Section. “Searching through open-source databases of materials using criteria informed by our theoretical modeling, we identified over 150 targets. We further narrowed this list with advanced first-principles calculations, ending up with 28 candidates for bright-exciton nanomaterials.”<br></br>        
      
        
        </p>

        {/* Second Image */}
        <div style={styles.imageWrapper}>
          <img
            src={img2}
            alt="Cave and mountain"
            style={styles.img2}
          />
          <p style={styles.caption}>Figure 2:Michael Swift (left), Ph.D., U.S. Naval Research Laboratory (NRL) research physicist; John Lyons (center), Ph.D., NRL physical scientist; and Alexander Efros, Ph.D., NRL senior scientist, gather for a group photo in the Materials Science and Technology facility in Washington, D.C., July 25, 2024. </p>
        </div>

        {/* Third Paragraph */}
        <p style={styles.paragraph}>
        <h2 style={styles.subheading}> Promising Candidates for Bright-Exciton Nanomaterials</h2>
       
More detailed modeling of these materials indicates that at least four can yield bright ground-state excitons in nanocrystals. “This discovery, made in collaboration with Prof. David Norris from the Federal Institute of Technology (ETH) Zurich and Peter Sercel, Ph.D., from the Center for Hybrid Organic-Inorganic Semiconductors for Energy (CHOISE), could pave the way for the development of ultrabright and highly efficient light-emitting devices, lasers, and other technologies,” Lyons said.<br></br><br></br>

Alexander Efros, Ph.D., a senior scientist, Materials Science division and the senior author on the paper, elaborated on the implications of the research. “In our research, we have identified several bright-exciton materials that can emit light across a broad spectrum, from infrared to ultraviolet,” said Efros. “This versatility makes them very useful for optoelectronic applications. The capability to engineer nanocrystals with bright excitonic states across this wide range opens new avenues for creating better and more efficient LEDs, solar cells, and photodetectors.”<br></br><br></br>

By resolving the dark-exciton problem, NRL scientists hope to stimulate the large nanomaterial community to attack bright-exciton nanostructures, an area that has been stalled for too long. Today, three of these materials are being grown at NRL as part of the Nanoscience Institute Program’s Bright Nanocrystal Emitters initiative aiming to conclusively demonstrate bright-exciton behavior in the lab and leverage it for future naval technologies.<br></br><br></br>

“Our findings demonstrate the power of combining high-throughput computational screening, pen-and-paper theory, and high-accuracy calculations of electronic structure,” said Michael Swift, Ph.D. “No one technique would be enough on its own, but together we discovered new ultrabright nanocrystals and unlocked the power of the bright exciton across unexplored classes of materials.”<br></br><br></br>

The Theory of Advanced Functional Materials Section performs basic and applied research on functional, structural, biological, and electronic materials systems. The Section pioneers new methods for simulating materials and systems, including original development of computational and theoretical techniques, modification of existing approaches, and application of established methodologies to new materials and areas. The goal of the Section is to use theory and simulation to understand, improve, and develop materials of present and future naval importance.


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

export default Techblog5;
