import React, { useState, useEffect } from 'react'
import { cx } from '@emotion/css'

import { FooterProps } from './types'

import * as styles from './styles'

// import facebookIcon from '../../assets/social-media/facebook.svg';
// import instagramIcon from '../../assets/social-media/instagram.svg';
// import linkedinIcon from '../../assets/social-media/linkedin.svg';
// import twitterIcon from '../../assets/social-media/twitter.svg';
// import youtubeIcon from '../../assets/social-media/youtube.svg';

const Footer: React.FC<FooterProps> = ({
  name = '{name}',
  year = '{year}',
  madeBy = '{madeBy}',
  bgColor = '#22539F',
  fontColor = '#FBFBFB',
  instagramLink = '',
  facebookLink = '',
  twitterLink = '',
  linkedinLink = '',
  youtubeLink = ''
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [hasSocialMedia, setHasSocialMedia] = useState(false)

  useEffect(() => {
    const handleResize: () => void = () =>
      setScreenWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (
      instagramLink !== '' ||
            facebookLink !== '' ||
            twitterLink !== '' ||
            linkedinLink !== '' ||
            youtubeLink !== ''
    ) {
      setHasSocialMedia(true)
    }
  }, [instagramLink, facebookLink, twitterLink, linkedinLink, youtubeLink])

  const isMobile = screenWidth <= 1024
  const socialMediaLinks = [
    { id: 1, link: facebookLink, alt: 'facebook' },
    { id: 2, link: instagramLink, alt: 'instagram' },
    { id: 3, link: twitterLink, alt: 'twitter' },
    { id: 4, link: linkedinLink, alt: 'linkedin' },
    { id: 5, link: youtubeLink, alt: 'youtube' }
    // { link: facebookLink, alt: 'facebook', icon: facebookIcon },
    // { link: instagramLink, alt: 'instagram', icon: instagramIcon },
    // { link: twitterLink, alt: 'twitter', icon: twitterIcon },
    // { link: linkedinLink, alt: 'linkedin', icon: linkedinIcon },
    // { link: youtubeLink, alt: 'youtube', icon: youtubeIcon },
  ].filter((link) => link.link !== '')

  return (
        <footer
            className={`cx(
            ${
                isMobile
                    ? styles.styFooterContainerMobile(bgColor, fontColor)
                    : styles.styFooterContainer(bgColor, fontColor)
            }
          )`}
        >
            <div>
                <p
                    className={`cx(
            ${isMobile ? styles.styFooterTextMobile : styles.styFooterText}
          )`}
                >
                    Copyright © {year} {name}, All Right Reserved.
                    <br />
                    Created with ❤ by {madeBy}
                </p>
            </div>

            {hasSocialMedia && (
                <div className={cx(styles.stySocialMedia)}>
                    {socialMediaLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="" alt={link.alt} />
                        </a>
                    ))}
                </div>
            )}
        </footer>
  )
}
export default Footer
