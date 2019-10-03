import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
  render(){
    const { user } = this.props;

    if(!user){
      return null;
    }

    return(
      <div className="header">
        Author name: {user.name}
      </div>
    );
  }
};

// pre-calculations of data inside mapStateToProps!!!
// Can be defined in a separate file
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId)
  }
};

export default connect(mapStateToProps)(UserHeader);
