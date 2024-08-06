import React from 'react';
import nutri from './title5/nutrition12.webp';
import debunk from './title5/nutrition11.jpg';
import nut from './title5/nutrition1.jpg';
import background from './sciback2.jpeg';
const Nutrition = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Title */}
        <h1 style={styles.title}>Health Blogs</h1>

        {/* Description */}
        <div style={styles.description}>
          <h2 style={styles.subtitle}>Nutrition Myths vs. Facts: Debunking common misconceptions about diet and nutrition to promote healthier eating habits.</h2>
        </div>

        {/* Metadata (Date and Author) */}
        <div style={styles.metadata}>
          <span style={styles.date}>APR 17, 2024</span>
          <span style={styles.author}> | Dr. Catherine Loria & Dr. Richard P. Troiano</span>
        </div>

        {/* First Paragraph */}
        <p style={styles.paragraph}>
          <b>This information may help you make changes in your daily eating and physical activity habits so that you improve your well-being and reach or maintain a healthy weight.</b>
        </p>

        {/* First Image */}
        <div style={styles.imageWrapper}>
          <img
            src={nutri}
            alt="Nutrition myths vs. facts"
            style={styles.img1}
          />
          <p style={styles.caption}>Figure 1: Nutrition myths vs. facts.</p>
        </div>

        {/* Second Paragraph */}
        <p style={styles.paragraph}>
          The online world is no doubt rife with health and nutrition myths and misconceptions. As a result, it is difficult to distinguish nutrition myths vs. facts. And this greatly affects the choices we make daily. However, in order to be informed about nutrition or diet and the enormous impact it has on our bodies, both physically and mentally, it is vital to ascertain what is fact and what is fiction.
          <br></br><br></br>
          And herein lies the problem. There is just so much information out there, much of it conflicting, that things can get confusing.For this reason, our team has decided to do our best to dispel some of the more common myths by providing the latest scientific facts.
          <br></br><br></br>
          Before we examine these nutrition myths vs. facts, let’s take a brief look at why are there so many myths and misconceptions pertaining to health and nutrition in the first place.
        </p>

        {/* Second Image */}
        <div style={styles.imageWrapper}>
          <img
             src={debunk}
            alt="Debunking"
            style={styles.img2}
          />
          <p style={styles.caption}>Figure 2: Debunking common nutrition myths.</p>
        </div>

        {/* Third Paragraph */}
        <p style={styles.paragraph}>
          Why are there so many nutrition myths and misconceptions?
          <br></br><br></br>
          <b>1. Science constantly changes.</b>
          <br></br><br></br>
          Science pertaining to health and nutrition changes constantly. In fact, it evolves so fast that, what was once a widely accepted fact, may now be fiction. For this reason it’s important to stay up-to-date on the latest nutrition news.
          <br></br><br></br>
          <b>2. Compelling marketing</b>
          <br></br><br></br>
           Marketing influences the way we think, what we purchase and, of course, what we eat. This is indisputable. As a result, we need to be wary of various marketing techniques that cause us disregard fact, leading us to focus on gimmicks instead.
          <br></br>Related: Factors That Influence Food Choices
          <br></br><br></br>
          <b>3. The influence of powerful corporations, organizations and lobby groups</b>
          <br></br><br></br>
          These powerful groups can influence and shape what we hear, see and read on TV, in the newspapers or online publications. For this reason the onus is on the people to do their own investigating to ensure the veracity of what they read, hear and see.
          <br></br><br></br>
          <b>4. The ease with which information can now be shared online</b>
          <br></br><br></br>
          Today, we are inundated with information because there exists a myriad of ways to share and receive information and data: blogs, social media, legacy media, newspapers and magazines, TV, platforms like Youtube or Rumble, and so on.Because there are so many channels, it’s easy to disseminate information, factual and non. This makes the consumer’s job more difficult. There is no doubt.
          <br></br><br></br>
          <b>5. Word of mouth</b>
          <br></br><br></br>
          Peer influence is also a major factor that may result in health and nutrition-related myths and misconceptions. People simply want to believe that short-cuts and quick fixes to a variety of problems exist. Because they do, they may believe largely unsubstantiated claims they hear others proclaim. When they simply accept these as facts, they perpetuate these myths by sharing them with others.
          <br></br><br></br>
          <h2 style={styles.subheading}>What can you do to determine what is nutrition myths vs. fact?</h2>
          1. The first course of action should be to make it a priority to keep up with the latest science-backed news. That said, this can be challenging.You can do so easily. Simply subscribe to various scholarly email communications, article and blog posts, as well as email newsletters that end up directly in your inbox. Doing so will save you time having to conduct research on your own.
          <br></br><br></br>
          2. Then, you should refer to various reputable, non-partisan resources to ensure you are getting unbiased information.
          <br></br><br></br>
          3. Next, seek the advice of numerous health professionals to help distinguish between myth and fact.
          <br></br><br></br>
          4. Last, and perhaps most important, is to think critically.
          <ul>
              <li>Challenge assumptions.</li>
              <li>Suspend judgement.</li>
              <li>Revise conclusions based on newly-acquired evidence.</li>
              <li>Prioritize data over beliefs.</li>
              <li>Consider all possibilities without necessarily accepting them.</li>
              <li>Look to see if anything had been missed by others.</li>
          </ul>   
              Let’s now take a look at some of these common nutrition myths and facts.
          <br></br><br></br>
          <h2 style={styles.subheading}>Nutrition myths vs. facts</h2>
          <b>1. Nutrition myth: Nutritious (healthy) food is expensive.</b>
          <br></br><br></br>
          <b>Nutrition fact:</b>Although It’s important to note that additive-rich, nutrient-deficient, processed food is inexpensive and convenient, there is another side to the coin.
          <br></br><br></br>
          Look at it this way:
          <br></br>
          How often do you go through the drive-through to pick up a coffee and a snack?
          <br></br>
          How many times per month do you buy take-out lunch?
          <br></br>
          Do you order pizza or use Uber Eats? 
          <br></br>
          And what about the weekends–how often do you eat out?
          <br></br>
          We all know the answers to these questions, probably more than we’d like to admit.
          <br></br>
          To what does all of this add up?
          <br></br>
          Money spent. The same money that can be diverted to buying higher-quality, nutritious foods at the grocery store and making it at home.
          <br></br>
          Of course, it’s not always possible to do so on very busy days. But, generally speaking, it’s about making cooking at home to save money a habit. 
          <br></br><br></br>
          <b>Relevant research:</b>
          <br></br><br></br>
          USDA compared prices of ‘healthy’ and ‘unhealthy’* foods using three different price metrics:
          <ul>
            <li>the price of food energy ($/calorie)</li>
            <li>the price of edible weight ($/100 edible grams)</li>
            <li>the price of an average portion ($/average portion)</li> 
            </ul>  
            <br></br>       
            Here’s what it found.            
            <br></br>
            <ul>
            <li>For all metrics except the price of food energy, it was discovered in the study that ‘healthy’ foods cost less than ‘less healthy’ foods.</li>
            <li>‘Unhealthy’ foods, according to USDA, are high in saturated fat, added sugar, and/or sodium, or that contribute little to meeting dietary recommendations. </li>
          </ul>   



        </p>
        {/* Third Image */}
        <div style={styles.imageWrapper}>
          <img
             src={nut}
            alt="nutrition"
            style={styles.img2}
          />
          <p style={styles.caption}>Figure 3 :Nutrition myth: Foods with such health claims are the sure-bet, go-to healthy choices.</p>
        </div>
