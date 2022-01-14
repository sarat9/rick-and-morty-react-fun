import React, { useEffect, useCallback } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import { useSelector, useDispatch } from 'react-redux'
import { getAllEpisodes, applyEpisodesFilter } from './../../actions/episodesAction'
import { debounce } from "lodash";
import usePagination from './../../hooks/usePagination'
import EpisodeCard from '../../components/Episode/EpisodeCard'
import PageLoading from '../../components/Loading/PageLoading'

function EpisodesLayout(props) {
  
  const dispatch = useDispatch();

  const episodesData = useSelector(state => state.episodes.episodesData)
  let episodesFilter = useSelector(state => state.episodes.episodesFilter)
  let isEpisodesLoading = useSelector(state => state.episodes.isEpisodesLoading)
  let [page, handlePage, resetPage]  = usePagination(1)


  const getEpisodeData = (opts={}) => {
    dispatch(getAllEpisodes(opts))
  }

  const handleSearchFun = (e) => {
    e.preventDefault()
    let name=e.target.name
    let value=e.target.value
    resetPage()
    dispatch(applyEpisodesFilter({...episodesFilter, [name]: value, page: 1}))
  }

  const handleSearch = useCallback(debounce(handleSearchFun, 500), []);

  useEffect(()=>{
      episodesFilter = {...episodesFilter, 'page': page}
      dispatch(applyEpisodesFilter({...episodesFilter}))
  },[page])

  useEffect(()=>{
    getEpisodeData(episodesFilter)
  },[])

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
          {!episodesData&&<>
            <div style={{textAlign: 'center', width: '100%', padding: '10% 0%'}}>
            <p style={{textAlign:'center'}}>No Results Found!!!</p>
            </div>
          </>}
        </Grid>
      </div>
      <br/><br/>
      <div style={{margin: 'auto',width: '50%'}}>
        {episodesData&&episodesData.info&&<>
          <Pagination count={episodesData.info.pages} page={page} color="primary" onChange={handlePage}/>
        </>}
      </div>
      {isEpisodesLoading&&<><PageLoading /></>}
    </div>
  )
}

export default EpisodesLayout