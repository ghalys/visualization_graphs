import React from 'react';
import '../css/frameInfo.css';
import userIcon from '../icons/total_interaction_icon.png'; // Chemin vers votre icône utilisateur
import redArrowIcon from '../icons/redArrowIcon.png'; // Chemin vers votre icône utilisateur
import greenArrowIcon from '../icons/greenArrowIcon.png'; // Chemin vers votre icône utilisateur


function FrameInfo({info}) {

  const arrowIcon = info.positiveEvolution == 0 ? greenArrowIcon : redArrowIcon;
  const arrowClass = info.positiveEvolution == 0 ? 'positive-evolution' : 'negative-evolution';
  return (
      <div className="window card">
        <div className="card-header">
          <span>{info.title}</span>
          <img src={userIcon} alt="User Icon" className="icon" />
        </div>
        <div className="card-body">
          <div className="card-number">{info.number}</div>
          <div className="card-footer">
            <img src={arrowIcon} alt="arrowIcon" className={`arrow-icon ${arrowClass}`} />
            <span className={`percentage ${arrowClass}`}>{info.percentage}</span>
          </div>
        </div>
      </div>

  );
}


export default FrameInfo;
