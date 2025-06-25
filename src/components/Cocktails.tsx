import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../constants";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const Cocktails = () => {
  useGSAP(() => {
    const popularSplit = new SplitText(
      ".popular h2, .popular li, .loved h2, .loved li",
      {
        type: "lines",
      }
    );

    const cocktailsTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top top",
      },
    });

    cocktailsTL.from(popularSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });

    const paralaxTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    paralaxTL
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
  });

  return (
    <section id='cocktails' className='noisy'>
      <img
        src='/images/cocktail-left-leaf.png'
        alt='left leaf'
        id='c-left-leaf'
      />
      <img
        src='/images/cocktail-right-leaf.png'
        alt='right leaf'
        id='c-right-leaf'
      />

      <div className='list'>
        <div className='popular'>
          <h2>Most popular Cocktails:</h2>
          <ul>
            {cocktailLists.map((drink) => (
              <li key={drink.name}>
                <div className='md:me-28'>
                  <h3>{drink.name}</h3>
                  <p>
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span>- {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='loved'>
          <h2>Most loved Mocktails:</h2>
          <ul>
            {mockTailLists.map((drink) => (
              <li key={drink.name}>
                <div className='me-28'>
                  <h3>{drink.name}</h3>
                  <p>
                    {drink.country} | {drink.detail}
                  </p>
                </div>
                <span>- {drink.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
