import React, { useState } from 'react';
import { FaPlay, FaBookmark, FaQuoteLeft, FaVideo } from 'react-icons/fa';
import './ArtGallery.css';


const ArtGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'quotes', 'videos'

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Content' },
    { id: 'study', name: 'Study Motivation' },
    { id: 'success', name: 'Success Stories' },
    { id: 'goals', name: 'Goal Achievement' },
    { id: 'career', name: 'Career Guidance' }
  ];

  // Sample quote items
  const quoteItems = [
    {
      id: 1,
      type: 'quote',
      category: 'study',
      title: 'Education Quote',
      content: 'The beautiful thing about learning is that no one can take it away from you.',
      author: 'B.B. King',
      source: '/images/education-quote.jpg'
    },
    {
      id: 2,
      type: 'quote',
      category: 'success',
      title: 'Success Quote',
      content: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
      author: 'Winston Churchill',
      source: '/images/success-quote.jpg'
    },
    {
      id: 3,
      type: 'quote',
      category: 'goals',
      title: 'Goal Setting Quote',
      content: 'Set your goals high, and don\'t stop till you get there.',
      author: 'Bo Jackson',
      source: '/images/goals-quote.jpg'
    },
    {
      id: 4,
      type: 'quote',
      category: 'career',
      title: 'Career Quote',
      content: 'Choose a job you love, and you will never have to work a day in your life.',
      author: 'Confucius',
      source: '/images/career-quote.jpg'
    },
    {
      id: 5,
      type: 'quote',
      category: 'study',
      title: 'Learning Quote',
      content: 'The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.',
      author: 'Brian Herbert',
      source: '/images/learning-quote.jpg'
    },
    {
      id: 6,
      type: 'quote',
      category: 'success',
      title: 'Persistence Quote',
      content: 'Success is the sum of small efforts, repeated day in and day out.',
      author: 'Robert Collier',
      source: '/images/persistence-quote.jpg'
    }
  ];

  // Sample video items
  const videoItems = [
    {
    id: 1,
    type: 'youtube',
    category: 'study',
    title: 'How to Stay Focused While Studying',
    description: 'Learn techniques to maintain concentration during long study sessions.',
    source: 'https://www.youtube.com/embed/3TljhJx2JTY',
    thumbnail: '/images/study-motivation.jpg'
  },
  {
    id: 2,
    type: 'youtube',
    category: 'success',
    title: 'From Failure to Success: Elon Musk Story',
    description: 'The incredible journey of Elon Musk and how he overcame multiple failures.',
    source: 'https://www.youtube.com/embed/znx3sGYx_7k',
    thumbnail: '/images/elon-musk.jpg'
  },
  {
    id: 3,
    type: 'youtube',
    category: 'goals',
    title: 'Setting SMART Goals',
    description: 'Learn how to set Specific, Measurable, Achievable, Relevant, and Time-bound goals.',
    source: 'https://www.youtube.com/embed/eH0ZIkHBOoc',
    thumbnail: '/images/goals-thumb.jpg'
  },
  {
    id: 4,
    type: 'youtube',
    category: 'career',
    title: 'Choosing the Right Career Path',
    description: 'Guidance on selecting a career that aligns with your skills and passions.',
    source: 'https://www.youtube.com/embed/2wqyhFB1XIs',
    thumbnail: '/images/career-guidance.jpg'
  },
  {
    id: 5,
    type: 'youtube',
    category: 'study',
    title: 'Effective Note-Taking Strategies',
    description: 'Improve your study skills with these note-taking methods.',
    source: 'https://www.youtube.com/embed/kTdX-Ua0BAM',
    thumbnail: '/images/note-taking.jpg'
  },
  {
    id: 6,
    type: 'youtube',
    category: 'success',
    title: 'The Power of Persistence',
    description: 'How persistence leads to success in any field.',
    source: 'https://www.youtube.com/embed/y7hRoWFAN7Q',
    thumbnail: '/images/persistence-thumb.jpg'
  }
  ];

  // Filter items based on selected category
  const filteredQuotes = selectedCategory === 'all' 
    ? quoteItems 
    : quoteItems.filter(item => item.category === selectedCategory);

  const filteredVideos = selectedCategory === 'all' 
    ? videoItems 
    : videoItems.filter(item => item.category === selectedCategory);

  return (
    <div className="art-gallery">
      <div className="gallery-header">
        <h1>Motivation Gallery</h1>
        <p>Find inspiration, motivation, and guidance for your personal and academic journey</p>
      </div>

      {/* Category Filters */}
      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Content Type Tabs */}
      <div className="content-tabs">
        <button 
          className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Content
        </button>
        <button 
          className={`tab-btn ${activeTab === 'quotes' ? 'active' : ''}`}
          onClick={() => setActiveTab('quotes')}
        >
          <FaQuoteLeft /> Inspirational Quotes
        </button>
        <button 
          className={`tab-btn ${activeTab === 'videos' ? 'active' : ''}`}
          onClick={() => setActiveTab('videos')}
        >
          <FaVideo /> Motivational Videos
        </button>
      </div>

      {/* Gallery Content */}
      <div className="gallery-content">
        {/* Show quotes only or all content */}
        {(activeTab === 'all' || activeTab === 'quotes') && (
          <div className="quotes-section">
            <h2 className="section-title">
              <FaQuoteLeft /> Inspirational Quotes
            </h2>
            <div className="quotes-grid">
              {filteredQuotes.map(item => (
                <div key={item.id} className="quote-item">
                  <div className="quote-content">
                    <FaQuoteLeft className="quote-icon" />
                    <p className="quote-text">"{item.content}"</p>
                    <p className="quote-author">- {item.author}</p>
                  </div>
                  <div className="quote-actions">
                    <button className="save-btn">
                      <FaBookmark /> Save
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Show videos only or all content */}
        {(activeTab === 'all' || activeTab === 'videos') && (
          <div className="videos-section">
            <h2 className="section-title">
              <FaVideo /> Motivational Videos
            </h2>
            <div className="videos-grid">
              {filteredVideos.map(item => (
                <div key={item.id} className="video-item">
                  <div className="video-thumbnail">
                    {item.type === 'youtube' ? (
                      <iframe
                        src={item.source}
                        title={item.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <video controls poster={item.thumbnail}>
                        <source src={item.source} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    )}
                    
                    <div className="item-overlay">
                      <button className="play-btn">
                        <FaPlay />
                      </button>
                    </div>
                  </div>
                  <div className="video-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="video-actions">
                      <button className="save-btn">
                        <FaBookmark /> Save
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtGallery;