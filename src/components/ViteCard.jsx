export default function ViteCard(props) {
  return (
    <div className="bg-neutral-800 p-5 rounded-lg">
      <div className="bg-neutral-700 rounded-lg w-fit p-1 text-center text-lg my-2">
        {props.emoji}
      </div>
      <h4 className="text-white font-semibold text-sm text-left my-2">
        {props.feature}
      </h4>
      <p className="text-gray-500 text-left text-sm">{props.description}</p>
    </div>
  );
}
