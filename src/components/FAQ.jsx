import { useState } from 'react'
import { motion } from 'framer-motion'

const FAQData = [
  {
    question: 'Spans 是什么？',
    answer: 'Span 是一个 html 标签，这就是 Spans 的由来，没有特殊的意义，就是单纯的喜欢'
  },
  {
    question: '这个 Logo 为什么看着有点熟悉？',
    answer: '是的，这个 Logo 的灵感来自于 onwidget'
  },
  {
    question: '这个网站是你自己设计的吗？',
    answer: '这个网站主题来自 Tailcast'
  },
  {
    question: '我该怎么与你取得联系？',
    answer: '你可以给我的邮箱 dacong@ll1025.cn 发送邮件'
  }
]

export const FAQ = () => (
  <section className="relative py-36 bg-blueGray-50 overflow-hidden">
    {/* <div className="absolute -top-10" id="FAQ" /> */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <h2 className="mb-16 custom-block-big-title text-center">常见问题</h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div
                className="w-full p-1"
                key={`${item.question}-${item.answer}`}
              >
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
)

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">{title}</h3>
        <p className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>{content}</p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${isOpen ? 'rotate-[180deg]' : 'rotate-[270deg]'}`}
        >
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#4F46E5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  )
}
