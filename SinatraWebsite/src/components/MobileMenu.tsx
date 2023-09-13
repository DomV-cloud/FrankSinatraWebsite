import React from 'react';
import UseAnimations from "react-useanimations";
import menu2 from 'react-useanimations/lib/menu2';

export default function MobileMenu() {
  return (
    <UseAnimations animation={menu2} size={56} strokeColor='#B1986B'/>
  )
}
