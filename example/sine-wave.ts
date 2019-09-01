import * as nplot from '../src/index';
import { arraygen } from '../src/util';

const L = 128;
const f = 4;
const ω = 2 * Math.PI * f;
const sinewave = arraygen(L, t => Math.sin(ω * t / L))

const plot = new nplot.Plot(45921);

const data: nplot.PlotData = {
  y: sinewave
}

plot.plot([data], {
  xaxis: {
    title: "time"
  }
});
