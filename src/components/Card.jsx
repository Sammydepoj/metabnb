import React,{Component} from 'react'
//eslint-disable-next-line
import cardstyle from './styles/card.style.css' 
import frame1 from '../assets/homeimages/Frame1.png'
import frame2 from '../assets/homeimages/Frame2.png'
import frame3 from '../assets/homeimages/Frame3.png'
import frame4 from '../assets/homeimages/Frame4.png'
import frame5 from '../assets/homeimages/Frame5.png'
import frame6 from '../assets/homeimages/Frame6.png'
import frame7 from '../assets/homeimages/Frame7.png'
import frame8 from '../assets/homeimages/Frame8.png'
import star from '../assets/homeimages/Star 2.svg'

class Card extends Component{

    constructor(){
        super();
        this.state ={
            images:[
                {
                    img:frame1,
                    id:'img1',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:frame2,
                    id:'img2',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:frame3,
                    id:'img3',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:frame4,
                    id:'img4',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:frame5,
                    id:'img5',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:frame6,
                    id:'img6',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:frame7,
                    id:'img7',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:frame8,
                    id:'img8',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                }
            ]
        };
    }
    render(){
        return (
                <div>
                    <h2>Inspiration for your next adventure</h2> 
                    <div className='cardlist'>               
                        {
                            this.state.images.map(showimg=> 
                        <div className='card' key={showimg.id}>   
                            <div className="cardimg">
                                <img src={showimg.img}  alt='Homes' className='houseimage'/>
                            </div>
                            <div className="cardtext">
                                <p><span className='houseName'>{showimg.name}</span><span className='housePrice'>{showimg.price}</span></p>

                                <p><span className='distance'>2345km away</span><span className='availability'>{showimg.availability}</span></p>
                                <div className="rating">
                                    <img src={star} alt='star rating' key='star1'/>
                                    <img src={star} alt='star rating' key='star1'/>
                                    <img src={star} alt='star rating' key='star1'/>
                                    <img src={star} alt='star rating' key='star1'/>
                                    <img src={star} alt='star rating' key='star1'/>
                                </div>
                            </div>
                        </div>
                            
                            )
                        }    
                
                    </div>
                </div>
          );
        
    }
}
export default Card


// const starsEl = document.querySelectorAll(".fa-star");

// starsEl.forEach (star =>{
//     // console.log("star clicked");

//     star.addEventListener('click', function handleClick(event) {
//         console.log("star clicked",event);

//         star.setAttribute('style', 'background-color:blue;');
//     });
// });

// starsEl.forEach((starsEl, index)=>{
//     starsEl.addEventListener("click", ()=>{ updateRating(index); })
// })

// function updateRating(index){
//     starsEl.forEach((starsEl, indx)=>{
//         if(indx < index + 1){
//             starsEl.classList.add("active")
//         }else{
//             starsEl.classList.remove("active")
//         }
//     });
// }
