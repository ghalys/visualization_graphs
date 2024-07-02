import React from 'react';
import '../css/frameInfo.css';
import userIcon from '../icons/total_interaction_icon.png'; // Chemin vers votre icône utilisateur
import redArrowIcon from '../icons/redArrowIcon.png'; // Chemin vers votre icône utilisateur


function FrameInfo() {

  return (
      <div className="card">
        <div className="card-header">
          <span>Total Interactions</span>
          <img src={userIcon} alt="User Icon" className="user-icon" />
        </div>
        <div className="card-body">
          <div className="card-number">50</div>
          <div className="card-footer">
            <img src={redArrowIcon} alt="redArrowIcon" className="arrow-icon" />
            <span className="percentage">8.5%</span>
          </div>
        </div>
      </div>

  );
}


export default FrameInfo;
