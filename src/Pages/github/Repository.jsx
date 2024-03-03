import React from 'react'
import { Box, Divider, IconButton, Tooltip, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'
import WidgetWrapper from '../../Components/WidgetWrapper'
import { Circle, GitHub, LinkRounded } from '@mui/icons-material'
import FlexEvenly from '../../Components/FlexEvenly'
import { Link } from 'react-router-dom'
import FlexBetween from '../../Components/FlexBetween'
const Repository = ({ data }) => {
  const theme = useTheme()

  return (
    <WidgetWrapper
      backgroundColor={theme.palette.background.semiTransparent}
      m={1}
      width={'90vw'}
      flexDirection={'column'}
    >
      <Typography
        fontWeight={'bold'}
        fontSize={'1.5rem'}
        color={theme.palette.primary.dark}
      >
        {data.projectName}
      </Typography>
      <Divider />
      <FlexEvenly>
        {data.repoLinks && (
          <>
            {Object.keys(data.repoLinks).map(lnk => {
              return (
                <Link to={data.repoLinks[lnk]} target='_blank'>
                  <Tooltip title={`${lnk}`}>
                    <IconButton>
                      <GitHub />
                    </IconButton>
                  </Tooltip>
                </Link>
              )
            })}
          </>
        )}
        {data.liveLink && (
          <Link to={data.liveLink} target='_blank'>
            <IconButton>
              <LinkRounded />
            </IconButton>
          </Link>
        )}
      </FlexEvenly>
      <Divider />
      {data.media && (
        <Box borderRadius={4} display={'flex'} width={'100%'} height={'90%'}>
          <>
            {data.media.type === 'image' ? (
              <>
                <img
                  style={{ margin: 'auto' }}
                  // height={'500vh'}
                  width={'100%'}
                  src={`${data.media.src}`}
                  alt={`${data.projectName} img`}
                />
              </>
            ) : (
              data.media.type === 'video' && (
                <video
                  width={'100%'}
                  src={`${data.media.src}`}
                  controls
                  autoPlay
                />
              )
            )}
          </>
        </Box>
      )}
      <Divider />
      <Typography
        fontWeight={'bold'}
        fontSize={'1rem'}
        textAlign={'justify'}
        color={theme.palette.neutral.main}
      >
        {data.discription}
      </Typography>

      <Divider />
      <FlexBetween flexDirection={'column'}>
        {data.colleborator && (
          <>
            {Object.keys(data.colleborator).map(lnk => {
              return (
                <Link to={data.colleborator[lnk]} target='_blank'>
                  <Tooltip title={`${lnk}`}>
                    <Box
                      sx={{ textDecoration: 'none' }}
                      color={theme.palette.primary.main}
                    >
                      <Circle />
                      {lnk}
                    </Box>
                  </Tooltip>
                </Link>
              )
            })}
          </>
        )}
      </FlexBetween>
    </WidgetWrapper>
  )
}

export default Repository
