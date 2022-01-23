import React, { useEffect, useState, useCallback } from 'react'
import Grid from '@mui/material/Grid';
import axios from 'axios'
import CharacterCard from '../../components/Character/CharacterCard'
import Paper from '@mui/material/Paper';
import PageLoading from '../../components/Loading/PageLoading'
import { useParams } from 'react-router-dom';

function CharacterLayout(props) {
  
  const { id } = useParams();
  const [characterData, setCharacterData]  = useState(null)
  const [isCharactersLoading, setCharactersLoading]  = useState(false)

  const getCharacterData = (id) => {
    setCharactersLoading(true)
    let URL = 'https://rickandmortyapi.com/api/character/'+ id
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

  useEffect(()=>{
    getCharacterData(id)
  },[])

  return (
    <div className='character-layout-page'>
      <br/>
      <div>
        <Grid container spacing={2}>
          {characterData&&characterData&& <>
              <Grid item xs={6} md={3}>
                  <CharacterCard 
                    name={characterData.name}
                    imageSrc={characterData.image}
                    status={characterData.status}
                    species={characterData.species}
                  />
              </Grid>
              <Grid item xs={6} md={9}>
                  <Paper style={{padding: '15px'}}>
                      <p>He is <b>{characterData.name}</b>. He is one of {characterData.species} species.</p>
                      <p> He is from {characterData.origin.name} and currently residing in {characterData.location.name}.</p>
                      <p> He is casted in <b>{characterData.episode.length}</b> episodes</p>
                  </Paper>
              </Grid>
            </>
          }
          {!characterData&&<>
            <div style={{textAlign: 'center', width: '100%', padding: '10% 0%'}}>
            <p style={{textAlign:'center'}}>No Results Found!!!</p>
            </div>
          </>}
        </Grid>
      </div>
      <br/><br/>
    
      {isCharactersLoading&&<><PageLoading /></>}
    </div>
  )
}

export default CharacterLayout