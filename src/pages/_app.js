import '@/styles/globals.css'
import MouseRipple from '@/components/MouseRipple'

export default function App({ Component, pageProps }) {
  return (
    <>
      <MouseRipple />
      <Component {...pageProps} />
    </>
  )
}