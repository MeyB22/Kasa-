import React, {useState} from 'react';
import arrowUp from "../asset/images/ArrowUp.svg"

const Collapse = ({collapseTitle, collapseTexte, size = "large"}) => {
    const [collapseOpen, setCollapseOpen] = useState(false)

    const toggle = () => {
        if (!collapseOpen){
            setCollapseOpen(true)
        } else {
            setCollapseOpen(false)
        }
    }

    return (
        <div className={`collapse collapse--${size}`}>
            <button className="collapse-header" onClick={toggle}>
                {collapseTitle}
                <img className={collapseOpen ? "collapse-arrow collapse-arrow--open" : "collapse-arrow"} src={arrowUp} alt="fleche"/>
            </button>
            {collapseOpen && (
                <div className="collapse-content">
                    <div>
                        {collapseTexte}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Collapse;
