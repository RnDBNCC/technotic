import React, { useState, useEffect } from 'react'
import { cx } from '@emotion/css'
import { FooterProps } from './types'
import * as styles from './styles'
import * as icons from '../Icons'

const Footer: React.FC<FooterProps> = ({
  name = 'Bina Nusantara Computer Club',
  year = '2023',
  createdBy,
  bgColor = '#22539F',
  fontColor = '#FBFBFB',
  instagramLink,
  facebookLink,
  twitterLink,
  linkedinLink,
  youtubeLink
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize: () => void = () =>
      setScreenWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const isMobile = screenWidth <= 1024

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
                    Created with ❤ {createdBy !== '' && `by ${createdBy}`}
                </p>
            </div>

            {(facebookLink !== '' ||
                instagramLink !== '' ||
                twitterLink !== '' ||
                linkedinLink !== '' ||
                youtubeLink !== '') && (
                <div className={cx(styles.stySocialMedia)}>
                    {facebookLink !== '' && (
                        <a
                            href={facebookLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <icons.FacebookIcon color={fontColor} size={32} />
                        </a>
                    )}
                    {instagramLink !== '' && (
                        <a
                            href={instagramLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <icons.InstagramIcon color={fontColor} size={32} />
                        </a>
                    )}
                    {twitterLink !== '' && (
                        <a
                            href={twitterLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <icons.TwitterIcon color={fontColor} size={32} />
                        </a>
                    )}
                    {linkedinLink !== '' && (
                        <a
                            href={linkedinLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <icons.LinkedInIcon color={fontColor} size={32} />
                        </a>
                    )}
                    {youtubeLink !== '' && (
                        <a
                            href={youtubeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <icons.YoutubeIcon color={fontColor} size={32} />
                        </a>
                    )}
                </div>
            )}
        </footer>
  )
}
export default Footer
