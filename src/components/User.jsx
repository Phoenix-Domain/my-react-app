function User({ user }){

  return (
    <div key={user.id} style={{border:'1px solid red', margin:'1rem 0'}}>
      <div>{user?.name}</div>
      <div>{user?.username}</div>
      <div>{user?.id}</div>
      
    </div>
  )
}

export default User;