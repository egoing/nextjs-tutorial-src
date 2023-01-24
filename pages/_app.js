import '../styles/globals.css'
import Layout from '../components/Layout'
import {Provider} from 'react-redux';
import {wrapper} from '@/redux/store';

export default function App({ Component, ...pageProps }) {
  const {store, props} = wrapper.useWrappedStore(pageProps);
  return <Provider store={store}>
    <Layout><Component {...pageProps} /></Layout>
  </Provider>
}
