import * as Stream from 'stream';
import * as request from 'request';
import { splitEvery } from './util';
import * as PlotlyAPI from './plotly-api';

export class Plot {
  private readable: Stream.Readable;
  public stream_buffersize: number;
  public port: number;
  constructor(port: number = 45921) {
    this.port = port || 45921;
    this.readable = new Stream.Readable();
    this.stream_buffersize = 1024;
  }

  plot(data: PlotlyAPI.Data[], layout: PlotlyAPI.Layout, opts?: PlotlyAPI.Config) {
    let default_opts: PlotlyAPI.Config = {
      responsive: true,
      editable: false,
      scrollZoom: false,
    };
    opts = opts || default_opts;
    this.readable.pipe(request.post(`http://0.0.0.0:${this.port}/nplot/`));
    splitEvery(
      JSON.stringify({
        data,
        layout,
        opts: Object.assign(default_opts, opts),
      }),
      this.stream_buffersize
    ).forEach(x => this.readable.push(x));
    this.readable.push(null);
  }
}

export * from './plotly-api';
