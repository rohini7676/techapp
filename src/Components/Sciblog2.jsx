import React from 'react';
import img1 from './title1/science2.webp';
import background from './sciback2.jpeg';

const Sciblog2 = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Science Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>Scientists Have Discovered the New Most Efficient Solar Energy System in the World – and It Wasn’t Created by Humans</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}> July 31, 2024</span>
          <span style={styles.author}> | Yale University </span>
        </div>

        {/* First Paragraph */}
        <p style={styles.paragraph}>
          <b>Researchers from Yale have identified giant clams, with their unique photosynthetic structures and light-scattering capabilities, as a potential model for improving solar panel efficiency. These clams, which thrive in the intense sunlight of tropical coral reefs, have a quantum efficiency far surpassing current solar technologies. The study highlights the importance of biodiversity in inspiring sustainable technology and suggests that future solar panels might incorporate similar biological mechanisms.</b>
        </p>

        {/* First Image */}
        <div style={styles.imageWrapper}>
          <img
            src={img1}
            alt="Science Illustration"
            style={styles.img1}
          />
          <p style={styles.caption}>Figure 2: The New Most Efficient Solar Energy System in the World.</p>
        </div>

        {/* Second Paragraph */}
        <p style={styles.paragraph}>
        <b>A recent study by Yale researcher Alison Sweeney suggests that giant clams in the Western Pacific could be the most efficient solar energy system in the world.</b><br></br><br></br>
According to a new Yale-led study, designers of solar panels and biorefineries could gain valuable insights from the iridescent giant clams found near tropical coral reefs.<br></br><br></br>

This is because giant clams have precise geometries — dynamic, vertical columns of photosynthetic receptors covered by a thin, light-scattering layer — that may just make them the most efficient solar energy systems on Earth.<br></br><br></br>

“It’s counter-intuitive to a lot of people, because clams operate in intense sunlight, but actually they’re really dark on the inside,” said Alison Sweeney, associate professor of physics and of ecology and evolutionary biology in Yale’s Faculty of Arts and Sciences. “The truth is that clams are more efficient at solar energy conversion than any existing solar panel technology.”<br></br><br></br>

In the new study, published in the journal PRX: Energy, a research team led by Sweeney presents an analytical model for determining the maximum efficiency of photosynthetic systems based on the geometry, movement, and light-scattering characteristics of giant clams. It is the latest in a series of research studies from Sweeney’s lab that highlight biological mechanisms from the natural world that could inspire new sustainable materials and designs.
<h2>Solar Potential of Giant Clams</h2>In this case, the researchers looked specifically at the impressive solar energy potential of iridescent giant clams in the shallow waters of Palau in the Western Pacific.
The clams are photosymbiotic, with vertical cylinders of single-celled algae growing on their surface. The algae absorb sunlight — after the light has been scattered by a layer of cells called iridocytes.<br></br><br></br>

Both the geometry of the algae and the light scattering of the iridocytes are important, the researchers say. The algae’s arrangement in vertical columns — which makes them parallel to the incoming light — enables the algae to absorb sunlight at the most efficient rate. This is because the sunlight has been filtered and scattered by the layer of iridocytes, and the light then wraps uniformly around each vertical algae cylinder.<br></br><br></br>
<h2>Adaptive Behaviors Enhance Efficiency</h2>
Based on the giant clams’ geometry, Sweeney and her colleagues developed a model to calculate quantum efficiency — the ability to convert photons into electrons. The researchers also factored in fluctuations in sunlight, based on a typical day in the tropics with a sunrise, midday sun intensity, and sunset. The quantum efficiency was 42%.<br></br><br></br>

But then the researchers added a new wrinkle: the way giant clams stretch themselves in reaction to changes in sunlight. “Clams like to move and groove throughout the day,” Sweeney said. “This stretching moves the vertical columns farther apart, effectively making them shorter and wider.”<br></br><br></br>

With this new information, the clam model’s quantum efficiency jumped to 67%. By comparison, Sweeney said, a green leaf system’s quantum efficiency in a tropical environment is only about 14%.


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

  caption: {
    fontSize: '0.9rem',
    color: '#7f8c8d',
    marginTop: '10px',
  },
};

export default Sciblog2;
