import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap-button-loader';
import LikeIcon from 'react-icons/lib/fa/heart-o';
import LikedIcon from 'react-icons/lib/fa/heart';
import { testCall } from '../../redux/actions/test';

const propTypes = {
  id: PropTypes.number.isRequired,
  dispatch: PropTypes.func,
  error: PropTypes.string,
  loading: PropTypes.bool,
  value: PropTypes.number,
};

function Like({ id, dispatch, loading, value, error = null }) {
  const icon = value === 1 ? <LikedIcon /> : <LikeIcon />;

  function like() {
    dispatch(testCall(id));
  }

  return (
    <div>
      <Button icon={icon} loading={loading} onClick={like} />
      { error && <span className="error">{error}</span>}
    </div>
  );
}

Like.propTypes = propTypes;

function mapStateToProps({ test }, { id }) {
  const { value, loading, error } = test[id] || {};

  return {
    id,
    error,
    loading: loading || false,
    value: value || 0,
  };
}

export default connect(mapStateToProps)(Like);
