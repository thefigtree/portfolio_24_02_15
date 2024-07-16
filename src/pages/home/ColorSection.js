import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styled from "styled-components";
// import { useScrollTop } from "../../lib/useScrollTop";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  /* justify-content: space-between; */
  /* align-items: center; */

  h1 {
    font-size: clamp(2em, 4vw, 6em);
  }

  p {
    font-size: clamp(1.4em, 2.5vw, 3.5em);
    line-height: 1.4;
  }
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  background-color: rgba(155, 181, 206, 0.8);
  position: relative;
`;

const DesktopContent = styled.div`
  margin: auto;
  width: 80%;

  .desktopContentSection {
    min-height: 100vh;
    outline: 1px solid green;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(155, 181, 206, 0.8);
  position: relative;
`;

const MobileContent = styled.div`
  display: none;
  width: 80vw;

  .mobilePhoto {
    width: 80vw;
    height: 80vw;
    margin-top: 5em;
    border-radius: 6vw;
  }
`;

const DesktopPhotos = styled.div`
  width: 40vw;
  height: 40vw;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4);

  .desktopPhoto {
    position: absolute;
    width: 100%;
    height: 100%;
    /* background-color: ${(props) => props.bgColor}; */
  }

  /* &.red {
    background-color: crimson;
  }
  &.green {
    background-color: MediumSeaGreen;
  }
  &.blue {
    background-color: dodgerblue;
  }
  &.pink {
    background-color: deepPink;
  } */
  //
`;

// const Center = styled.div`;
//   width: 100%;
//   text-align: center;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   font-size: 32px;
//   color: #9bb5ce;
//   text-transform: uppercase;
//   /* filter: brightness(0.85); */
// `;