<p>
<br></br><br></br>
          <b>2. Nutrition myth: Foods with such health claims are the sure-bet, go-to healthy choices.</b>
          <br></br><br></br>
          <b>Nutrition fact:</b>Food label health claims may mislead by only focusing on one or two nutrition-related aspects of a food, rather than looking at its nutritional value from a more holistic perspective.You’ve all seen food label health claims such as: All Natural, Sugar-free, Vitamin D-rich and many more. While some of these claims can be true, things are not so cut and dried much of the time.
          <br></br><br></br>
          Let’s take a look at a few of these claims.
          <br></br>
         <b> Claim: All Natural</b>
          <br></br>
          The phrase “All Natural” is not regulated in any way by the FDA. The word natural is appropriate if the food does not contain added colours, artificial flavours or synthetic substances.That said, however, a food product that’s made with “all-natural” ingredients can still contain hormones and GMOs, does not have to be organically produced, and can be high in calories, fats, sodium or sugar. This is important to underscore.
          <br></br>
          <b>Claim: Gluten-Free</b>
          <br></br>
          Some people firmly believe that gluten-free products are always the ‘healthier’ food options.Things aren’t so simple though. Here’s why.Many manufacturers remove gluten, and add sugar, salt or refined starches to make up the difference in flavour and texture. This certainly negates the perceived benefit of eating a food product that does not contain gluten. To avoid this pitfall, examine the food product as a whole.
          <br></br>
          <b>Claim: Organic</b>
          <br></br>
          According to USDA, produce can be called organic if it’s certified to have grown on soil that had no prohibited substances applied for three years prior to harvest.The trouble is that the average consumers don’t know what substances are prohibited and which ones are permitted.In addition, prohibited substances include most synthetic fertilizers and pesticides. The operative word being most.Again, therein lies the problem. Which fertilizers and pesticides are actually prohibited?<br></br>In order to determine this, we have to do some thorough digging. This may be time consuming and inconvenient.<br></br>Discover more about USDA Organic.
          <br></br>To learn more information about specific health claims and their meanings, visit Food Packaging Claims.
          
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

export default Nutrition;
