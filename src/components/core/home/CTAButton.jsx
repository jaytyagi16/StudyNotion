import React from 'react'
import { Link } from 'react-router-dom';

const CTAButton = ({children, active, linkto}) => {
  return (
    <Link to={linkto}>
        <div className={`text-center text-[13px] px-6 py-3 rounded-md font-semibold ${active ? "bg-yellow-50 text-black" : "bg-richblack-800"} transition-all duration-200 hover:scale-95 shadow-[0px_1px_1px_1px_#718096]`}>
            {children}
        </div>
    </Link>
  )
}

export default CTAButton;