import * as nplot from '../src/index';
import * as fs from 'fs';

const csvstr = fs.readFileSync(`${process.cwd()}/example/assets/heatmap.csv`, 'utf8').split('\n').map(x => x.split(',').map(y => y.length > 0 ? Number(y) : undefined))
const xs = csvstr[0];
const ys = nplot.transpose(csvstr)[0];


const data: nplot.PlotData = {
  z: csvstr.slice(1).map((x, i) => x.slice(1).map((y, j) => {
    const ix = i + 1;
    const iy = j + 1;
    return [xs[ix], ys[iy], y]
  })).flat(1),
  type: 'heatmap'
}


// const plot = new nplot.Plot(45921);
