import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setFlats } from "../actions";
import Flat from "./flat";

class FlatList extends Component {
  componentWillMount() {
    // Display an action to dispacth
    this.props.setFlats();
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat) => {
          return <Flat key={flat.name} flat={flat} />;
        })}
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setFlats }, dispatch);
}
function mapStateToProps(state) {
  return {
    flats: state.flats,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
