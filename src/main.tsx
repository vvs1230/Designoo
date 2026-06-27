import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PageMama from './PageMama.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageMama />
  </StrictMode>,
)
