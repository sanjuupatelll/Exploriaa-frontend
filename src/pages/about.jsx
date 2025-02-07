import React from "react";
import "./About.css"; 

const About = () => {
    const teamMembers = [
        { name: "Devon Miles", role: "CEO & Co-Founder", image: "https://s3-alpha-sig.figma.com/img/8c0e/c423/eed2ce1cf7873082d7b52e8ddeb7f4af?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fqWvLrYg4jVnV0p8XgDFtwE7bVpO-oMsp9Ef7anovp5adML34vTrCehBphGDRPvU2m~Ykl0UI7oqu72sqKVWfXAJiKFIHmKTXMawkhiTimPDyLgjj9a~79XQUOsG1~BBmLAgbIk480nXWef6pQdlmVewWHqvfRQSu02UfhKjBZNLtTR4kyNwYUd9XfMupUCU43H7lBnGnWgGcdWJpWMYcQJe0RaDa6styVcR2uwYxBlGVbuirR5-2g61i78Z5996K7HCfcV0oPMfaU3VNe3hm8aFSwqe66nUnrlkZyEhJav4mXKLKVBGAtZLDkDtki75S-Jd9cI~eI~8~s-pOX1dpQ__" },
        { name: "Rick Wright", role: "Co-Founder", image: "https://s3-alpha-sig.figma.com/img/349b/be03/8089228ae7843eb7b3b52ab7deff399f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Kw-YjAEN9aGMqSlie4xfsmR0Z2bCIqHsH5KZHsuu-9K8lnHukKaAivloKxcTRdJZ0UHU~eDdh5bfxedgCr7xuWBnZwULmn24VdLym9P2bPK6Qy-pEPKCeepi2pEVvgRqr1YtjfCqXrrrbu3W7xGNDh3vcUNpkkyvzqMWGDvFgckfEa7OHoI~JR7kfxa9sPNDq79W73MCYxSocQOQs3RUa~X6XLTYeWCPrebt4NlRppepavsmSVq4ZRMRQwj6K6rgVtVBJco6Y06r6j4KIBpr3Aa2jOKmvk~US-pbqpw3EfsX8RSzWFTJYa8x9LrUsuX98swbuCZQ~GSrolz4Bs91HQ__" },
        { name: "Hannibal Smith", role: "Vice President - Growth", image: "https://s3-alpha-sig.figma.com/img/60ab/2d06/152b48184c7417a7d381084be049ecb3?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gcRSwLfSulpkSxaOS28mKPKdauGz8iZDYyAaajypBI9OFreMJezqTBsMS4Zd9AKER7jpVZ4BMTsmwplhwZiag7vzHSY2vBxS5KJXa64JWrS7HSa-MMnjSGIzwntFjqGP2jhM0IvjpPh~9UJWzTZpTsZh7XLUqYIzyYNlTwBBwYIrDBWU8cQ~xhT7hXzlq-Ujzi5Za~Fe7RZUWZpY8FZTK~ASBE0kBsIEnnQ0zedseVMxM2SrzfkdycjWpHSkHmX3nqI9NOgPMFIx7LcSSLcIP57p04w2dfennvWDfDIaF8ic8FKzjLJgmHelm5r4NPwys37xAvc7izf9CDaQb8eHPg__" },
        { name: "Ricky Smith", role: "Vice President - Growth", image: "https://s3-alpha-sig.figma.com/img/66fe/9dfc/f75188ac675218b600e6287beffa87b2?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rKbNNSZs6Df2yTHwzmit-SbwQXfUjCtWeOgMFD~kcNuO~wAu6RtgFveBo71Te26Sx3gyiwSDvFKXeu-GNJpVF9nZgdNPS7cfXJ2P~tXudoDXPtAezAZVF-d8KZWrlJEtxL8JQzIH-7JLN-Cs3A689HloEoRUa2J4l4MYRwIcByUdeAiDBmy7PDZSTCP6GK2UAvVD5oitjyd7h9PLsaMLhb0aCTx641zYP~U2b3R7lcCneKjOfE60aLKouVKRuOVGrp0mI4QGgKsYcjhpOkqDffw-nnvlF0ejTZ1oRM2onZehwnAalM6cJNP5lcEalJAR7ZK3IA~Gh-Qku2RVoS7scw__" },
        { name: "Dennis Callis", role: "Head of Engineering", image: "https://s3-alpha-sig.figma.com/img/184a/e763/2f2f8dc6dc8fa0643792ae6316002d0d?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dgpvkpyxbqSmGkSNACdCC8a4M7o~1hegTlRxsqvYNI7z4UOq2-K~1FDL8lsKxc8o1v3f00wWnPn6e22RmuONLXkgK4Yg76TuziIIGKgpgt-dsRAPGgBPw2BuO4eGsBpJHsXvV49K9n3O~XHG43bGl~3N7xeShMBHbDoxhFkbbiGuREmHzGRfL5OZkkus2t6ffl51xJlSbVF-W6lvA4ffl0ziNKLSGAx7jBePxLBvuMz94dBBspe5yVg5KYF9cpe1-8AoxB9oQ1rB94V9Om2sngU0sOwG2aCP5nJNzWVBXx3NKxAwkD2km5Ud05L9ebNSq7KAGLqx9jf6CDnT4Cxowg__" },
        { name: "Autumn Phillips", role: "SEO Manager", image: "https://s3-alpha-sig.figma.com/img/b17e/fe38/20b26874ba571c710598d6b826720eaf?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KcnHV-2D6zfx1NWDeMn5gifByA~t47rpIdHiIT8cMvTakXMCsR5bojwynAq4eQoxJY5uphCE3YqPigTgqbw8gELFzGtK~42FZD7lB5nQQiN6Riplxw0KBg4GDgu9L7cBmFUtYWcdbR6C-8Hj~hLtaBYN-TjRy50duFVH965ckUS1suzkIvI6HUXZrQmmrh~yjikhU-KOlpJgybxbxwTvdXkTzt~IurKzzToAicfgpLW8F9c4b5z6-FZRXXcuOIt3f4408C3q0YKclpAUM8PVt3SjEbSn4kESvxygytWLNmYwiRtKffy6sBKkPyhqvJUtREF-equqjDfiLi5yGGTa2A__" },
        { name: "John Dukes", role: "Digital Marketing Manager", image: "https://s3-alpha-sig.figma.com/img/877d/5036/6b0d6b26bc5844110974fbd1998a26ab?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pjaLWMKmb6NO5hpuFiRuCNGR2mfxW-97spf~W1d5TIgTQ8zXwh0pVtVZ-BYBt6qm7EJaDTmoN~qmA7oz6CoAihcbSRsewrA1Cz-u-QDLL39ONm48M0uQIDCHRvsJCIw0x7udj6IsRzTb4iwCkA~EbExztEKH37sw2e-btFvWHmL9Wa8gez4jwGZlG0WwE8NAX2hH~Y0QD-vGsbtQbbOtIZ81gF1wbdf00MAB7qqTdi5mIn6NYSVNmKrc~QIjz1CtAPBiIajhXyEpB6crzqWmdXolBLuhYH4xSMTMw3v4ZUoIaUrFGn75dYr4AAj1yPtOZKIyucJvKdEC8LiQM7gCWQ__" },
      ];
      
  return (
    <div className="about-page">
      {/* Section 1 */}
      <section className="hero-section">
        <div className="hero-content">
          <h4 className="brand-name">EXPLORIA</h4>
          <h1>
            Shaping the <span className="highlight">Future Of Travel!</span>
          </h1>
          <p>Changing the Way People Travel the World</p>
        </div>
        <div className="hero-image">
          <img src="https://i.pinimg.com/736x/72/0c/fb/720cfb63d89ca6684d3f0deaf8863e24.jpg" alt="Travel Globe" />
        </div>
      </section>

      {/* Section 2 */}
      <section className="mission-section">
        <div className="mission-image">
          <img src="https://img.freepik.com/free-vector/flying-around-world-with-airplane-concept-illustration_114360-2048.jpg" alt="Plane and Globe" />
        </div>
        <div className="mission-content">
          <h2>
            OUR <span className="highlight">MISSION</span>
          </h2>
          <p>
            At Exploria, we’re redefining the world of travel, creating
            experiences that go beyond just visiting destinations. Our mission
            is to ignite your wanderlust, craft unforgettable memories, and set
            new standards in adventure. Embark on this incredible journey with
            us, where every trip is designed to inspire, captivate, and resonate
            with the heart of every explorer.
          </p>
        </div>
      </section>
        <div className="team-section">
      <h2>
        MEET THE <span className="highlight">ARCHITECTS OF EXPERIENCES</span>
      </h2>
      <p>
        We are a power-packed tribe of <strong>800+</strong> extraordinarily talented &
        passionate professionals
      </p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} />
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
        <div className="team-card join-card">
          <div className="join-info">
            <h3>SEE YOURSELF HERE?</h3>
            <button>JOIN US!</button>
          </div>
        </div>
      </div>
    </div>
    <div> 
    <h2 className="gallery-title">
        EXPLORIA <span className="highlight">PICTURE GALLERY</span>
      </h2>
    <div className="image-container">
        {/* First half with a single large image */}
        <div className="left-column">
          <img
            src="https://s3-alpha-sig.figma.com/img/66c4/a795/1124b6b7a4836fadc61954488028c66a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jsCs10BbR-0WMh8qmNuTCSSNnhHNokMbgVlfszsh~VBf4lYPKfX0Hj3ycmDF3RImRM6MSqZu50c1f7mNijKusuMV5DpevbHhRLHRjjsMbnR2Ic0fqg7~-2xRSAfBv2uMAvlU3NjcUc57SLPl~N3U6aEiQhV6DDFvoVugr-DZPgkou48Qy1K060SQjZtt4-1zQYB7Wt7Nqy8kXltqOswQuYLs3zUFE-X1T4kmUR~fTvgjc5TRAyZFxLOAy0~JjESPCRPpLyTCIs5bb46o4LUSUoQVLNuVdg~Wm43tK~8nEE8nuHE2yjT8YckdswKQpV9s1aJbyK9bbpk9tEZ80ZpNow__"
            alt="Dubai Skyline"
          />
        </div>

        {/* Second half with 4 smaller images */}
        <div className="right-column">
          <div className="small-image">
            <img
              src="https://s3-alpha-sig.figma.com/img/42a4/45f3/e43f156d23af91557c1883cddb93ef30?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lFl66gaMabWpfOrCfrL-0aFtso~YaAbR-tRQHP6CW0f2RCaEhatWBuvIB4af9HoFXDPuemw6dcd4szOXMtgZ1pPgek7YpZY3OPQ2LFsZRpN4cjR~eZQVd0niCU~gFkp9cb0h9qXqqOaducxnGh76gs4g-7CZg7LviYgdqPfShi19FuRtnML-9bWcRKve9nXqg18ofKgAnnB1UXPTYbx0xAzvNBtcKFpY01neo~~bXPRGumkrea6IC5lgD6aMtYyuUDWKH7TZ5C-5Q4PzvzLy2aj02chbErtA1FPA6huCczjdOhr5LZ2XIAAgvJlU4pWAqZn48ovUekDFeoradT2Z7A__"
              alt="Destination"
            />
          </div>
          <div className="small-image">
            <img
              src="https://s3-alpha-sig.figma.com/img/3131/0f58/0728c5ded1ef297638112f57beacb49a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YV68knlw86gz-sGEzMJo1dKVpGYjRw0gTaJuX4kur8uWilgh8o1eThSQILcS5GPETSCfjnP5sLHnuKdYZ0acB~rWOLbzAwn5~ViuC2QHa0iBoYhYBPOJOhamXriLOM2Zho~rqA-JIgFDabk7DCZIKoV07XTTKEkbPJMgNBkAubwBX5Hu4nkTbgLKjfa0Mfr4Nx~yjvge6awSuHe50E~6Wo32pWgzFMvbNx8~koXrOcEN~x-PiEAveTO1P5R~j04235XaGIhTXUr3nwRxQ58tT4TIUtC9OsFQ4zzdCAdN14Npm~DUQJdi7Ai6w~4GveXXaIdAThHIRj-9eyqACXHUwQ__"
              alt="Stay"
            />
          </div>
          <div className="small-image">
            <img
              src="https://s3-alpha-sig.figma.com/img/679f/40ad/6ffb9356bf044befea7ce50fcf7ed04f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=EiDYo7spLwPh~R2uyc8VWainc0ZaXhXn11a8tqa-QtD6wALmRGI7DTwAoXcOgIOS1T1dYIWcTOUodOp2kIuKJCZD2SZ8hEpFhbGQv66f7OCJVbIUwHg1bSwpxn29hPgGV1GaPB~TwYUWVVvndMxwDAasr8-ThtpqSJafWcU-hTodL1ZiebJOsdRhAte1cde3m8PX4YQTDzNQHcI3eOI2wyTJuytGPeJZDL3N8eeUEuVnjgdRtRPY3wwNOQ5ewSGD3l4Csu9gl4CdAove~iXqrjWoh2DWAZ8DeHPBA3VdGoT7yPVgnTPzfs1PoF-DCvDQewSUvVMyZUm0zrNw2bEeDQ__"
              alt="Activity"
            />
          </div>
          <div className="small-image">
            <img
              src="https://s3-alpha-sig.figma.com/img/4a7c/132a/1139e6d6238718baf00dd30ee317f662?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FJkQrBnm4~7e2i10p4x7BWgM-7YOVK2HGn7r0hBnyQdGbPDgsvb8YYkMvnS3WrBMztAXzzn7Tgz9Xy0c-jF0VwYV6ksbgMYUMxxW4XWJxTXC3bs2ESOr1B7AsflcrKxxUsP3FpCyvZtVPhLh8KpdgyCpYBjBB-afC0nvywLV88i6ZAx1FlEw~Ost~bS5~6UoxYYS4xc7nCkYI8j9hbzRQzWeaTrot2sBIqH7c30FmjPaw-Wahap2c0Yph2dKqw9w~0MFdJvct2cZxs3oo~CkLk1h4vHTq9fzKFj10gCnCChgeuqJEqNCZHiaSkVSu9f~y5zaVpEZNARHPjsykGOs7A__"
              alt="Desert Safari"
            />
          </div>
        </div>
      </div>
      </div>
      <div className="join-team-container">
      <div className="join-team-content">
        <h2>
          Let’s Build the Future of Travel, <span className="highlight">TOGETHER!</span>
        </h2>
        <p>
          Exploriaa isn’t just a workplace—it’s a launchpad for bold ideas,
          driven individuals, dynamic culture, and limitless growth. If you’re
          ready to unlock your potential, make an impact, and embark on an
          exciting professional journey, we’re the perfect choice! Whether your
          passion lies in marketing, sales, tech, or beyond, click the button
          designed for you—your adventure starts here!
        </p>
        <button className="join-team-button">JOIN OUR TEAM!</button>
      </div>
    </div>
    </div>
  );
};

export default About;
