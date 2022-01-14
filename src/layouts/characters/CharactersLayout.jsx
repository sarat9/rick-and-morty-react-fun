import React, { useEffect, useState, useCallback } from 'react'
import Grid from '@mui/material/Grid';
import axios from 'axios'
import CharacterCard from '../../components/Character/CharacterCard'
import { setCharactersData } from '../../actions/charactersAction'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Pagination from '@mui/material/Pagination';
import { debounce } from "lodash";
import usePagination from './../../hooks/usePagination'
import PageLoading from '../../components/Loading/PageLoading'

function CharactersLayout(props) {
  
  const [characterData, setCharacterData]  = useState([])
  const [isCharactersLoading, setCharactersLoading]  = useState(false)
  let [filter, setFilter]  = useState({})
  const [page, handlePage, resetPage]  = usePagination(1)

  const getCharactersData = (opts={}) => {
    let params  = ''
    setCharactersLoading(true)
    Object.keys(opts).forEach(key=>{
      if(opts[key]){ params = params + (params?"&":'') + key+"="+opts[key]}
    })
    let URL = 'https://rickandmortyapi.com/api/character' + '?'+ params
    return axios.get(URL)
      .then(response => response.data)
      .then(data=>{
        console.log(data)
        setCharacterData({...data})
        setCharactersLoading(false)
      })
      .catch(err=>{
        setCharacterData(null)
        setCharactersLoading(false)
    })
  }

  const handleSearchFun = (e) => {
    e.preventDefault()
    let name=e.target.name
    let value=e.target.value
    setFilter({...filter, [name]: value})
  }

  const handleSearch = useCallback(debounce(handleSearchFun, 500), []);

  useEffect(()=>{
    filter = {...filter, 'page': page}
    getCharactersData(filter)
  },[page])
  
  useEffect(()=>{
    resetPage()
    getCharactersData(filter)
  },[filter])

  return (
    <div className='characters-layout-page'>
      <h6>Characters</h6>
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
          {characterData&&characterData.results&&characterData.results.map(item=>{
            return <>
              <Grid item xs={6} md={3}>
                  <CharacterCard 
                    name={item.name}
                    imageSrc={item.image}
                    status={item.status}
                    species={item.species}
                  />
              </Grid>
            </>
          })}
          {!characterData&&<>
            <div style={{textAlign: 'center', width: '100%', padding: '10% 0%'}}>
            <p style={{textAlign:'center'}}>No Results Found!!!</p>
            </div>
          </>}
        </Grid>
      </div>
      <br/><br/>
      <div style={{margin: 'auto',width: '50%'}}>
        {characterData&&characterData.info&&<>
          <Pagination count={characterData.info.pages} page={page} color="primary" onChange={handlePage}/>
        </>}
      </div>
      {isCharactersLoading&&<><PageLoading /></>}
    </div>
  )
}

export default CharactersLayout