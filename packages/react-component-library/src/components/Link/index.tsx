import React from 'react'

const Link: React.FC<AnchorType> = ({
  children,
  className = '',
  href,
  ...rest
}) => (
  <a
    className={`rn-link ${className}`}
    href={href}
    data-testid="link"
    {...rest}
  >
    {children}
  </a>
)

Link.displayName = 'Link'

export default Link
