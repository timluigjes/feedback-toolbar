import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'react-tooltip/dist/react-tooltip.css'
import { commentsStore } from './store/store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={commentsStore}>
      <App />
    </Provider>
  </StrictMode>,
)
