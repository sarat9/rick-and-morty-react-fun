import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import DashboardCard from './../../components/Cards/DashboardCard'
import { withRouter } from 'react-router-dom'


function DashboardLayout(props) {

  let cards = [
    {
      title: "Characters",
      image: 'https://filmdaily.co/wp-content/uploads/2020/05/rick-and-morty-lede-1300x813.jpg',
      path: '/characters'
    },
    {
      title: 'Locations',
      image: 'https://www.denofgeek.com/wp-content/uploads/2014/10/rick-and-morty-season-1-review_0.jpg',
      path: '/locations'
    },
    {
      title: 'Episodes',
      image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/03/Rick-and-Morty-romances.jpg',
      path: '/episodes'
    },
    {
      title: "Game",
      image: 'https://filmdaily.co/wp-content/uploads/2020/05/rick-and-morty-lede-1300x813.jpg',
      path: '/game'
    },
  ]

  function navigateToPage(page) {
    props.history.push(page)
  }

  return (
    <div className='dashboard-layout-page'>
      <Grid container spacing={2}>
        {cards.length>0&&cards.map(card=>{
          return <>
            <Grid item xs={6} md={3} onClick={()=>navigateToPage(card.path)}>
              <DashboardCard 
                title={card.title}
                imageSrc={card.image}
              />
            </Grid>
          </> 
        })}
      </Grid>
    </div>
  )
}

export default withRouter(DashboardLayout)