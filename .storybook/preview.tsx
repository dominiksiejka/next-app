import * as NextFutureImage from 'next/future/image'
import React, { Suspense } from 'react'

import '../src/styles/globals.css'

Object.defineProperty(NextFutureImage, 'default', {
  configurable: true,
  value: (props) => {
    const {
      fill,
      src: { src },
      ...restProps
    } = props

    return (
      <img
        src={src}
        {...restProps}
        style={
          fill
            ? {
                position: 'absolute',
                height: '100%',
                width: '100%',
                inset: 0,
                color: 'transparent',
              }
            : undefined
        }
      />
    )
  },
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => {
    return (
      <Suspense fallback="loading...">
        <Story />
      </Suspense>
    )
  },
]
