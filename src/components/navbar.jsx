function Navbar({ isDark, toggleTheme }) {
  return (
    <nav className="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-4 py-3 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl text-slate-900 dark:text-slate-100">
          Andy Chen
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">
              About
            </a>
            <a href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">
              Experience
            </a>
            <a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">
              Skills
            </a>
            <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100">
              Projects
            </a>
          </div>
         <div className="flex items-center space-x-3">
<a 
  href="https://github.com/ChenAndy-7" 
  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100"
>
  <img 
    src="../src/githubLogo.png" 
    className="h-10 w-10 p-2 rounded-lg bg-transparent dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
  />
</a>
  <a 
    href="https://www.linkedin.com/in/andy-chen05/" 
    
    className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100"
  >
    LinkedIn
  </a>
</div>
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-900 dark:text-slate-100 transition-colors"
            
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar