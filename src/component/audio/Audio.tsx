import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FaMicrophone } from 'react-icons/fa';
import moment from 'moment';


const Audio = () => {

  //get list  



  const getLocalItems = () => {
    let list = localStorage.getItem('lists');

    if (list) {
      return JSON.parse(list);
    }
    return [];
  };


  const [data, setData] = useState<any[]>(getLocalItems())
  console.log("data", data)
  

  //



  const { transcript , resetTranscript } = useSpeechRecognition();
  const [dodle, setDodle] = useState(0);
  const [dodlee, setDodlee] = useState(0);
  const [textResult, setTextResult] = useState<string>('');

  const [main, setMain] = useState({
    name: 'Expense',
    subName: "",
    mony: 0,
    time: '',
    week: '',
  });

  let bigL = 0
  let endL = 0

  useEffect(() => {
    main.time = moment().format();
    main.week = moment().format('dddd');

    if (main.time != '' && main.week != "" && main.subName != '' && main.mony != 0) {
      
      setDodlee(2)
      const updatedData = [...data, main];
      setData(updatedData);
      localStorage.setItem('lists', JSON.stringify(updatedData));

      resetTranscript();

     
      console.log("done ho gia hai", data);
    }
  }, [main])


  useEffect(()=>{
    endL = data.length

    console.log("end lenth" , endL)

    if(endL > bigL){
      setDodlee(0)
      bigL = endL

      console.log("kam ho gia hai boss")
    }
  },[data])

  console.log('main ccc', main)

  console.log("text resut", textResult)


  //word checking food
  const checkFoodCategory = (text: string): boolean => {
    const foodCategories = ['pizza', 'burger', 'apple', 'food', 'Food'];
    const regex = new RegExp(`\\b(${foodCategories.join('|')})\\b`, 'i');
    return regex.test(text);
  };


  //word checking shop

  const checkShopCategory = (text: string): boolean => {
    const foodCategories = ['Shopping', 'shopping', 'shop', 'Shop'];
    const regex = new RegExp(`\\b(${foodCategories.join('|')})\\b`, 'i');
    return regex.test(text);
  };

  //word checking Bill

  const checkBillCategory = (text: string): boolean => {
    const foodCategories = ['Bill', 'bill', 'Bills', 'bills'];
    const regex = new RegExp(`\\b(${foodCategories.join('|')})\\b`, 'i');
    return regex.test(text);
  };

  //word checking House

  const checkHouseCategory = (text: string): boolean => {
    const foodCategories = ['House', 'house', 'Housing', 'housing'];
    const regex = new RegExp(`\\b(${foodCategories.join('|')})\\b`, 'i');
    return regex.test(text);
  };


  useEffect(() => {
    setTextResult(transcript)
    console.log("transcript", transcript)
    const isFood = checkFoodCategory(transcript);
    const isShop = checkShopCategory(transcript);
    const isBill = checkBillCategory(transcript);
    const isHouse = checkHouseCategory(transcript);

    console.log("checking the food", isFood);
    if (isFood === true) {
      console.log("food true", isFood)

      setMain({
        ...main,
        subName: "Food",
      })
      setDodlee(1)
    }

    //shop
    console.log("checking the food", isShop);
    if (isShop === true) {
      console.log("shp true", isShop)

      setMain({
        ...main,
        subName: "Shoping",
      })
      setDodlee(1)

    }

    //Bill
    console.log("checking the Bill", isBill);
    if (isBill === true) {
      console.log("Bill true", isBill)

      setMain({
        ...main,
        subName: "Bills",
      })
      setDodlee(1)

    }

    //House
    console.log("checking the House", isHouse);
    if (isHouse === true) {
      console.log("Bill true", isHouse)

      setMain({
        ...main,
        subName: "Housing",
      })
      setDodlee(1)

    }




  }, [transcript])

  const mice = () => {

    if (transcript != '') {

      // get Tottal


      const extractNumberAfterTottal = () => {
        const regex = /add (\d+)/i;
        const regex1 = /Total (\d+)/i;
        const match = textResult.match(regex);
        const match1 = textResult.match(regex1);
        if (match && match[1]) {
          return parseInt(match[1]);
        } else if (match1 && match1[1]) {
          return parseInt(match1[1]);

        }
        return 0;
      };

      const result = extractNumberAfterTottal();


      setMain({
        ...main,
        mony: result
      })


    }




    if (dodle === 0) {
      setDodle(1)
      SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });

       bigL = data.length
       console.log("data lenth bigning" , bigL)

    }
    if (dodle === 1) {
      setDodle(0)
      SpeechRecognition.stopListening();

    }
  }

  //  const startLis = SpeechRecognition.startListening({ continuous: true })


  // const startLis  = async () => {
  //   await startListening({ continuous: true });
  // };


  // const stopLis = () => {
  //   SpeechRecognition.stopListening();
  // };

  // const startLis = () => {
  //   SpeechRecognition.startListening({ continuous: true , language:'en-IN' });
  // };
  const [browserSupportsSpeechRecognition, setBrowserSupportsSpeechRecognition] = useState(false);

  useEffect(() => {
    setBrowserSupportsSpeechRecognition(!!window.SpeechRecognition || !!window.webkitSpeechRecognition);
  }, []);

  if (!browserSupportsSpeechRecognition) {
    return null
  }
  return (
    <div className='duration-700 flex justify-center  ' >
      <div className={`   duration-700 opacity-100  ${dodle === 0 ? 'text-gray-200' : ''} ${dodle === 1 ? 'rColor' : ''}`}>
     
          <FaMicrophone size={25} onClick={mice} />
        
        

        {dodlee === 1 ?
          <h1 className='text-green-500 duration-700  animate-pulse '>{main.subName}</h1>
          : ''
        }
        {dodlee === 2 ?
          <h1 className='text-white'>{main.mony}</h1>
          : ''
        }
        {dodlee === 3 ?
          <h1 className='text-white'>done</h1>
          : ''
        }
      </div>
      <br />

      {/* <div>{transcript}</div> */}
      {/* <div>
        <button className='bg-black text-white'>copy</button>
        <button className='bg-gray-200 mr-5' onClick={startLis}>Start lisning</button>
        <button className='bg-black text-white mr-5' onClick={stopLis}>Stop listning</button>
      </div> */}
    </div>
  )
}

export default Audio

