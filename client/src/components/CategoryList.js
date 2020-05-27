import React, { useState, useEffect, useContext } from 'react'
import { CardGroup } from 'react-bootstrap'
import CategoryCard from '../components/CategoryCard'
import { Gamepad, Group, Spa, Bike, Cafeteria } from 'grommet-icons'
import { Grid, Box, Heading } from 'grommet'

const CategoryList = () => {
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    const getCategories = async () => {
      const response = await fetch('/api/categories')
      const data = await response.json()
      setCategories(data)
      console.log(data)
    }
    getCategories()
  }, [])

  const icons = [
    <Group size='large' />,
    <Gamepad size='large' />,
    <Spa size='large' />,
    <Bike size='large' />,
    <Cafeteria size='large' />
  ]

  return (
    <Box>
      <Heading
        margin={{ left: '8%', bottom: 'medium', top: 'medium' }}
        textAlign='center'
        responsive='true'
        color='#444444'
      >
        Categories
      </Heading>
      <Grid
        justify='center'
        alignContent='center'
        responsive='true'
        rows='medium'
        margin={{ bottom: 'medium' }}
        columns={['auto', '1/2']}
      >
        {categories &&
          categories.map((category, i) => (
            <CategoryCard
              icon={icons[i]}
              key={category.id}
              category={category}
              id={category.id}
            />
          ))}
      </Grid>
    </Box>
  )
}

export default CategoryList
