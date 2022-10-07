import '../styles/globals.scss';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return(
    <div className='bg-gradient-to-br from-[#5bcbe9] via-[#e46ff0] to-[#d9b272] min-h-screen text-white'>
      <Component {...pageProps} />
    </div>
    )
}

export default MyApp;