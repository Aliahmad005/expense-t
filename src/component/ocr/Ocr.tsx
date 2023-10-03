import React, { useState, useEffect, ChangeEvent ,  useRef  } from 'react';
import { createWorker, ImageLike, RecognizeResult } from 'tesseract.js';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import moment from 'moment';



const Ocr: React.FC = () => {


  const getLocalItems = () => {
    let list = localStorage.getItem('lists');
  
    if (list) {
      return JSON.parse(list);
    }
    return [];
  };




  const [data , setData] = useState<any[]>(getLocalItems())
  const [selectedImg, setSelectedImg] = useState<File | null>(null);
  const [textResult, setTextResult] = useState<string>('');
  const [minC , setMinC] = useState<string>("");
  const [doodle , setDoodle] = useState(0);
 
  const textResul = 'Subtottal 123';
  const [main, setMain] = useState({
    name: 'Expense',
    subName: "",
    mony: 0,
    time:'',
    week:'',
   });


  console.log("check food " , minC)
  
  console.log("check Main" , main)

  //word checking
  const checkFoodCategory = (text: string): boolean => {
    const foodCategories = ['pizza', 'burger', 'apple'];
    const regex = new RegExp(`\\b(${foodCategories.join('|')})\\b`, 'i');
    return regex.test(text);
  };
// shoping
  const checkShopingCategory = (text: string): boolean => {
    const foodCategories = ['Shirt', 'Jeans', 'Shoes', 'cloths ', 'garment ', 'toy' , 'toys' ,'handbag' , 'handbag','collection' , "Khaadi",
    "Gul Ahmed",
    "Nishat Linen",
    "Sana Safinaz",
    "Alkaram Studio",
    "Junaid Jamshed",
    "Maria B.",
    "Sapphire",
    "Outfitters",
    "Bonanza Satrangi",
    "ChenOne",
    "Bareeze",
    "Ethnic by Outfitters",
    "Breakout",
    "Generation",
   "Bata",
  "Service Shoes",
  "Borjan",
  "Hush Puppies",
  "Stylo Shoes",
  "ECS",
  "Insignia",
  "Shoe Planet",
  "Metro Shoes",
  "Borjan",
  'Suit',
   'Pent',
   'Cote',
  ];
    const regex = new RegExp(`\\b(${foodCategories.join('|')})\\b`, 'i');
    return regex.test(text);
  };

// Bills

const checkBillCategory = (text: string): boolean => {
  const billCategories = ['National Transmission and Despatch Company Limited', 'Pakistan Electric Power Company', 'Islamabad Electric Supply Company','Lahore Electric Supply Company','Karachi Electric','Faisalabad Electric Supply Company','Gujranwala Electric Power Company' , 'Hyderabad Electric Supply Company' , 'Multan Electric Power Company','Peshawar Electric Supply Company','Quetta Electric Supply Company','Sukkur Electric Power Company', 'Sui Northern Gas Pipelines Limited','Sui Southern Gas Company',
  "NTDC",
  "PEPCO",
  "IESCO",
  "LESCO",
  "KE",
  "FESCO",
  "GEPCO",
  "HESCO",
  "MEPCO",
  "PESCO",
  "QESCO",
  "SEPCO",
  'SNGPL',
  'SSGC',
  "PTCL",
  "StormFiber",
  "Nayatel",
  "Fiberlink",
  "Transworld Home",
  "Optix Fiber",
  "Wi-Tribe",
  "Cybernet",
  "WorldCall",
  "Multinet",
  "Bill",
  "bills",
  'Bill'
  
];
  const regex = new RegExp(`\\b(${billCategories.join('|')})\\b`, 'i');
  return regex.test(text);
};



  const convertImageToText = async () => {
    const worker = createWorker({
      
    });
  
    await (await worker).loadLanguage('eng');
    await (await worker).initialize('eng');
  
    if (selectedImg) {
      const result = await (await worker).recognize(selectedImg);
      const { data } = result as RecognizeResult;
  
      if (data && data.text) {
        setTextResult(data.text);
      }
    }
  };


  // word checking

useEffect(()=>{
  setMain({
    ...main,
    subName:minC,
  });
  main.time = moment().format();
  main.week = moment().format('dddd');  

 
},[minC])
useEffect(()=>{
  if(main.time != '' && main.week != "" && main.subName != '' && main.mony != 0){
    const updatedData = [...data, main];
      setData(updatedData);
    localStorage.setItem('lists', JSON.stringify(updatedData));
    console.log("done" , data)
    setDoodle(0)
  }
},[main])

  useEffect(()=>{
    
    const isFood = checkFoodCategory(textResult);
    const isShoping = checkShopingCategory(textResult);
    const isBill = checkBillCategory(textResult);

    console.log("checking the food",isFood); // Output: true
    if(isFood === true){
      console.log("food true" , isFood)
          setMinC('Food');
          setMain({
            ...main,
            subName:"Food",
          })
       
    }

    if(isShoping === true){
      console.log('shoping true' , isShoping)
      setMinC('Shoping');
      setMain({
        ...main,
        subName:"Shoping",
      })
   
}

if(isBill === true){
  console.log('bill true' , isBill)
  setMinC('Bills');
  setMain({
    ...main,
    subName:"Bills",
  })

}


    // get Tottal
    

    const extractNumberAfterTottal = () => {
      const regex = /Subtotal (\d+)/i;
      const regex1 = /Total (\d+)/i;
      const match = textResult.match(regex);
      const match1 = textResult.match(regex1);
      if (match && match[1]) {
        return parseInt(match[1]);
      } else if(match1 && match1[1]){
        return parseInt(match1[1]);

      }
      return 0;
    };

    const result = extractNumberAfterTottal();
    
   
   setMain({
    ...main,
    mony: result
   })
    console.log("Result check:", result);
    console.log('textResult' , textResult )

  },[textResult])
  

  useEffect(() => {
    convertImageToText();
  }, [selectedImg]);

  const handleChangeImg = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImg(e.target.files[0]);
      setDoodle(1)
    }
  };

  //test

  const fileInputRef = useRef<HTMLInputElement>(null);

  



  const handleClick = () => {
    fileInputRef.current?.click();
  };
 

  return (
    <div className="">
      <div >
      <label htmlFor="upload" className="flex text-white text-xl items-center cursor-pointer">
        <AiOutlineCloudUpload className="mr-2" />
       
       
      </label>
      <input
        ref={fileInputRef}
        className="hidden"
        type="file"
        accept="image/*"
        id="upload"
        onChange={handleChangeImg}
      />
         {
        doodle === 1 ?
        <h1 className='color'>. . .</h1> :''
      }
    </div>
    <div>
   
    </div>

    </div>
  );
};

export default Ocr;

