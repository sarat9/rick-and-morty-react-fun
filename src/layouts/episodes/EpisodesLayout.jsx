import React, { useEffect, useState, useCallback } from 'react'
import Grid from '@mui/material/Grid';
import EpisodeCard from '../../components/Episode/EpisodeCard'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux'
import { getAllEpisodes, applyEpisodesFilter } from './../../actions/episodesAction'
import { debounce } from "lodash";

function EpisodesLayout(props) {
  
  const dispatch = useDispatch();

  const episodesData = useSelector(state => state.episodes.episodesData)
  const episodesFilter = useSelector(state => state.episodes.episodesFilter)


  const getEpisodeData = (opts={}) => {
    dispatch(getAllEpisodes(opts))
  }

  const handleSearchFun = (e) => {
    e.preventDefault()
    let name=e.target.name
    let value=e.target.value
    dispatch(applyEpisodesFilter({...episodesFilter, [name]: value}))
  }

  const handleSearch = useCallback(debounce(handleSearchFun, 500), []);


  useEffect(()=>{
    getEpisodeData(episodesFilter)
  },[episodesFilter])

  return (
    <div className='episodes-layout-page'>
      <h6>Episodes</h6>
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
          {episodesData&&episodesData.results.map(item=>{
            return <>
              <Grid item xs={6} md={4}>
                  <EpisodeCard 
                    name={item.name}
                    imageSrc={item.image}
                    episode={item.episode}
                    airDate={item.air_date}
                    created={item.created}
                  />
              </Grid>
            </>
          })}
        </Grid>
      </div>
    </div>
  )
}

export default EpisodesLayout