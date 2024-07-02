import React from 'react';
import '../css/frameInfo.css';
import redArrowIcon from '../icons/redArrowIcon.png';
import greenArrowIcon from '../icons/greenArrowIcon.png';


function FrameInfo({info,icon}) {

  const arrowIcon = info.positiveEvolution === "true" ? greenArrowIcon : redArrowIcon;
  const arrowClass = info.positiveEvolution === "true" ? 'positive-evolution' : 'negative-evolution';
  return (
      <div className="window card">
        <div className="card-header">
          <span>{info.title}</span>
          <img src={icon} alt="User Icon" className="icon" />
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
