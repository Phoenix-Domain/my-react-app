function ProfileCard({ name, bio, url}){
  return (
    <>
      <p>{name}</p>
      <p>{bio}</p>
      <img src={url} alt={`Photo of ${url}`} title={`Photo of ${url}`} />
    </>
  )
}

export default ProfileCard;