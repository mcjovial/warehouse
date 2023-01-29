import React, { useState } from 'react'
import { Autocomplete, Box, Button, Divider, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom'

import { GOVERNORATES, LOCATIONS } from '../../utils/constants/index'
import { FilterWarehouseOptions } from '../../types'

interface ISearchWarehousesProps {
  addFilters: (filters: FilterWarehouseOptions) => void
}

const SearchComponent: React.FC<ISearchWarehousesProps> = ({ addFilters }) => {
  const [location, setLocation] = useState<string | null>()
  const [governorate, setGovernorate] = useState<string | null>()

  const history = useNavigate()

  const onSubmit = () => {
    addFilters({
      locations: location ? [location] : [],
      governorates: governorate ? [governorate] : [],
      size: [0, 0],
      rent: [0, 0],
    })
    history('/explore')
  }

  return (
    <>
      <Box
        sx={{
          p: 2,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: ' translate(-50%, -50%)',
          backgroundColor: 'white',
          borderRadius: '4px',
          display: 'flex',
        }}
      >
        <Stack
          divider={
            <Divider
              orientation="horizontal"
              sx={{ marginY: '0.8rem', visibility: 'hidden' }}
              flexItem
            />
          }
        >
          <Autocomplete
            disablePortal
            id="governorate-input"
            options={GOVERNORATES}
            sx={{ width: 300 }}
            data-testid="governorate-input-testid"
            onChange={(event: React.SyntheticEvent<Element, Event>, newValue: string | null) => {
              setGovernorate(newValue)
            }}
            renderInput={(params) => <TextField {...params} label="Governorate" />}
          />
          <Autocomplete
            disablePortal
            id="location-input"
            options={LOCATIONS}
            sx={{ width: 300 }}
            onChange={(event: React.SyntheticEvent<Element, Event>, newValue: string | null) => {
              setLocation(newValue)
            }}
            renderInput={(params) => <TextField {...params} label="Location" />}
          />

          <Button onClick={onSubmit} variant="contained" color="primary">
            <SearchIcon sx={{ marginRight: '10px' }} /> Search Warehouses
          </Button>
        </Stack>
      </Box>
    </>
  )
}

export default SearchComponent
