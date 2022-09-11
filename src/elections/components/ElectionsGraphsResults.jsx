import { Grid } from '@mui/material';
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

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


export const ElectionsGraphsResults = (props) =>{

  const options = {
    responsive: true,
    plugins:{
      legeng:{
        display:true
      }
    }
  };

  const  randomNum = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const labels = ['Candidatos a Presidente'];
  const scores = [randomNum(1000),1000]
  const scores2 = [randomNum(1000), 1000]
  const scores3 = [randomNum(1000), 1000]
  const scores4 = [randomNum(1000), 1000]
  
  const data = {
    labels,
    datasets:[
      {
        label: 'Candidato1',
        data: scores,
        backgroundColor: "rgb(" + randomNum(255) + "," + randomNum(255) + "," + randomNum(255) + ")"
      },
      {
        label: 'Candidato2',
        data: scores2,
        backgroundColor: "rgb(" + randomNum(255) + "," + randomNum(255) + "," + randomNum(255) + ")"
      },
      {
        label: 'Candidato3',
        data: scores3,
        backgroundColor: "rgb(" + randomNum(255) + "," + randomNum(255) + "," + randomNum(255) + ")"
      },
      {
        label: 'Candidato4',
        data: scores4,
        backgroundColor: "rgb(" + randomNum(255) + "," + randomNum(255) + "," + randomNum(255) + ")"
      }
    ]
  }


  return(
    <Box>
      <Grid container direction='column'
        justifyContent="center"
        alignItems="center" >
        <Grid item sx={{width:'70%'}}>
          <Bar options={options} data={data}/>
        </Grid>
      </Grid>
    </Box>
  )
}
