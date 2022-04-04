import React, { useEffect, useCallback, useState } from "react";
import "./App.css";
import Ballot from "./Components/Ballot/Ballot";
import CustomModal from "./Components/Modal/CustomModal";
import api from "./Api/Api";

function App() {
  const [ballotData, setBallotData] = useState([]);
  const [show, setShow] = useState(false);
  // Feel free to remove the contents of the header tag to make more room for your code
  const getData = useCallback(async () => {
    try {
      const response = await api.getBallotData();
      setBallotData(response.items);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const renderElement = (item) => {
    return item.items.map((element, indexElement) => (
      <>
        <div
          className="grid-item"
          id={`ballotContainer-${element.id}-${indexElement}`}
          key={`ballotContainer-${element.id}-${indexElement}`}
        >
          <Ballot
            title={element.title}
            imageUrl={element.photoUrL}
            keyItem={`ballot-${element.id}-${indexElement}`}
          />
        </div>
      </>
    ));
  };
  return (
    <div id="App" className="App">
      <div>
        <CustomModal
          show={show}
          handleClose={() => {
            setShow(false);
          }}
        >
          <p className="success-caption">SUCCESS</p>
        </CustomModal>
        {ballotData.length > 0 &&
          ballotData.map((item, index) => (
            <>
              <div
                className="category-title"
                id={`title-${index}`}
                key={`title-${index}`}
              >
                <p className="caption-title">{item.title}</p>
              </div>
              <div
                id={`container-${index}`}
                className="grid-container"
                key={`container-${index}`}
              >
                {renderElement(item)}
              </div>
            </>
          ))}
        <div>
          <button
            type="submit"
            className="submit-ballot-button"
            onClick={() => {
              setShow(true);
            }}
          >
            Submit Ballot Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
