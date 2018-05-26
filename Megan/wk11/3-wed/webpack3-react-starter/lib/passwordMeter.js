import React from 'react'
import PasswordMeter from './passwordMeter.scss'

export default function getStrength(password) {
  if (password.capitalLetters) {
    return 'good'
  } else {
    return 'weak'
  }
}


