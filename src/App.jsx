import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/navbar'

function App() {
  // Initialize with light mode (false) instead of dark mode
  const [isDark, setIsDark] = useState(false)

  

  const toggleTheme = () => {
  console.log('Before toggle - isDark:', isDark)
  setIsDark(!isDark)
  console.log('After toggle - isDark:', !isDark)
  console.log('HTML class list:', document.documentElement.classList.toString())
}
  useEffect(() => {
  console.log('useEffect running, isDark:', isDark)
  if (isDark) {
    document.documentElement.classList.add('dark')
    console.log('Added dark class')
  } else {
    document.documentElement.classList.remove('dark')
    console.log('Removed dark class')
  }
  console.log('Current classes:', document.documentElement.classList.toString())
}, [isDark])

  return (
    // Use standard Tailwind classes instead of custom classes
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="container mx-auto px-4 py-8">
        <h2 className="subheading">About Me</h2>
        
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 mb-16">
          <div className="flex-1 max-w-2xl">
            <p id="About"className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Hi, I'm Andy Chen, a junior at the University of Maryland majoring in Computer Science, 
              with a focus on machine learning and web development. I'm originally from rural Northcentral 
              Pennsylvania and am also pursuing a minor in Entrepreneurial Leadership, which has given me 
              a broader perspective on innovation, team dynamics, and problem-solving beyond the technical side. 
              Outside of tech, I enjoy fishing, playing basketball, and spending time with friends. I'm currently 
              seeking opportunities to expand my skills, collaborate on meaningful work, and continue growing 
              in the tech industry.
            </p>
          </div>
          <div className="w-64 h-64 overflow-hidden rounded-full flex-shrink-0 shadow-lg dark:shadow-gray-800/25">
            <img 
              src="src/portrait.png" 
              alt="Andy Chen portrait"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 id="experience" className="subheading">Experiences</h2>
          <div className="flex rounded-xl overflow-hidden justify-center mx-10 shadow-lg dark:shadow-gray-800/25">
            <img 
              src="src/adc.jpeg" 
              alt="Experience at ADC"
              className="object-cover max-w-full h-auto"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 id="skills" className="subheading">Skills & Languages</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-2xl">
              {['Python', 'Java', 'C', 'OCaml', 'JavaScript', 'HTML & CSS', 'Rust'].map((skill) => (
                <div 
                  key={skill}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 rounded-lg p-4 text-center font-medium cursor-pointer"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 id="projects"className="subheading">Projects</h2>
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 text-lg">Coming soon...</p>
          </div>
        </div>

         <button 
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-100 transition-colors shadow-lg hover:shadow-xl z-50"
        aria-label="Toggle theme"
      >
        <span className="text-xl">{isDark ? '☀️' : '🌙'}</span>
      </button>
      </main>
    </div>
  )
}

export default App