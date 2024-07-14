function Card() {
  return (
    <div className='w-56 h-60 rounded-lg bg-white cursor-pointer'>
      <figure className='relative w-full h-4/5'>
        <div className='absolute top-0 right-0 grid place-items-center w-6 h-6 m-2 rounded-full bg-white'>
          <span>+</span>
        </div>

        <img
          className='w-full h-full object-cover rounded-lg'
          src='https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='headphones'
        />
        <span className='absolute bottom-0 left-0 m-2 px-3 rounded-lg bg-white/60 text-xs'>
          Electronics
        </span>
      </figure>
      <p className='flex justify-between items-center mt-2'>
        <span className='text-sm'>Headphones</span>
        <span className='text-lg font-semibold'>$300</span>
      </p>
    </div>
  );
}

export default Card;
