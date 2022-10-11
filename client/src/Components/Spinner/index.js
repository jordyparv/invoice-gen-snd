export default function Spinner() {
  return (
    <div className='absolute flex justify-center items-center w-screen h-screen top-0 right-0 left-0 bottom-0 z-40'>
      <div
        className='animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-indigo-600 rounded-full'
        role='status'
        aria-label='loading'
      >
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
}
