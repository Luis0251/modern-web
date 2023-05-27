
import PropTypes from 'prop-types';
import './article.css'
export const Article = ({imgUrl ,date, text, blogInfo }) => {
  const articuleImgUrl = blogInfo ? blogInfo.imgUrl : imgUrl;
  const articleDate = blogInfo ? blogInfo.date : date;
  const articleText = blogInfo ? blogInfo.text : text;
  return (
    <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={articuleImgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{articleDate}</p>
        <h3>{articleText}</h3>
      </div>
      <p>Read Full Article</p>
    </div>
  </div>
  )
}

Article.propTypes = {
  imgUrl : PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  blogInfo:PropTypes.shape({
  imgUrl : PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
  }),
}