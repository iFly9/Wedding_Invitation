import useCountdown from "../hooks/useCountdown";

function Countdown() {
  const targetDate = "2026-05-12T10:00:00";
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <section className="container text-center my-5">
      <h2 className="section-title">Wedding Countdown</h2>

      <div className="row mt-4 g-3">
        <div className="col-6 col-md-3">
          <div className="glass-box">
            <h1>{days}</h1>
            <p>Days</p>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="glass-box">
            <h1>{hours}</h1>
            <p>Hours</p>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="glass-box">
            <h1>{minutes}</h1>
            <p>Minutes</p>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="glass-box">
            <h1>{seconds}</h1>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Countdown;