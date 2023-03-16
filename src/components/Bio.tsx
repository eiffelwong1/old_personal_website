import { Box } from '@chakra-ui/layout'
import './App.css'

interface Props {
    year: string
    title: string
}

function Bio( props:Props ) {
  return (
    <Box bg = "lightblue">
        <p> <span>{props.year}</span>         {props.title} </p>
    </Box>
  )
}

export default Bio