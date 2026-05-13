import { useRef, useState } from 'react'
import jonny1 from '../assets/images/jonny1.png'
import jonny2 from '../assets/images/jonny2.png'

function BeforeAfterSlider() {
  const containerRef = useRef(null)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const updateSlider = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    let percentage = (x / rect.width) * 100

    if (percentage < 0) percentage = 0
    if (percentage > 100) percentage = 100

    setSliderPosition(percentage)
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    updateSlider(e.clientX)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  return (
    <section className="before-after-slider-section">
      <div className="container">
        <div className="page-hero">
          <p className="page-label">Trasformazione</p>
          <h2 className="page-title">Da una foto a PocketMe</h2>
          <p className="page-description">
            Guarda come una semplice immagine reale prende forma e diventa una mini
            figura 3D personalizzata.
          </p>
        </div>

        <div
          ref={containerRef}
          className="before-after-slider"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <img src={jonny2} alt="PocketMe finale" className="slider-image after-image" />

          <div
            className="before-image-wrapper"
            style={{ width: `${sliderPosition}%` }}
          >
            <img src={jonny1} alt="Foto originale" className="slider-image before-image" />
          </div>

          <div
            className="slider-line"
            style={{ left: `${sliderPosition}%` }}
          >
            <button
              className="slider-handle"
              onMouseDown={handleMouseDown}
              aria-label="Sposta il cursore"
            >
              ↔
            </button>
          </div>

          <div className="slider-label slider-label-left">Prima</div>
          <div className="slider-label slider-label-right">Dopo</div>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfterSlider