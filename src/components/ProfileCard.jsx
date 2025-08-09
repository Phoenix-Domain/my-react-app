function ProfileCard({ name, bio, url}){
  return (
    <>
      <p>{name}</p>
      <p>{bio}</p>
      <img src={url} alt={`Photo of ${name}`} title={`Photo of ${name}`} />
    </>
  )
}

export default ProfileCard;