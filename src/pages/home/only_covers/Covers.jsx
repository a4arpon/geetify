import { Parallax } from 'react-parallax'
import bgImg1 from '../../../assets/backgrounds/1.webp'
import bgImg2 from '../../../assets/backgrounds/2.webp'
import bgImg3 from '../../../assets/backgrounds/3.webp'
import bgImg4 from '../../../assets/backgrounds/4.webp'
import bgImg5 from '../../../assets/backgrounds/5.webp'
import bgImg6 from '../../../assets/backgrounds/6.webp'
const Covers = () => {
  const bgArr = [bgImg1, bgImg2, bgImg5, bgImg6, bgImg4, bgImg3]
  return (
    <div>
      {bgArr.map((bgImg, index) => (
        <Parallax
          key={index}
          blur={{ min: -15, max: 15 }}
          bgImage={bgImg}
          strength={-200}
        >
          <div className="h-screen"></div>
        </Parallax>
      ))}
    </div>
  )
}

export default Covers
