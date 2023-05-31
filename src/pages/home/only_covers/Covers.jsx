import bgImg1 from '../../../assets/backgrounds/1.webp'
import bgImg2 from '../../../assets/backgrounds/2.webp'
import bgImg3 from '../../../assets/backgrounds/3.webp'
import bgImg4 from '../../../assets/backgrounds/4.webp'
import bgImg5 from '../../../assets/backgrounds/5.webp'
import bgImg6 from '../../../assets/backgrounds/6.webp'
const Covers = () => {
  const bgArr = [
    {
      id: 1,
      img: bgImg1,
      title: 'Mid Night Chills',
      totalFollowers: 1200232,
    },
    {
      id: 2,
      img: bgImg2,
      title: 'Midnight Lofi Vibes ',
      totalFollowers: 232323,
    },
    { id: 3, img: bgImg5, title: 'Asthetic Vibs', totalFollowers: 2334343 },
    { id: 4, img: bgImg6, title: 'Bold Life', totalFollowers: 2232 },
    {
      id: 5,
      img: bgImg4,
      title: 'You and me. Love each other.',
      totalFollowers: 232323,
    },
    { id: 6, img: bgImg3, title: 'Rules Are Broken', totalFollowers: 23433 },
  ]
  return (
    <div>
      {bgArr.map((content) => (
        <div
          key={content.id}
          className="h-[calc(100vh+50vh)] bg-cover"
          style={{ backgroundImage: `url(${content.img})` }}
        >
          <div className="h-full w-full bg-base-100 bg-opacity-50"></div>
        </div>
      ))}
    </div>
  )
}

export default Covers
