export default function ViteButton(props) {
  return (
    <span className="bg-indigo-500 rounded-3xl py-2 px-3 w-fit text-center content-center text-white font-semibold text-xs text-wrap">
      {props.description}
    </span>
  );
}
