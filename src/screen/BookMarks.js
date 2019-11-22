import React, { Component } from 'react';

export default class BookMarks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkValue: false
    };
  }

  handleOnChange(list, e) {
    this.props.bookMarkOnChange(e.target.checked, list);
    this.setState({
      checkValue: e.target.checked
    });
  }

  render() {
    return (
      <>
        <div className="bookmark">
          <form>
            <div className="row">
              <input
                type="checkbox"
                id="bookmark"
                name="bookMarkInput"
                onChange={this.handleOnChange.bind(this, this.props.list)}
              />
              <label htmlFor="bookmark">
                {this.state.checkValue === true ? (
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
