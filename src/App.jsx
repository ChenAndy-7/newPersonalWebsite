import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar'

function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  // Apply dark class to html element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className="main-content">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="container mx-auto px-4 py-8">
        <h2 className="subheading">About Me</h2>
        
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 mb-16">
          <div className="flex-1 max-w-2xl">
            <p className="text-lg leading-relaxed text-secondary">
              Hi, I'm Andy Chen, a junior at the University of Maryland majoring in Computer Science, 
              with a focus on machine learning and web development. I'm originally from rural Northcentral 
              Pennsylvania and am also pursuing a minor in Entrepreneurial Leadership, which has given me 
              a broader perspective on innovation, team dynamics, and problem-solving beyond the technical side. 
              Outside of tech, I enjoy fishing, playing basketball, and spending time with friends. I'm currently 
              seeking opportunities to expand my skills, collaborate on meaningful work, and continue growing 
              in the tech industry.
            </p>
          </div>
          <div className="w-64 h-64 overflow-hidden rounded-full flex-shrink-0 shadow-theme-lg">
            <img 
              src="src/portrait.png" 
              alt="Andy Chen portrait"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="subheading">Experiences</h2>
          <div className="flex rounded-xl overflow-hidden justify-center mx-10 shadow-theme-lg">
            <img 
              src="src/adc.jpeg" 
              alt="Experience at ADC"
              className="object-cover max-w-full h-auto"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="subheading">Skills & Languages</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-2xl">
              {['Python', 'Java', 'C', 'OCaml', 'JavaScript', 'HTML & CSS', 'Rust'].map((skill) => (
                <div 
                  key={skill}
                  className="skill-card rounded-lg p-4 text-center font-medium cursor-pointer"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="subheading">Projects</h2>
          <div className="text-center">
            <p className="text-muted text-lg">Coming soon...</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App