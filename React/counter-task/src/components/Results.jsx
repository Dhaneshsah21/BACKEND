const Results = ({ query }) => {
  return (
    <div className="mt-3 p-3 bg-gray-50 border rounded text-sm">
      Showing results for: <b>{query || "—"}</b>
    </div>
  );
};

export default Results;
