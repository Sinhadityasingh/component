import React, { useState, useRef } from "react";
import logoImage from "./download.png";

const CameraCaptureWithTimestamp = () => {
  const [capturedImages, setCapturedImages] = useState([]);
  console.log("state", capturedImages);
  const [dateInput, setDateInput] = useState("Date");
  const [hourInput, setHourInput] = useState("hh");
  const [minuteInput, setMinuteInput] = useState("mm");
  const [secondInput, setSecondInput] = useState("ss");

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("asd", file);
    if (file) {
      if (file.size > 1024 * 1024) {
        alert("File size exceeds 1MB. Please select a smaller file.");
        return;
      }
      const imageUrl = URL.createObjectURL(file);
      const now = new Date();
      const capturedDate = now.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      });
      const capturedDay = now.toLocaleDateString("en-GB", { weekday: "long" });
      const capturedTime = now.toLocaleTimeString();

      const capturedImage = {
        imageUrl: imageUrl,
        timestamp: {
          date: capturedDate,
          day: capturedDay,
          time: capturedTime,
        },
      };
      console.log("capture", capturedImage);
      setCapturedImages((prevImages) => [...prevImages, capturedImage]);

      setDateInput(capturedDate);
      const [hour, minute, second] = capturedTime.split(":");
      setHourInput(hour);
      setMinuteInput(minute);
      setSecondInput(second);
    }
  };
  const handleRemoveImage = (indexToRemove) => {
    setCapturedImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div
      style={{
        // position: "absolute",
        width: "min-content",
        height: "min-content",
        left: "39px",
        top: "172px",
        background: "#FFFFFF",
        borderRadius: "15px",
        border: "1px solid rgba(173, 173, 173, 0.3",
        padding: "20px",
      }}
    >
      <div
        style={{
          // position: "absolute",
          width: "1366px",
          height: "700px",
          left: "39px",
          top: "172px",
          background: "#FFFFFF",
          borderRadius: "15px",
          border: "1px solid rgba(173, 173, 173, 0.3",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* <div
            style={{
              boxSizing: "border-box",
              // position: "absolute",
              width: "1306px",
              height: "463px",
              left: "64px",
              top: "209px",
              border: "1px solid rgba(173, 173, 173, 0.3)",
              borderRadius: "10px",
            }}
          >
            
          </div> */}
          <h2
            style={{
              // position: "absolute",
              width: "115px",
              height: "34px",
              top: "18.95%",
              left: "92px",
              padding: "0",
              gap: "10px",
              opacity: "0px",
              color: "blue",
              fontSize: "20px",
            }}
          >
            Fire Safety
          </h2>
          <label
            htmlFor="picture"
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              // position: "absolute",
              width: "85px",
              height: "30px",
              left: "1237.5px",
              top: "18.95%",
              background: "#FFFFFF",
              border: "1px solid #0073FF",
              borderRadius: "5px",
              color: "blue",
              font: "30px",
            }}
          >
            + Add
            <input
              type="file"
              id="picture"
              name="picture"
              accept="image/*"
              capture="environment"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </label>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <div
            style={{
              // position: "absolute",
              width: "284px",
              height: "369px",
              left: "101px",
              top: "261px",
              border: "1px solid rgba(173, 173, 173, 0.6)",
              borderRadius: "15px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
            }}
          >
            <button
              onClick={() => document.getElementById("picture").click()}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                marginBottom: "20px",
              }}
            >
              <img
                src={logoImage}
                alt="Logo"
                style={{
                  width: "120px",
                  height: "120px",
                  // background: " rgba(173, 173, 173, 0.6)",
                }}
              />
            </button>
            <div
              style={{ marginBottom: "-10px", color: "red", fontSize: "14px" }}
            >
              File Size Limit: not more than 1Mb.
            </div>

            <div
              style={{
                marginBottom: "20px",
              }}
            >
              <h3>Date</h3>
              <input
                type="text"
                value={dateInput}
                style={{
                  width: "230px",
                  height: "20px",
                  top: "27px",
                  gap: "0px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(173, 173, 173, 0.1)",
                  border: "1px solid rgba(173, 173, 173, 0.6)",
                }}
                disabled
              />
            </div>

            <div style={{ marginBottom: "20px", width: "100%" }}>
              <h3>Time</h3>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <input
                        type="text"
                        value={hourInput}
                        onChange={(e) => setHourInput(e.target.value)}
                        style={{
                          width: "30px",
                          left: "10px",
                          borderRadius: "5px",
                          backgroundColor: "rgba(173, 173, 173, 0.1)",
                          border: "1px solid rgba(173, 173, 173, 0.6)",
                        }}
                      />
                    </td>
                    <td>:</td>
                    <td>
                      <input
                        type="text"
                        value={minuteInput}
                        onChange={(e) => setMinuteInput(e.target.value)}
                        style={{
                          width: "30px",
                          borderRadius: "5px",
                          backgroundColor: "rgba(173, 173, 173, 0.1)",
                          border: "1px solid rgba(173, 173, 173, 0.6)",
                        }}
                      />
                    </td>
                    <td>:</td>
                    <td>
                      <input
                        type="text"
                        value={secondInput}
                        onChange={(e) => setSecondInput(e.target.value)}
                        style={{
                          width: "30px",
                          borderRadius: "5px",
                          backgroundColor: "rgba(173, 173, 173, 0.1)",
                          border: "1px solid rgba(173, 173, 173, 0.6)",
                        }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Display captured images */}

          {capturedImages.map((imageData, index) => (
            <div
              style={{
                // position: "absolute",
                width: "284px",
                height: "min-content",
                left: "395px",
                top: "261px",
                border: "1px solid rgba(173, 173, 173, 0.6)",
                borderRadius: "15px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <button
                onClick={() => handleRemoveImage(index)}
                style={{
                  // position: "absolute",
                  display: "flex",
                  float: "right",
                  right: "10%",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "right",
                }}
              >
                x
              </button>
              <div key={index}>
                <img
                  src={imageData.imageUrl}
                  alt={`Captured ${index}`}
                  width="150"
                  height="150"
                />
                <div>
                  <h3>Date</h3>
                  <input
                    type="text"
                    value={`${imageData.timestamp.date} - ${imageData.timestamp.day}`}
                    style={{
                      width: "fit-content",
                      borderRadius: "10",
                      alignItems: "center",
                    }}
                    disabled
                  />
                </div>
                <div>
                  <h3>Time</h3>
                  <input
                    type="text"
                    value={imageData.timestamp.time}
                    style={{ width: "80px" }}
                    disabled
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <video ref={videoRef} width="300" height="200" autoPlay></video>
        <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      </div>
    </div>
  );
};

export default CameraCaptureWithTimestamp;
