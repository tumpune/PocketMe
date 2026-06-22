import { useEffect, useState } from 'react'
import '../styles/animated-word-transition.css'

const WORDS = ['Me', 'Pet', 'Love']

function AnimatedWordTransition() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentWord = WORDS[currentIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % WORDS.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <h1 className="hero-title animated-title" aria-label={`Pocket${currentWord} in versione mini`}>
      Pocket
      <span className="animated-word" aria-hidden="true">
        {currentWord}
      </span>
      <br />
      In versione mini.
    </h1>
  )
}

export default AnimatedWordTransition
