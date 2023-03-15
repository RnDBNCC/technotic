import { css, injectGlobal } from '@emotion/css'

injectGlobal`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a{
    text-decoration: none;
    cursor: pointer;
    color: #fbfbfb;
}`

export const styFooterContainer = (
  bgColor: string,
  fontColor: string
): string => css`
    background-color: ${bgColor};
    color: ${fontColor};
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    padding: 48px 128px;
`

export const styFooterContainerMobile = (
  bgColor: string,
  fontColor: string
): string => css`
    background-color: ${bgColor};
    color: ${fontColor};
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 48px 64px;
    gap: 2rem;
`

export const styFooterText = css`
    line-height: 150%;
`

export const styFooterTextMobile = css`
    line-height: 150%;
    text-align: center;
`

export const stySocialMedia = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`
