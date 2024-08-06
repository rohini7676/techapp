import React from 'react';
import img1 from './title1/science3.jpg';
import background from './sciback2.jpeg';
import img2 from './title1/sciblog31.jpg';
const Sciblog3 = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Science Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>Is Consciousness Continuous? A New Study Challenges Old Notions</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}>  July 30, 2024</span>
          <span style={styles.author}> | Ruhr-University Bochum </span>
        </div>

        {/* First Paragraph */}
        <p style={styles.paragraph}>
          <b>A new research method proposes analyzing behavioral changes and learning spikes to study consciousness, using these sudden increases in learning— “Eureka moments”—to pinpoint conscious cognitive processes and explore brain mechanisms during these periods.</b>
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
        <b>Researchers have long studied how consciousness forms in the brain. Professor Ekrem Dere proposes defining conscious phases via behavioral observations and learning curves, using sudden insights to identify conscious processing times. Consciousness varies by task, and studying these phases can reveal brain mechanisms through imaging.</b><br></br><br></br>
        For generations, researchers have pondered the origins and mechanisms of consciousness in the brain. Professor Ekrem Dere from Ruhr University Bochum in Germany suggests a novel approach to studying conscious cognitive information processing. He proposes defining the phases of conscious cognitive processes through behavioral observations and learning curves.<br></br><br></br>

“Learning is often not a gradual process, but takes place in leaps and bounds; you could say that humans and animals experience sudden epiphanies every now and then,” he says. “It’s likely that these experiences are preceded by conscious processes.” Dere outlines his new approach, which might apply to both humans and animals, in a paper published in the journal Frontiers in Behavioral Neuroscience.<br></br><br></br>

This is because giant clams have precise geometries — dynamic, vertical columns of photosynthetic receptors covered by a thin, light-scattering layer — that may just make them the most efficient solar energy systems on Earth.<br></br>

<h2 style={styles.subheading}>Different level of Consciousness</h2>Consciousness is not an all-or-nothing process. “There are different levels of consciousness, depending for example on whether we’re sleeping or writing an email,” says Ekrem Dere from the Mental Health Research and Treatment Center in Bochum, who is also a member of the Sorbonne Université in Paris. “At the upper end of this gradation, so to speak, we find conscious cognitive information processing that is required to deal with a complicated problem.”<br></br><br></br>



        </p>
        {/* Second Image */}
        <div style={styles.imageWrapper}>
          <img
            src={img2}
            alt="Cave and mountain"
            style={styles.img2}
          />
          <p style={styles.caption}>Figure 2: Animals can learn a lot. Just like humans, they sometimes experience a eureka moment. This could be valuable for research into consciousness. </p>
        </div>
        <p style={styles.paragraph}>
        In order to study the neurobiological correlates of these processes using scientific methods, a human or animal must be presented with an experimental task that can only be solved with conscious cognitive information processing – it’s crucial that there isn’t a preconceived solution. “In the long history of cognitive behavioral psychology, a great many such tasks have been developed,” says Dere. “However, the main difficulty is that a human or animal may not use conscious cognitive information processing throughout the entire processing time.”
          <br></br>

          <h2 style={styles.subheading}>Eureka moment is the time stamp</h2>
         
          <br></br>
          The researcher therefore suggests to use learning curves to narrow down the phases of conscious information processing with regard to their timing. In these curves, performance in a specific task is plotted over time.<br></br><br></br> “Learning performance often doesn’t improve continuously, but rather by leaps or in stages,” explains Dere. This so-called discontinuous learning after insight can serve as a time stamp. “Conscious cognitive information processing must have taken place at this point and presumably also in the seconds leading up to it,” says the psychologist.<br></br><br></br> “Armed with this knowledge, we can use imaging or electrophysiological methods to observe the brain during conscious cognitive information processing by comparing the time periods immediately before the sudden increase in learning with earlier or later points in time during the processing of the task.” This would enable researchers to find out which mechanisms the brain used in which region for conscious information processing.
         
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

export default Sciblog3;
