import { Canvas } from "@react-three/fiber";
import tw from "twin.macro";
import Background from "./Background";
import Container, { Width } from "./Container";
import Polygon from "./Polygon";

export default function Hero() {
  return (
    <Background
      extraCss={tw`bg-purple-900 min-h-[0vh] md:min-h-[40vh] md:pt-20 md:pb-20`}
    >
      <Container width={Width.WIDE}>
        <div css={[tw`grid grid-cols-1 md:grid-cols-2 md:grid-flow-row`]}>
          <div css={[tw`md:place-self-center m-5 md:m-0 md:ml-10`]}>
            <h1
              css={[
                tw`text-white bg-black p-2 font-bold text-4xl font-display inline-block mb-2 md:mb-0`,
              ]}
            >
              Hi. I&apos;m Jerred Shepherd 😄
            </h1>
            <br />
            <h2
              css={[
                tw`text-white bg-black p-2 font-bold text-4xl font-display inline-block`,
              ]}
            >
              I work as a <span>software engineer</span> at{" "}
              <a
                href="https://rstudio.com"
                css={[tw`text-rstudio hover:underline line-through`]}
              >
                RStudio
              </a>{" "}
              <a
                href="https://posit.co/"
                css={[tw`text-posit hover:underline`]}
              >
                Posit, PBC
              </a>
            </h2>
          </div>
          <div css={[tw`inline md:block`]}>
            <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <Polygon />
            </Canvas>
          </div>
        </div>
      </Container>
    </Background>
  );
}
