export default function Topic(props) {
  // eslint-disable-next-line react/prop-types
  const { text } = props

  return (
    <div
      type="button"
      className={`inline-block rounded-full bg-white px-3 pb-2 pt-2.5 text-xs font-extrabold uppercase leading-normal text-black shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong`}
    >
      {text}
    </div>
  );
}
