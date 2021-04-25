
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
function App() {
    const liveTime = 1621519200000 // 1st JUNE IN EPOCH
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [tokenPriceInBNB, setTokenPriceInBNB] = useState('...')
    const [firstTime, setFirstTime] = useState(true)

    useEffect(()=>{
        let myInterval = setInterval(() => {
                const currentTime = Date.now()

                const countDownTimeInMillis = liveTime - currentTime
                const days = Math.floor(countDownTimeInMillis / (1000 * 60 * 60 * 24));
                const hours = Math.floor((countDownTimeInMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((countDownTimeInMillis % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((countDownTimeInMillis % (1000 * 60)) / 1000);
                setHours(hours)
                setMinutes(minutes)
                setSeconds(seconds)
                setDays(days)
            }, 1000)
            return ()=> {
                clearInterval(myInterval);
              };
        });


    const fetchPrice = async () => {
        try {
             const priceListDataResult = await axios.get('https://api.pancakeswap.com/api/v1/price')
             console.log("priceListDataResult")
             const wbnbPrice = priceListDataResult.data.prices["WBNB"]
             setTokenPriceInBNB( (wbnbPrice / 50).toFixed(4))
             setFirstTime(false)
        } catch (error) {
            console.log(error)
        }
     }
    useEffect(()=>{
        console.log("INISDE")
        let myInterval = setInterval(fetchPrice, 10000)
        if(firstTime) {
            console.log("INISDE FIRT")
            fetchPrice()
        }
        return ()=> {
            clearInterval(myInterval);
        };
        });
    return (
      
    <div className="App">
     <div className="main-div">
            <div>
                <div className="container">
                    <div className="header">
                    <img src='/assets/images/logo.png' alt=""/>
                    </div>
                    <div className="btn-div-upper">
                        <div  className="deposit-btn-div-upper">
                            <p>
                               unlock wallet
                            </p>
                            <img className="svgImageClass" src='/assets/images/button.svg' alt=""/>
                        </div>
                    </div>
                </div>

                <div className="horse-txt-div">
                    <div className="horse-txt-abs-div">
                        <img className="horse-img" src='/assets/images/horseman.png' alt=""/>
                    </div>
                </div>

                <div className="para-div">
                    <div className="lefty">
                       <p className="pp-txt">
                           participant: <span>
                            public
                           </span>
                       </p>
                       <p className="oneBnbTxt">
                           fixed swap ratio <span>
                               <span className="noGOTFont">
                                    : 1
                               </span>
                               BNB = 
                           </span>
                           <span>
                               <span className="noGOTFont">
                                    50
                               </span>GOD
                           </span>
                       </p>

                       <div className='posRel'>
                           <p className="priceTxt left-32">
                                price
                                <span className="noGOTFont">
                                    :
                                </span>
                                <br/>
                                <span className="noGOTFont">
                                    {tokenPriceInBNB}
                                </span>$
                            </p>
                        
                            <p className="priceTxt ryt-abs-wallet-txt ">
                                maximum / wallet
                                <span className="noGOTFont">
                                    :
                                </span>
                                <br/>
                                <span className="noGOTFont">
                                    20 BNB 
                                </span>
                            </p>
                       </div>

                       <div>
                        <p className="priceTxt bottom-txt">
                            auction progress
                            <span className="noGOTFont">
                                :
                            </span>
                            <span className="noGOTFont">
                                0 / 200 BNB 
                            </span>
                        </p>
                       </div>
                        <img  src='/assets/images/separator.png' alt=""/>
                    </div>
                    <div className="righty">
                        <p className="pp-txt">
                            join the presale
                        </p>

                        <p className="oneBnbTxt">
                            <span className="noGOTFont">
                            {days}
                           </span>
                           days <span className='marRytTimer'>
                        
                           </span>
                           <span className="noGOTFont">
                           {hours}
                         </span>
                         hours<span className='marRytTimer'>

</span>
                         <span className="noGOTFont">
                         {minutes}
                         </span>
                         minutes<span className='marRytTimer'>

</span>
                         <span className="noGOTFont">
                         {seconds}
                         </span>
                         seconds
                        </p>


                        <div  className='posRel'>
                            <p className="priceTxt left-3">
                                 your bid amount
                                 
                            </p>
                         
                             <p className="priceTxt ryt-abs-wallet-txt ryt0">
                                 balance
                                 <span className="noGOTFont marRyt10">
                                     :
                                 </span>
                                 <span className="noGOTFont">
                                     0 BNB 
                                 </span>
                             </p>
                             <p className="priceTxt ryt-div-ryt-txt">
                                bid amount
                             </p>
                        </div>

                        <div  className="deposit-btn-div">
                            <p>
                                deposit now
                            </p>
                            <img className="svgImageClass" src='/assets/images/button.svg' alt=""/>
                         </div>

                        <img className='saperatorImg' src='/assets/images/separator.png' alt=""/>
                    </div>
                </div>

                <div className="footer">
                    <ul>
                        <li>
                            <img  src='/assets/images/twitter_icon.png' alt=""/>
                        </li>
                        <li>
                            <img className="discord-img" src='/assets/images/discord.jpg' alt=""/>
                        </li>
                        <li>
                            <img  src='/assets/images/telegram_icon.png' alt=""/>
                        </li>
                        <li>
                            <img  src='/assets/images/marketplace_icon.png' alt=""/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
  );
}

export default App;
