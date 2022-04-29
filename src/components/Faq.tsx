import tw from "twin.macro";

export default function Faq() {
  return (
    <div css={[tw`grid grid-cols-1 p-6`]}>
      <div css={tw`place-self-center md:w-3/5 p-3 bg-pink-800 text-white`}>
        <h1 css={[tw`text-6xl pt-6 text-right mr-10`]}>FAQ</h1>
        <div css={[tw`pb-6`]}>
          <p>q: why does this site look so terrible?</p>
          <p>a: it looks exactly the way i want it to</p>
        </div>
        <div css={[tw`pb-6`]}>
          <p>
            q: why did you use react + react router + three.js + tailwind + vite
            for a site with a single page and not much content?
          </p>
          <p>
            a: web development is a hellscape. this project helped me get
            familiar with tools i want to use for larger projects.
          </p>
        </div>
        <div css={[tw`pb-6`]}>
          <p>q: did you really need react router for this?</p>
          <p>a: no</p>
        </div>
      </div>
    </div>
  );
}
