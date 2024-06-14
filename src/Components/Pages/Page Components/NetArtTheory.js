import React from "react";

const ExamEssay = () => (
  <section className="essay">
    <h1 className="essay-title">Making Music Related NetArt</h1>
    <h2 className="author">By Sihle Mazibuko</h2>
    <article className="essay-content">
      <figure className="essay-cover"></figure>
      <figure className="essay-img"></figure>

      <h3 className="para-head">Intro</h3>

      <p></p>
      <h3 className="para-head">Research</h3>

      <p>
        Music has a strong influence on the human brain and emotions, as
        evidenced by the studies used to justify the use of music as a theme.
        Research by Salimpoor et al. reveals that listening to music triggers
        the release of dopamine, a chemical associated with pleasure and reward,
        in different parts of the brain. Juslin and Västfjäll identify six
        underlying mechanisms explaining how music evokes emotions, ranging from
        automatic reflexes to complex cognitive processes. Koelsch's study
        explores the neural mechanisms responsible for music-evoked emotions,
        emphasizing the extensive network of brain areas involved in processing
        music. Additionally, Tarr, Launay, and Dunbar highlight the role of
        music in creating social bonding, shedding light on the psychological
        and physiological means that enhance feelings of unity and connectedness
        when engaging with music. These findings highlight the transformative
        power of music and its potential to enrich our lives, making it an ideal
        theme for this webapp.
      </p>
      <figure className="essay-img"></figure>

      <h3 className="para-head">So Why Music?</h3>

      <p>
        As music's captivating energy flows through every aspect of this site,
        the theme isn't just about aesthetics; it's about capturing the essence
        of music and translating it into an addictive user experience. Here,
        you'll find a rich cateloge of music-related content, designed to draw
        you in like a powerful song. This website serves as a portfolio, but its
        purpose expands beyond showcasing my talents as a web
        developer/designer. It aspires to create a curated music experience, a
        journey of discovery through various art forms that intertwine with
        music. This is seen through the UI elements, the art present in the site
        and also the page dedicated to helping the user discover new music.
        Ultimately, this theme reflects the belief that a shared passion for
        music can be a beautiful thing, channelling both artistic creation and
        an unforgettable online experience.
      </p>

      <h3 className="para-head">Rationale</h3>

      <p></p>

      <h3 className="para-head">Inspirations</h3>

      <p></p>
      <h3 className="para-head">Understanding the actual artwork</h3>

      <p></p>
      <h3 className="para-head">How was it made?</h3>

      <p></p>

      <h3 className="para-head">Technical concerns and solutions</h3>

      <p>
        In developing the netart for this web application powered by the Last.fm
        API, the primary technical focus revolves around API integration and
        efficient data handling. Securely managing our API key ensures
        authorized access to Last.fm’s data, vital for fetching information on
        the top music genres and artists dynamically. Asynchronous JavaScript
        operations, such as “async/await”, guide the smooth handling of API
        requests and responses, ensuring our application remains responsive at
        all times.Error handling mechanisms are in place to manage network
        interruptions, API rate limits, and unexpected data formats, providing
        users with clear feedback in case of issues. By structuring and
        transforming JSON data effectively, we prepare it for optimal display
        within our user interface. These technical considerations form the
        foundation for delivering a reliable and engaging user experience,
        ensuring our application meets both functional requirements and user
        expectations.
      </p>

      <h3 className="para-head">Conclusion</h3>

      <p></p>

      <figure className="essay-img"></figure>
    </article>
    <section className="references">
      <h4 className="references-title">Credits:</h4>
      <ul className="reference-list"></ul>
    </section>
  </section>
);

export default ExamEssay;
