import React from 'react';
import Header from '../header/Header';

const FormLayout = props => {
  const { children } = props;
  return (
    <>
      <div className="main-Wrapper">
        <Header />
        <div className="news-widget">
          <div className="news-form-wrapper">{children}</div>
        </div>
      </div>
    </>
  );
};
export default FormLayout;
