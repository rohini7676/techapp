import React from 'react';
import sleep from './title5/sleep3.png';
import disorder from './title5/sleep2.jpg';
import cycle from './title5/sleep1.webp';
import background from './sciback2.jpeg';
const SleepHealth = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Health Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>The Role of Sleep in Health: Examining the importance of sleep, common sleep disorders, and tips for improving sleep quality.</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}>DEC 07, 2024</span>
          <span style={styles.author}> | Dr. Marishka Brown</span>
        </div>

        {/* First Paragraph */}
        <p style={styles.paragraph}>
          <b>Sleep is a crucial component of overall health, impacting physical, mental, and emotional well-being. It plays a vital role in various bodily functions, including immune system support, memory consolidation, and emotional regulation.</b>
        </p>

        {/* First Image */}
        <div style={styles.imageWrapper}>
          <img
            src={sleep}
            alt="The importance of sleep"
            style={styles.img1}
          />
          <p style={styles.caption}>Figure 1: The importance of sleep in overall health.</p>
        </div>

        {/* Second Paragraph */}
        <p style={styles.paragraph}>
          Poor sleep quality is linked to a range of health issues, from cardiovascular disease to obesity and mental health disorders. Understanding the importance of sleep and addressing common sleep disorders can significantly improve one's quality of life.
          <br/><br/>
          In this blog, we will explore the science of sleep, identify common sleep disorders, and provide practical tips for improving sleep quality.
        </p>

        {/* Second Image */}
        <div style={styles.imageWrapper}>
          <img
            src={disorder}
            alt="Common sleep disorders"
            style={styles.img2}
          />
          <p style={styles.caption}>Figure 2: Insomnia and other common sleep disorders.</p>
        </div>

        {/* Third Paragraph */}
        <p style={styles.paragraph}>
          <b>The Science of Sleep</b>
          <br/><br/>
          Sleep is divided into several stages, each playing a distinct role in physical and mental health:
          <br/><br/>
          <b>1. Non-Rapid Eye Movement (NREM) Sleep:</b> This includes three stages—N1, N2, and N3. N3, also known as deep sleep, is crucial for physical restoration and memory consolidation. During NREM sleep, the body undergoes repair processes, and growth hormone is released.
          <br/><br/>
          <b>2. Rapid Eye Movement (REM) Sleep:</b> REM sleep is associated with vivid dreaming and is vital for cognitive functions, such as learning and emotional regulation. It helps consolidate memories and process emotions.
          <br/><br/>
          The sleep cycle repeats several times throughout the night, and each stage contributes to different aspects of health. Disruptions in any stage can affect overall well-being.
        </p>

        {/* Third Image */}
        <div style={styles.imageWrapper}>
          <img
            src={cycle}
            alt="Understanding sleep stages"
            style={styles.img2}
          />
          <p style={styles.caption}>Figure 3: Understanding sleep stages and their impact on health.</p>
        </div>

        <p style={styles.paragraph}>
          <b>Common Sleep Disorders</b>
          <br/><br/>
          <b>1. Insomnia</b>
          <br/><br/>
          Insomnia is characterized by difficulty falling asleep, staying asleep, or waking up too early. It can lead to daytime fatigue, irritability, and difficulty concentrating. Causes of insomnia include stress, anxiety, and poor sleep habits.
          <br/><br/>
          <b>2. Sleep Apnea</b>
          <br/><br/>
          Sleep apnea is a serious sleep disorder where breathing repeatedly stops and starts during sleep. It can lead to high blood pressure, heart disease, and other serious conditions if left untreated. Symptoms include loud snoring, choking, or gasping during sleep.
          <br/><br/>
          <b>3. Restless Leg Syndrome (RLS)</b>
          <br/><br/>
          RLS causes uncomfortable sensations in the legs, leading to an irresistible urge to move them. This can significantly disrupt sleep and affect overall quality of life. RLS is often linked to iron deficiency and other underlying health issues.
          <br/><br/>
          <b>4. Narcolepsy</b>
          <br/><br/>
          Narcolepsy involves excessive daytime sleepiness and sudden sleep attacks. It can severely impact daily functioning and quality of life. Symptoms include sudden loss of muscle tone (cataplexy), vivid hallucinations, and sleep paralysis.
        </p>

        <p style={styles.paragraph}>
          <b>Impact of Technology on Sleep</b>
          <br/><br/>
          Modern technology, including smartphones, tablets, and computers, can negatively impact sleep quality. The blue light emitted by screens interferes with melatonin production, a hormone that regulates sleep. To mitigate these effects:
          <br/><br/>
          1. <b>Avoid Screens Before Bed:</b> Try to avoid using electronic devices at least an hour before bedtime.
          <br/><br/>
          2. <b>Use Night Mode:</b> Enable night mode or blue light filters on your devices to reduce blue light exposure in the evening.
          <br/><br/>
          3. <b>Create a Tech-Free Bedroom:</b> Keep electronic devices out of the bedroom to create a restful environment.
        </p>

        <p style={styles.paragraph}>
          <b>Lifestyle Factors Influencing Sleep</b>
          <br/><br/>
          Various lifestyle factors can influence sleep quality, including:
          <br/><br/>
          1. <b>Diet:</b> Avoid heavy meals, caffeine, and alcohol close to bedtime, as they can disrupt sleep.
          <br/><br/>
          2. <b>Physical Activity:</b> Regular exercise can promote better sleep, but avoid vigorous activity too close to bedtime.
          <br/><br/>
          3. <b>Sleep Schedule:</b> Maintain a consistent sleep schedule by going to bed and waking up at the same time each day.
          <br/><br/>
          4. <b>Environment:</b> Ensure your sleep environment is quiet, dark, and at a comfortable temperature.
        </p>

        <p style={styles.paragraph}>
          <b>FAQ on Sleep Health</b>
          <br/><br/>
          <b>1. How much sleep do adults need?</b>
          <br/><br/>
          Most adults need between 7 to 9 hours of sleep per night. Individual needs can vary, so listen to your body and adjust accordingly.
          <br/><br/>
          <b>2. Can napping affect nighttime sleep?</b>
          <br/><br/>
          Yes, long or late naps can interfere with nighttime sleep. If you need to nap, aim for a short nap (20-30 minutes) earlier in the day.
          <br/><br/>
          <b>3. What should I do if I can’t fall asleep?</b>
          <br/><br/>
          If you can’t fall asleep after 20 minutes, get out of bed and do a relaxing activity until you feel sleepy. Avoid screens and stimulating activities.
          <br/><br/>
          <b>4. How can I create a better sleep environment?</b>
          <br/><br/>
          Ensure your bedroom is dark, quiet, and cool. Invest in a comfortable mattress and pillows, and consider using blackout curtains and white noise machines if needed.
        </p>

        <p style={styles.paragraph}>
          <b>Conclusion</b>
          <br/><br/>
          Understanding the role of sleep in overall health is essential for achieving and maintaining optimal well-being. By addressing common sleep disorders, implementing practical tips, and making lifestyle adjustments, you can improve your sleep quality and, consequently, your physical, mental, and emotional health. Prioritize sleep as a fundamental aspect of your health routine and make the necessary changes to ensure you are getting restorative rest.
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

export default SleepHealth;
