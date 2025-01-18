import { Route, Routes } from 'react-router-dom'

import IndexPage from '@/pages/index'
import DocsPage from '@/pages/docs'
import BlogPage from '@/pages/blog'
import AboutPage from '@/pages/about'

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  )
}

export default App
