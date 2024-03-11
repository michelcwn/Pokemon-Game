const audio = {
  Map: new Howl({
    src: "./audio/sadTheme.mp3",
    html5: true,
    volume: 0.3,
    loop: true,
  }),
  initBattle: new Howl({
    src: "./audio/initBattle.wav",
    html5: true,
    volume: 0.2,
  }),
  battle: new Howl({
    src: "./audio/battle.mp3",
    html5: true,
    volume: 0.2,
    loop: true,
  }),
  tackleHit: new Howl({
    src: "./audio/tackleHit.wav",
    html5: true,
    volume: 0.2,
  }),
  fireballHit: new Howl({
    src: "./audio/fireballHit.wav",
    html5: true,
    volume: 0.2,
  }),
  initFireball: new Howl({
    src: "./audio/initFireball.wav",
    html5: true,
    volume: 0.2,
  }),
  victory: new Howl({
    src: "./audio/victory.wav",
    html5: true,
    volume: 0.2,
  }),
};
