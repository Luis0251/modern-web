import PropTypes from 'prop-types';
import './feature.css'

export const Feature = ({content}) => {
  const {title,text} = content
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container_feature-text">
       <p>{text}</p> 
      </div>
    </div>
  )
}
Feature.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