export const ColorSection = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  // const textRef = useRef(null);
  // useScrollTop();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let Elem = sectionRef.current;
    let leftElem = leftRef.current;
    let rightElem = rightRef.current;
    const details = gsap.utils.toArray(
      ".desktopContentSection:not(:first-child)"
    );
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");
    gsap.set(photos, { yPercent: 101 });
    const allPhotos = gsap.utils.toArray(".desktopPhoto");
    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
      console.log("desktop");

      ScrollTrigger.create({
        trigger: Elem,
        start: "top top",
        end: "bottom bottom",
        pin: rightElem,
      });

      details.forEach((detail, index) => {
        let headline = detail.querySelector("h1");
        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });
        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: false,
        });
      });
    });

    // let updateColor = (color, text, rgbColor) => {
    //   leftElem.style.backgroundColor = `rgba(${rgbColor}, 0.8)`;
    //   rightElem.style.backgroundColor = `rgba(${rgbColor}, 0.8)`;
    // };

    // let t1 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: Elem,
    //     start: "top top",
    //     end: `${Elem.offsetWidth + 1000}`,
    //     scrub: true,
    //     // snap: 1,
    //     pin: true,
    //     pinSpacing: true,
    //     markers: true,
    //   },
    // });

    // t1.to(Elem, {
    //   onStart: updateColor,
    //   onStartParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
    //   onReverseComplete: updateColor,
    //   onReverseCompleteParams: ["#9BB5CE", "Sierra Blue", "155, 181, 206"],
    // });
    // t1.to(Elem, {
    //   onStart: updateColor,
    //   onStartParams: ["#F9E5C9", "Gold", "249, 229, 201"],
    //   onReverseComplete: updateColor,
    //   onReverseCompleteParams: ["#F9E5C9", "Gold", "249, 229, 201"],
    // });
    // t1.to(Elem, {
    //   onStart: updateColor,
    //   onStartParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
    //   onReverseComplete: updateColor,
    //   onReverseCompleteParams: ["#505F4E", "Alpine Green", "80, 95, 78"],
    // });
    // t1.to(Elem, {
    //   onStart: updateColor,
    //   onStartParams: ["#574F6F", "Deep Purple", "87, 79, 111"],
    //   onReverseComplete: updateColor,
    //   onReverseCompleteParams: ["#574F6F", "Deep Purple", "87, 79, 111"],
    // });

    // console.log(Elem.offsetWidth);
    // console.log(updateColor);

    // return () => {
    //   if (t1) t1.revert();
    // };
  }, []);

  return (
    <Section ref={sectionRef}>
      <Left ref={leftRef}>
        <DesktopContent>
          <div className="desktopContentSection">
            <h1>Sierra Blue</h1>
            <p>
              Red is a color often associated with strong emotions such as
              passion, love, and anger. It's a bold and attention-grabbing color
              that can evoke feelings of excitement, warmth, and energy.
            </p>
          </div>
          <div className="desktopContentSection">
            <h1>Gold</h1>
            <p>
              Green is a color that is often associated with nature, growth, and
              harmony. It is a calming and relaxing color that can evoke
              feelings of balance, stability, and freshness. In color
              psychology, green is said to represent balance and stability,
              making it a popular choice for branding and marketing in the
              health and wellness industry.
            </p>
          </div>
          <div className="desktopContentSection">
            <h1>Alpine Green</h1>
            <p>
              Pink is a color that is often associated with femininity, romance,
              and sweetness. It is a softer and more delicate shade of red that
              can evoke feelings of warmth, love, and nurturing.
            </p>
            <p>
              In the world of branding and marketing, pink is often used to
              target a female audience or to promote products that are
              associated with beauty, love, or romance.
            </p>
            <p>
              Pink is also used in the food industry, as it is associated with
              sweetness and desserts. Pink is often used in breast cancer
              awareness campaigns, as it has become the signature color of the
              movement.{" "}
            </p>
            <p>
              Pink is also commonly used in baby showers and weddings, as it
              symbolizes love, innocence, and new beginnings.
            </p>
          </div>
          <div className="desktopContentSection">
            <h1>Deep Purple</h1>
            <p>
              Blue is a color that is often associated with calmness, trust, and
              reliability. It is a peaceful and serene color that can evoke
              feelings of stability, security, and professionalism. In color
              psychology, blue is said to represent loyalty and trust, making it
              a popular choice for branding and marketing in the finance and
              technology industries.
            </p>
          </div>
        </DesktopContent>
      </Left>
      {/* <Center ref={textRef}>Sierra Blue</Center> */}
      <Right className="right" ref={rightRef}>
        <MobileContent>
          <div className="mobilePhoto" style={{ backgroundColor: `red` }}></div>
          <h1>Sierra Blue</h1>
          <p>
            Red is a color often associated with strong emotions such as
            passion, love, and anger. It's a bold and attention-grabbing color
            that can evoke feelings of excitement, warmth, and energy.
          </p>

          <div
            className="mobilePhoto"
            style={{ backgroundColor: `green` }}
          ></div>
          <h1>Gold</h1>
          <p>
            Green is a color that is often associated with nature, growth, and
            harmony. It is a calming and relaxing color that can evoke feelings
            of balance, stability, and freshness. In color psychology, green is
            said to represent balance and stability, making it a popular choice
            for branding and marketing in the health and wellness industry.
          </p>

          <div
            className="mobilePhoto"
            style={{ backgroundColor: `pink` }}
          ></div>
          <h1>Alpine Green</h1>
          <p>
            Pink is a color that is often associated with femininity, romance,
            and sweetness. It is a softer and more delicate shade of red that
            can evoke feelings of warmth, love, and nurturing.
          </p>
          <p>
            In the world of branding and marketing, pink is often used to target
            a female audience or to promote products that are associated with
            beauty, love, or romance.
          </p>
          <p>
            Pink is also used in the food industry, as it is associated with
            sweetness and desserts. Pink is often used in breast cancer
            awareness campaigns, as it has become the signature color of the
            movement.{" "}
          </p>
          <p>
            Pink is also commonly used in baby showers and weddings, as it
            symbolizes love, innocence, and new beginnings.
          </p>

          <div
            className="mobilePhoto"
            style={{ backgroundColor: `blue` }}
          ></div>
          <h1>Deep Purple</h1>
          <p>
            Blue is a color that is often associated with calmness, trust, and
            reliability. It is a peaceful and serene color that can evoke
            feelings of stability, security, and professionalism. In color
            psychology, blue is said to represent loyalty and trust, making it a
            popular choice for branding and marketing in the finance and
            technology industries.
          </p>
        </MobileContent>

        <DesktopPhotos>
          <div
            className="desktopPhoto"
            style={{
              backgroundColor: "red",
            }}
          >
            1
          </div>
          <div
            className="desktopPhoto"
            style={{
              backgroundColor: "green",
            }}
          >
            2
          </div>
          <div
            className="desktopPhoto"
            style={{
              backgroundColor: "pink",
            }}
          >
            3
          </div>
          <div
            className="desktopPhoto"
            style={{
              backgroundColor: "blue",
            }}
          >
            4
          </div>
        </DesktopPhotos>
      </Right>
    </Section>
  );
};
