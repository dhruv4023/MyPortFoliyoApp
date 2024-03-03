import React from 'react'
import FlexBetween from './FlexBetween'
import Home from '../Pages/Home/Home'
import { useTheme } from '@emotion/react'
import Github from '../Pages/github/Github'
import SocialLink from './SocialLink/SocialLink'

const PageSec = () => {
  const theme = useTheme()
  return (
    <FlexBetween
      sx={{
        backgroundImage: `linear-gradient(120deg,${theme.palette.background.dark},${theme.palette.background.default})`
      }}
      flexDirection={'column'}
    >
      <Home />
      <Github />
      <SocialLink />
    </FlexBetween>
  )
}

export default PageSec
