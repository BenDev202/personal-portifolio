import "./Gallery.css"

const Gallery = () => {
  // Sample gallery items
  const galleryItems = [
    { id: 1, image: "gallery1.jpg", title: "UI Design Concept" },
    { id: 2, image: "gallery2.jpg", title: "Mobile App Mockup" },
    { id: 3, image: "gallery3.jpg", title: "Website Redesign" },
    { id: 4, image: "gallery4.jpg", title: "Logo Design" },
    { id: 5, image: "gallery5.jpg", title: "Illustration Work" },
    { id: 6, image: "gallery6.jpg", title: "Photography" },
  ]

  return (
    <div className="gallery-page">
      <div className="page-header">
        <h1>GALLERY</h1>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <div className="gallery-item" key={item.id}>
            <div className="gallery-image" style={{ backgroundImage: `url(/${item.image})` }}></div>
            <div className="gallery-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
