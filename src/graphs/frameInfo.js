import React from 'react';
import '../css/frameInfo.css';
import redIncreasingArrowIcon from '../icons/redIncreasingArrowIcon.png';
import redDecreasingArrowIcon from '../icons/redDecreasingArrowIcon.png';
import greenIncreasingArrowIcon from '../icons/greenIncreasingArrowIcon.png';
import greenDecreasingArrowIcon from '../icons/greenDecreasingArrowIcon.png';


function FrameInfo({info,icon}) {
  var arrowClass = '';
  var arrowIcon;

  if (info.positiveEvolution==="true"){
    arrowClass = 'positive-evolution' ;
    arrowIcon = info.growing === "true" ? greenIncreasingArrowIcon : greenDecreasingArrowIcon ;
  }
  else{
    arrowClass = 'negative-evolution' ;
    arrowIcon = info.growing === "true" ? redIncreasingArrowIcon : redDecreasingArrowIcon;
  }
  


  return (
      <div className="window card">
        <div className="card-header">
          <span>{info.title}</span>
          <img src={icon} alt="User Icon" className="icon" />
        </div>
        <div className="card-body">
          <div className="card-number">{info.number}</div>
          <div className="card-footer">
            <img src={arrowIcon} alt="arrowIcon" className={`arrow-icon negative-evolution`} />
            <span className={`percentage ${arrowClass}`}>{info.percentage}</span>
          </div>
        </div>
      </div>

  );
}


export default FrameInfo;
