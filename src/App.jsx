import viteLogo from "/vite.svg";
import "./index.css";
import ViteButton from "./components/ViteButton";
import ViteCard from "./components/ViteCard";
import { features } from "./constants/features";
import { viteButtons } from "./constants/viteButtons";

export default function App() {
  return (
    <main>
      <section className="flex-box">
        {/* <div className="flex justify-items-center position ">
          <img src={viteLogo} alt="" className="size-1/6" />
        </div> */}
        <div>
          <p className="text-white font-bold text-3xl">Vite</p>
          <p className="text-gray-200 font-extrabold text-3xl text-wrap">
            Next Generation <br /> Frontend Tooling
          </p>
          <p className="text-gray-500 font-bold py-3 text-wrap">
            Get ready for a development environment that can finally catch up
            with you.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 items-center py-3">
          <ViteButton description={viteButtons.button1.txt} />
          <ViteButton description={viteButtons.button2.txt} />
          <ViteButton description={viteButtons.button3.txt} />
          <ViteButton description={viteButtons.button4.txt} />
        </div>
      </section>

      <section className="grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 py-4">
        {features.map((features, index) => {
          return (
            <ViteCard
              key={"feature-${index}"}
              emoji={features.emoji}
              feature={features.feature}
              description={features.description}
            />
          );
        })}
      </section>
    </main>
  );
}
