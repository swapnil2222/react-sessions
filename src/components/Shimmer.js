const Shimmer = () => {
  return (
    <div className="shimmer-list">
      {Array(15)
        .fill("")
        .map((el, index) => (
          <div className="shimmer-card" key={index}></div>
        ))}
    </div>
  );
};
export default Shimmer;
