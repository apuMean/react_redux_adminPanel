import React,{Component} from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

export default class BarChart extends Component {
  render() {
   
    return (
      <div>
        <Chart
          chartType="BarChart"
          data={[["Element", "Density", { "role": "style" }], ["Copper", 8.94, "#b87333"], ["Silver", 10.49, "silver"], ["Gold", 19.3, "gold"], ["Platinum", 21.45, "color: #e5e4e2"]]}
          options={{"title":"My Daily Activities","pieHole":0.4,"is3D":true}}
          graph_id="ScatterChart"
          width="100%"
          height="300px"
          legend_toggle
        />
      
      </div>
    );
  }
}

