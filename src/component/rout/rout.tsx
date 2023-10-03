import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Dashbordd from '../dashbord/Dashbord';
import Navigator from '../navigater/Navigater';
import Cat from '../cat/Cat'
import Ana from '../analytic/Analytic';
import Trans from '../trans/Trans';
import Notify from '../notify/Notify';
import Ocr from '../ocr/Ocr';
import Word from '../word/word';
import Audio from '../audio/Audio';




const Page = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Dashbordd/>}/>
      <Route path="/cat" element={<Cat/>}/>
      <Route path="/ana" element={<Ana/>}/>
      <Route path="/add" element={<Trans/>}/>
      <Route path="/not" element={<Notify/>}/>
      <Route path="/ocr" element={<Ocr/>}/>
      <Route path="/word" element={<Word/>}/>
      <Route path="/audio" element={<Audio/>}/>
     
     

      </Routes>
      
      <Navigator/>
     
    </BrowserRouter>
    
  </>
  )
}

export default Page