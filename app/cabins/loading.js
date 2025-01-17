import SpinnerMini from '@/app/_components/SpinnerMini';

function Loading() {
  return (
    <div className='grid place-items-center text-primary-200'>
      <SpinnerMini />
      <p className='text-lg'>Loading cabin data, please wait...</p>
    </div>
  );
}

export default Loading;
