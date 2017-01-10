import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import keys from 'lodash/keys';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import Badge from 'react-bootstrap/lib/Badge';
import FaSpin from 'react-icons/lib/fa/spinner';
import RequestRow from './helpers/RequestRow';

const propTypes = {
  active: PropTypes.number,
  requests: PropTypes.array,
};

function LoadingNavItem({ active = 0, requests = [] }) {
  if (active === 0 && requests.length === 0) {
    return null;
  }

  const menuItems = requests.map(request => <RequestRow {...request} key={request.timestamp} />);

  return (
    <NavDropdown
      id="loading"
      title={
        <span>
          <FaSpin className={classnames('faa-spin', active > 0 ? 'animated' : null)} />
          {active > 0 && <Badge style={{ marginLeft: '5px' }} >{active}</Badge>}
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

  keys(state.request.processing).forEach((k) => {
    requests.push({
      description: k,
      type: state.request.processing[k].type,
      id: state.request.processing[k].id,
      status: state.request.processing[k].status,
      timestamp: state.request.processing[k].timestamp,
    });
  });

  requests.sort((a, b) => b.timestamp - a.timestamp);

  return {
    active: (requests || []).filter(r => r.status === 0).length,
    requests: requests.slice(0, 5),
  };
}

export default connect(mapStateToProps)(LoadingNavItem);
