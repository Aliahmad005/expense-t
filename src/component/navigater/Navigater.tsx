import React, { useState } from 'react';
import { FaHome, FaUser, FaEnvelope, FaChartPie, FaChartBar, FaMoneyBill, FaEnvelopeOpen } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';



function Navigator() {
  let navigate = useNavigate();
  const [active, setActive] = useState<number>()

  const Menus = [
    { name: "Dashbord", icon: 'dash.png', dis: "translate-x-0" },
    { name: "Catagory", icon: 'tra.png', dis: "translate-x-16" },
    { name: "Analytic", icon: 'rep.png', dis: "translate-x-32" },
    { name: "History", icon: 'cat.png', dis: "translate-x-48" },
    { name: "Notification", icon: 'dash.png', dis: "translate-x-64" },

  ]




  return (

    <div className="bg-gray-900 mt-5 fixed bottom-0 max-w-2xl w-full flex justify-center ">
      <h1 className="bg-gray-900 max-h-[4.4rem] px-6 rounded-t-xl">
        <ul className='flex relative'>
          <span className={`bg-rose-600 duration-500 ${active !== undefined ? Menus[active].dis : ''} border-4 border-gray-950 h-16 w-16 absolute -top-5 rounded-full`}>
            <span className='w-3.5 h-3.5 bg-transparent absolute top-4 -left-[16px] rounded-tr-[9px] '></span>
            <span className='w-3.5 h-3.5 bg-transparent absolute top-4 -right-[16px] rounded-tl-[9px] '></span>
          </span>

          {Menus.map((menu, i: number) => (
            <li className=" w-16" key={i} >

              <a className=" flex flex-col text-center pt-6 text-slate-500 " onClick={() => {
                setActive(i)
                if (i == 1) {
                  navigate('/cat')
                }
                if (i == 0) {
                  navigate('/')
                }
                if (i == 2) {
                  navigate('/ana')
                }
                if (i == 3) {
                  navigate('/add')
                }
                if (i == 4) {
                  navigate('/not')
                }

              }} >
                <span className={`text-xl cursor-pointer flex justify-center  duration-500 ${i === active && "-mt-6 text-white"} `} >

                  {/* <img className="h-[20px] w-[20px] " src={require(`../img/${menu.icon}`)} style={{ position: 'relative', zIndex: 1 }} alt="" /> */}
                  {i === 0 ?
                    <FaHome style={{ position: 'relative', zIndex: 1 }} />
                    : ''
                  }
                  {i === 1 ?
                    <FaChartPie style={{ position: 'relative', zIndex: 1 }} />
                    : ''
                  }

                  {i === 2 ?
                    <FaChartBar style={{ position: 'relative', zIndex: 1 }} />
                    : ''
                  }

                  {i === 3 ?
                    <FaMoneyBill style={{ position: 'relative', zIndex: 1 }} />
                    : ''
                  }

                  {i === 4 ?
                    <FaEnvelope style={{ position: 'relative', zIndex: 1 }} />
                    : ''
                  }
                </span>
                <span className={`${active === i
                  ? "translate-y-4 duration-700 opacity-100"
                  : "opacity-0 translate-y-10"
                  }`}>{menu.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </h1>

    </div>
  );
}

export default Navigator;