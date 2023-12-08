import React from 'react';
var obj = {
  margin: 0,
  background: 'black',
  color: 'white',
  height: '40px',
  textAlign: 'center',
};
function Header() {
  return (
    <div>
      <h2 style={obj}>This is Header</h2>
    </div>
  );
}

export default Header;
