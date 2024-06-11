import React, { Component } from "react";

export default class List extends Component {
  render() {
    return (
      <ul className="list-group my-3">
        {this.props.items.map((value, index) => {
          return (
            <React.Fragment key={index}>
              <li className="list-group-item">
                {value}
                <button
                  type="button"
                  className="btn btn-danger w-2 mx-auto btn-sm my-1"
                  style={{ float: "right" }}
                  onClick={() => {
                    // console.log(this.props);
                    this.props.deleteItem(index);
                  }}
                >
                  X
                </button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    );
  }
}
