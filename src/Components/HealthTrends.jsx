import React from 'react';
import trends from './title5/tren1.jpg';
import ai from './title5/tren2.jpg';
import global from './title5/tren3.png';
import device from './title5/tren4.jpg';
import advan from './title5/tren5.webp';
import background from './sciback2.jpeg';

const HealthTrends = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Health Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>Emerging Trends in Health and Wellness: New research, technologies, and lifestyle trends shaping the future of health.</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}>JUN 10, 2024</span>
          <span style={styles.author}> | Arvind Vaishnav</span>
        </div>

        {/* First Paragraph */}
        <p style={styles.paragraph}>
          <b>Discover the latest trends and advancements that are revolutionizing the healthcare industry, promoting healthier lifestyles, and shaping the future of health and wellness.</b>
        </p>

        {/* First Image */}
        <div style={styles.imageWrapper}>
          <img
            src={trends}
            alt="Emerging Trends in Health"
            style={styles.img1}
          />
          <p style={styles.caption}>Figure 1: Emerging trends in health and wellness.</p>
        </div>

        {/* Second Paragraph */}
        <p style={styles.paragraph}>
          The healthcare industry is experiencing rapid advancements and transformations, thanks to groundbreaking research, innovative technologies, and evolving lifestyle trends. As we embrace the future, it's essential to stay informed about these emerging trends that are set to reshape health and wellness.
          <br /><br />
          One of the most significant trends is the integration of artificial intelligence (AI) in healthcare. AI is revolutionizing the industry by streamlining workflows, enhancing diagnostics, and personalizing wellness plans. From telemedicine to collaborative diagnostics, AI is making healthcare more efficient and accessible.
        </p>

        {/* Second Image */}
        <div style={styles.imageWrapper}>
          <img
            src={ai}
            alt="AI in Healthcare"
            style={styles.img2}
          />
          <p style={styles.caption}>Figure 2: The impact of AI in healthcare.</p>
        </div>

        {/* Third Paragraph */}
        <p style={styles.paragraph}>
          <b>1. AI-Driven Workflow Automation</b>
          <br /><br />
          AI is automating various administrative and clinical tasks, allowing healthcare professionals to focus more on patient care. From scheduling appointments to managing medical records, AI-driven automation is enhancing efficiency and reducing the burden on healthcare staff.
          <br /><br />
          <b>2. Telemedicine and Remote Care</b>
          <br /><br />
          Telemedicine has gained tremendous popularity, especially in the wake of the COVID-19 pandemic. It allows patients to receive medical consultations and care from the comfort of their homes. AI-powered telemedicine platforms provide real-time health monitoring and personalized treatment plans, making healthcare more accessible.
          <br /><br />
          <b>3. Collaborative Diagnostics</b>
          <br /><br />
          AI is enhancing diagnostic accuracy by analyzing medical data and providing insights to healthcare professionals. Collaborative diagnostics involve AI systems working alongside doctors to interpret medical images, detect diseases early, and recommend treatment options.
          <br /><br />
          <b>4. Personalized Wellness Plans</b>
          <br /><br />
          AI is transforming personalized wellness by analyzing individual health data and creating customized wellness plans. These plans consider factors like genetics, lifestyle, and medical history to provide tailored recommendations for diet, exercise, and mental well-being.
          <br /><br />
          <b>5. Green Procurement for a Sustainable Future</b>
          <br /><br />
          The healthcare industry is also embracing green procurement practices to promote sustainability. This involves sourcing eco-friendly products and services, reducing waste, and minimizing the environmental impact of healthcare operations.
        </p>

        {/* Fourth Image */}
        <div style={styles.imageWrapper}>
          <img
            src={global}
            alt="Green Procurement"
            style={styles.img2}
          />
          <p style={styles.caption}>Figure 3: Green procurement practices in healthcare.</p>
        </div>

        {/* Fifth Paragraph */}
        <p style={styles.paragraph}>
          <b>6. Digital Health and Wearable Technology</b>
          <br /><br />
          Wearable technology, such as fitness trackers and smartwatches, is becoming increasingly popular. These devices allow individuals to monitor their health in real-time, track fitness goals, and receive personalized health insights. The data collected by wearables can also be shared with healthcare providers for more accurate diagnoses and treatment plans.
          <br /><br />
          <b>7. Mental Health Awareness and Support</b>
          <br /><br />
          Mental health is gaining more attention as an integral part of overall wellness. There is a growing emphasis on mental health awareness, reducing stigma, and providing support through therapy, counseling, and digital mental health platforms. AI-driven mental health apps offer accessible resources for managing stress, anxiety, and depression.
          <br /><br />
          <b>8. Holistic Health and Integrative Medicine</b>
          <br /><br />
          Holistic health approaches and integrative medicine are gaining traction as people seek comprehensive wellness solutions. These approaches combine conventional medicine with alternative therapies such as acupuncture, herbal medicine, and mindfulness practices to address the physical, mental, and emotional aspects of health.
        </p>

        {/* Fifth Image */}
        <div style={styles.imageWrapper}>
          <img
            src={device}
            alt="Wearable Technology"
            style={styles.img2}
          />
          <p style={styles.caption}>Figure 4: Wearable technology in health monitoring.</p>
        </div>

        {/* Sixth Paragraph */}
        <p style={styles.paragraph}>
          <b>9. Plant-Based Diets and Sustainable Eating</b>
          <br /><br />
          There is a growing trend towards plant-based diets and sustainable eating practices. People are becoming more conscious of the environmental impact of their food choices and are opting for diets rich in fruits, vegetables, and plant-based proteins. This shift not only benefits personal health but also supports environmental sustainability.
          <br /><br />
          <b>10. Personalized Nutrition and Genomic Testing</b>
          <br /><br />
          Advances in genomic testing are enabling personalized nutrition plans based on an individual's genetic makeup. By understanding how genes influence nutrient absorption and metabolism, healthcare providers can create customized dietary recommendations that optimize health outcomes.
          <br /><br />
          <b>11. Digital Therapeutics</b>
          <br /><br />
          Digital therapeutics (DTx) are emerging as a new class of interventions delivered via digital platforms to prevent, manage, or treat medical conditions. These solutions, which include mobile apps and online programs, provide evidence-based therapeutic interventions that complement traditional treatments and enhance patient engagement.
          <br /><br />
          <b>12. Breakthroughs in Personalized Medicine</b>
          <br /><br />
          Personalized medicine is advancing rapidly with new technologies enabling more precise treatments based on individual genetic profiles. Innovations in genetic sequencing and biomarkers are allowing for more tailored therapies and targeted drug development, improving treatment efficacy and reducing side effects.
        </p>

        {/* Sixth Image */}
        <div style={styles.imageWrapper}>
          <img
            src={advan}
            alt="Personalized Medicine"
            style={styles.img2}
          />
          <p style={styles.caption}>Figure 5: Advances in personalized medicine.</p>
        </div>

        {/* Seventh Paragraph */}
        <p style={styles.paragraph}>
          <b>13. The Role of Nutrition in Disease Prevention</b>
          <br /><br />
          Nutrition is increasingly recognized as a key factor in disease prevention and overall health. Research continues to uncover the links between diet and chronic diseases such as heart disease, diabetes, and cancer. Emphasizing a balanced diet rich in nutrients, antioxidants, and anti-inflammatory foods can significantly impact long-term health outcomes.
          <br /><br />
          By staying updated on these emerging trends, individuals and healthcare professionals can make informed decisions and contribute to a healthier future. Embracing these innovations will not only improve healthcare outcomes but also promote a sustainable and holistic approach to wellness.
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

export default HealthTrends;
