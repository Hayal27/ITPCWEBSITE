import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin, FaTwitter, FaChevronLeft, FaChevronRight, FaInfoCircle, FaUser } from 'react-icons/fa';
import './Board.css';

// Import images
// Note: You'll need to ensure these image files exist in your project
import henokImage from '../../../src/assets/images/henok.jpg';
import moferyat from '../../../src/assets/images/mf.jpg'
import baharu from '../../../src/assets/images/baharu.jpg'
import endalew from '../../../src/assets/images/endalew.jpg'
import merso from '../../../src/assets/images/merso.jpg'
import hirut from '../../../src/assets/images/hirut.jpg'
import getu from '../../../src/assets/images/getu.jpg'
import zeleke from '../../../src/assets/images/zeleke.jpg'







// Enhanced data structure with local image paths
const boardMembers = [
  {
    id: 1,
    name: 'ክብርት ወ/ሮ ሙፈሪሃት ካሚል',
    englishName: 'Muferihat Kamil',
    position: 'የሥራና ክህሎት ሚ/ር እና የኢ.ቴ.ፓ.ኮ ስራ አመራር ቦርድ ሰብሳቢ',
    bio: 'ክብርት ወ/ሮ ሙፈሪሃት ካሚል በኢትዮጵያ የሥራና ክህሎት ሚኒስቴር ሆነው በመስራት ላይ ይገኛሉ። በተጨማሪም የኢንፎርሜሽን ቴክኖሎጂ ፓርክ ኮርፖሬሽን የስራ አመራር ቦርድ ሰብሳቢ ናቸው።',
    imageUrl: '../../../src/assets/images/mf.jpg',
    fallbackImage: moferyat,
    socialLinks: {
      linkedin: '#',
      twitter: 'https://x.com/muferihata',
    },
  },

  {
    id: 2,
    name: 'አቶ ሄኖክ አህመድ',
    englishName: 'Henok Ahmed',
    position: 'የኢንፎርሽን ቴክሎጂ ፓርክ ኮርፖሬሽን ዋና ስራ አስፈጸሚ',
    bio: 'አቶ ሄኖክ አህመድ የኢንፎርሽን ቴክሎጂ ፓርክ ኮርፖሬሽን ዋና ስራ አስፈጸሚ ሆነው በመስራት ላይ ይገኛሉ።',
    imageUrl: henokImage, // Using the imported image
    fallbackImage: henokImage,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/henok-ahmed/',
      twitter: 'https://x.com/henawa2000',
    },
  },
  {
    id: 3,
    name: 'ዶ/ር ዘለቀ ተመስገን',
    englishName: 'Zeleke Temesgen',
    position: 'የኢትዮጵያ ኢንቨስትመንት ኮሚሽን ኮሚሽነር እና የኢ.ቴ.ፓ.ኮ ስራ አመራር ቦርድ አባል',
    bio: 'ዶ/ር ዘለቀ ተመስገን በኢትዮጵያ ኢንቨስትመንት ኮሚሽን ኮሚሽነር ሆነው በመስራት ላይ ይገኛሉ። በተጨማሪም የኢንፎርሜሽን ቴክኖሎጂ ፓርክ ኮርፖሬሽን የስራ አመራር ቦርድ አባል ናቸው።',
    imageUrl: '../../../src/assets/images/zeleke.jpg',
    fallbackImage: zeleke,
    socialLinks: {
      linkedin: '#',
    },
  },
  {
    id: 4,
    name: 'ኢንጂነር ጌቱ ገረመው',
    englishName: 'Getu Geremew',
    position: 'የኢትዮጵያ ኤሌክትሪክ አገልግሎት ዋና ስራ አስፈጻሚ እና የኢ.ቴ.ፓ.ኮ ስራ አመራር ቦርድ አባል',
    bio: 'ኢንጂነር ጌቱ ገረመው በኢትዮጵያ ኤሌክትሪክ አገልግሎት ዋና ስራ አስፈጻሚ ሆነው በመስራት ላይ ይገኛሉ። በተጨማሪም የኢንፎርሜሽን ቴክኖሎጂ ፓርክ ኮርፖሬሽን የስራ አመራር ቦርድ አባል ናቸው።',
    imageUrl: '../../../src/assets/images/getu.jpg',
    fallbackImage: getu,
    socialLinks: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 5,
    name: 'አቶ አያልህ ለማ',
    englishName: 'Ayalew Lema',
    position: 'የኢኖቬሽንና ቴክኖሎጂ ሚ/ር ሕግ ጉዳዮች ስራ አስፈጸሚና የኢ.ቴ.ፓ.ኮ ስራ አመራር ቦርድ አባል',
    bio: 'አቶ አያልህ ለማ በኢኖቬሽንና ቴክኖሎጂ ሚኒስቴር ሕግ ጉዳዮች ስራ አስፈጸሚ ሆነው በመስራት ላይ ይገኛሉ። በተጨማሪም የኢንፎርሜሽን ቴክኖሎጂ ፓርክ ኮርፖሬሽን የስራ አመራር ቦርድ አባል ናቸው።',
    imageUrl: '../../../src/assets/images/ayalew.jpg',
    fallbackImage: henokImage,
    socialLinks: {
      linkedin: '#',
    },
  },
  {
    id: 6,
    name: 'አቶ ባህሩ ዘይኑ',
    englishName: 'Bahru Zeynu',
    position: 'የዲጂታል ትራንስፎርሜሽን ኢትዮጵያ ማህበር ም/ፕሬዚዳንትና የኢ.ቴ.ፓ.ኮ ስራ አመራር ቦርድ አባል',
    bio: 'አቶ ባህሩ ዘይኑ በዲጂታል ትራንስፎርሜሽን ኢትዮጵያ ማህበር ም/ፕሬዚዳንት ሆነው በመስራት ላይ ይገኛሉ። በተጨማሪም የኢንፎርሜሽን ቴክኖሎጂ ፓርክ ኮርፖሬሽን የስራ አመራር ቦርድ አባል ናቸው።',
    imageUrl: '../../../src/assets/images/bahru.jpg',
    fallbackImage: baharu,
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/baheru-zeyenu/',
      twitter: '#',
    },
  },
  {
    id: 7,
    name: 'አቶ ሰለሞን አማረ',
    englishName: 'Solomon Amare',
    position: 'የአዲስ አበባ ከተማ አስተዳደር የኢኖቬሽንና ቴክኖሎጂ ልማት ቢሮ ኃላፊ እና የኢ.ቴ.ፓ.ኮ ስራ አመራር ቦርድ አባል',
    bio: 'አቶ ሰለሞን አማረ በአዲስ አበባ ከተማ አስተዳደር የኢኖቬሽንና ቴክኖሎጂ ልማት ቢሮ ኃላፊ ሆነው በመስራት ላይ ይገኛሉ። በተጨማሪም የኢንፎርሜሽን ቴክኖሎጂ ፓርክ ኮርፖሬሽን የስራ አመራር ቦርድ አባል ናቸው።',
    imageUrl: '../../../src/assets/images/solomon.jpg',
    fallbackImage: henokImage,
    socialLinks: {
      linkedin: '#',
    },
  },
  {
    id: 8,
    name: 'ወ/ሮ ሂሩት መብራቴ',
    englishName: 'Hirut Mebrate',
    position: 'የገቢዎች ሚ/ር ጽ/ቤት ኃላፊ እና የኢ.ቴ.ፓ.ኮ ስራ አመራር ቦርድ አባል',
    bio: 'ወ/ሮ ሂሩት መብራቴ በገቢዎች ሚኒስቴር ጽ/ቤት ኃላፊ ሆነው በመስራት ላይ ይገኛሉ። በተጨማሪም የኢንፎርሜሽን ቴክኖሎጂ ፓርክ ኮርፖሬሽን የስራ አመራር ቦርድ አባል ናቸው።',
    imageUrl: '../../../src/assets/images/hirut.jpg',
    fallbackImage: hirut,
    socialLinks: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 9,
    name: 'አቶ ጌታቸው ነገራ',
    englishName: 'Getachew Negera',
    position: 'የገንዘብ ሚኒስቴር የፊስካል ጉዳዮች ዘርፍ አማካሪ እና የኢ.ቴ.ፓ.ኮ ስራ አመራር ቦርድ አባል',
    bio: 'አቶ ጌታቸው ነገራ በገንዘብ ሚኒስቴር የፊስካል ጉዳዮች ዘርፍ አማካሪ ሆነው በመስራት ላይ ይገኛሉ። በተጨማሪም የኢንፎርሜሽን ቴክኖሎጂ ፓርክ ኮርፖሬሽን የስራ አመራር ቦርድ አባል ናቸው።',
    imageUrl: '../../../src/assets/images/getachew.jpg',
    fallbackImage: henokImage,
    socialLinks: {
      linkedin: '#',
    },
  },
  {
    id: 10,
    name: 'አቶ መርሶ ጎበና',
    englishName: 'Merso Gobena',
    position: 'የኢንፎርሜሽን ቴክኖሎጂ ፓርክ ኮርፖሬሽን ሰራተኞች ተወካይና ስራ አመራር ቦርድ አባል',
    bio: 'አቶ መርሶ ጎበና የኢንፎርሜሽን ቴክኖሎጂ ፓርክ ኮርፖሬሽን ሰራተኞች ተወካይ ሆነው በመስራት ላይ ይገኛሉ። በተጨማሪም የኢንፎርሜሽን ቴክኖሎጂ ፓርክ ኮርፖሬሽን የስራ አመራር ቦርድ አባል ናቸው።',
    imageUrl: '../../../src/assets/images/merso.jpg',
    fallbackImage: merso,
    socialLinks: {
      linkedin: '#',
    },
  },
  {
    id: 11,
    name: 'ክቡር አቶ እንዳለው መኮንን',
    englishName: 'Endalew Mekonnen',
    position: 'የንግድና ቀጣናዊ ትስስር ሚ/ር ዲኤታ እና የኢ.ቴ.ፓ.ኮ ስራ አመራር ቦርድ ም/ሰብሳቢ',
    bio: 'ክቡር አቶ እንዳለው መኮንን በኢትዮጵያ የንግድና ቀጣናዊ ትስስር ሚኒስቴር ዲኤታ ሆነው በመስራት ላይ ይገኛሉ። በተጨማሪም የኢንፎርሜሽን ቴክኖሎጂ ፓርክ ኮርፖሬሽን የስራ አመራር ቦርድ ም/ሰብሳቢ ናቸው።',
    imageUrl: '../../../src/assets/images/endalew.jpg',
    fallbackImage: endalew,
    socialLinks: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    id: 12,
    name: 'አቶ ዮሴፍ ክንፈ',
    englishName: 'Yosef Kinfe',
    position: 'የኢንፎርሜሽን ቴክኖሎጂ ፓርክ ኮርፖሬሽን ስራ አመራር ቦርድ ፀሃፊ',
    bio: 'አቶ ዮሴፍ ክንፈ የኢንፎርሜሽን ቴክኖሎጂ ፓርክ ኮርፖሬሽን ስራ አመራር ቦርድ ፀሃፊ ሆነው በመስራት ላይ ይገኛሉ።',
    imageUrl: '../../../src/assets/images/yosef.jpg',
    fallbackImage: henokImage,
    socialLinks: {
      linkedin: '#',
    },
  },
];

