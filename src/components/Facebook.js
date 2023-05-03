const Facebook = () => {
    return (
       <div className="container flex justify-center space-x-20">
           <div className="left mt-48 ml-96">
               <img className="w-72 " src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
               <p className="text-3xl w-[33rem] ml-[25px]">Facebook helps you connect and share with the people in your life.</p>
           </div>
          <div className="right">  
           <div className="right flex flex-col border-1 bg-white w-[396px] mt-36 mb-6 px-4 py-4 rounded-md shadow-xl">
            <input className="px-3 py-3 mb-3 border-2 rounded-md" type="text" placeholder="Email address or phone number " />
            <input className="px-3 py-3 mb-3 border-2 rounded-md" type="password" placeholder="Password" />
            <button className="btn px-4 py-3 mb-4 bg-[#1877F2] text-white rounded-md">Log In</button>
            <span className="text-blue-600 text-center text-sm mb-4 cursor-pointer">Forgotten password?</span>
            <hr />
            <button className="btn px-3 py-3  bg-[#42b72a] text-white rounded-md font-semibold w-52 mt-4 ml-20">Create New Account</button>
           </div>
           <span className="flex space-x-1 pl-10 text-[14px]"><p className="text-black font-bold">Create a Page</p><p> for a celebrity, brand and business.</p></span>
         </div>  
       </div>
    )
}

export default Facebook;