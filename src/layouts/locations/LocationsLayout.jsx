import React, { useEffect, useState, useCallback } from 'react'
import Grid from '@mui/material/Grid';
import LocationCard from '../../components/Location/LocationCard'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux'
import { getAllLocations, applyLocationsFilter } from './../../actions/locationsAction'
import { debounce } from "lodash";

function LocationsLayout(props) {
  
  const dispatch = useDispatch();

  const locationsData = useSelector(state => state.locations.locationsData)
  const locationsFilter = useSelector(state => state.locations.locationsFilter)


  const getLocationsData = (opts={}) => {
    dispatch(getAllLocations(opts))
  }

  const handleSearchFun = (e) => {
    e.preventDefault()
    let name=e.target.name
    let value=e.target.value
    dispatch(applyLocationsFilter({...locationsFilter, [name]: value}))
  }

  const handleSearch = useCallback(debounce(handleSearchFun, 500), []);


  useEffect(()=>{
    getLocationsData(locationsFilter)
  },[locationsFilter])

  return (
    <div className='locations-layout-page'>
      <h6>Locations</h6>
      <div>
        <Box
          component="form"
          style={{width:'100%'}}
          noValidate
          autoComplete="off"
        >
          <TextField 
            id="search-input" 
            name="name"
            label="Search" 
            variant="outlined" 
            onChange={handleSearch}
            style={{width:'100%'}}/>
        </Box>
      </div>
      <br/>
      <div>
        <Grid container spacing={2}>
          {locationsData&&locationsData.results.map(item=>{
            return <>
              <Grid item xs={6} md={4}>
                  <LocationCard 
                    name={item.name}
                    type={item.type}
                    dimension={item.dimension}
                  />
              </Grid>
            </>
          })}
        </Grid>
      </div>
    </div>
  )
}

export default LocationsLayout