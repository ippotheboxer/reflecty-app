const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='flex min-h-screen w-full text-[#272727] bg-white [background:linear-gradient(180deg,rgba(238,250,255,1)_0%,rgba(243,239,255,1)_50%,rgba(252,239,255,1)_100%)]'>
      {children}
    </div>
  );
}

export default RootLayout;