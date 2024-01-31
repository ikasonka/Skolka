import "./Activities.css";

const Activities = () => {
  return (
    <>
      <section className="activities-section">
        <h2 className="section-heading">Hello from Activities</h2>

        <div className="activities-zážitky">
          <div className="event__body">
            <div className="event__left">
              <img
                src="https://smartyschool.stylemixthemes.com/kindergarten-two/wp-content/uploads/2016/02/event2.jpg"
                alt="event2"
              />
            </div>

            <div className="event__content">
              <div className="event__meta">
                <p>10. decembra</p>
              </div>
              <h5 className="event__title">Zimné radovánky</h5>
              <div className="event__excerpt">
                Váľanie sa v snehu, zdobenie stromčeka a tried, pečenie
                medovníčkov. To všetko patrí k Vianociam, ktoré sa blížia.
              </div>
            </div>
          </div>

          <div className="event__body">
            <div className="event__left">
              <img
                src="https://smartyschool.stylemixthemes.com/kindergarten-two/wp-content/uploads/2016/02/event2.jpg"
                alt="event2"
              />
            </div>

            <div className="event__content">
              <div className="event__meta">
                <p>6. decembra</p>
              </div>
              <h5 className="event__title">Mikuláš</h5>
              <div className="event__excerpt">
                Prišiel k nám Mikuláš a rozdal všetkým deťom sladké balíčky.
                Deti mu zaspievali, zarecitovali a veľmi si to užili.
              </div>
            </div>
          </div>

          <div className="event__body">
            <div className="event__left">
              <img
                src="https://smartyschool.stylemixthemes.com/kindergarten-two/wp-content/uploads/2016/02/event2.jpg"
                alt="event2"
              />
            </div>

            <div className="event__content">
              <div className="event__meta">
                <p>6. decembra</p>
              </div>
              <h5 className="event__title">Mr. Bubble</h5>
              <div className="event__excerpt">
                Prišiel nás navštíviť Mr. Bubble, ktorý spravil krásnu
                bublinkovú šou. Deti sa smiali a pozorovali, koľkými spôsobmi sa
                dajú bubliny nafúkať. Bola to veľká zábava.
              </div>
            </div>
          </div>

          <div className="event__body">
            <div className="event__left">
              <img
                src="https://smartyschool.stylemixthemes.com/kindergarten-two/wp-content/uploads/2016/02/event2.jpg"
                alt="event2"
              />
            </div>

            <div className="event__content">
              <div className="event__meta">
                <p>30. novembra</p>
              </div>
              <h5 className="event__title">Prednáška proti šikane</h5>
              <div className="event__excerpt">
                Navštívil nás vzácny hosť pán Mgr. Miroslav Schlesinger, ktorý
                je odborník na prevenciu voči šikane. Napísal viacero kníh
                venované deťom.
              </div>
            </div>
          </div>
        </div>

        <button className="activities-button">Chcem vedieť viac :P</button>
      </section>
    </>
  );
};

export default Activities;
