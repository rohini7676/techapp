import React from 'react';
import img1 from './title2/tech1.jpg';
import img2 from './title2/tech11.jpg';
import background from './sciback2.jpeg';

const Techblog1 = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Tech Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>UCLA Unveils Breakthrough 3D Imaging Technology to Peer Inside Objects</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}>AUG 1, 2024</span>
          <span style={styles.author}> | SPIE--International Society for Optics and Photonics</span>
        </div>

        {/* First Paragraph */}
        <p style={styles.paragraph}>
          <b>All-optical multiplane quantitative phase imaging design eliminates the need for digital phase recovery algorithms.UCLA researchers have introduced a breakthrough in 3D quantitative phase imaging that utilizes a wavelength-multiplexed diffractive optical processor to enhance imaging efficiency and speed. This method enables label-free, high-resolution imaging across multiple planes and has significant potential applications in biomedical diagnostics, material characterization, and environmental analysis.</b>
        </p>

        {/* First Image */}
        <div style={styles.imageWrapper}>
          <img
            src={img1}
            alt="Science Illustration"
            style={styles.img1}
          />
          <p style={styles.caption}>Figure 1: Artistic depiction of a wavelength-multiplexed diffractive optical processor for 3D quantitative phase imaging. Credit: Ozcan Lab @ UCLA</p>
        </div>

        {/* Second Paragraph */}
        <p style={styles.paragraph}>
        <h2>Introduction to Quantitative Phase Imaging</h2>
          
        Light waves, as they propagate through a medium, experience a temporal delay. This delay can unveil crucial information about the underlying structural and compositional characteristics. Quantitative Phase Imaging (QPI) is a cutting-edge optical technique that reveals variations in optical path length as light moves through biological samples, materials, and other transparent structures. Unlike traditional imaging methods that rely on staining or labeling, QPI allows researchers to visualize and quantify phase variations by generating high-contrast images that enable noninvasive investigations crucial to fields such as biology, materials science, and engineering.<br></br><br></br>

A recent study reported on July 25 in Advanced Photonics introduces a cutting-edge approach to 3D QPI using a wavelength-multiplexed diffractive optical processor. The innovative approach, developed by researchers at the University of California, Los Angeles (UCLA), offers an effective solution to a bottleneck posed by traditional 3D QPI methods, which can be time-consuming and computationally intensive.
          
        
        </p>

        {/* Second Image */}
        <div style={styles.imageWrapper}>
          <img
            src={img2}
            alt="Cave and mountain"
            style={styles.img2}
          />
          <p style={styles.caption}>Figure 2: UCLA researchers report a new method for quantitative phase imaging of a 3D phase-only object using a wavelength-multiplexed diffractive optical processor. </p>
        </div>

        {/* Third Paragraph */}
        <p style={styles.paragraph}>
        UCLA researchers report a new method for quantitative phase imaging of a 3D phase-only object using a wavelength-multiplexed diffractive optical processor. Utilizing multiple spatially engineered diffractive layers trained through deep learning, this diffractive processor can optically transform the phase distributions of multiple 2D objects at various axial positions into intensity patterns, each encoded at a unique wavelength channel. These wavelength-multiplexed patterns are projected onto a single field-of-view (FOV) at the output plane of the diffractive processor, enabling the capture of quantitative phase distributions of input objects located at different axial planes using an intensity-only image sensor – eliminating the need for digital phase recovery algorithms. Credit: C. Shen et al., doi 10.1117/1.AP.6.5.056003.<br></br><br>
        </br>
        <h2 style={styles.subheading}> The UCLA Innovation in Optical Processing</h2>
       
The UCLA team developed a wavelength-multiplexed diffractive optical processor capable of all-optically transforming phase distributions of multiple 2D objects at various axial positions into intensity patterns, each encoded at a unique wavelength channel. The design allows for the capture of quantitative phase images of input objects located at different axial planes using an intensity-only image sensor, eliminating the need for digital phase recovery algorithms.<br></br><br></br>

“We are excited about the potential of this new approach for biomedical imaging and sensing,” said Aydogan Ozcan, lead researcher and Chancellor’s Professor at UCLA. “Our wavelength-multiplexed diffractive optical processor offers a novel solution for high-resolution, label-free imaging of transparent specimens, which could greatly benefit biomedical microscopy, sensing, and diagnostics applications.”

<h2 style={styles.subheading}> Multiplane Imaging and Its Applications</h2>
The innovative multiplane QPI design incorporates wavelength multiplexing and passive diffractive optical elements that are collectively optimized using deep learning. By performing phase-to-intensity transformations that are spectrally multiplexed, this design enables rapid quantitative phase imaging of specimens across multiple axial planes. This system’s compactness and all-optical phase recovery capability make it a competitive analog alternative to traditional digital QPI methods.<br></br><br></br>

A proof-of-concept experiment validated the approach, showcasing successful imaging of distinct phase objects at different axial positions in the terahertz spectrum. The scalable nature of the design also allows adaptation to different parts of the electromagnetic spectrum, including the visible and IR bands, using appropriate nano-fabrication methods, paving the way for new phase imaging solutions integrated with focal plane arrays or image sensor arrays for efficient on-chip imaging and sensing devices.

<h2 style={styles.subheading}> Implications for Science and Technology</h2>
This research has significant implications for various fields, including biomedical imaging, sensing, materials science, and environmental analysis. By providing a faster, more efficient method for 3D QPI, this technology can enhance the diagnosis and study of diseases, the characterization of materials, and the monitoring of environmental samples, among other applications.<br></br><br></br>

Reference: “Multiplane quantitative phase imaging using a wavelength-multiplexed diffractive optical processor” by Che-Yung Shen, Jingxi Li, Yuhang Li, Tianyi Gan, Langxing Bai, Mona Jarrahi and Aydogan Ozcan, 25 July 2024, Advanced Photonics.
DOI: 10.1117/1.AP.6.5.056003
          
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

export default Techblog1;
