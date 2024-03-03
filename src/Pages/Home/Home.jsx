import { Box } from '@mui/material'
import React from 'react'
import './home.css'
import './TextAnimation.css'
import FlexBetween from '../../Components/FlexBetween'
import WidgetWrapper from '../../Components/WidgetWrapper'
import UserImg from '../../Components/UserImg'
import SocialLink from '../../Components/SocialLink/SocialLink'
export default function Home () {
  return (
    <FlexBetween width='100%' flexWrap={'wrap'}>
      <WidgetWrapper flexDirection={'column'} height={'90vh'} width={'100%'}>
        <SocialLink />
      </WidgetWrapper>
    </FlexBetween>
  )
}
