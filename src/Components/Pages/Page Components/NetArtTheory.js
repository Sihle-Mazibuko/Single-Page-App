import React from "react";

const ExamEssay = () => (
  <section className="essay">
    <h1 className="essay-title">Making Music Related NetArt</h1>
    <h2 className="author">By Sihle Mazibuko</h2>
    <article className="essay-content">
      <figure className="essay-cover"></figure>
      <figure className="essay-img"></figure>

      <h3 className="para-head">Intro</h3>

      <p>
        In the modern digital age, the intersection of art and technology has
        not only transformed how we create and consume visual experiences but
        also revolutionized our interaction with data. One example of this is
        the net art found on this site, a dynamic and visually captivating
        representation of music genres sourced from the Last.fm API. This essay
        explores the evolution and significance of the net art graph, examining
        how it merges the principles of interactive design with the expressive
        potential of data visualization. By delving into its creation,
        functionality, and impact, we uncover how this innovative approach not
        only enhances user engagement but also enriches our understanding and
        appreciation of musical world.
      </p>
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

      <p>
        The net art in this application visually represents music genres sourced
        from the Last.fm API, providing users with an engaging and interactive
        way to explore and discover different musical styles. By leveraging
        D3.js within a React environment, the net art graph dynamically renders
        bar charts where each bar symbolizes a genre, scaled to reflect the
        genre's popularity or another metric. This visualization not only
        enhances user engagement through interactive features like hover
        tooltips and genre selection but also offers a clear and intuitive
        interface for browsing genre-specific information. The integration of
        responsive design principles ensures that the net art graph adapts
        seamlessly to various device sizes, enhancing accessibility and
        usability across different platforms. Overall, the net art plays a
        pivotal role in facilitating music genre exploration while showcasing
        the application's capabilities in combining data visualization with
        user-friendly interactivity.
      </p>

      <h3 className="para-head">Understanding the actual artwork</h3>

      <p>
        This NetArt integrates React with D3.js to create a dynamic genre
        visualization tool. The Map component manages API data fetching, search
        functionality, and conditional rendering of the Graph and GenreCard
        components. Graph uses D3 for interactive bar graph creation, while
        GenreCard presents detailed genre information. Together, they provide a
        responsive and interactive user experience focused on exploring music
        genres fetched from the Last.fm API. To simply put it the graph a sort
        of city skyline that serves to inform on varied genres depending on the
        bar chosen. This artwork is inspired by the site
        <a href="https://musicmap.info/">musicmap</a> as they both display bar
        graphs that are also similar to a city skyline and each bar hold info on
        a genre.
      </p>

      <h3 className="para-head">Technical concerns and solutions</h3>

      <p>
        In developing the netart for this web application powered by the LastFM
        API, the primary technical focus revolves around API integration and
        efficient data handling. Securely managing our API key ensures
        authorized access to LastFM data, vital for fetching information on the
        top music genres and artists dynamically. Asynchronous JavaScript
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

      <p>
        The net art graph showcased here combines art and technology in a way
        that brings music genres to life. It's more than just a visual
        representation—it's a tool that lets users explore and enjoy different
        kinds of music interactively. By using React and D3.js, the graph works
        well on different devices, making it easy for everyone to discover new
        music genres. This graph isn't just about showing data; it's about
        making music discovery fun and accessible. It shows how art and
        technology can work together to create something cool and useful for
        music lovers everywhere.
      </p>

      <figure className="essay-img"></figure>
    </article>
    <section className="references">
      <h4 className="references-title">Credits:</h4>
      <ul className="reference-list">
        <li>
          Crauwels, K. (2016). Musicmap | The Genealogy and History of Popular
          Music Genres. [online] Musicmap.info. Available at:
          https://musicmap.info/.
        </li>
        <li>
          LastFM (n.d.). API Docs. [online] Last.fm. Available at:
          https://www.last.fm/api.
        </li>
      </ul>
    </section>
  </section>
);

export default ExamEssay;
