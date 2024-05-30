import { motion } from 'framer-motion'
import { SpansLogo } from '../assets/logos/SpansLogo'
import { GithubIcon } from '../assets/icons/GithubIcon'

export const Navbar = () => {
  return (
    <nav className="w-full h-20 flex flex-col justify-center items-center bg-blue-600 backdrop-blur-xl">
      <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex justify-start items-center grow basis-0">
            <div className="text-gray-100 mr-2 text-6xl">
              <SpansLogo />
            </div>
            <div className="text-gray-100 font-bold text-xl">Spans</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
        >
          <div className="grow basis-0 justify-end flex">
            <a
              className="text-gray-100 rounded-xl p-2 text-sm"
              href="https://github.com/Dacong-wu/spans-page"
              target="_blank"
              aria-label="source code"
            >
              <GithubIcon />
            </a>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}
