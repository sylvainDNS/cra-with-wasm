import { useEffect, useRef, useState } from 'react'

import noot from './sound/noot.mp3'
import nootingPingu from './image/pingu_nooting.gif'
import pingu from './image/pingu.jpg'

const NootPlayer = () => {
  const ref = useRef(null)
  const [isNooting, setIsNooting] = useState(false)

  const handleClick = () => {
    if (ref) {
      ref.current.play()
      setIsNooting(true)
    }
  }

  useEffect(() => {
    if (isNooting) setTimeout(() => setIsNooting(false), 1000)
  }, [isNooting])

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}
    >
      <button onClick={handleClick}>Noot the Pingu!</button>
      <img
        src={isNooting ? nootingPingu : pingu}
        alt={`Pingu${isNooting ? 'is nooting' : null}`}
      />
      <audio ref={ref} src={noot} />
    </div>
  )
}

export default NootPlayer
