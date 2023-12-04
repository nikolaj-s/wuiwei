
import React from 'react';

import "./TextWall.css";

export const TextWall = ({title, text = "Place Holder"}) => {
    
    const [readMore, toggleReadMore] = React.useState(false);
    
    return (
        <div className='text-wall'>
            <h1>{title}</h1>
            <div style={{maxHeight: readMore ? '100%' : '500px', overflow: readMore ? 'visible' : 'hidden'}} className='text-wall-inner-container'>
                <p>
                Your home, like your body is your temple, living space and work space  is sacred space, so why not honour your space with quality plasters? The use of plaster is  designed  to enhance the good feeling of your environment,  interiors should nourish the senses, calm the spirit, and soothe the soul while  being  gentle on the eyes. </p><p>
    My aim is  to encourage and educate on the use of plaster in the home, for its natural beauty and health affects, working with and having lime or clay plasters in your home for a finish delivers a satisfying long list of benefits for you and your home. </p><p>
    Its longevity of beauty and timeless character, that's ever changing in the  subtle changes of light will bring much joy to your home and occupants.
    I have a great deal of experience in transforming existing spaces, and bringing them into a finished  form.
    There are so many uses for plaster for finishes, from Moroccan Tadelakt, the richest form of lime plaster traditionally used in wet areas, and floors. </p><p>
    A large variety of Italian Marmarino plasters of various textures to achieve, from rustic to polished Venetian.
    Decorative, soft or rustic, Clay plaster, with endless colour pallette, from elegant Japanese contemporary to Rustic Mediterranean, there are plasters for any decor style. 
    The taoist philosophy emphasizes the practicing of utilizing and transforming energy to serve longevity and health.
    </p><p>
    I choose to bring the principle of Wu-wei,  into my work, and into your space, in my experience, it requires an art of harmonizing elements, and having them reflect the energy of effortless natural expression. Much like nature, the beauty comes from a natural way.
    I want to offer this beautiful craft  for your home or work space here on the island.
    </p><p>
    Im available to discuss any ideas or inquiries you have to enhancing your interior space, with the modern engineered natural material products available and designed to enhance interior walls, ceilings and floors.
    I have a wide variety of choices in material products of Lime marble based to softer clay and hard wearing clay plasters.
    Plasters for wet areas, showers, kitchens, bathrooms.
    </p><p>
    Endless possibilities to bring in smooth seamless surfaces, where tile may usually be used, plasters to cover large surface areas instead of paint, natural pigments and colours to match your taste.
    Specializing in plasters and preparing substrates to accommodate, whether that be challenging framing, drywall, water proofing, membranes, reinforcement, whatever needs are required  to create your desired finish, I can bring it into reality. 
    </p><p>
    Feel free to inquire about any project large or small, lets keep making Salt Spring Beautiful.
    Natural beautiful interiors


                </p>
            </div>
            {!readMore ? 
            <h3 onClick={() => {toggleReadMore(true)}}>Read More</h3>
        : null}
        </div>
    )
}
