import React from 'react'
import {
  Box,
  Avatar,
  Grid,
  Typography,
  Divider,
  Paper,
  Button,
  Stack,
  Tooltip,
  Link,
} from '@mui/material'
import CallIcon from '@mui/icons-material/Call'
import EmailIcon from '@mui/icons-material/Email'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import { useFilteredServices } from '../../app/hooks'
import { UserAttributes, WarehouseAttributes } from '../../types'
import { formatRentValue } from '../../utils/format-number'
import { useNavigate } from 'react-router-dom'

interface IDividerComponentProps {
  children?: string
}

const DividerComponent: React.FC<IDividerComponentProps> = ({ children }) => (
  <Divider sx={{ marginY: '22px' }}>
    <Typography variant="h6" component="div">
      {children}
    </Typography>
  </Divider>
)

interface WarehouseDetailsProps extends WarehouseAttributes, UserAttributes {}

const WarehouseDescription: React.FC<WarehouseDetailsProps> = ({
  title,
  description,
  rent,
  size,
  governorate,
  location,
  street,
  services,
  createdAt = '1/2/2021',
  name,
  email,
  phoneNumber,
}) => {
  // const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
  //   setAnchorEl(event.currentTarget)

  const myServices = useFilteredServices(services)

  const myDate = new Date(createdAt).toUTCString()

  let navigate = useNavigate()

  return (
    <>
      <Box sx={{ marginTop: '2rem', textAlign: 'left' }}>
        <Grid columnSpacing={{ xs: 1, sm: 2, md: 1 }} container>
          <Grid item xs={12} md={8}>
            <Stack spacing={2}>
              <Typography variant="h6" component="div" sx={{ letterSpacing: '1px' }}>
                {title.toUpperCase()}
              </Typography>

              <Typography variant="subtitle2" color="text.secondary">
                {`Warehouse for rent in ${governorate}, ${location}, ${street}.`.toUpperCase()}
              </Typography>

              <Typography variant="subtitle2" color="text.secondary">
                {`Warehouse Size: ${size} sqm`}
              </Typography>
            </Stack>

            <DividerComponent>Services</DividerComponent>

            <Stack spacing={1}>
              {myServices.map((service: any, indx: number) => {
                return (
                  <Box data-testid="warehouse-services" key={indx} sx={{ display: 'flex' }}>
                    {<service.Icon />}
                    <Typography
                      sx={{ marginLeft: '10px', marginBottom: '15px' }}
                      variant="body1"
                      component="div"
                    >
                      {service.label.toUpperCase()}
                    </Typography>
                  </Box>
                )
              })}
            </Stack>

            <DividerComponent>Agent Information</DividerComponent>
            <Box sx={{ display: 'flex', flexBasis: 'start' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ width: 56, height: 56 }}>
                  <AccountCircleIcon fontSize="large" />
                </Avatar>
                <Stack direction="column" sx={{ marginLeft: '20px' }}>
                  <Typography variant="body1" color="text.primary">
                    {name}
                  </Typography>

                  <Typography variant="body1" color="text.primary">
                    {`Created Warehouse on ${myDate}`}
                  </Typography>
                </Stack>
              </Box>
            </Box>
            <DividerComponent>Description</DividerComponent>
            <Box sx={{ whiteSpace: 'pre-line' }}>{description}</Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper
              square
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'column',
                height: '11rem',
              }}
              elevation={2}
            >
              <Typography sx={{ textAlign: 'center' }} variant="h5" component="div">
                {formatRentValue(rent)} EGP / Month
              </Typography>
              <Stack direction="row" spacing={5} sx={{ justifyContent: 'center' }}>
                <Tooltip title={phoneNumber}>
                  <Link href="tel:+20 1281115712">
                    <Button variant="contained">
                      <CallIcon sx={{ marginRight: '10px' }} /> Call
                    </Button>
                  </Link>
                </Tooltip>

                <Tooltip title={email} arrow>
                  <Link href="mailto:mohamed_salem331@hotmail.com">
                    <Button variant="contained">
                      <EmailIcon sx={{ marginRight: '10px' }} /> Email
                    </Button>
                  </Link>
                </Tooltip>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Button sx={{ marginY: '5rem' }} variant="contained" onClick={() => navigate('/explore')}>
        <ArrowBackIcon fontSize="large" sx={{ marginRight: '10px' }} /> Return Back
      </Button>
    </>
  )
}

export default WarehouseDescription
