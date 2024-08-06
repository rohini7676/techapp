import React from 'react';
import img1 from './title1/science1.jpg';
import img2 from './title1/sciblog11.webp';
import background from './sciback2.jpeg';

const Sciblog1 = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Science Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>Ancient Mystery Deepens With Discovery of Denisovan Remains in Tibetan Cave</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}>JUN 12, 2024</span>
          <span style={styles.author}> | RATNESHWAR THAKUR</span>
        </div>

        {/* First Paragraph */}
        <p style={styles.paragraph}>
          <b>Research reveals that Denisovans, an ancient human species, occupied Tibet's Baishiya Karst Cave for over 160,000 years, adapting to harsh climates and utilizing diverse animal resources. Newly discovered fossils and innovative analysis of bone fragments highlight their survival strategies during ice ages and interglacial periods.</b>
        </p>

        {/* First Image */}
        <div style={styles.imageWrapper}>
          <img
            src={img1}
            alt="Science Illustration"
            style={styles.img1}
          />
          <p style={styles.caption}>Figure 1: The Baishiya Karst Cave in Tibet, where Denisovan remains were discovered.</p>
        </div>

        {/* Second Paragraph */}
        <p style={styles.paragraph}>
          According to a new study published in Nature, bone remains discovered in a Tibetan cave at an altitude of 3,280 meters suggest that an ancient group of humans lived there for many millennia.
          <br></br><br></br>
          The Denisovans are an extinct species of ancient human that lived at the same time and in the same places as Neanderthals and Homo sapiens. Only a handful of Denisovan remains have ever been discovered by archaeologists. Little is known about the group, including when they became extinct, but evidence exists to suggest they interbred with both Neanderthals and Homo sapiens.
          <br></br><br></br>
          A research team led by Lanzhou University, China, the University of Copenhagen, Denmark, the Institute of Tibetan Plateau Research, CAS, China, and involving the University of Reading studied more than 2,500 bones from the Baishiya Karst Cave on the high-altitude Tibetan Plateau, one of the only two places where Denisovans are known to have lived.
        </p>

        {/* Second Image */}
        <div style={styles.imageWrapper}>
          <img
            src={img2}
            alt="Cave and mountain"
            style={styles.img2}
          />
          <p style={styles.caption}>Figure 2: An illustration showing the possible appearance of Denisovans.</p>
        </div>

        {/* Third Paragraph */}
        <p style={styles.paragraph}>
          Their new analysis, published in Nature, has identified a new Denisovan fossil and shed light on the species' ability to survive in fluctuating climatic conditions — including the ice age — on the Tibetan plateau from around 200,000 to 40,000 years ago.
          <br></br><br></br>
          Dr Geoff Smith, a zooarchaeologist at the University of Reading, is a co-author of the study. He said: “We were able to identify that Denisovans hunted, butchered, and ate a range of animal species. Our study reveals new information about the behavior and adaptation of Denisovans both to high altitude conditions and shifting climates. We are only just beginning to understand the behavior of this extraordinary human species.”
          <br></br><br></br>
          Dr Huan Xia, of Lanzhou University, said: “Zooarchaeology by Mass Spectrometry (ZooMS) allows us to extract valuable information from often overlooked bone fragments, providing deeper insight into human activities.”
          <br></br><br></br>
          <h2 style={styles.subheading}>Dietary diversity</h2>
          The research team determined that most of the bones were from blue sheep, known as the bharal, as well as wild yaks, equids, the extinct woolly rhino, and the spotted hyena. The researchers also identified bone fragments from small mammals, such as marmots, and birds.
          <br></br><br></br>
          Dr Jian Wang, of Lanzhou University, said: “Current evidence suggests that it was Denisovans, not any other human groups, who occupied the cave and made efficient use of all the animal resources available to them throughout their occupation.”
          <br></br><br></br>
          <h2 style={styles.subheading}>A new Denisovan fossil</h2>
          The scientists also identified one rib bone as belonging to a new Denisovan individual. The layer where the rib was found was dated to between 48,000 and 32,000 years ago, implying that this Denisovan individual lived at a time when modern humans were dispersing across the Eurasian continent. The results indicate that Denisovans lived through two cold periods, but also during a warmer interglacial period between the Middle and Late Pleistocene eras.
          <br></br><br></br>
          Dr Frido Welker, of the University of Copenhagen, said: “Together, the fossil and molecular evidence indicates that Ganjia Basin, where Baishiya Karst Cave is located, provided a relatively stable environment for Denisovans, despite its high altitude.
          <br></br><br></br>
          “The question now arises when and why these Denisovans on the Tibetan Plateau went extinct.”
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

export default Sciblog1;
