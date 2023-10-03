import React , {useState} from 'react';
import Navigator from './component/navigater/Navigater';
import Dashbordd from './component/dashbord/Dashbord';
import Page from './component/rout/rout';


function App() {


 

  const data = [
    { name: 'Jan', value: 10 },
    { name: 'Feb', value: 20 },
    { name: 'Mar', value: 15 },
    // Add more data points as needed
  ];

  return (
   
    <div className="w-full ">
    <div className="App bg-gray-950 max-w-2xl ml-auto mr-auto ">
      <Page/>
      {/* <Dashbordd/>

      <Navigator/> */}
    </div>
    </div>
   
  );
}

export default App;
