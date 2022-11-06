import './App.css';
import Date from "./components/taskViwer"
import Grid from '@mui/material/Grid';
const App=()=>
{
  return (
    <>
    <Grid container  >
               <Grid xs={9}> <Date /></Grid> 
               <div id="seperator" style={{borderLeft:100,borderColor:"black",borderStyle:"solid"}}></div>

               <Grid xs={2}>

                        <h2>welcome..</h2>
               </Grid>
    </Grid>

     

    </>
  );
}

export default App;
