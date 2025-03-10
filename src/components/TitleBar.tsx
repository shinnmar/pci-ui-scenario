import { AppEnums } from "../enums/App.enums";

interface TitleBarProps {
  onClear: () => void;
}

const TitleBar = ({ onClear }: TitleBarProps) => {
  return (
    <div className="title-container">
      <h1>{AppEnums.TITLE_PAGE}</h1>
      <button className="btn-filter" onClick={onClear}>Clear Filters and Sorters</button>
    </div>
  );
};

export default TitleBar;
