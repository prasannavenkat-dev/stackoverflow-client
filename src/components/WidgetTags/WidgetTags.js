import React from 'react';
import './WidgetTags.css';

const WidgetTags = () => {
  const tags = ['Javascript', 'Java', 'ReactJs', 'MongoDB', 'Express', 'NodeJs', 'HTML', 'CSS', 'MaterialUI'];
  return (
    <div className="widget-tag-container">
      <div id="widget-tag-header">
        <h2>Watched Tags</h2>
      </div>

      <div id="widget-tags">
        {tags.map((tag,id) => {
          return <span className="tag" key={`${id}_watched_tag`}>{tag}</span>;
        })}
      </div>
    </div>
  );
};

export default WidgetTags;
