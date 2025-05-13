const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='flex-center w-full min-h-screen text-[#272727] bg-white [background:linear-gradient(180deg,rgba(238,250,255,1)_0%,rgba(243,239,255,1)_50%,rgba(252,239,255,1)_100%)]'>
      <section className='p-20'>
        {children}
      </section>
    </div>
  );
}

export default AuthLayout;