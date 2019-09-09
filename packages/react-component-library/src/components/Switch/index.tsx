import React from 'react'
import { useMediaQuery } from 'react-responsive'

import Switch from './Switch'

const ResponsiveSwitch: React.FC<SwitchType> = props => {
  /**
   * https://github.com/Royal-Navy/standards-toolkit/tree/develop/packages/css-framework#breakpoints
   *
   * - root: 0px
   * - s: 576px
   * - m: 768px
   * - l: 992px
   * - xl: 1200px
   * - xxl: 1400px
   */
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 992px)',
  })

  const classes = `
    rn-responsive-switch
    ${isDesktopOrLaptop ? 'is-desktop' : 'is-mobile'}
  `

  return (
    <div className={classes}>
      {isDesktopOrLaptop && <Switch {...props} />}
      {!isDesktopOrLaptop && '<Select {...props} /> // Placeholder'}
    </div>
  )
}

ResponsiveSwitch.displayName = 'ResponsiveSwitch'

export default ResponsiveSwitch
