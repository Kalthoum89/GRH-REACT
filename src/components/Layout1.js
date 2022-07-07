import React from 'react'
function Layout1 (props) {
    return (
        <div>
              <div className='container'>
              {props.children}

              </div>
        </div>
    )
}

export default Layout1;