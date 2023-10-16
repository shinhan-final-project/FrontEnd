import Chart from "react-apexcharts";
import style from "./StockChart.module.css";

const StockChart = ({ data }) => {
  return (
    <div className={style.chartWrap}>
      <Chart
        type="line"
        series={[{ data: [19, 26, 20, 9] }]}
        options={{ chart: { height: 500, width: 500 } }}
      ></Chart>
    </div>
  );
};

export default StockChart;