( () => {

  /***
   * Reference:
   * https://css-tricks.com/introduction-web-audio-api/
   * 
   * 1. Create audio context
   * 2. Create source
   * 3. Connect filter nodes
   * 4. Connect to destination
   */

  let context = new (window.AudioContext || window.webkitAudioContext)()
  let oscillator = context.createOscillator()

  oscillator.type = 'sine'
  oscillator.frequency.value = 440
  oscillator.connect( context.destination )
  oscillator.start()


})()