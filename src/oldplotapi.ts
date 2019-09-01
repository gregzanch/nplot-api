
export interface LineConfig {
  dash?: string;
  width?: number;
  color?: string;
  shape?: string;
  simplify?: boolean;
}
export interface PlotMeta {
  columnNames?: ColumnNames;
}
export interface ColumnNames {
  x?: string;
  y?: string;
}
export interface GradientConfig {
  type?: string;
}
export interface PlotMarker {
  size?: number;
  symbol?: string;
  opacity?: number;
  color?: string;
  line?: LineConfig;
  gradient?: GradientConfig;
  maxdisplayed?: number;
}
export interface VisibleObject {
  visible?: boolean;
}
export interface SelectionObject {
  marker?: PlotMarker;
}
export interface FontObject {
  family?: string;
  size?: number;
}
export interface LabelObject {
  namelength?: number;
  font?: FontObject;
  align?: string;
}
export interface PlotData {
  fill?: string;
  line?: LineConfig;
  meta?: PlotMeta;
  x?: number[];
  y?: number[];
  mode?: string;
  name?: string;
  type?: string;
  marker?: PlotMarker;
  visiable?: boolean;
  fillcolor?: string;
  xaxis?: string;
  yaxis?: string;
  showlegend?: boolean;
  legendgroup?: string;
  xcalendar?: string;
  ycalendar?: string;
  stackgroup?: string;
  text?: string;
  hovertext?: string;
  connectgaps?: boolean;
  cliponaxis?: boolean;
  hoveron?: string;
  hovertemplate?: string;
  error_y?: VisibleObject;
  error_x?: VisibleObject;
  selected?: SelectionObject;
  unselected?: SelectionObject;
  opacity?: number;
  hoverinfo?: string;
  hoverlabel?: LabelObject;
}
export interface PlotOpts {
  responsive?: boolean;
  editable?: boolean;
  scrollZoom?: boolean;
}

export enum FontFamily {
  "Arial", "Balto", "Courier New", "Droid Sans",
  "Droid Serif", "Droid Sans Mono", "Gravitas One",
  "Old Standard TT", "Open Sans", "Overpass",
  "PT Sans Narrow", "Raleway", "Times New Roman"
}

export interface PlotFont {
  family?: keyof typeof FontFamily;
  size?: number;
  color?: string;
}

export enum PlotAxisRef {
  "container", "paper"
}

export enum PlotXAnchor {
  "auto", "left", "center", "right"
}

export enum PlotYAnchor {
  "auto", "top", "middle", "bottom"
}

export interface PlotPad {
  t: number;
  b: number;
  l: number;
}

export interface PlotTitle {
  text?: string;
  font?: PlotFont;
  xref?: keyof typeof PlotAxisRef;
  yref?: keyof typeof PlotAxisRef;
  x?: number;
  y?: number;
  xanchor?: keyof typeof PlotXAnchor;
  yanchor?: keyof typeof PlotYAnchor;
  pad?: PlotPad;
}



export interface PlotAxisLayout {
  type?: string;
  dtick?: number;
  range?: number[];
  tick0?: number;
  ticks?: string;
  title?: string | PlotTitle;
  mirror?: string;
  nticks?: number;
  showline?: boolean;
  tickmode?: string;
  autorange?: boolean;
  linecolor?: string;
}

export enum PlotOrientation {
  "v", "h"
}

export enum PlotTraceOrder {
  "reversed", "grouped", "reversed+grouped", "normal"
}
export interface PlotLegendLayout {
  bgcolor: string;
  bordercolor: string;
  font: PlotFont
  x: number;
  y: number;
  xanchor: string;
  traceorder: keyof typeof PlotTraceOrder;


  /** Sets the amount of vertical space (in px) between legend groups.
   * @type {number} number greater than or equal to 0
   * @memberof PlotLegendLayout
   * @default 10
   */
  tracegroupgap: number;
  borderwidth: number;
  orientation: keyof typeof PlotOrientation;
}



enum DragMode {
  "orbit", "turntable", "zoom", "pan", false
}


export interface PlotLayout {
  title?: string | PlotTitle;
  xaxis?: PlotAxisLayout;
  yaxis?: PlotAxisLayout;
  legend?: PlotLegendLayout;
  autosize?: boolean;
  dragmode?: keyof typeof DragMode;
}
