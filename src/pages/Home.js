import React from 'react';
import './Page.css';
import './Home.css';

function Home() {
  return (
    <div className="page">

      <section className="home-section">
        <span className="home-eyebrow">Our Program</span>
        <h2 className="home-section-title">Bars Beyond Bars</h2>
        <p className="home-section-text">
          For the past 11 years, Free Youth Services has operated Bars Beyond Bars, a music recording
          program that gives incarcerated youth the opportunity to write, record, and produce original
          music in a professional studio environment. Bars Beyond Bars currently operates in all three
          Hudson Valley youth detention centers and has worked with more than 1,000 incarcerated youth
          to date, averaging over 2,000 recorded songs each year.
        </p>

        <div className="home-stats">
          <div className="home-stat">
            <span className="home-stat-number">11</span>
            <span className="home-stat-label">Years of Programming</span>
          </div>
          <div className="home-stat">
            <span className="home-stat-number">1,000+</span>
            <span className="home-stat-label">Youth Served</span>
          </div>
          <div className="home-stat">
            <span className="home-stat-number">2,000+</span>
            <span className="home-stat-label">Songs Recorded Each Year</span>
          </div>
          <div className="home-stat">
            <span className="home-stat-number">3</span>
            <span className="home-stat-label">Hudson Valley Facilities</span>
          </div>
        </div>
      </section>

      <section className="home-section home-section--divided">
        <span className="home-eyebrow">Our Impact</span>
        <h2 className="home-section-title">A Creative Outlet at a Critical Time</h2>
        <p className="home-section-text">
          Bars Beyond Bars has become the most popular program offered within these facilities, with
          the majority of youth participating on a weekly basis. The program provides young people with
          a creative outlet for self-expression, emotional development, confidence building, and skill
          development during a critical period in their lives.
        </p>
      </section>

      <section className="home-section home-section--divided">
        <span className="home-eyebrow">Looking Ahead</span>
        <h2 className="home-section-title">Expanding Our Reach</h2>
        <p className="home-section-text">
          Building on the success of Bars Beyond Bars, Free Youth Services aims to expand and develop
          additional programs throughout New York State youth detention centers. Our approach centers
          on direct input and feedback from the youth we serve. By introducing pilot programs and
          evaluating participation, engagement, and enthusiasm, we identify which initiatives have the
          greatest impact and potential for long-term success.
        </p>
        <p className="home-section-text home-section-text--spaced">
          Through this strategy, Free Youth Services seeks to provide incarcerated youth with access
          to transformative opportunities at a time when positive resources and enrichment programs
          are often limited.
        </p>
      </section>

      <section className="home-section home-section--divided">
        <span className="home-eyebrow">Our Partners</span>
        <h2 className="home-section-title">Institutional Relationships</h2>
        <div className="home-partner-grid">
          <div className="home-partner">
            <img src="/GWI2.png" alt="Good Work Institute" className="home-logo" />
            <p className="home-partner-text">
              Free Youth Services operates under the fiscal sponsorship of the Good Work Institute
              (GWI), a registered 501(c)(3) nonprofit based in New York's Hudson Valley. GWI
              supports a diverse network of people and organizations committed to building
              regenerative, just, and life-affirming communities.
            </p>
            <p className="home-partner-text" style={{ marginTop: '10px' }}>
              Through this partnership, donors can contribute to Free Youth Services with the same
              confidence and tax benefits as giving to a traditional nonprofit — ensuring every
              dollar goes directly toward transforming the lives of at-risk youth across New York
              State.
            </p>
          </div>
<div className="home-partner">
            <img src="/NYSlogo.jpeg" alt="New York State" className="home-logo" />
            <p className="home-partner-text">
              Over the years, Free Youth Services has secured over $1 million in contracts from the
              New York State Office of Children and Family Services — the state agency responsible
              for overseeing youth detention facilities across New York. Through this longstanding
              partnership, Free Youth Services has built strong, trusted relationships with both the
              young people in these facilities and the staff who serve them.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
