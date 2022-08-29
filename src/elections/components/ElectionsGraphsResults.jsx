import { Avatar, Grid } from '@mui/material';
import { Box } from '@mui/system';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
import { getData } from '../../helpers';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export const options = {
  responsive: true,
  plugins:{
    legeng:{
      display:true
    }
  }

};

export const  randomNum = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const labels = ['Candidato', 'Candidato', 'Candidato', 'Candidato'];
const scores = [randomNum(1000),randomNum(1000),randomNum(1000), randomNum(1000),1000]

export const data = {
  labels,
  datasets:[
    {
      label: 'Votos',
      data: scores,
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    }
  ]
}

export const ElectionsGraphsResults = (props) =>{
  const { indexId, lastIndexId} = props
  const images = getData(indexId, lastIndexId)
  return(
    <Box>
      <Grid container direction='column'
        justifyContent="center"
        alignItems="center" >
        <Grid item sx={{width:'70%'}}>
          <Bar options={options} data={data}/>
        </Grid>
      </Grid>
      <Grid container direction='row' justifyContent='center' >
        { labels.map((label, index) =>(
            <Grid item key={index} sx={{marginLeft:'80px', marginRight:'80px'}}>
              <Avatar src={images[index]}/>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}
