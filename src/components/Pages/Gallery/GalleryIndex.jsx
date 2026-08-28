import GallaryGrid from './components/GallaryGrid'
import GalleryHero from './components/GalleryHero'
import TexturesCollection from './components/TexturesCollection'

export default function GalleryIndex() {
  return (
    <div>
      <GalleryHero/>
      <GallaryGrid/>
      <TexturesCollection/>
    </div>
  )
}
