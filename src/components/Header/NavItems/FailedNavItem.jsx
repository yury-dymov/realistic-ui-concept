import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import keys from 'lodash/keys';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import Badge from 'react-bootstrap/lib/Badge';
import FaWarning from 'react-icons/lib/fa/exclamation-triangle';
import RequestRow from './helpers/RequestRow';

const propTypes = {
  error: PropTypes.number,
  requests: PropTypes.array,
};

function LoadingNavItem({ error = 0, requests = [] }) {
  if (error === 0) {
    return null;
  }

  const menuItems = requests.map(request => <RequestRow {...request} key={request.timestamp} />);

  return (
    <NavDropdown
      id="failed"
      title={
        <span>
          <FaWarning />
          <Badge style={{ marginLeft: '5px' }} >{error}</Badge>
        </span>
      }
    >
      {menuItems}
    </NavDropdown>
  );
}

LoadingNavItem.propTypes = propTypes;

function mapStateToProps(state) {
  const requests = [];

  keys(state.request.failed).forEach((k) => {
    requests.push({
      description: k,
      type: state.request.failed[k].type,
      id: state.request.failed[k].id,
      status: state.request.failed[k].status,
      timestamp: state.request.failed[k].timestamp,
    });
  });

  requests.sort((a, b) => b.timestamp - a.timestamp);

  return {
    error: (requests || []).filter(r => r.status === 2).length,
    requests: requests.slice(0, 5),
  };
}

export default connect(mapStateToProps)(LoadingNavItem);
