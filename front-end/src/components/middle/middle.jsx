import React from 'react'

export default function middle() {
  return (
 <div className="container mt-4">
  <div className="row">
    {[1, 2, 3].map((item, index) => (
      <div className="col-4" key={index}>
        <div className="card">
          <img src="/images/meditation.jpg" className="card-img-top" alt={`Card ${item}`} />
          <div className="card-body">
            <p className="card-text">Card {item} content here.</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}


