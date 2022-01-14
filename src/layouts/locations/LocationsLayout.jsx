import React, { useEffect, useState, useCallback } from 'react'
import Grid from '@mui/material/Grid';
import LocationCard from '../../components/Location/LocationCard'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import { useSelector, useDispatch } from 'react-redux'
import { getAllLocations, applyLocationsFilter } from './../../actions/locationsAction'
import { debounce } from "lodash";
import usePagination from './../../hooks/usePagination'
import PageLoading from '../../components/Loading/PageLoading'

function LocationsLayout(props) {
  
  const dispatch = useDispatch();

  const locationsData = useSelector(state => state.locations.locationsData)
  let locationsFilter = useSelector(state => state.locations.locationsFilter)
  let isLocationsLoading = useSelector(state => state.locations.isLocationsLoading)
  const [page, handlePage, resetPage]  = usePagination(1)


  const getLocationsData = (opts={}) => {
    dispatch(getAllLocations(opts))
  }

  const handleSearchFun = (e) => {
    e.preventDefault()
    let name=e.target.name
    let value=e.target.value
    resetPage()
    dispatch(applyLocationsFilter({...locationsFilter, [name]: value, page: 1}))
  }

  const handleSearch = useCallback(debounce(handleSearchFun, 500), []);

  useEffect(()=>{
    locationsFilter = {...locationsFilter, 'page': page}
    dispatch(applyLocationsFilter({...locationsFilter}))
  },[page])

  useEffect(()=>{
    getLocationsData(locationsFilter)
  },[])

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
          {!locationsData&&<>
            <div style={{textAlign: 'center', width: '100%', padding: '10% 0%'}}>
            <p style={{textAlign:'center'}}>No Results Found!!!</p>
            </div>
          </>}
        </Grid>
      </div>
      <br/><br/>
      <div style={{margin: 'auto',width: '50%'}}>
        {locationsData&&locationsData.info&&<>
          <Pagination count={locationsData.info.pages} page={page} color="primary" onChange={handlePage}/>
        </>}
      </div>
      {isLocationsLoading&&<><PageLoading /></>}
    </div>
  )
}

export default LocationsLayout