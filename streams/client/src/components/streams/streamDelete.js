import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {fetchStream, deleteStream} from '../../actions';

import {Link} from 'react-router-dom';
import Modal from '../modal';
import Button from '../button';
import history from '../../history';

class StreamDelete extends React.Component {

  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions(){
    return(
      <Fragment>
        <Button
          text="Delete"
          className="ui button negative"
          onClick={() => this.props.deleteStream(this.props.match.params.id)}/>
        <Link to="/" className="ui button">Cancel</Link>
      </Fragment>
    );
  };

  renderContent(){
    if(!this.props.stream){
      return 'Are you sure you want to delete this stream?';
    }else{
      return `Are you sure you want to delete ${this.props.stream.title}?`;
    }
  };

  render(){
    return(
      <Modal
        title="Delete stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={ () => history.push('/') }
      />
    );
  };

};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
