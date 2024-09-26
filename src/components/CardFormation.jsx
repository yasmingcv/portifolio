import Topic from "./Topic";

export default function CardFormation(props) {
    // eslint-disable-next-line react/prop-types
    const { institution, time, course, description, stacks = [] } = props
  return (
    <div className="flex justify-center">
      <div className="block max-w-[22rem] rounded-lg border border-white bg-black50 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
        <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10 flex flex-row justify-between font-bold">
          <p>{institution}</p>
          <p>{time}</p>
        </div>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight">
            {course}
          </h5>
          <p className="text-base">
            {description}
          </p>
          <div className="w-full flex flex-wrap gap-2 mt-3">
            {stacks.map((stack, i) => <Topic text={stack} key={i}/>)}
          </div>
        </div>
      </div>
    </div>
  );
}
