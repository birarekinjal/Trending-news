import React from 'react';

const Sidebar = props => {
  return (
    <>
      <div className="main-sidebar">
        <ul>
          <li>
            {' '}
            <a href="/"> Country</a>
          </li>
          <li>
            {' '}
            <a href="/news/bbc-news">BBC News</a>
          </li>
          <li>
            <span
              role="div"
              onClick={() => props.history.push('/news/bookmark')}
            >
              BookMarks
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
