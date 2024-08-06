import React from 'react';
import img1 from './title2/tech4.jpg';
import img2 from './title2/tech41.jpg';
import background from './sciback2.jpeg';

const Techblog4 = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Tech Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>Weaving Light: Unraveling the Quantum Lattice of Kagome Metals</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}> August 1, 2024</span>
          <span style={styles.author}> | Amy Walden, Florida State University</span>
        </div>

        {/* First Paragraph */}
        <p style={styles.paragraph}>
          <b></b>
        </p>

        {/* First Image */}
        <div style={styles.imageWrapper}>
          <img
            src={img1}
            alt="Science Illustration"
            style={styles.img1}
          />
          <p style={styles.caption}>Figure 1: A diagram of the Kagome metal cesium vanadium antimonide showing plasmon waves moving through the material. Credit: Guangxin Ni</p>
        </div>

        {/* Second Paragraph */}
        <p style={styles.paragraph}>
            <b>A study focused on cesium vanadium antimonide, a Kagome metal, has shown its potential in enhancing nano-optics by generating unique plasmon polaritons. These findings could advance optical communication and sensing technologies.</b><br></br><br></br>
            In traditional Japanese basket-weaving, the ancient “Kagome” design, notable for its symmetrical arrangement of interlaced triangles with shared corners, graces many handcrafted items. Similarly, in quantum physics, scientists use the term “Kagome” to refer to a category of materials whose atomic structures mimic this unique lattice pattern.<br></br><br></br>

Since 2019, when the latest family of Kagome metals was discovered, physicists have been working to better understand their properties and potential applications. A new study led by Florida State University (FSU) Assistant Professor of Physics Guangxin Ni focuses on how a particular Kagome metal interacts with light to generate what are known as plasmon polaritons — nanoscale-level linked waves of electrons and electromagnetic fields in a material, typically caused by light or other electromagnetic waves. The work was published recently in the journal Nature Communications.
        
        <h2 style={styles.subheading}>Properties and Photonic Potential of CsV3Sb5 </h2>
        Previous research has examined plasmons in regular metals, but not as much in Kagome metals, where the behavior of electrons is more complex. In this study, the FSU researchers examined the metal cesium vanadium antimonide, also known by its chemical formula CsV3Sb5, to better understand the properties that make it a promising contender for more precise and efficient photonic technologies.<br></br><br></br>

The researchers identified for the first time the existence of plasmons in CsV3Sb5 and found that the wavelength of those plasmons depends upon the thickness of the metal.<br></br>


        
        </p>

        {/* Second Image */}
        <div style={styles.imageWrapper}>
          <img
            src={img2}
            alt="Cave and mountain"
            style={styles.img2}
          />
          <p style={styles.caption}>Figure 2:Graduate student Hossein Shiravi, assistant professor Guangxin Ni, and postdoctoral researcher Songbin Cui. Credit: Devin Bittner/FSU Arts and Sciences</p>
        </div>

        {/* Third Paragraph */}
        <p style={styles.paragraph}>
        <h2 style={styles.subheading}>Advancing Nano-optics with Hyperbolic Plasmon Polaritons</h2>
They also found that changing the frequency of a laser shining at the metal caused the plasmons to behave differently, turning them into a form known as “hyperbolic bulk plasmons,” which spread through the material rather than staying confined to the surface. As a result, these waves lost less energy than before, meaning they could travel more effectively.<br></br><br></br>

“Hyperbolic plasmon polaritons are rare in natural metals, but our research reveals how electron interactions can create these unique waves at the nanoscale,” Ni said. “This breakthrough is key for advancing technologies in nano-optics and nano-photonics.”<br></br><br></br>
That hyperbolic pattern means less energy is lost. The team’s findings reveal new information about the way Kagome metal CsV3Sb5 behaves under various conditions, providing researchers with a more accurate picture of its properties and potential real-world applications.<br></br>

<h2 style={styles.subheading}>Research Methods and Observations in Nano-imaging</h2>
To explore how plasmons interacted with the metal, the researchers grew single crystals of CsV3Sb5 and then placed thin flakes of the material onto specially prepared gold surfaces. By using lasers to perform scanning infrared nano-imaging, they observed how the metal’s plasmon polaritons — waves of electrons interacting with electromagnetic fields — changed in interesting ways.<br></br><br></br>

“What makes CsV3Sb5 interesting is how it interacts with light on a very small scale, what’s known as nano-optics,” said lead author Hossein Shiravi, a graduate research assistant at the FSU-headquartered National High Magnetic Field Laboratory. “We found that over a wide range of infrared light frequency, the correlated electrical properties within the metal triggered the formation of hyperbolic bulk plasmons.”

<h2 style={styles.subheading}>Potential Applications and Future of Kagome Metals</h2>
“Hyperbolic plasmon polaritons can offer a range of amazing nano-optical features and abilities,” Ni said. “They have the potential to boost optical communication systems, allow for super-clear imaging beyond current limits and make photonic devices work better. They could also be useful for sensing things like environmental changes and medical diagnostics because they react strongly to their surroundings. These qualities make them key for advancing future optical and photonic technologies.”<br></br><br></br>

The CsV3Sb5 metal was a promising choice for plasmon research because of its unusual electronic and optical properties, such as its potential ability to force waves of plasmons to move in a single direction, to name just one. Recent advances in imaging technology at the nano-scale level helped the researchers complete their work.<br></br><br></br>

“Electronic losses typically encountered in conventional metals have previously complicated efforts to observe exotic light-matter coupling effects, including hyperbolic polaritons,” Ni said. “This is part of what makes this an exciting breakthrough. It will be interesting to continue exploring nano-optical phenomena in unconventional metals owing to their potential to contribute to future technologies.”<br></br><br></br>

Reference: “Plasmons in the Kagome metal CsV3Sb5” by H. Shiravi, A. Gupta, B. R. Ortiz, S. Cui, B. Yu, E. Uykur, A. A. Tsirlin, S. D. Wilson, Z. Sun and G. X. Ni, 25 June 2024, Nature Communications.<br></br><br></br>
DOI: 10.1038/s41467-024-49723-x<br></br>

FSU graduate student Aakash Gupta was also a coauthor on this study. The study was conducted in collaboration with researchers from the University of California Santa Barbara, Oak Ridge National Laboratory in Tennessee, Tsinghua University in China, and Germany’s University of Stuttgart, Leipzig University, and Institute of Ion Beam Physics and Materials Research. At FSU, this research is supported by funding from the U.S. Department of Energy and National Science Foundation.
          
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

export default Techblog4;
