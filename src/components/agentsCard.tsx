export const AgentAvailable = () => {
  return (
    <>
      <div className='mx-8 md:mx-1'>
        <div className='bg-gray-100 bg-opacity-60 p-4  rounded-2xl '>
          <div className='text-blue-600'> Listed by</div>
          <div>
            <span className='text-sm'>Moses Magezi</span> - Uganda tours, INC.
          </div>
        </div>

        <div className='bg-gray-100 bg-opacity-60 p-4  rounded-2xl my-2'>
          <div className='flex flex-col  items-center md:flex-row'>
            <img src='https://demos.realtyfeed.com/lavander/_next/image/?url=https%3A%2F%2Fdx41nk9nsacii.cloudfront.net%2Fusers%2F664%2Fmedias%2Fphotos%2Fprofile_picture%2Fc9c78c306e820843ec8173f047972b920.4244590318643291.png&w=128&q=75' />

            <div className='flex flex-col space-y-2 p-1 '>
              <span className='font-bold'>Moses</span>{" "}
              <span className='text-sm text-gray-500'>uganda tours</span>
            </div>
          </div>
          <div className='flex flex-row space-x-2'>
            <img src='https://demos.realtyfeed.com/lavander/_next/static/media/phone-primary.670a2681.svg' />
            <span>+256 000303839</span>
          </div>
          <div className='flex flex-row space-x-2'>
            <img src='https://demos.realtyfeed.com/lavander/_next/static/media/mail-primary.cd927480.svg' />
            <span>examplev@example.com</span>
          </div>
        </div>

        <div className='flex fex-row bg-gray-100 bg-opacity-60 p-4  rounded-2xl my-2 space-x-2'>
          <img src='https://demoproperties.vercel.app/assets/qrcode-DPcJMMFj.svg' />
          <div className='font-bold'>Click to View the QR code</div>
        </div>
      </div>
    </>
  );
};