const Board: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemsPerSlide = 4; // Number of items to show per slide
  const totalSlides = Math.ceil(boardMembers.length / itemsPerSlide);

  // Auto-scroll functionality
  useEffect(() => {
    if (!autoScroll) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoScroll, totalSlides]);

  // Update carousel position when currentSlide changes
  useEffect(() => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: currentSlide * slideWidth,
        behavior: 'smooth'
      });
    }
  }, [currentSlide]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handleMemberHover = (index: number) => {
    setActiveIndex(index);
  };

  const handleMemberLeave = () => {
    setActiveIndex(null);
  };

  const handleImageLoad = (memberId: number) => {
    setImagesLoaded(prev => ({ ...prev, [memberId]: true }));
  };

  const handleImageError = (memberId: number, member: typeof boardMembers[0]) => {
    // If primary image fails, try to use the fallback image
    const imgElement = document.getElementById(`member-img-${memberId}`) as HTMLImageElement;
    if (imgElement && member.fallbackImage) {
      imgElement.src = member.fallbackImage;
    } else {
      // If fallback also fails or doesn't exist, mark as error
      setImagesLoaded(prev => ({ ...prev, [memberId]: false }));
    }
  };

  return (
    <div className="board-container">
      <div className="board-header">
        <h2>Ethiopian IT Park Board Members</h2>
        
      </div>

      <div className="carousel-container" 
           onMouseEnter={() => setAutoScroll(false)} 
           onMouseLeave={() => setAutoScroll(true)}>
        <div className="carousel-wrapper" ref={carouselRef}>
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div className="carousel-slide" key={slideIndex}>
              {boardMembers
                .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                .map((member, index) => {
                  const memberIndex = slideIndex * itemsPerSlide + index;
                  return (
                    <div 
                      className={`member-card ${activeIndex === memberIndex ? 'active' : ''}`}
                      key={member.id}
                      onMouseEnter={() => handleMemberHover(memberIndex)}
                      onMouseLeave={handleMemberLeave}
                    >
                      <div className="member-image">
                        {!imagesLoaded[member.id] && (
                          <div className="image-placeholder">
                            <FaUser />
                          </div>
                        )}
                        <img 
                          id={`member-img-${member.id}`}
                          src={member.imageUrl}
                          alt={member.name}
                          onLoad={() => handleImageLoad(member.id)}
                          onError={() => handleImageError(member.id, member)}
                          style={{ display: imagesLoaded[member.id] === false ? 'none' : 'block' }}
                        />
                      </div>
                      <div className="member-info">
                        <h3>{member.name}</h3>
                        <p className="position">{member.position}</p>
                        <div className="member-details">
                          <p className="bio">{member.bio}</p>
                          <div className="social-links">
                            {member.socialLinks.linkedin && (
                              <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin />
                              </a>
                            )}
                            {member.socialLinks.twitter && (
                              <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                                <FaTwitter />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="info-icon">
                        <FaInfoCircle />
                      </div>
                    </div>
                  );
                })}
            </div>
          ))}
        </div>

        <button className="carousel-control prev" onClick={handlePrevSlide}>
          <FaChevronLeft />
        </button>
        <button className="carousel-control next" onClick={handleNextSlide}>
          <FaChevronRight />
        </button>

        <div className="carousel-indicators">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Board;