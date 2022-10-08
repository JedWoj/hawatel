import '../styles/globals.scss';
import { Provider } from 'react-redux';
import store from '../store';
import type { AppProps } from 'next/app';
import Navigation from '../components/Navigation/Navigation';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return(
    <Provider store={store}>
      <div className='bg-gradient-to-br from-[#5bcbe9] via-[#e46ff0] to-[#d9b272] min-h-screen text-white'>
        <Navigation />
        <Component {...pageProps} />
      </div>
    </Provider>
    )
}

export default MyApp;