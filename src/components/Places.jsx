import React,{Component} from 'react'
import img1 from  '../assets/placetostayimages/frame1.png'
import img2 from '../assets/placetostayimages/frame2.png'
import img3 from  '../assets/placetostayimages/frame3.png'
import img4 from '../assets/placetostayimages/frame4.png'
import img5 from  '../assets/placetostayimages/frame5.png'
import img6 from '../assets/placetostayimages/frame6.png'
import img7 from  '../assets/placetostayimages/frame7.png'
import img8 from '../assets/placetostayimages/frame8.png'
import img9 from  '../assets/placetostayimages/frame9.png'
import img10 from '../assets/placetostayimages/frame10.png'
import img11 from  '../assets/placetostayimages/frame11.png'
import img12 from '../assets/placetostayimages/frame12.png'
import img13 from  '../assets/placetostayimages/frame13.png'
import img14 from '../assets/placetostayimages/frame14.png'
import img15 from  '../assets/placetostayimages/frame15.png'
import img16 from '../assets/placetostayimages/frame16.png'
import star from '../assets/homeimages/Star 2.svg'


class Places extends Component{

    constructor(){
        super();
        this.state ={
            images:[
                {
                    img:img1,
                    id:'img1',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img2,
                    id:'img2',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img3,
                    id:'img3',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img4,
                    id:'img4',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img5,
                    id:'img5',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img6,
                    id:'img6',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img7,
                    id:'img7',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img8,
                    id:'img8',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img9,
                    id:'img9',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img10,
                    id:'img10',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img11,
                    id:'img11',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img12,
                    id:'img12',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img13,
                    id:'img13',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img14,
                    id:'img14',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img15,
                    id:'img15',
                    name:'Desert King',
                    price:'1 MBT per night',
                    availability:'available for 2 weeks stay'
                },
                {
                    img:img16,
                    id:'img16',
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
                    <div className="menu">Menu here</div>
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
export default Places