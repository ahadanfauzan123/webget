import '../styles/globals.css'
import {ThemeProvider} from 'next-themes'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export default function App({ Component, pageProps }) {
  return(
    <ThemeProvider>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  ) 
}
