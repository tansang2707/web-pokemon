import Slider from 'react-slick'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const Carousel = () => {
  return (
    <Slider {...settings} className="wrap-slider">
      <div className="video-item">
        <iframe src='https://www.youtube.com/embed/D0zYJ1RQ-fs'
          frameBorder='0'
          allowFullScreen
        />
      </div>
      <div className="video-item">
        <iframe src='https://www.youtube.com/embed/1roy4o4tqQM'
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />
      </div>
      <div className="video-item">
        <iframe src='https://www.youtube.com/embed/bILE5BEyhdo'
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />
      </div>
      <div className="video-item">
        <iframe src='https://www.youtube.com/embed/uBYORdr_TY8'
          frameBorder='0'
          allow='autoplay; encrypted-media'
          allowFullScreen
          title='video'
        />
      </div>
    </Slider>
  )
}

export default Carousel