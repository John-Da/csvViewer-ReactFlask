import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { PageRoutes, Porxy } from "../../Constants";
import "../../index.css";
import "./Waitingroom.css";

function WaitingRoom() {
  const [searchParams] = useSearchParams();
  const fileId = searchParams.get("id");
  const fileName = searchParams.get("filename");
  const fileType = searchParams.get("filetype");

  const [percentage, setPercentage] = useState(0);
  const [backendDone, setBackendDone] = useState(false);
  const [readyDownload, setReadyDownload] = useState(false);
  const [convertedName, setConvertedName] = useState<string>("");

  // Animate progress bar
  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      p += 5;
      if (p > 100) p = 100;
      setPercentage(p);
      if (p === 100) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  // Fetch backend conversion
  useEffect(() => {
    if (!fileId || !fileName || !fileType) return;

    fetch(`${Porxy}${PageRoutes.waitingroompage.path}?id=${fileId}&filename=${fileName}&filetype=${fileType}`)
      .then(res => {
        if (!res.ok) throw new Error("Conversion failed");
        return res.json();
      })
      .then(data => {
        setConvertedName(data.converted_filename);
        setBackendDone(true);
      })
      .catch(err => console.error(err));
  }, [fileId, fileName, fileType]);

  // Enable download only when progress bar reaches 100% AND backend is done
  useEffect(() => {
    if (percentage === 100 && backendDone) {
      setReadyDownload(true);
    }
  }, [percentage, backendDone]);

  // Download converted file
  const handleDownload = async () => {
    if (!fileId || !fileName || !fileType) return;

    try {
      const res = await fetch(`${Porxy}/download/file?id=${fileId}&filename=${fileName}&filetype=${fileType}`);
      if (!res.ok) throw new Error("Download failed");

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = convertedName || fileName || `download.${fileType}`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="emptypage-container">
      <div className="emptypage-topbox">
        <h1>Converting CSV to {fileType?.toUpperCase()}</h1>
      </div>

      <div className="emptypage-bottombox">
        <div className="progresstxt-box">
          <span>
            Please wait ... [ <span className="percentage">{percentage}</span> % ]
          </span>
        </div>
        <div className="progressbar-box">
          <div className="progressbar" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>

      <button
        disabled={!readyDownload}
        onClick={handleDownload}
        className={`downloadBtn ${!readyDownload ? "disabled" : ""}`}
      >
        Download {fileType?.toUpperCase()}
      </button>
    </div>
  );
}

export default WaitingRoom;
