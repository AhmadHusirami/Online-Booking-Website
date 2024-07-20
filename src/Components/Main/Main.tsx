import './Main.scss';
import { HiOutlineLocationMarker, HiOutlineClipboardCheck } from "react-icons/hi";
import img from '../../Assets/img(1).jpg';
import img2 from '../../Assets/img(2).jpg';
import img3 from '../../Assets/img(3).jpg';
import img4 from '../../Assets/img(4).jpg';
import img5 from '../../Assets/img(5).jpg';
import img6 from '../../Assets/img(6).jpg';
import img7 from '../../Assets/img(7).jpg';
import img8 from '../../Assets/img(8).jpg';
import img9 from '../../Assets/img(9).jpg';
import img10 from '../../Assets/img(10).jpg';
import img11 from '../../Assets/img(11).jpg';
import img12 from '../../Assets/img(12).jpg';

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventures.'
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the sun Gate is simply spectacular.'
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place *lavish* and *beauty*. Always interesting to be in this place.'
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available Always welcome.'
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'A city in central Mexico, Guanajuato is known for it`s history of silver mining and colonial architecture. The house in the city are very attractively painted with the most bright colors available. Always welcome.'
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'The vibrant hues of the houses are it`s benchmark and explain the beauty of this place. Also , if you are foodie and love seafood you will be exhilarated with the choice you are about to get here exploring great food!'
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'Angkot wat represents the entire range of khmer art from the 9th to the 5th century. This temple is considered the heart and soul of Cambodia. This place is kownfor it`s Luxurios stays and adventurous activites.'
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'An immense mausoleum of white marble, built-in Agra by Mughal empreor Shan Jahan in memory of his wife Mumtaz, the , monument is breathakingly beatiful. This place is kown fot it`s luxurious stays and adventurous activities.'
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Bali is and Indonesian Island and one of the best holiday destination in the Indonesian archipelago. Bali is kown for it`s volcanic mountains, history, art & culture , food , temples and beautiful sandy beaches.'
  },
  {
    id: 10,
    imgSrc: img10,
    destTitle: 'Urca Rj',
    location: 'Brazil',
    grade: 'CULTURAL RELAX',
    fees: '$1200',
    description: 'Perched on a promontory overlooking Guanabara Bay, affluent Urca is dominated by the iconic hump of Sugarloaf Mountain, whose summit can be reached via climbing trails or cable car.'
  },
  {
    id: 11,
    imgSrc: img11,
    destTitle: 'Cochem',
    location: 'Germany',
    grade: 'CULTURAL RELAX',
    fees: '$750',
    description: 'Cochem is the seat of and the biggest town in the Cochem-Zell district in Rhineland-Palatinate, Germany. With just over 5,000 inhabitants, Cochem falls just behind Kusel, in the Kusel district, as Germany`s second smallest district seat.'
  },
  {
    id: 12,
    imgSrc: img12,
    destTitle: 'Cairo',
    location: 'Egypt',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Cairo, Egypt’s sprawling capital, is set on the Nile River. At its heart is Tahrir Square and the vast Egyptian Museum, a trove of antiquities including royal mummies and gilded King Tutankhamun artifacts.'
  },
];

export default function Main() {
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 className="title">Most Visited Destination</h3>
      </div>

      <div className="secContent grid">
        {Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
          return (
            <div key={id} className="singleDestination">
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} className="destinationImage" />
              </div>

              <div className="cardInfo">
                <h4 className='destTitle'>{destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className='icon' />
                  <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className="price"><h5>{fees}</h5></div>
                </div>

                <div className="desc"><p>{description}</p></div>

                <button className='btn flex'>
                  <span>DETAILS</span> <HiOutlineClipboardCheck className='icon' />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
