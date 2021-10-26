const data = [
{ place: "Los Angeles, CA, USA", values: [
  { month: "Jan", degreesC: 13.7 },
  { month: "Feb", degreesC: 14.2 },
  { month: "Mar", degreesC: 14.4 },
  { month: "Apr", degreesC: 15.6 },
  { month: "May", degreesC: 17.0 },
  { month: "Jun", degreesC: 18.7 },
  { month: "Jul", degreesC: 20.6 },
  { month: "Aug", degreesC: 21.3 },
  { month: "Sep", degreesC: 21.0 },
  { month: "Oct", degreesC: 19.3 },
  { month: "Nov", degreesC: 16.4 },
  { month: "Dec", degreesC: 13.8 }] },
{ place: "Miami, FL, USA", values: [
  { month: "Jan", degreesC: 6.9 },
  { month: "Feb", degreesC: 9.0 },
  { month: "Mar", degreesC: 11.7 },
  { month: "Apr", degreesC: 16.1 },
  { month: "May", degreesC: 20.9 },
  { month: "Jun", degreesC: 26.2 },
  { month: "Jul", degreesC: 28.5 },
  { month: "Aug", degreesC: 27.2 },
  { month: "Sep", degreesC: 24.5 },
  { month: "Oct", degreesC: 18.6 },
  { month: "Nov", degreesC: 11.7 },
  { month: "Dec", degreesC: 7.5 }] },
{ place: "London, UK", values: [
  { month: "Jan", degreesC: 3.8 },
  { month: "Feb", degreesC: 4.0 },
  { month: "Mar", degreesC: 5.8 },
  { month: "Apr", degreesC: 7.9 },
  { month: "May", degreesC: 11.3 },
  { month: "Jun", degreesC: 14.4 },
  { month: "Jul", degreesC: 16.5 },
  { month: "Aug", degreesC: 16.1 },
  { month: "Sep", degreesC: 13.8 },
  { month: "Oct", degreesC: 10.8 },
  { month: "Nov", degreesC: 6.6 },
  { month: "Dec", degreesC: 4.7 }] },
{ place: "Novosibirsk, RUS", values: [
  { month: "Jan", degreesC: -16.0 },
  { month: "Feb", degreesC: -15.8 },
  { month: "Mar", degreesC: -7.5 },
  { month: "Apr", degreesC: 1.6 },
  { month: "May", degreesC: 10.4 },
  { month: "Jun", degreesC: 16.1 },
  { month: "Jul", degreesC: 18.3 },
  { month: "Aug", degreesC: 16.2 },
  { month: "Sep", degreesC: 10.1 },
  { month: "Oct", degreesC: 2.1 },
  { month: "Nov", degreesC: -8.3 },
  { month: "Dec", degreesC: -14.8 }] }];



$(() => {
  $("#chart").dxChart({
    dataSource: Array.from(dataTransformer.flattenOneToN(data)),
    commonSeriesSettings: {
      argumentField: "month",
      valueField: "degreesC",
      type: "line" },

    seriesTemplate: {
      nameField: "place" } });


});