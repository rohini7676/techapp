import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Articles from './Components/Articles'
import Blog from './Components/Blog'
import About from './Components/About'
import QuizPage from './Components/QuizPage'
import ContactUs from './Components/ContactUs'
import Example from './Components/Example'
import Example2 from './Components/Example2'
import Space from './Components/Space'
import Earth from './Components/Earth'
import Health from './Components/Health'
import Sciblog1 from './Components/Sciblog1'
import Sciblog2 from './Components/Sciblog2'
import Sciblog3 from './Components/Sciblog3'
import Sciblog4 from './Components/Sciblog4'
import Sciblog5 from './Components/Sciblog5'
import Techblog1 from './Components/Techblog1'
import Techblog2 from './Components/Techblog2'
import Techblog3 from './Components/Techblog3'
import Techblog4 from './Components/Techblog4'
import Techblog5 from './Components/Techblog5'
import SpaceBog1 from './Components/Spacebog1'
import SpaceBog2 from './Components/Spacebog2'
import SpaceBlog3 from './Components/Spaceblog3'
import Spaceblog4 from './Components/Spaceblog4'
import Spaceblog5 from './Components/Spaceblog5'
import EarthBlog1 from './Components/EarthBlog1'
import EarthBlog2 from './Components/EarthBlog2'
import EarthBlog3 from './Components/EarthBlog3'
import EarthBlog4 from './Components/EarthBlog4'
import EarthBlog5 from './Components/EarthBlog5'
import Nutrition from './Components/Nutrition'
import Nutrition4 from './Components/Nutrition4'
import PersonalizedMedicine from './Components/PersonalizedMedicine'
import HealthTrends from './Components/HealthTrends'
import SleepHealth from './Components/SleepHealth'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import ThankYou from './Components/ThankYou'
import Feedback from './Components/Feedback'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Articles/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/quiz" element={<QuizPage/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/science" element={<Example/>}/>
        <Route path="/tech" element={<Example2/>}/>
        <Route path="/space" element={<Space/>}/>
        <Route path="/earth" element={<Earth/>}/>
        <Route path="/health" element={<Health/>}/>
        <Route path="/sciblog1" element={<Sciblog1/>}/>
        <Route path="/sciblog2" element={<Sciblog2/>}/>
        <Route path="/sciblog3" element={<Sciblog3/>}/>
        <Route path="/sciblog4" element={<Sciblog4/>}/>
        <Route path="/sciblog5" element={<Sciblog5/>}/>
        <Route path="/techblog1" element={<Techblog1/>}/>
        <Route path="/techblog2" element={<Techblog2/>}/>
        <Route path="/techblog3" element={<Techblog3/>}/>
        <Route path="/techblog4" element={<Techblog4/>}/>
        <Route path="/techblog5" element={<Techblog5/>}/>
        <Route path="/spaceblog1" element={<SpaceBog1/>}/>
        <Route path="/spaceblog2" element={<SpaceBog2/>}/>
        <Route path="/spaceblog3" element={<SpaceBlog3/>}/>
        <Route path="/spaceblog4" element={<Spaceblog4/>}/>
        <Route path="/spaceblog5" element={<Spaceblog5/>}/>
        <Route path="/earthblog1" element={<EarthBlog1/>}/>
        <Route path="/earthblog2" element={<EarthBlog2/>}/>
        <Route path="/earthblog3" element={<EarthBlog3/>}/>
        <Route path="/earthblog4" element={<EarthBlog4/>}/>
        <Route path="/earthblog5" element={<EarthBlog5/>}/>
        <Route path="/healthblog1" element={<Nutrition/>}/>
        <Route path="/healthblog2" element={<Nutrition4/>}/>
        <Route path="/healthblog3" element={<PersonalizedMedicine/>}/>
        <Route path="/healthblog4" element={<HealthTrends/>}/>
        <Route path="/healthblog5" element={<SleepHealth/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/thankyou" element={<ThankYou/>}/>
        <Route path="/feedback" element={<Feedback/>}/>
        
        
        






        
      </Routes>
    </div>
  )
}

export default App
