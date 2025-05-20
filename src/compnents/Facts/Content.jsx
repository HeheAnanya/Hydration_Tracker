import React from 'react'
import './Content.css'
import Card from './Card'

const Content = () => {
    const list=[
        {source:"https://www.nutrition.org.uk/media/uonbhr1g/water-in-glass.jpg?width=1600&height=900&rnd=133602284844030000&format=webp ",
        alternate:"Water",
        text_p:"Boosts brain function, reduces fatigue"

        },
        {source:"https://www.nutrition.org.uk/media/qrdpzqmn/fruit-juice.jpg?width=1600&height=900&rnd=133602284847170000&format=webp",
        alternate:"Fruit juices & smoothies",
        text_p:"Rich in vitamins, natural sugar energy"

        },
        {source:"https://www.nutrition.org.uk/media/czbmvhat/glass-of-milk.jpg?width=1600&height=900&rnd=133602284847030000&format=webp",
        alternate:"Milk",
        text_p:"Calcium-rich, strong bones"
        },
        {source:"https://www.nutrition.org.uk/media/oewn3vos/plant-based-milk.jpg?width=1600&height=900&rnd=133602284847100000&format=webp",
        alternate:"Plant-based milk",
        text_p:"Dairy-free, heart-healthy"
        },

    ]
    return (
        <div className='outer'>

        <div className='content1'>
            <div className='content2'>
                    <h1>Why is hydration important?</h1>
                    <p>Water is essential for life! Water makes up, on average, 60% of bodyweight in men and 50-55% in women (because women have more body fat) and plays many different roles in the body including removing waste products in urine and acting as a lubricant and shock absorber in joints</p>
                    <p>&nbsp;</p>      <p>&nbsp;</p>       <p>&nbsp;</p>
                    <h1>What happens if I become dehydrated?</h1>
                    <p>If we do not drink enough fluid, over time we become dehydrated. Studies have shown that even low levels of dehydration (1-4%) can cause symptoms like headaches and poor concentration.
                    <p>&nbsp;</p>       <p>&nbsp;</p>
                    When we are dehydrated, the kidneys reduce how much water we lose in the urine. This means that the colour of the urine becomes darker, and our urine colour can give us an idea of whether we are well hydrated. If we are drinking enough, our urine should be a straw or pale-yellow colour. If it is darker then we probably need more fluid.
                    <p>&nbsp;</p>       <p>&nbsp;</p>
                    Thirst kicks in when the body is already a little dehydrated, so it’s important to drink when we are thirsty. However, in older adults the thirst response may be weaker and young children may not be able to tell others they are thirsty and so these groups are more at risk of dehydration and need support to drink regularly.</p>
                    <p>&nbsp;</p>      <p>&nbsp;</p>      <p>&nbsp;</p>
                    <h1>How much fluid do we need?</h1>
                    <p>The amount of fluid we need depends on many things including the weather, how much physical activity we do and our age. It’s recommended we drink about 6-8 glasses of fluid per day. If the weather is hot or we are exercising, we need to drink more.
                    <p>&nbsp;</p>      <p>&nbsp;</p>  
                    We can get water from nearly all fluids that we drink, although alcoholic drinks don’t count towards your fluid intake as they can make you urinate more than usual.</p>
                    <p>&nbsp;</p>      <p>&nbsp;</p>      <p>&nbsp;</p>
                    <h1> Improved brain performance</h1>
                    <p>Even mild dehydration—as little as 2% fluid loss—can affect memory, mood, concentration, and reaction time. Adding just a few glasses of water to your daily intake can have a positive effect on cognition, stabilize your emotions, and even combat feelings of anxiety. This is especially important for older adults who are at higher risk for both dehydration and impaired cognitive function.</p>
                    <p>&nbsp;</p>      <p>&nbsp;</p>      <p>&nbsp;</p>
                    <h1> Decreased joint pain</h1>
                    <p>Did you know the cartilage in our joints contains approximately 80% water? Staying hydrated helps your joints stay well-lubricated, which helps reduce friction by creating more of a "cushion" between the bones. Less friction means smoother-moving joints and fewer aches and pains.
                    </p>
                    <p>&nbsp;</p>      <p>&nbsp;</p>      <p>&nbsp;</p>

                    <h1>Kidney stone prevention</h1>
                    <p>Kidney stones are clumps of mineral crystals that form in the urinary tract. If you've ever experienced one, you know how painful they can be. Staying hydrated with plenty of water can help dilute the concentration of minerals in your urinary tract and make stones less likely. Water also helps flush harmful bacteria from your bladder and can aid in preventing urinary tract infections (UTIs).</p>
                    <p>&nbsp;</p>      <p>&nbsp;</p>      <p>&nbsp;</p>
                    <h1> Improved detoxification</h1>
                    <p>Sufficient water intake supports your body’s natural detoxification systems, which remove waste and harmful substances through urination, breathing, perspiration, and bowel movements. Hydrating with plenty of water supports your own powerful, built-in detox processes and can help enhance your overall health.</p>


            </div>
                        <div className='card'>
                {list.map((e)=>{
                    return (
                        <Card source={e.source} alt={e.alternate} head={e.text_h1} par={e.text_p}/>
                    )
                })}

            </div>
        </div>

        </div>
    )
}

export default Content