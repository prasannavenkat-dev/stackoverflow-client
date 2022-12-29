import React from 'react';
import './RightSideBar.css';
import pencil from '../../assets/pencil.svg';
import WidgetTags from '../WidgetTags/WidgetTags';
const RightSideBar = () => {
  return (
    <div className="right-sidebar-container">
      <div className="widget-container">
        <div className="widget">
          <div className="widget-header">The Overflow Blog</div>
          <div className="widget-list">
            <ol>
              <li>
                <img className="pencil-icon" src={pencil} alt="note" />
                <span>Continuous delivery, meet continuous security</span>
              </li>
              <li>
                <img className="pencil-icon" src={pencil} alt="note" />
                <span>Taking stock of crypto's crash</span>
              </li>
            </ol>
          </div>
        </div>

        <div className="widget">
          <div className="widget-header">Featured on Meta</div>
          <div className="widget-list">
            <ol>
              <li>
                <img className="pencil-icon" src={pencil} alt="note" />
                <span> Inbox improvements are live</span>
              </li>
              <li>
                <img className="pencil-icon" src={pencil} alt="note" />
                <span>Help us identify new roles for community members</span>
              </li>
              <li>
                <img className="pencil-icon" src={pencil} alt="note" />
                <span>Help needed: a call for volunteer reviewers for the Staging Ground beta test</span>
              </li>
              <li>
                <img className="pencil-icon" src={pencil} alt="note" />
                <span>2022 Community Moderator Election Results</span>
              </li>
            </ol>
          </div>
        </div>

        <div className="widget">
          <div className="widget-header">Hot Meta Posts</div>
          <div className="widget-list">
            <ol>
              <li>
                <img style={{}} className="pencil-icon" src={pencil} alt="note" />
                <span>Users using other people's Twitter / GitHub on their profile</span>
              </li>
              <li>
                <img className="pencil-icon" src={pencil} alt="note" />
                <span>Why was my flag on a link-only answer declined?</span>
              </li>
            </ol>
          </div>
        </div>
      </div>

      <WidgetTags />
    </div>
  );
};

export default RightSideBar;
