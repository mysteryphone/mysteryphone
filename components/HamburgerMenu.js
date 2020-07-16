import React, { useState } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Link from 'next/link'
import MenuIcon from '@material-ui/icons/Menu'

export default function HamburgerMenu() {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <MenuIcon height="24px" width="24px" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{ cursor: 'pointer' }} />
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem>
          <Link href="/" as="/">
            <a>Homepage</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/about" as="/about">
            <a>About</a>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/contact" as="/contact">
            <a>Contact</a>
          </Link>
        </MenuItem>
      </Menu>
      <style jsx>
        {`
          a {
            text-decoration: none;
          }
          a:hover {
            text-decoration: none;
          }
        `}
      </style>
    </>
  )
}
