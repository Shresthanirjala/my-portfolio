import React from 'react'
import Contact from './Contact'
import Footer from './Footer'

const ProjectDetail = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <div className="w-full h-[800px] bg-cover bg-center bg-[url('/landingbg.svg')]  flex  justify-center items-center">
      <div className='flex flex-col justify-center items-center gap-10 w-[500px]'>   
         <h1 className='font-SourceSans3 font-bold text-3xl'>PORTFOLIO</h1>
      <h2>Very short description about this project, Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</h2>
      <button className="bg-[#D37A54] p-3 w-[120px] sm:w-[150px] font-bold text-white rounded-lg font-SourceSans3 hover:bg-[#DA9171]">
                PROJECT LINK
              </button></div>
  
      </div>
      <div className='flex justify-center items-center gap-10 flex-col w-[700px] m-20'  >
        <img src="/portfolio.png"/>

        <h1 className='font-SourceSans3 text-2xl font-bold'>About portfolio</h1>
        <p className='font-SourceSans3 '>Lorem ipsum dolor sit amet consectetur. Massa diam tincidunt ullamcorper turpis a mattis vitae ultrices. Tempor pulvinar lorem tellus tempor sed egestas consectetur congue eu. Scelerisque sit risus ipsum proin faucibus. Bibendum cursus amet pretium quis sit nisl eget porttitor hendrerit. Lorem ipsum dolor sit amet consectetur. Massa diam tincidunt ullamcorper turpis a mattis vitae ultrices. Tempor pulvinar lorem tellus tempor sed egestas consectetur congue eu. Scelerisque sit risus ipsum proin faucibus. Bibendum cursus amet pretium quis sit nisl eget porttitor hendrerit. 
        Lorem ipsum dolor sit amet consectetur. Massa diam tincidunt ullamcorper turpis a mattis vitae ultrices. Tempor pulvinar lorem tellus tempor sed egestas consectetur congue eu. Scelerisque sit risus ipsum proin faucibus. Bibendum cursus amet pretium quis sit nisl eget porttitor hendrerit.</p>
        
        <h2  className='font-SourceSans3 text-2xl font-bold'>Tools Used</h2>
        <div className='flex flex-row gap-3'>
        <button className='bg-[#D9D9D9] rounded-lg p-2 w-[109px] text-black font-semibold'>React</button>
        <button className='bg-[#D9D9D9] rounded-lg p-2 w-[109px] text-black font-semibold'>React</button>
        <button className='bg-[#D9D9D9] rounded-lg p-2 w-[109px] text-black font-semibold'>React</button>
      </div>
      </div>
 
 <Footer/>
    </div>
    
  )
}

export default ProjectDetail

