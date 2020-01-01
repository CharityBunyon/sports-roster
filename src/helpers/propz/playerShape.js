import PropTypes from 'prop-types';

const playerShape = PropTypes.shape({
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequied,
  position: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
});

export default { playerShape };
