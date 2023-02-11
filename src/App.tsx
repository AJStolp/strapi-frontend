import useFetch from "./hooks/useFetch";

const App = () => {
  const { fetchedData, error } = useFetch({
    url: "http://localhost:1337/api/lakes",
  });

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="App">
      {fetchedData.map((item, index: number) => (
        <div key={index}>
          <h1>{item.attributes.name}</h1>
          <p>{item.attributes.description}</p>
          <p>Depth: {item.attributes.depth}ft.</p>
        </div>
      ))}
    </div>
  );
};

export default App;
