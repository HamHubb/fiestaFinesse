import React, { useState, useRef } from 'react';

const couplesData = [
  {
    id: 'michelle-vincent',
    title: "Michelle & Vincent's Wedding",
    photographer: 'One & Only Productions',
    images: [
      'https://i.imgur.com/yXohNY3.jpeg',
      'https://i.imgur.com/yrWiu0u.jpeg',
      'https://i.imgur.com/GgHdDGr.png',
      'https://i.imgur.com/EN4DVrM.png',
      'https://i.imgur.com/PCvDjTf.png',
      'https://i.imgur.com/Top5uYy.png',
      'https://i.imgur.com/yFw57RU.png',
      'https://i.imgur.com/TdAWshH.png',
      'https://i.imgur.com/gxc0UFM.jpeg',
      'https://i.imgur.com/fwKC3RR.png',
      'https://i.imgur.com/Yw4DJG9.png',
      'https://i.imgur.com/wnHS6UW.png',
      'https://i.imgur.com/zyuJp51.png',
      'https://i.imgur.com/oc0rmY5.jpeg'
    ]
  },
  {
    id: 'tooba-elyas',
    title: "Tooba & Elyas' Wedding",
    photographer: 'The Visual Artistry Co.',
    images: [
      'https://i.imgur.com/DQOTepW.jpeg',
      'https://i.imgur.com/JTCTVEK.jpeg',
      'https://i.imgur.com/1xsJ4eN.jpeg',
      'https://i.imgur.com/CwKHvOU.jpeg',
      'https://i.imgur.com/C6Mr4Nr.jpeg',
      'https://i.imgur.com/DIua3mW.jpeg'
    ]
  },
  {
    id: 'mariella-eric',
    title: "Mariella & Eric's Wedding",
    photographer: 'Tolman Media LA',
    images: [
      'https://i.imgur.com/vy0u7zk.jpeg',
      'https://i.imgur.com/zy8Ucy9.jpeg',
      'https://i.imgur.com/FKsGWcx.jpeg',
      'https://i.imgur.com/aOEIH9u.jpeg',
      'https://i.imgur.com/16zDEGm.jpeg',
      'https://i.imgur.com/eg82ocZ.jpeg',
      'https://i.imgur.com/OTRzG1V.jpeg'
    ]
  }
];

const CoupleCarousel = ({ couple }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const imagesPerView = 3;
  const minSwipeDistance = 50;
  const carouselRef = useRef(null);

  const next = () => {
    if (startIndex < couple.images.length - imagesPerView) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

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
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      next();
    }
    if (isRightSwipe) {
      prev();
    }
  };

  return (
    <div style={{ marginBottom: '60px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ 
          display: 'inline', 
          fontSize: '24px', 
          fontWeight: 600,
          marginRight: '15px',
          fontFamily: 'Cormorant Garamond, serif'
        }}>
          {couple.title}
        </h2>
        <span style={{ 
          fontSize: '16px', 
          color: '#207f74',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          fontFamily: 'Cormorant Garamond, serif'
        }}>
          {couple.photographer}
        </span>
      </div>

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '15px',
        width: '100%'
      }}>
        <button 
          onClick={prev}
          disabled={startIndex === 0}
          style={{
            width: '35px',
            height: '35px',
            border: '1px solid #ddd',
            background: 'white',
            borderRadius: '50%',
            fontSize: '20px',
            cursor: startIndex === 0 ? 'not-allowed' : 'pointer',
            opacity: startIndex === 0 ? 0.3 : 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          ❮
        </button>

        <div 
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ 
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            gap: '15px',
            flex: 1,
            overflow: 'hidden',
            cursor: 'grab',
            touchAction: 'pan-y' 
          }}
        >
          {couple.images.slice(startIndex, startIndex + imagesPerView).map((img, index) => (
            <div key={index} style={{ 
              flex: '0 0 auto',
              width: '250px'
            }}>
              <img 
                src={img}
                width="250"
                height="313"
                alt={`${couple.title}`}
                style={{
                  display: 'block',
                  objectFit: 'cover',
                  borderRadius: '4px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                  pointerEvents: 'none' 
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/250x313/f8f8f8/cccccc?text=Wedding';
                }}
              />
            </div>
          ))}
        </div>

        <button 
          onClick={next}
          disabled={startIndex >= couple.images.length - imagesPerView}
          style={{
            width: '35px',
            height: '35px',
            border: '1px solid #ddd',
            background: 'white',
            borderRadius: '50%',
            fontSize: '20px',
            cursor: startIndex >= couple.images.length - imagesPerView ? 'not-allowed' : 'pointer',
            opacity: startIndex >= couple.images.length - imagesPerView ? 0.3 : 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          ❯
        </button>
      </div>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginTop: '20px',
        padding: '0 5px'
      }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          {Array.from({ length: Math.ceil(couple.images.length / imagesPerView) }).map((_, index) => {
            const dotStart = index * imagesPerView;
            const isActive = startIndex >= dotStart && startIndex < dotStart + imagesPerView;
            return (
              <span
                key={index}
                onClick={() => setStartIndex(dotStart)}
                style={{
                  width: isActive ? '24px' : '8px',
                  height: '8px',
                  borderRadius: isActive ? '12px' : '50%',
                  background: isActive ? '#207f74' : '#ccc',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              />
            );
          })}
        </div>
        <div style={{ 
          fontSize: '14px', 
          color: '#666',
          fontFamily: 'Cormorant Garamond, serif',
          letterSpacing: '1px'
        }}>
          {startIndex + 1}-{Math.min(startIndex + imagesPerView, couple.images.length)} of {couple.images.length}
        </div>
      </div>
    </div>
  );
};

export default function OurCouples() {
  return (
    <div style={{ 
      maxWidth: '1000px', 
      margin: '0 auto', 
      padding: '170px 20px 40px 20px', 
      fontFamily: 'Cormorant Garamond, Times New Roman, serif'
    }}>
      <h1 style={{ 
        fontSize: '48px', 
        fontWeight: 600, 
        letterSpacing: '8px',
        color: '#000',
        margin: '0 0 10px 0',
        textTransform: 'uppercase',
        textAlign: 'center'
      }}>
        OUR COUPLES
      </h1>
      <p style={{ 
        fontSize: '20px', 
        color: '#666',
        marginBottom: '60px',
        fontStyle: 'italic',
        textAlign: 'center',
        letterSpacing: '1px'
      }}>
        Take a look at the lovely couples who have worked with us!
      </p>
      
      {couplesData.map((couple) => (
        <CoupleCarousel key={couple.id} couple={couple} />
      ))}
      <section className="footer">
        <h2 className="footer-title">Fiestas By Emily</h2>
        <h3>Service Areas: San Fernando Valley, Los Angeles, Burbank, Glendale, Pasadena, Whittier, Fullerton, Long Beach, Simi Valley, Orange County, Santa Clarita, Antelope Valley, Downey, Palmdale, West Hills</h3>
        <p>Feel free to book a consultation!</p>
      <div className="footer-copyright">HAM Designs</div>
      </section>
    </div>
  );
}