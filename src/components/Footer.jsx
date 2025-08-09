import Counter from './Counter'
import ProfileCard from './ProfileCard';


function Footer(){
  return(
    <>
      <Counter />
      <ProfileCard name="Batubo Victory" bio="talented Individual" url='src/assets/react.svg'/>

      <ProfileCard name="Twister" bio="crazy psycho" url='src/assets/react.svg'/>
    </>
  )
}

export default Footer;