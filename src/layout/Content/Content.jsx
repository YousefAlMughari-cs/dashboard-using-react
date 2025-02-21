import "./Content.css";
import ContentTop from "../../components/ContentTop/ContentTop";
import ContentMain from "../../components/ContentMain/ContentMain";

export default function Content() {
  return (
    <div className="main-content">
      <ContentTop />
      <ContentMain />
    </div>
  );
}
