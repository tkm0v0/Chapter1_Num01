import './App.css'
import { CssModules } from './components/CssModules'
import { StyledComponents } from './components/StyledComponents'
import { StyledJsx } from './components/StyledJsx'
import { InlineStyles } from './components/lnlineStyle'

function App() {
  return (
    <>
      <div>
          <InlineStyles />
          <CssModules />
          <StyledJsx />
          <StyledComponents />
      </div>
    </>
  )
}

export default App
