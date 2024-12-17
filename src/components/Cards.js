import React, { useState } from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Imagepath1 from './images/img-1.jpg'
import Imagepath2 from './images/img-2.jpg'
import Imagepath3 from './images/img-3.jpg'
import Imagepath4 from './images/img-4.jpg'
import Imagepath5 from './images/img-5.jpg'
import Imagepath6 from './images/img-6.jpg'
import Imagepath7 from './images/img-7.jpg'
import Imagepath8 from './images/img-8.jpg'

function Cards() {
  // State to manage expanded content for each card
  const [showMore, setShowMore] = useState({});

  // Toggle function for each card
  const toggleShowMore = (cardId) => {
    setShowMore((prevState) => ({
      ...prevState,
      [cardId]: !prevState[cardId],
    }));
  };

  return (
    <div className='cards'>
      <h1>Our Product Range</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards_items'>

            {/* Pulses & Grains */}
            <CardItem
            imgpath={Imagepath1}
              text={
                <>
                  <span>Pulses & Grains</span>
                  <ul>
                    <li>Basmati Rice 1121</li>
                    <li>Biryani Rice</li>
                    <li>Brown/black chickpeas</li>
                    <li>Chana Dal</li>
                    <li>Green Peas</li>
                    {showMore[1] && (
                      <>
                        <li>IRGU Rice</li>
                        <li>Maize</li>
                        <li>Massor Dal (Red Lentils)</li>
                        <li>Moong Dal</li>
                        <li>Poha</li>
                        <li>Raw Soyabean</li>
                        <li>Rice</li>
                        <li>Jauhar</li>
                        <li>Toor Dal</li>
                        <li>Bajra</li>
                        <li>Urad Dal</li>
                        <li>Wheat Grain</li>
                      </>
                    )}
                  </ul>
                  <button className="view-all" onClick={() => toggleShowMore(1)}>
                    {showMore[1] ? 'View Less' : 'View All'}
                  </button>
                </>
              }
              alt='Pulses'
              label='Information'
            />

            {/* Spices & Herbs */}
            <CardItem
            imgpath={Imagepath2}
              text={
                <>
                  <span>Spices & Herbs</span>
                  <ul>
                    <li>Ashwagandha dry roots</li>
                    <li>Sofed Musli Extract</li>
                    <li>Cumin seeds</li>
                    <li>Cloves</li>
                    <li>Coriander seeds (Daniya)</li>
                    {showMore[2] && (
                      <>
                        <li>Fennel seeds (Sauf)</li>
                        <li>Green Cardamom</li>
                        <li>Saffron</li>
                        <li>Seedless Tamarind</li>
                        <li>Tamarind</li>
                      </>
                    )}
                  </ul>
                  <button className="view-all" onClick={() => toggleShowMore(2)}>
                    {showMore[2] ? 'View Less' : 'View All'}
                  </button>
                </>
              }
              alt='Spices'
              label='Information'
            />
              {/* Dry fruits and nuts*/}
            <CardItem
              imgpath={Imagepath3}
              text={
                <>
                  <span>Dry Fruits & Nuts</span>
                  <ul>
                    <li>Dried fig</li>
                    <li>Almond Nuts</li>
                    <li>Pistachio</li>
                    <li>Walnuts</li>
                    <li>Whole Cashew Nuts</li>
                    {showMore[3] && (
                      <>
                        <li>Yellow Riasin</li>
                        <li>Apricots</li>
                      </>
                    )}
                  </ul>
                  <button className="view-all" onClick={() => toggleShowMore(3)}>
                    {showMore[3] ? 'View Less' : 'View All'}
                  </button>
                </>
              }
              alt='Pulses'
              label='Information'
            />
            
           {/*Vegetables */}
         <CardItem
          imgpath= {Imagepath4}
              text={
                <>
                  <span>Vegetables</span>
                  <ul>
                    <li>Bitter gourd</li>
                    <li>Bottle gourd</li>
                    <li>cabbage</li>
                    <li>duster Bean</li>
                    <li>Elephanet yam</li>
                    {showMore[4] && (
                      <>
                        <li>Fresh cauliflower</li>
                        <li>Fresh drumstick</li>
                        <li>Fresh garlic</li>
                        <li>Fresh Onion</li>
                        <li>fresh pointed gourd</li>
                        <li>Fresh potato</li>
                        <li>Fresh lemon</li>
                        <li>Ginger</li>
                        <li>Okra</li>
                        <li>Ridge ground</li>
                        <li>Spine ground</li>
                        <li>Sweet potato</li>
                      </>
                    )}
                  </ul>
                  <button className="view-all" onClick={() => toggleShowMore(4)}>
                    {showMore[4] ? 'View Less' : 'View All'}
                  </button>
                </>
              }
              alt='Pulses'
              label='Information'
            />
            {/*Flours */}
<CardItem
imgpath={Imagepath5}
              text={
                <>
                  <span>Flours</span>
                  <ul>
                  <li>Semolina flour</li>
<li>Rice flour</li>
<li>Whole wheat flour/Atta</li>
<li>Refined wheat flour/Maida</li>
<li>Multigrain flour</li>
                    {showMore[5] && (
                      <>
                       <li>Corn flour</li> 
                      <li>Pearl millet flour</li>
                      </>
                    )}
                  </ul>
                  <button className="view-all" onClick={() => toggleShowMore(5)}>
                    {showMore[5] ? 'View Less' : 'View All'}
                  </button>
                </>
              }
              alt='Pulses'
              label='Information'
            />
            {/*Roasted seeds */}
<CardItem
imgpath={Imagepath6}
              text={
                <>
                  <span>Roasted seeds</span>
                  <ul>
                  <li>Super Roasted seeds</li>
                  <li>Flax seeds Roasted</li>
                  <li>Natural Roasted Pumpkin seeds</li>
                  <li>Roasted Sunflower Seeds</li>
                  <li>Chia Seeds</li>
                  </ul>
                  <button className="view-all" onClick={() => toggleShowMore(6)}>
                    {showMore[6] ? 'View Less' : 'View All'}
                  </button>
                </>
              }
              alt='Pulses'
              label='Information'
            />
            {/*Spray Dried powder */}
<CardItem
imgpath={Imagepath7}
              text={
                <>
                  <span>Spray Dried Powder</span>
                  <ul>
                  <li>Dried Tomato Powder</li>
<li>Dried Banana Powder</li>
<li>Dried Mango Powder</li>
<li>Dried Onion Powder</li>
<li>Dried Garlic Powder</li>

                    {showMore[7] && (
                      <>
                       <li>Dried Ginger Powder</li>
                      </>
                    )}
                  </ul>
                  <button className="view-all" onClick={() => toggleShowMore(7)}>
                    {showMore[7] ? 'View Less' : 'View All'}
                  </button>
                </>
              }
              alt='Pulses'
              label='Information'
            />
            {/*Fabric and bedsheets*/}
<CardItem
imgpath={Imagepath8}
              text={
                <>
                  <span>Fabric & Bedsheets</span>
                  <ul>
                  <li>210TC Cotton Bed Sheet</li>
<li>240TC Cotton Bed Sheet</li>
<li>300TC Cotton Bed Sheet</li>
<li>400TC Cotton Bed Sheet</li>
<li>600TC Cotton Bed Sheet</li>

                    {showMore[8] && (
                      <>
                       <li>4-Star Hotel Bed Sheet</li>
<li>5-Star Hotel Bed Sheet</li>
                      </>
                    )}
                  </ul>
                  <button className="view-all" onClick={() => toggleShowMore(8)}>
                    {showMore[8] ? 'View Less' : 'View All'}
                  </button>
                </>
              }
              alt='Pulses'
              label='Information'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
