import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./Loading.css";

const Loading = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const to = params.get("to") || "/";

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(to, { replace: true });
    }, 500000); // ✅ 1.2 seconds (perfect UX)

    return () => clearTimeout(timer);
  }, [navigate, to]);

  return (
    <div className="loading-page">
      <div className="brand-box">
        <h1 className="brand">CorVex</h1>
        <div className="premium-loader" />
        <p className="loading-text">Preparing your experience</p>
      </div>
    </div>
  );
};

export default Loading;
