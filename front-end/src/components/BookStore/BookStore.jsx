import React, { useState } from 'react';
import './BookStore.css';

const BookStore = () => {
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [cart, setCart] = useState([]);

  // Sample book data
  const books = [
    {
      id: 1,
      title: "Computer Science Fundamentals",
      author: "John Doe",
      price: 45.99,
      domain: "computer-science",
      type: "academic",
     image: "/images/cs.webp", // Image in public/images folder
      flipkartUrl: "https://www.flipkart.com/fundamental-theories-computer-science/p/itm0322673c627fa?pid=9788119064397&lid=LSTBOK9788119064397GU9VBH&marketplace=FLIPKART&q=fundamental+theories+of+computer+science&store=bks&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_3_29_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_3_29_na_na_na&fm=search-autosuggest&iid=35e42a4e-a5cc-49c1-bc35-12590b6d8c2d.9788119064397.SEARCH&ppt=pp&ppn=pp&ssid=rwarpn1mow0000001756565495240&qH=a65cee00ba6b7707"
    },
    {
      id: 2,
      title: "Mathematics for Engineers",
      author: "Jane Smith",
      price: 39.99,
      domain: "mathematics",
      type: "academic",
      image: "/images/math.webp",
      flipkartUrl: "https://www.flipkart.com/higher-engineering-mathematics-math/p/itm8041afdd4d5ee?pid=9788193328491&lid=LSTBOK9788193328491UVQDIT&marketplace=FLIPKART&q=higher+engineering+mathematics+bs+grewal&store=bks&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_25_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_25_na_na_ps&fm=search-autosuggest&iid=69f133b9-3ac9-4f01-b124-a5e0515e8369.9788193328491.SEARCH&ppt=sp&ppn=sp&ssid=nwtqnzqrm80000001756565469408&qH=82c66fbab5e94088"
    },
    {
      id: 3,
      title: "Atomic Habits",
      author: "James Clear",
      price: 29.99,
      domain: "self-improvement",
      type: "motivational",
      image: "/images/atomic.webp",
      flipkartUrl: "https://www.flipkart.com/atomic-habits-easy-proven-way-build-good-break-bad/p/itmfcyurt9pfakjh?pid=9781847941831&lid=LSTBOK9781847941831IXYBXE&marketplace=FLIPKART&q=atomic+habits+english&store=bks&srno=s_1_3&otracker=AS_QueryStore_OrganicAutoSuggest_4_13_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_4_13_na_na_ps&fm=search-autosuggest&iid=40059a1a-fe12-4f72-8829-92416ce870a0.9781847941831.SEARCH&ppt=sp&ppn=sp&ssid=df0ya8vy400000001756565378850&qH=a7fc88b4c556f928"
    },
    {
      id: 4,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 24.99,
      domain: "finance",
      type: "knowledge",
      image: "/images/physicology.webp",
      flipkartUrl: "https://www.flipkart.com/psychology-money-rich-dad-poor/p/itme09c5a8642062?pid=RBKHC8RTRRQPF6QQ&lid=LSTRBKHC8RTRRQPF6QQTVVEOW&marketplace=FLIPKART&q=the+psychology+of+money+in+english&store=bks&srno=s_1_6&otracker=AS_QueryStore_OrganicAutoSuggest_3_23_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_3_23_na_na_ps&fm=Search&iid=en_ysMSOqG8S7eUd-p0DQVfNTk7DNqQOny8tsZ7G9JxU0-TyO0uAeJFnv9jCMj-pQNcRk1J-1jPi-14Qtc54PtCAg%3D%3D&ppt=sp&ppn=sp&ssid=suzle3pwcg0000001756565339343&qH=df8e742ee1226864"
    },
    {
      id: 5,
      title: "Data Structures and Algorithms",
      author: "Robert Johnson",
      price: 49.99,
      domain: "computer-science",
      type: "academic",
     image: "/images/dataStructure.webp",
      flipkartUrl: "https://www.flipkart.com/data-structure-algorithms-using-c/p/itm9cdab222ac422?pid=9789366747149&lid=LSTBOK9789366747149JUXK0P&marketplace=FLIPKART&q=Data+Structures+and+Algorithms&store=bks&srno=s_1_13&otracker=AS_Query_HistoryAutoSuggest_2_0&otracker1=AS_Query_HistoryAutoSuggest_2_0&fm=Search&iid=10419a6d-9c8d-4766-8393-18e614fd25ad.9789366747149.SEARCH&ppt=pp&ppn=pp&ssid=cfed56btzk0000001756565298990&qH=e48456c6232b4789"
    },
    {
      id: 6,
      title: "The Power of Now",
      author: "Eckhart Tolle",
      price: 19.99,
      domain: "philosophy",
      type: "motivational",
     image: "/images/Powerofnow.webp",
      flipkartUrl: "https://www.flipkart.com/practicing-power-now/p/itmezunprtktykxa?pid=9788188479443&lid=LSTBOK9788188479443BDIINI&marketplace=FLIPKART&q=the+power+of+now+book&store=bks&srno=s_1_9&otracker=AS_QueryStore_OrganicAutoSuggest_1_16_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_16_na_na_ps&fm=Search&iid=b5da47ec-0ce4-4553-a55c-9f3d576ff357.9788188479443.SEARCH&ppt=sp&ppn=sp&ssid=08x0yx2mtc0000001756564590368&qH=d37ef740512c3f00"
    },
{
      id: 6,
      title: "The Scince Of Psychic Healing",
      author: "Eckhart Tolle",
      price: 199.99,
      domain: "philosophy",
      type: "motivational",
     image: "/images/mind.webp",
      flipkartUrl: "https://www.flipkart.com/mind-its-mysteries-control-scince-psychic-healing-sri-swami-sivananda-yogi-ramacharaka-english-paperback-books-original-self-management-book-combo-pack-gift-set-train-your-thoughts-subconscious-calm-works-reading-beyond-mystery-gut-connection-own-power-cosmos-indian-hinduism-spirituality-prana-yogasana-vidya-mudra-bandh-bandha-vijnana-all-asanas-vigyan-tantra-yoga-nada-kriya-science-pranayama-practice-bhakti-sagar-ashtanga-asan-jnana-sanatan-dharm-hindu-vasistha-vashisht-vashishth-dharma-religion-face-sutras-patanjali-vivekananda-complex-spiritual-unfoldment-self-realization-wisdom-consciousness-nidra-kosha-paramahansa-yogananda-meditation-sadhan-rahasya-sutra-satyananda-saraswati-niranjanananda-telugu-tamil-hindi-kannada-marathi-bengali-breath-khel-props-sharir-my-experiments-basics-overcome-overthinking-find-peace-now-energize-learn-art-mastering-study-techniques-william-walker-atkinson-pranic-death-life-after-punarjanam-punarjanma-punarjanm-five-lectures-reincarnation-advaita-vedanta-philosophy/p/itm3aafff4a30224?pid=9789349574670&lid=LSTBOK9789349574670KNMX3B&marketplace=FLIPKART&q=mind+book+vivekanand&store=bks&srno=s_1_17&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&fm=search-autosuggest&iid=6b73969f-8883-466f-b07e-ab9035bde0cf.9789349574670.SEARCH&ppt=sp&ppn=sp&ssid=ze7qqtzwy80000001756565639842&qH=b545ff9893aaaf0d"
    },
{
      id: 5,
      title: "UPSC New Syllabus & Tips to Crack IAS Preliminary & Mains Exam + Rapid GK 2019",
      author: "Robert Johnson",
      price: 499.99,
      domain: "computer-science",
      type: "academic",
     image: "/images/upsc1.jpg",
      flipkartUrl: "https://www.flipkart.com/upsc-new-syllabus-tips-crack-ias-preliminary-mains-exam-rapid-gk-2019-ebook-3rd/p/itm997fdbffe4576?pid=9789388240130&lid=LSTBOK9789388240130ZLUJZ4&marketplace=FLIPKART&q=upsc+books&store=bks&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_4_na_na_ps&fm=search-autosuggest&iid=dd483753-9d81-4a79-b063-efbaa120b3be.9789388240130.SEARCH&ppt=sp&ppn=sp&ssid=vrcyj6pkgw0000001756565581206&qH=4fb14dc7772f804b"
    },



  ];

  const domains = [
    { id: 'all', name: 'All Domains' },
    { id: 'computer-science', name: 'Computer Science' },
    { id: 'mathematics', name: 'Mathematics' },
    { id: 'finance', name: 'Finance' },
    { id: 'self-improvement', name: 'Self Improvement' },
    { id: 'philosophy', name: 'Philosophy' }
  ];

  const bookTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'academic', name: 'Academic' },
    { id: 'motivational', name: 'Motivational' },
    { id: 'knowledge', name: 'Knowledge' }
  ];

  const [selectedType, setSelectedType] = useState('all');

  const filteredBooks = books.filter(book => {
    const domainMatch = selectedDomain === 'all' || book.domain === selectedDomain;
    const typeMatch = selectedType === 'all' || book.type === selectedType;
    return domainMatch && typeMatch;
  });

  const addToCart = (book) => {
    setCart([...cart, book]);
    alert(`${book.title} added to cart!`);
  };

  return (
    <div className="book-store-container">
      <header className="book-store-header">
        <h1>Student Book Store</h1>
        <p>Find the perfect books for your academic and personal growth</p>
      </header>

      <div className="filters-container">
        <div className="filter-group">
          <label htmlFor="domain-filter">Filter by Domain:</label>
          <select 
            id="domain-filter"
            value={selectedDomain} 
            onChange={(e) => setSelectedDomain(e.target.value)}
          >
            {domains.map(domain => (
              <option key={domain.id} value={domain.id}>{domain.name}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="type-filter">Filter by Type:</label>
          <select 
            id="type-filter"
            value={selectedType} 
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {bookTypes.map(type => (
              <option key={type.id} value={type.id}>{type.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="books-grid">
        {filteredBooks.map(book => (
          <div key={book.id} className="book-card">
            <div className="book-image">
              <img src={book.image} alt={book.title} />
              <div className="book-overlay">
                <button 
                  className="buy-now-btn"
                  onClick={() => window.open(book.flipkartUrl, '_blank')}
                >
                  Buy Now
                </button>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => addToCart(book)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="book-details">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">by {book.author}</p>
              <div className="book-meta">
                <span className="book-domain">{book.domain}</span>
                <span className="book-type">{book.type}</span>
              </div>
              <p className="book-price">${book.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="no-books-message">
          <h2>No books found for the selected filters</h2>
          <p>Try adjusting your domain or type filters</p>
        </div>
      )}
    </div>
  );
};

export default BookStore;