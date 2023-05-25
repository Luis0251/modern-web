import PropTypes from 'prop-types';
import './feature.css'

export const Feature = ({title,text, content}) => {
  const featureTitle = content ? content.title : title;
  const featureText = content ? content.text : text;
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{featureTitle}</h1>
      </div>
      <div className="gpt3__features-container_feature-text">
       <p>{featureText}</p> 
      </div>
    </div>
  )
}
Feature.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};
