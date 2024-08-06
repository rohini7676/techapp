import React from 'react';
import img1 from './title1/science4.webp';
import background from './sciback2.jpeg';

const Sciblog4 = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Science Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>Moderate Drinking Myths Debunked: The Surprising Truth About Your Daily Glass of Wine</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}> July 30, 2024</span>
          <span style={styles.author}> |  Journal of Studies on Alcohol and Drugs </span>
        </div>

        {/* First Paragraph */}
        <p style={styles.paragraph}>
          <b>New research reveals that the belief in moderate drinking’s health benefits is based on flawed studies.These studies often compared drinkers to unhealthy former drinkers, skewing results. A deeper analysis of 107 studies found that higher quality research showed no longevity benefits from moderate drinking. Misconceptions like the “French paradox” contribute to this belief, despite health risks such as increased cancer risk. There is no safe level of alcohol consumption.

</b>
        </p>

        {/* First Image */}
        <div style={styles.imageWrapper}>
          <img
            src={img1}
            alt="Science Illustration"
            style={styles.img1}
          />
          <p style={styles.caption}>Figure 1: Flawed studies have led to the belief that moderate drinking is healthy. Better research shows no longevity benefits and highlights health risks like cancer. Misconceptions like the “French paradox” persist, but no safe alcohol level exists.

</p>
        </div>

        {/* Second Paragraph */}
        <p style={styles.paragraph}>
        
<h2>Questioning Conventional Wisdom</h2>Probably everyone has heard the conventional wisdom that a glass of wine a day is good for you—or you’ve heard some variation of it. The problem is that it’s based on flawed scientific research, according to a new report in the Journal of Studies on Alcohol and Drugs.

Over the years, many studies have suggested that moderate drinkers enjoy longer lives with lower risks of heart disease and other chronic ills than abstainers do. That spurred the widespread belief that alcohol, in moderation, can be a health tonic. However, not all studies have painted such a rosy picture—and the new analysis sheds light on why.<br></br><br></br>
<h2>Misleading Comparisons</h2>
In a nutshell, studies linking moderate drinking to health benefits suffer from fundamental design flaws, said lead researcher Tim Stockwell, Ph.D., a scientist with the Canadian Institute for Substance Use Research at the University of Victoria.<br></br><br></br>

The major issue: Those studies have generally focused on older adults and failed to account for people’s lifetime drinking habits. So moderate drinkers were compared with “abstainer” and “occasional drinker” groups that included some older adults who had quit or cut down on drinking because they’d developed any number of health conditions.
<h2>Analyzing Data From 107 Studies</h2>For the analysis, Stockwell and his colleagues identified 107 published studies that followed people over time and looked at the relationship between drinking habits and longevity. When the researchers combined all the data, it looked like light to moderate drinkers (that is, those who drank between one drink per week and two per day) had a 14% lower risk of dying during the study period compared with abstainers.<br></br>

Things changed, however, when the investigators did a deeper dive. There were a handful of “higher quality” studies that included people who were relatively young at the outset (younger than 55, on average) and that made sure former and occasional drinkers were not considered “abstainers.” In those studies, moderate drinking was not linked to a longer life.<br></br>

Instead, it was the “lower quality” studies (older participants, no distinction between former drinkers and lifelong abstainers) that did link moderate drinking to greater longevity.<br></br>

“If you look at the weakest studies,” Stockwell said, “that’s where you see health benefits.”
<h2>The French Paradox</h2>The notion that moderate drinking leads to a longer, healthier life goes back decades. As an example, Stockwell pointed to the “French paradox”—the idea, popularized in the 1990s, that red wine helps explain why the French enjoy relatively low rates of heart disease, despite a rich, fatty diet. That view of alcohol as an elixir still seems to be “ingrained” in the public imagination, Stockwell noted.<br></br><br></br>
<h2>Health Risks of Moderate Drinking</h2>
In reality, he said, moderate drinking likely does not extend people’s lives—and, in fact, carries some potential health hazards, including increased risks of certain cancers. That’s why no major health organization has ever established a risk-free level of alcohol consumption.<br></br><br></br>

“There is simply no completely ‘safe’ level of drinking,” Stockwell said.
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

export default Sciblog4;
