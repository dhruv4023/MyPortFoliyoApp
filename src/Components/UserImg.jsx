import { Box } from '@mui/system'

const UserImg = ({ image, size = '500rem' }) => {
  return (
    <Box display={'flex'}>
      <img
        style={{
          margin: 'auto',
          objectFit: 'cover',
          borderRadius: '10px',
        }}
        height={size}
        width={size}
        alt='userImage'
        src={
          image
            ? `${process.env.REACT_APP_CLOUDINARY_IMG}/${image}`
            : 'img.jpg'
        }
      />
    </Box>
  )
}

export default UserImg
