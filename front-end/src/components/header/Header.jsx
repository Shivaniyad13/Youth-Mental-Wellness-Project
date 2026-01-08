import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'

export const Header = () => {
  const navigate = useNavigate()
  const [status, setStatus] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setStatus(true)
    }
  }, [])

  // Search suggestions
  const searchSuggestions = [
    { id: 'neet', name: 'NEET Exam', type: 'exam', path: '/neet' },
    { id: 'jee', name: 'JEE Exam', type: 'exam', path: '/jee' },
    { id: 'ssc', name: 'SSC Exam', type: 'exam', path: '/ssc' },
    { id: 'upsc', name: 'UPSC Exam', type: 'exam', path: '/upsc' },
    { id: 'llb', name: 'LLB Exam', type: 'exam', path: '/llb' },
    { id: 'yoga', name: 'Yoga for Students', type: 'content', path: '/#yoga' },
    { id: 'books', name: 'Book Store', type: 'content', path: '/#book-store' },
    { id: 'todo', name: 'To-Do App', type: 'tool', path: '/#todo-app' },
    { id: 'tribute', name: 'Tribute Page', type: 'content', path: '/tribute-page' },
    { id: 'meditation', name: 'Meditation', type: 'content', path: '/#meditation' },
  ]

  const filteredSuggestions = searchQuery 
    ? searchSuggestions.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.id.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  // ✅ Improved search handling
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      const exactMatch = searchSuggestions.find(
        item => item.id.toLowerCase() === searchQuery.toLowerCase().trim()
      )

      if (exactMatch) {
        navigate(exactMatch.path)
      } else if (filteredSuggestions.length > 0) {
        navigate(filteredSuggestions[0].path) // fallback to first suggestion
      } else {
        navigate(`/?search=${encodeURIComponent(searchQuery)}`)
      }

      setSearchQuery('')
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (path) => {
    navigate(path)
    setSearchQuery('')
    setShowSuggestions(false)
  }

  const addBlog = () => navigate("/add-blog")
  const goToBlogList = () => navigate("/blog-list")
  const logout = () => {
    localStorage.removeItem("authToken")
    navigate("/")
    setStatus(false)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-blog">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="320" height="100" viewBox="0 0 600 100">
            <rect width="100%" height="100%" fill="white" />
            <path d="M50,20 Q70,10 90,20 L90,60 Q70,80 50,60 Z" fill="#4CAF50" stroke="#2e7d32" strokeWidth="2"/>
            <circle cx="70" cy="40" r="5" fill="white" />
            <path d="M60,35 Q65,30 70,35 Q75,40 70,45 Q65,50 60,45 Q55,40 60,35" fill="none" stroke="white" strokeWidth="2"/>
            <text x="120" y="60" fontFamily="Verdana, sans-serif" fontSize="36" fill="#2c3e50">
              <tspan fontWeight="bold">Warrior</tspan> <tspan fill="#4CAF50">Mind</tspan>
            </text>
          </svg>
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"  style={{backgroundColor: "#ff6f00", color: "#fff", fontWeight: "600", boxShadow: "0 4px 12px rgba(255, 111, 0, 0.4)", borderRadius: "6px", padding: "6px 16px", transition: "all 0.3s ease"}}><Link className="nav-link text-white" to="/">Home</Link></li>
            <li className="nav-item"  style={{backgroundColor: "#ff6f00", color: "#fff", fontWeight: "600", boxShadow: "0 4px 12px rgba(255, 111, 0, 0.4)", borderRadius: "6px", padding: "6px 16px", transition: "all 0.3s ease"}}><Link className="nav-link text-white" to="/about-us">About Us</Link></li>
            <li className="nav-item"  style={{backgroundColor: "#ff6f00", color: "#fff", fontWeight: "600", boxShadow: "0 4px 12px rgba(255, 111, 0, 0.4)", borderRadius: "6px", padding: "6px 16px", transition: "all 0.3s ease"}}><Link className="nav-link text-white" to="/contact-us">Contact Us</Link></li>
            <li className="nav-item"  style={{backgroundColor: "#ff6f00", color: "#fff", fontWeight: "600", boxShadow: "0 4px 12px rgba(255, 111, 0, 0.4)", borderRadius: "6px", padding: "6px 16px", transition: "all 0.3s ease"}}><Link className="nav-link text-white" to="/tribute-page">Tribute Page</Link></li>
          </ul>

          {/* Search Bar */}
          <div className="search-container position-relative me-3">
            <form onSubmit={handleSearch} className="d-flex">
              <input
                type="text"
                className="form-control"
                placeholder="Search for NEET, JEE, Yoga, Books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              />
              <button className="btn btn-outline-light ms-2" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
            
            {/* Suggestions */}
            {showSuggestions && filteredSuggestions.length > 0 && (
              <div className="suggestions-dropdown">
                {filteredSuggestions.map((item, index) => (
                  <div 
                    key={`${item.id}-${index}`}   // ✅ unique key
                    className="suggestion-item"
                    onMouseDown={() => handleSuggestionClick(item.path)}
                  >
                    <span className={`suggestion-type ${item.type}`}>{item.type}</span>
                    <span className="suggestion-name">{item.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Auth Buttons */}
          <ul className="navbar-nav">
            {status ? (
              <li className="nav-item dropdown">
                <button className="btn btn-danger dropdown-toggle" id="userMenu" data-bs-toggle="dropdown" aria-expanded="false">
                  Account
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userMenu">
                  <li><button className="dropdown-item" onClick={addBlog}>➕ Add Blog</button></li>
                  <li><button className="dropdown-item" onClick={goToBlogList}>📚 Blog List</button></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item text-danger" onClick={logout}>🔓 Logout</button></li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="btn" style={{backgroundColor: "#0d47a1", color: "#fff", marginRight: "10px", fontWeight: "500"}} to="/login">
                    <i className="bi bi-box-arrow-in-right me-1"></i> Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="btn" style={{backgroundColor: "#ff6f00", color: "#fff", fontWeight: "600", boxShadow: "0 4px 12px rgba(255, 111, 0, 0.4)", borderRadius: "6px", padding: "6px 16px", transition: "all 0.3s ease"}} to="/sign-up">
                    <i className="bi bi-person-plus-fill me-1"></i> Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
