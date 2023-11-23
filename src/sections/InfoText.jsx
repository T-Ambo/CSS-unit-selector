function InfoText() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Interactive CSS unit selector</h1>
      <p style={{ textAlign: "left" }}>
        Welcome to an interactive CSS unit selector! This tool is a digital
        adaptation of Kevin Powell's insightful flowchart designed to assist in
        choosing the optimal CSS unit for your projects.To learn more, watch
        Kevin's video!"
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Utc_uhvTluk?si=fnj7BEvvsIW4Vzp4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default InfoText;
