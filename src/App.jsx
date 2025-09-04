import Card from "./components/Card"

function App() {
  
  return (
   <>
    <Card 
      name='Adaeze Nwosu' 
      bio='UI/UX Designer with a passion for clean interfaces' 
      role='UI/UX Designer' 
      about='Adaeze specializes in creating intuitive and visually appealing user experiences. She enjoys collaborating with developers and stakeholders to deliver products that delight users.' 
    />
    <Card 
      name='Tari Briggs' 
      bio='Full-stack developer and tech community builder' 
      role='Full-stack Developer' 
      about='Tari is passionate about building scalable web applications and fostering inclusive tech communities. He mentors junior developers and organizes local meetups.' 
    />
    <Card 
      name='Chinedu Okeke' 
      bio='Mobile app developer specializing in React Native' 
      role='Mobile App Developer' 
      about='Chinedu crafts high-performance mobile apps using React Native. He loves exploring new mobile technologies and sharing his knowledge through workshops.' 
    />
    <Card 
      name='Zainab Yusuf' 
      bio='Product manager focused on user-centered design' 
      role='Product Manager' 
      about='Zainab drives product strategy with a focus on user needs and business goals. She excels at cross-functional collaboration and agile methodologies.' 
    />
    <Card 
      name='Emeka Obi' 
      bio='Backend engineer and API wizard' 
      role='Backend Engineer' 
      about='Emeka designs robust backend systems and RESTful APIs. He is dedicated to optimizing performance and ensuring data security.' 
    />
    <Card 
      name='Kemi Adebayo' 
      bio='DevOps enthusiast and cloud infrastructure expert' 
      role='DevOps Engineer' 
      about='Kemi automates cloud deployments and manages scalable infrastructure. She advocates for best practices in CI/CD and cloud security.' 
    />
   </>
  )
}

export default App
