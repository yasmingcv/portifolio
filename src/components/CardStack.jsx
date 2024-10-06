export default function CardStack(props) {
  const { stack } = props;

  return (
    <div className="bg-primary rounded-2xl shadow-sm shadow-primary outline outline-slate-400 -outline-offset-8 w-20 h-20">
      <div className="group overflow-hidden relative after:duration-500 before:duration-500 duration-500 hover:after:duration-500 hover:after:translate-x-6 hover:before:translate-y-3 hover:before:-translate-x-8 hover:duration-500 after:absolute after:w-6 after:h-6 after:bg-primary after:rounded-full after:blur-lg after:bottom-8 after:right-4 before:absolute before:w-5 before:h-5 before:bg-primary before:rounded-full before:blur-lg before:top-5 before:right-4 hover:rotate-12 flex justify-center items-center h-20 w-20 bg-neutral-900 rounded-2xl">
        <div className="z-10 flex flex-col items-center gap-1">
          <h4 className="font-bold">{stack}</h4>
        </div>
      </div>
    </div>
  );
}
