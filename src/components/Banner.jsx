import React from 'react';


const Banner = ({bannerImage,bannerTitle,className = ""}) => {
    return (
        <div className={`banner ${className}`.trim()}>
            <img src={bannerImage} alt='image banniere'/>
            {!bannerTitle ? '' : <h1>{bannerTitle}</h1>}

        </div>
    );
};

export default Banner;