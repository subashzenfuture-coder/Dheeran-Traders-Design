import { Chart } from "../charts/Chart";
import { StackCard } from "../stackcards/StackCard";
import "./dashboard.css";
import "../../assets/css/style.css";
import { Breadcrumb } from "../breadcrumb/BreadCrumb";
import { StockMaintanence } from "../tables/StockMaintanence";

export const Dashboard = () => {
  return (
    <>

      <StackCard />
      <Chart />
      <div className="mt-4">
        <StockMaintanence/>
      </div>
    </>
  );
};
