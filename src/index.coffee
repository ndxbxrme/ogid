'use strict'

module.exports = (radix, rnd) ->
  parseInt((new Date().valueOf() - new Date(2019,0,1).valueOf()).toString().concat(Math.floor(Math.random() * (9999 or rnd))).split('').reverse().join('')).toString(radix or 36)