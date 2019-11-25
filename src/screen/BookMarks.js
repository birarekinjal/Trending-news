import React, { Component } from 'react';

export default class BookMarks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkValue: false
    };
  }

  handleOnChange(list, e) {
    const { bookMarkOnChange } = this.props;
    bookMarkOnChange(e.target.checked, list);
    this.setState({
      checkValue: e.target.checked
    });
  }

  render() {
    const { list } = this.props;
    const { checkValue } = this.state;
    return (
      <>
        <div className="bookmark">
          <form>
            <div className="row">
              <input
                type="checkbox"
                id="bookmark"
                name="bookMarkInput"
                onChange={this.handleOnChange.bind(this, list)}
              />
              <label htmlFor="bookmark">
                {checkValue === true ? (
                  <i className="material-icons"> bookmark </i>
                ) : (
                  <i className="material-icons"> bookmark_border </i>
                )}
              </label>
            </div>
          </form>
        </div>
      </>
    );
  }
}
