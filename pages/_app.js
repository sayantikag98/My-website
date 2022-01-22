import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  // including attribute=class is important because this tells the next-theme library to use the dark theme class
  return (
    <ThemeProvider attribute="class" defaultTheme="system"> 
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
