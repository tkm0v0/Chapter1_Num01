import './App.css'
import { CssModules } from './components/CssModules'
import { StyledJsx } from './components/StyledJsx'
import { InlineStyles } from './components/lnlineStyle'

function App() {
  return (
    <>
      <div>
          <InlineStyles />
          <CssModules />
          <StyledJsx />
      </div>
    </>
  )
}

export default App
