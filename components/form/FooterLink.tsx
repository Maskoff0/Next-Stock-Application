import React from 'react'
import Link from 'next/link'

const FooterLink = ({text, linkText, href} : FooterLinkProps) => {
  return (
    <div className="text-center pt-2">
      <p className="text-sm text-gray-600">
        {text}{``}
        <Link href={href} className="footer-link mr-2">
          {linkText}
        </Link>
      </p>
    </div>
  )
}

export default FooterLink