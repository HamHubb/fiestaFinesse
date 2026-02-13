import './Home.css';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);
  
  const reviews = [
    {
      highlight: "Emily was amazing!",
      text: "The number one compliment we got for our wedding was how organized and well run everything...",
      link: "https://www.zola.com/wedding-vendors/wedding-planners/fiestas-by-emily",
      author: "Bryan & Xochitl - 8/27/2024"
    },
    {
      highlight: "Fantastic Coordinator!",
      text: "We hired her as our \"day of\" coordintor, but she did so much more, and we are extremely grateful...",
      link: "https://www.google.com/maps/reviews/@33.786671,-118.2990476,589m/data=!3m2!1e3!4b1!4m6!14m5!1m4!2m3!1sChZDSUhNMG9nS0VJQ0FnSUMxazZlZVZ3EAE!2m1!1s0x0:0x5c986b002c2c84cd?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
      author: "Michelle & Vincent - 1/2/2024"
    },
    {
      highlight: "You won't regret it!",
      text: "Emily was our wedding coordinator for our 400 person Pakistani wedding and her and...",
      link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChZDSUhNMG9nS0VJQ0FnSUNweE1UaUJBEAE!2m1!1s0x0:0x5c986b002c2c84cd!3m1!1s2@1:CIHM0ogKEICAgICpxMTiBA%7CCgwI16CQpgYQgNObxgM%7C?hl=en-US&kgs=11d8d7ddae3660b4",
      author: "Tooba & Elyas - 7/28/2023"
    },
    {
      highlight: "Recommend her 100%",
      text: "I will never regret getting her as My coordinator she is an amazing communicator,...",
      link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSUR1MTZLYnNRRRAB!2m1!1s0x0:0x5c986b002c2c84cd!3m1!1s2@1:CIHM0ogKEICAgIDu16KbsQE%7CCgwI5ei-mAYQ4OHvnQE%7C?hl=en-US&kgs=a29a318598284737",
      author: "Sonia & Michael - 8/31/2022"
    },
    {
      highlight: "Did such an amazing job!",
      text: "There were things that I did not think about while planning and Emily thought about...",
      link: "https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sChdDSUhNMG9nS0VJQ0FnSURlX2Eyay1BRRAB!2m1!1s0x0:0x5c986b002c2c84cd!3m1!1s2@1:CIHM0ogKEICAgIDe_a2k-AE%7CCgwIveO2mgYQoJL-hgM%7C?hl=en-US&kgs=470b0a27c6bf20f1",
      author: "Eric & Mariella - 10/17/2022"
    },
    {
      highlight: "Our wedding was literally perfect!",
      text: "Emily is an absolute dream wedding coordinator to have! We would recommend...",
      link: "https://maps.app.goo.gl/29bfg5Cq7f9zb2Ke6",
      author: "Jeanette & Christian - 12/6/2024"
    },
    {
      highlight: "I will definitely be contacting Emily!",
      text: "Emily brought my wedding decor vision to life! She worked within our budget...",
      link: "https://maps.app.goo.gl/D1n4Fpmh2cv7fDeE6",
      author: "Sarahi Cedillo - 2023"
    },
    {
      highlight: "100% you will not regret it!",
      text: "I was planning my wedding in a very short period of time. Then Emily...",
      link: "https://maps.app.goo.gl/8mt3DS3jNGhfAiDEA",
      author: "S. Reyes - 2022"
    },
    {
      highlight: "Definitely recommend Fiesta Finesse!",
      text: "I loved Emily and her services Fiesta Finesse, being pregnant and having everything be taking care of was so great...",
      link: "https://maps.app.goo.gl/k4aBrP4iGZUdBsur9",
      author: "Ivonne Cruz - 2022"
    },
    {
      highlight: "Thank you Emily for everything!",
      text: "I hired Emily two weeks before my daughter's 16th birthday with the intention...",
      link: "https://maps.app.goo.gl/ELDXwiHPARJccs8X6",
      author: "Mayra Flores - 2022"
    }
  ];

  const nextDesktop = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= reviews.length ? 0 : prevIndex + 3
    );
  }, [reviews.length]);

  const prevDesktop = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(0, reviews.length - 3) : prevIndex - 3
    );
  }, [reviews.length]);

  const nextMobile = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= reviews.length ? 0 : prevIndex + 1
    );
  }, [reviews.length]);

  const prevMobile = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? reviews.length - 1 : prevIndex - 1
    );
  }, [reviews.length]);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    

    if (window.innerWidth <= 768) {
      if (isLeftSwipe) {
        nextMobile();
      }
      if (isRightSwipe) {
        prevMobile();
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (window.innerWidth <= 768) {
          prevMobile();
        } else {
          prevDesktop();
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (window.innerWidth <= 768) {
          nextMobile();
        } else {
          nextDesktop();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextDesktop, nextMobile, prevDesktop, prevMobile]);

  return (
    <div className="home-container">
      <div className="home">
        <div className="home-background">
          <img 
            src="https://i.imgur.com/W0qYHs7.jpeg"
            alt="Wedding Background"
            className="background-image"
          />
        </div>
        <div className="home-content">
          <h1 className="home-heading">
            WEDDING & EVENT COORDINATION
          </h1>
          <h4 className="home-subheading">
            Let us handle the details, so you can enjoy the moment.
          </h4>
        <Link to="/pricing">
          <button className="home-button">
            LEARN MORE
          </button>
        </Link>
        </div>
      </div>
      
      <section className="aboutMe-section">
        <div className="aboutMe-card">
          <h2>ABOUT ME</h2>
          <h3>Creating Memorable Events</h3>
          <p>I am Emily Lopez, owner and lead coordinator of Fiestas by Emily. For the past 6 years, I've honed my event management skills working corporate and nonprofit events. I launched Fiestas by Emily in 2022 to share my expertise with couples like you!</p>
          <p>Wedding day-of coordination is my specialty because I thrive on the excitement and adrenaline of assisting couples during one of the most special days of their lives. My goal is to support my clients so they can spend more time with family and friends during their special celebrations.</p>
          <p>As your coordinator, I'm here to listen, understand, and collaborate with you every step of the way during this last phase of wedding planning.</p>
        </div>
        
        <div className="right-side-space">
          <img 
            src="https://i.imgur.com/wECWQ0K.jpeg"
            alt="Emily Lopez"
            className="aboutMe-image"
          />
        </div>
      </section>
      
      <section className="reviews-section">
        <h1>CLIENT REVIEWS</h1>
        
        <div className="carousel-container desktop-only">
          <button className="carousel-btn prev-btn" onClick={prevDesktop}>❮</button>
          
          <div 
            className="reviews-grid"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {reviews.slice(currentIndex, currentIndex + 3).map((review, index) => (
              <div className="review-card" key={index}>
                <h2 className="review-highlight">{review.highlight}</h2>
                <p className="review-text">"{review.text}"</p>
                <a className="review-link" href={review.link} target="_blank" rel="noopener noreferrer">
                  Read full review here
                </a>
                <p className="review-author">{review.author}</p>
              </div>
            ))}
          </div>
          
          <button className="carousel-btn next-btn" onClick={nextDesktop}>❯</button>
        </div>

        <div className="mobile-carousel mobile-only">
          <button className="mobile-carousel-btn prev-btn" onClick={prevMobile}>❮</button>
          
          <div className="mobile-carousel-container">
            <div 
              className="mobile-review-card"
              ref={carouselRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="review-card">
                <h2 className="review-highlight">{reviews[currentIndex].highlight}</h2>
                <p className="review-text">"{reviews[currentIndex].text}"</p>
                <a className="review-link" href={reviews[currentIndex].link} target="_blank" rel="noopener noreferrer">
                  Read full review here
                </a>
                <p className="review-author">{reviews[currentIndex].author}</p>
              </div>
            </div>
            
            <div className="mobile-dots">
              {reviews.map((_, index) => (
                <span 
                  key={index}
                  className={`dot ${index === currentIndex ? 'active-dot' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
          
          <button className="mobile-carousel-btn next-btn" onClick={nextMobile}>❯</button>
        </div>
      </section>
      <section className="footer">
        <h2 className="footer-title">Fiestas By Emily</h2>
        <h3>Service Areas: San Fernando Valley, Los Angeles, Burbank, Glendale, Pasadena, Whittier, Fullerton, Long Beach, Simi Valley, Orange County, Santa Clarita, Antelope Valley, Downey, Palmdale, West Hills</h3>
        <p>Feel free to book a consultation!</p>
      <div className="footer-copyright">HAM Designs</div>
      </section>
    </div>
  );
}