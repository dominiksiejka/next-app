import type { ReactElement } from 'react'
import appWithI18n from 'next-translate/appWithI18n'
import { AppPropsWithLayout } from '../types/_app.types'

import '../styles/globals.css'
import nextTranslateConfig from '../../i18n'

function NextApp({ Component, pageProps }: AppPropsWithLayout) {
  const renderPageWithoutLayout = (page: ReactElement) => page

  const renderLayout = Component.getLayout ?? renderPageWithoutLayout

  return renderLayout(<Component {...pageProps} />)
  
  
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default appWithI18n(NextApp, {
  ...nextTranslateConfig,


  loadLocaleFrom: (locale, namespace) =>
    import(`public/locales/${locale}/${namespace}`).then(
      (m) => m.default
    ),
  skipInitialProps: true,
})
