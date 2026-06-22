import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import heroVideo from '../assets/videos/video_prova_4k.mp4'
import '../styles/animated-word-transition.css'

const HERO_WORDS = ['Me', 'Pet', 'Love']
const LETTER_TIME = 150
const WORD_CYCLE_TIME = 2600

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedWord, setDisplayedWord] = useState(HERO_WORDS[0])
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = HERO_WORDS[currentIndex]
    const totalLetterTime = currentWord.length * LETTER_TIME * 2
    const pauseTime = Math.max(WORD_CYCLE_TIME - totalLetterTime, LETTER_TIME)
    const delay = displayedWord === currentWord && !isDeleting ? pauseTime : LETTER_TIME

    const timeout = setTimeout(() => {
      if (isDeleting && displayedWord.length > 0) {
        setDisplayedWord(currentWord.substring(0, displayedWord.length - 1))
        return
      }

      if (isDeleting) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_WORDS.length)
        setIsDeleting(false)
        return
      }

      if (displayedWord.length < currentWord.length) {
        setDisplayedWord(currentWord.substring(0, displayedWord.length + 1))
        return
      }

      setIsDeleting(true)
    }, delay)

    return () => clearTimeout(timeout)
  }, [displayedWord, isDeleting, currentIndex])

  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted playsInline preload="metadata">
        <source src={heroVideo} type="video/mp4" />
        Il tuo browser non supporta il tag video.
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title" aria-label={`Pocket${displayedWord}`}>
          Pocket
          <span className="animated-word" aria-hidden="true">
            {displayedWord}
            <span className="cursor">|</span>
          </span>
        </h1>

        <p className="hero-description">
          Mini figure 3D personalizzate da foto reali: persone, ricordi e
          animali trasformati in oggetti unici.
        </p>

        <div className="hero-buttons">
          <Link to="/richiedi-preventivo" className="btn btn-primary">
            Crea il tuo PocketMe
          </Link>

          <Link to="/prodotti/pocketpet" className="btn btn-secondary">
            Scopri PocketPet
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
