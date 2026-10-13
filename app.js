const canvas = document.querySelector('#scene');
const ctx = canvas.getContext('2d');
const canvasFrame = document.querySelector('.canvas-frame');
const stage = document.querySelector('.stage');
const startButton = document.querySelector('#start-button');
const pauseButton = document.querySelector('#pause-button');
const restartButton = document.querySelector('#restart-button');
const watermarkButton = document.querySelector('#watermark-button');
const backgroundColorButton = document.querySelector('#background-color-button');
const backgroundColorPanel = document.querySelector('#background-color-panel');
const backgroundColorResetButton = document.querySelector('#background-color-reset');
const backgroundColorBlueButton = document.querySelector('#background-color-blue');
const backgroundColorTaintedButton = document.querySelector('#background-color-tainted');
const backgroundColorExperimentButton = document.querySelector('#background-color-experiment');
const speedButton = document.querySelector('#speed-button');
const arenaResizeButton = document.querySelector('#arena-resize-button');
const debugButton = document.querySelector('#debug-button');
const arenaResizeHandle = document.querySelector('#arena-resize-handle');
const arenaResizeDoneButton = document.querySelector('#arena-resize-done');
const arenaResizeResetButton = document.querySelector('#arena-resize-reset');
const arenaBackgroundColorInput = document.querySelector('#arena-background-color');
const watermarkModal = document.querySelector('#watermark-modal');
const watermarkForm = document.querySelector('#watermark-form');
const watermarkTextInput = document.querySelector('#watermark-text');
const cancelWatermarkButton = document.querySelector('#cancel-watermark');
const categorySelect = document.querySelector('#guy-category-select');
const editorCategorySelect = document.querySelector('#editor-category-select');
const guyOneUpload = document.querySelector('#guy-one-upload');
const guyTwoUpload = document.querySelector('#guy-two-upload');
const guyOneWinUpload = document.querySelector('#guy-one-win-upload');
const guyTwoWinUpload = document.querySelector('#guy-two-win-upload');
const guyOnePreview = document.querySelector('#guy-one-preview');
const guyTwoPreview = document.querySelector('#guy-two-preview');
const guyOneWinPreview = document.querySelector('#guy-one-win-preview');
const guyTwoWinPreview = document.querySelector('#guy-two-win-preview');
const guyOneHitbox = document.querySelector('#guy-one-hitbox');
const guyTwoHitbox = document.querySelector('#guy-two-hitbox');
const guyOneRotateSpeed = document.querySelector('#guy-one-rotate-speed');
const guyTwoRotateSpeed = document.querySelector('#guy-two-rotate-speed');
const guyOneCategory = document.querySelector('#guy-one');
const guyTwoCategory = document.querySelector('#guy-two');
const spritesPage = document.querySelector('#sprites-page');
const statisticsPage = document.querySelector('#statistics-page');
const movesPage = document.querySelector('#moves-page');
const guyOneStats = document.querySelector('#guy-one-stats');
const guyTwoStats = document.querySelector('#guy-two-stats');
const addMoveButton = document.querySelector('#add-move-button');
const movesList = document.querySelector('#moves-list');
const stackMovesInput = document.querySelector('#stack-moves');
const movesSelfStackInput = document.querySelector('#moves-self-stack');
const hitboxNode = document.querySelector('#hitbox-node');
const projectileNodeButton = document.querySelector('#projectile-node');
const velocityNodeButton = document.querySelector('#velocity-node');
const soundNodeButton = document.querySelector('#sound-node');
const waitNodeButton = document.querySelector('#wait-node');
const visualNodeButton = document.querySelector('#visual-node');
const hitboxNodeDetails = document.querySelector('.hitbox-properties');
const projectileNodeDetails = document.querySelector('#projectile-properties');
const soundNodeDetails = document.querySelector('.sound-properties');
const waitNodeDetails = document.querySelector('#wait-properties');
const visualNodeDetails = document.querySelector('.visual-properties');
const velocityNodeDetails = document.querySelector('#velocity-properties');
const velocitySpeedInput = document.querySelector('#velocity-speed');
const velocityDistanceInput = document.querySelector('#velocity-distance');
const velocityRotationDial = document.querySelector('#velocity-rotation-dial');
const velocityRotationInput = document.querySelector('#velocity-rotation-value');
const velocityTrackEnemyInput = document.querySelector('#velocity-track-enemy');
const velocityTrackOppositeInput = document.querySelector('#velocity-track-opposite');
const velocityChangesDirectionInput = document.querySelector('#velocity-changes-direction');
const velocityTargetOfHitboxInput = document.querySelector('#velocity-target-of-hitbox');
const hitboxDamageInput = document.querySelector('#hitbox-damage');
const projectileIdInput = document.querySelector('#projectile-id');
const projectileCancelIdInput = document.querySelector('#projectile-cancel-id');
const projectileSpawnAtIdInput = document.querySelector('#projectile-spawn-at-id');
const projectileDamageInput = document.querySelector('#projectile-damage');
const projectileSpeedInput = document.querySelector('#projectile-speed');
const projectileTimeInput = document.querySelector('#projectile-time');
const projectileBounceCountInput = document.querySelector('#projectile-bounce-count');
const projectileRotateSpeedInput = document.querySelector('#projectile-rotate-speed');
const projectileRotationDial = document.querySelector('#projectile-rotation-dial');
const projectileRotationInput = document.querySelector('#projectile-rotation-value');
const projectileRotationSetting = document.querySelector('#projectile-rotation-setting');
const projectileRotateToDirectionInput = document.querySelector('#projectile-rotate-to-direction');
const projectileAngleOffsetSetting = document.querySelector('#projectile-angle-offset-setting');
const projectileAngleOffsetInput = document.querySelector('#projectile-angle-offset');
const projectileHomingSetting = document.querySelector('#projectile-homing-setting');
const projectileHomingInput = document.querySelector('#projectile-homing');
const projectileSizeInput = document.querySelector('#projectile-size');
const projectileEndSizeInput = document.querySelector('#projectile-end-size');
const projectileTracksInput = document.querySelector('#projectile-tracks');
const projectilePiercingInput = document.querySelector('#projectile-piercing');
const projectileHitRateSetting = document.querySelector('#projectile-hit-rate-setting');
const projectileHitRateInput = document.querySelector('#projectile-hit-rate');
const projectileDamageDeductionSetting = document.querySelector('#projectile-damage-deduction-setting');
const projectileDamageDeductionInput = document.querySelector('#projectile-damage-deduction');
const projectileFalloffInput = document.querySelector('#projectile-falloff');
const projectileImageInput = document.querySelector('#projectile-image-file');
const projectileImageName = document.querySelector('#projectile-image-name');
const projectileSoundInput = document.querySelector('#projectile-sound');
const projectileSoundName = document.querySelector('#projectile-sound-name');
const projectileSoundDefaultButton = document.querySelector('#projectile-sound-default');
const defaultProjectileImage = new Image();
let defaultProjectileImageBounds = null;
defaultProjectileImage.onload = () => {
  defaultProjectileImageBounds = getImageAlphaBounds(defaultProjectileImage);
};
defaultProjectileImage.src = './uploads/bottle-of-beer-isolated-png-3396754066.png';
const hitboxTimeInput = document.querySelector('#hitbox-time');
const hitboxAnchoredInput = document.querySelector('#hitbox-anchored');
const hitboxPositionXInput = document.querySelector('#hitbox-position-x');
const hitboxPositionYInput = document.querySelector('#hitbox-position-y');
const hitboxRotationDial = document.querySelector('#hitbox-rotation-dial');
const hitboxRotationValue = document.querySelector('#hitbox-rotation-value');
const hitboxSoundInput = document.querySelector('#hitbox-sound');
const hitboxSoundName = document.querySelector('#hitbox-sound-name');
const hitboxSoundDefaultButton = document.querySelector('#hitbox-sound-default');
const soundNodeFileInput = document.querySelector('#sound-node-file');
const soundNodeFileName = document.querySelector('#sound-node-file-name');
const soundNodeVolumeInput = document.querySelector('#sound-node-volume');
const soundNodeVolumeValue = document.querySelector('#sound-node-volume-value');
const soundNodeCancelInput = document.querySelector('#sound-node-cancel');
const soundNodeStartInput = document.querySelector('#sound-node-start');
const soundNodeFadeInput = document.querySelector('#sound-node-fade');
const variableNodeButton = document.querySelector('#variable-node');
const variableNodeDetails = document.querySelector('#variable-properties');
const variableValueInput = document.querySelector('#variable-value');
const variableRemoveInput = document.querySelector('#variable-remove');
const variableTargetOfHitboxInput = document.querySelector('#variable-target-of-hitbox');
const cancelNodeButton = document.querySelector('#cancel-node');
const cancelNodeDetails = document.querySelector('#cancel-properties');
const cancelNeverRepeatInput = document.querySelector('#cancel-never-repeat');
const cancelMoveCooldownInput = document.querySelector('#cancel-move-cooldown');
const waitNodeTimeInput = document.querySelector('#wait-node-time');
const waitNodeAfterDamageInput = document.querySelector('#wait-node-after-damage');
const visualNodeTypeInput = document.querySelector('#visual-node-type');
const visualNodePreview = document.querySelector('#visual-node-preview');
const visualPreviewGuyImage = document.querySelector('#visual-preview-guy-image');
const visualPreviewImage = document.querySelector('#visual-preview-image');
const visualPreviewEmpty = document.querySelector('.visual-preview-empty');
const visualNodeTimeInput = document.querySelector('#visual-node-time');
const visualNodeFadeInInput = document.querySelector('#visual-node-fade-in');
const visualNodeFadeOutInput = document.querySelector('#visual-node-fade-out');
const visualDataSetting = document.querySelector('#visual-data-setting');
const visualDataFileInput = document.querySelector('#visual-data-file');
const visualDataName = document.querySelector('#visual-data-name');
const visualImageSettings = document.querySelector('#visual-image-settings');
const spriteReplaceSettings = document.querySelector('#sprite-replace-settings');
const spriteReplaceTimeInput = document.querySelector('#sprite-replace-time');
const spriteReplaceRotationInput = document.querySelector('#sprite-replace-rotation');
const spriteReplaceFaceEnemyInput = document.querySelector('#sprite-replace-face-enemy');
const visualTimeSetting = document.querySelector('#visual-node-time').closest('.wait-time-setting');
const visualFadeInSetting = document.querySelector('#visual-node-fade-in').closest('.wait-time-setting');
const visualFadeOutSetting = document.querySelector('#visual-node-fade-out').closest('.wait-time-setting');
const visualScaleInput = document.querySelector('#visual-node-scale');
const visualPositionXInput = document.querySelector('#visual-node-position-x');
const visualPositionYInput = document.querySelector('#visual-node-position-y');
const visualRotationDial = document.querySelector('#visual-rotation-dial');
const visualRotationValue = document.querySelector('#visual-rotation-value');
const visualSpeedInput = document.querySelector('#visual-node-speed');
const visualTowardsEnemyInput = document.querySelector('#visual-node-towards-enemy');
const visualRotateTowardsEnemyInput = document.querySelector('#visual-node-rotate-towards-enemy');
const visualOpacityInput = document.querySelector('#visual-node-opacity');
const visualOpacitySetting = document.querySelector('#visual-opacity-setting');
const visualMaskInput = document.querySelector('#visual-node-mask');
const visualTargetOfHitboxInput = document.querySelector('#visual-node-target-of-hitbox');
const visualSpawnAtProjectileInput = document.querySelector('#visual-node-spawn-at-projectile');
const visualSpawnAtProjectileSetting = visualSpawnAtProjectileInput.closest('label');
const visualTargetOfHitboxSetting = document.querySelector('#visual-target-of-hitbox-setting');
const hitboxSizeXInput = document.querySelector('#hitbox-size-x');
const hitboxSizeYInput = document.querySelector('#hitbox-size-y');
const hitboxSizeXValue = document.querySelector('#hitbox-size-x-value');
const hitboxSizeYValue = document.querySelector('#hitbox-size-y-value');
const hitboxSizeLabel = document.querySelector('#hitbox-size-label');
const guySizeValue = document.querySelector('#guy-size-value');
const hitboxPreview = document.querySelector('#hitbox-preview');
const timelineList = document.querySelector('#move-timeline-list');
const moveModal = document.querySelector('#move-modal');
const closeMoveModalButton = document.querySelector('#close-move-modal');
const finishMoveButton = document.querySelector('#finish-move');
const moveNodeUpButton = document.querySelector('#move-node-up');
const moveNodeDownButton = document.querySelector('#move-node-down');
const duplicateNodeButton = document.querySelector('#duplicate-node');
const removeNodeButton = document.querySelector('#remove-node');
const previewMoveButton = document.querySelector('#preview-move');
const moveConditionSelect = document.querySelector('#move-condition-select');
const moveEditorTitle = document.querySelector('#move-editor-title');
const targetSidePicker = document.querySelector('#target-side-picker');
const targetSideSummary = document.querySelector('#target-side-summary');
const approachSidePicker = document.querySelector('#approach-side-picker');
const approachSideSummary = document.querySelector('#approach-side-summary');
const damageFromPicker = document.querySelector('#damage-from-picker');
const damageFromSummary = document.querySelector('#damage-from-summary');
const metronomeDelayInput = document.querySelector('#metronome-delay');
const metronomeIntervalInput = document.querySelector('#metronome-interval');
const collisionProperties = document.querySelector('#collision-properties');
const damagedProperties = document.querySelector('#damaged-properties');
const metronomeProperties = document.querySelector('#metronome-properties');
const matchStartProperties = document.querySelector('#match-start-properties');
const healthIcons = [
  document.querySelector('#guy-two-health'),
  document.querySelector('#guy-one-health'),
];
const maxHealth = 1000;
const defaultHitboxSound = './uploads/hitsound_uAksTMl.mp3';
const defaultHitboxSoundName = 'Default';
const wallBounceSounds = [
  './uploads/concrete1.wav',
  './uploads/concrete2.wav',
  './uploads/concrete3.wav',
  './uploads/concrete4.wav',
];
const wallBounceAudio = wallBounceSounds.map(source => {
  const audio = new Audio(source);
  audio.preload = 'auto';
  audio.load();
  return audio;
});
const winnerAudio = new Audio('./uploads/tf2-killstreak-end.mp3');
winnerAudio.preload = 'auto';
winnerAudio.load();
let winnerSoundPlayed = false;
const flashedImageCache = new WeakMap();
let visualMaskCanvas = null;
let visualMaskContext = null;

const squares = [
  { x: 0, y: 0, startPositionX: null, startPositionY: null, vx: 112, vy: 82, startDirectionX: 112 / Math.hypot(112, 82), startDirectionY: 82 / Math.hypot(112, 82), speed: 246, defaultSpeed: 246, size: 100, defaultSize: 100, rotation: 0, rotateSpeed: 0, color: '#f27658', image: null, imageBounds: null, winImage: null, winImageBounds: null, hitboxMatchesPng: false, flipForEnemyEyeContact: true, reverseEyeContactFlip: false, eyeContactFlipAffectsHitbox: false, spriteReplace: null, health: maxHealth, maxHealth, defaultHealth: maxHealth, flashUntil: 0 },
  { x: 0, y: 0, startPositionX: null, startPositionY: null, vx: -86, vy: -108, startDirectionX: -86 / Math.hypot(86, 108), startDirectionY: -108 / Math.hypot(86, 108), speed: 246, defaultSpeed: 246, size: 100, defaultSize: 100, rotation: 0, rotateSpeed: 0, color: '#5868d8', image: null, imageBounds: null, winImage: null, winImageBounds: null, hitboxMatchesPng: false, flipForEnemyEyeContact: true, reverseEyeContactFlip: false, eyeContactFlipAffectsHitbox: false, spriteReplace: null, health: maxHealth, maxHealth, defaultHealth: maxHealth, flashUntil: 0 },
];

guyOneHitbox.addEventListener('change', () => { squares[1].hitboxMatchesPng = guyOneHitbox.checked; });
guyTwoHitbox.addEventListener('change', () => { squares[0].hitboxMatchesPng = guyTwoHitbox.checked; });

function connectEyeContactSettings(eyeContactInput, reverseInput, affectsHitboxInput, reverseSetting, square) {
  const update = () => {
    square.flipForEnemyEyeContact = eyeContactInput.checked;
    square.reverseEyeContactFlip = reverseInput.checked;
    square.eyeContactFlipAffectsHitbox = affectsHitboxInput.checked;
    reverseSetting.hidden = !eyeContactInput.checked;
  };
  eyeContactInput.addEventListener('change', update);
  reverseInput.addEventListener('change', update);
  affectsHitboxInput.addEventListener('change', update);
  update();
}

connectEyeContactSettings(
  document.querySelector('#guy-one-eye-contact'),
  document.querySelector('#guy-one-eye-contact-reverse'),
  document.querySelector('#guy-one-eye-contact-hitbox'),
  document.querySelector('#guy-one-eye-contact-reverse-setting'),
  squares[1],
);
connectEyeContactSettings(
  document.querySelector('#guy-two-eye-contact'),
  document.querySelector('#guy-two-eye-contact-reverse'),
  document.querySelector('#guy-two-eye-contact-hitbox'),
  document.querySelector('#guy-two-eye-contact-reverse-setting'),
  squares[0],
);

function connectRotateSpeed(input, square) {
  input.addEventListener('input', () => {
    if (input.value === '') {
      square.rotateSpeed = 0;
      return;
    }
    const speed = input.valueAsNumber;
    if (!Number.isFinite(speed)) return;
    square.rotateSpeed = Math.max(Number(input.min), Math.min(Number(input.max), speed));
    input.value = square.rotateSpeed;
  });
}

connectRotateSpeed(guyOneRotateSpeed, squares[1]);
connectRotateSpeed(guyTwoRotateSpeed, squares[0]);

function updateEditorView() {
  const showGuyOne = categorySelect.value === 'guy-one';
  guyOneCategory.hidden = !showGuyOne;
  guyTwoCategory.hidden = showGuyOne;
  guyOneStats.hidden = !showGuyOne;
  guyTwoStats.hidden = showGuyOne;

  const category = editorCategorySelect.value;
  spritesPage.hidden = category !== 'sprites';
  statisticsPage.hidden = category !== 'statistics';
  movesPage.hidden = category !== 'moves';
}

categorySelect.addEventListener('change', updateEditorView);
categorySelect.addEventListener('change', renderMoves);
editorCategorySelect.addEventListener('change', updateEditorView);
updateEditorView();

let width = 0;
let height = 0;
let defaultArenaSize = 0;
let lastTime = 0;
let positioned = false;
let isRunning = false;
let isPreviewingMove = false;
let activeMovePreview = null;
let previewMoveEndTime = 0;
let matchEnded = false;
let matchGeneration = 0;
let showWinSprites = false;
let winSpriteTimer = null;
let youtubeStartTimer = null;
let gameSpeed = 1;
let needsStartMotion = true;
let watermarkText = '';
let arenaBackgroundColor = '#f4f4f1';
let isArenaResizeMode = false;
let debugHitboxesEnabled = false;
let wasRunningBeforeArenaResize = false;
let arenaResizePointerStartX = 0;
let arenaResizeStartSize = 0;
let draggingGuyIndex = null;
let draggingGuyPointerId = null;

function setStartMotion(square, horizontalDirection) {
  const verticalLimit = Math.min(150, square.speed * 0.8);
  const vy = Math.random() * verticalLimit * 2 - verticalLimit;
  const vx = Math.sqrt(Math.max(0, square.speed ** 2 - vy ** 2)) * horizontalDirection;
  square.vx = vx;
  square.vy = vy;
}

startButton.addEventListener('click', () => {
  if (matchEnded) return;
  if (needsStartMotion) {
    positionSquaresAtStart();
    setStartMotion(squares[1], 1);
    setStartMotion(squares[0], -1);
    startMatchMoves();
    needsStartMotion = false;
  }
  isRunning = true;
  startButton.disabled = true;
  pauseButton.disabled = false;
});

pauseButton.addEventListener('click', () => {
  isRunning = false;
  startButton.disabled = false;
  pauseButton.disabled = true;
});

restartButton.addEventListener('click', () => {
  if (activeMovePreview) {
    cancelActiveMovePreview();
    return;
  }
  clearTimeout(winSpriteTimer);
  winSpriteTimer = null;
  matchGeneration++;
  matchEnded = false;
  showWinSprites = false;
  isRunning = false;
  startButton.disabled = false;
  pauseButton.disabled = true;
  damagePopups.length = 0;
  activeVisuals.length = 0;
  for (const projectile of activeProjectiles) {
    projectile.cancelled = true;
    projectile.complete?.(false);
  }
  activeProjectiles.length = 0;
  projectilePositionCache.clear();
  for (const hitbox of activeHitboxes) {
    hitbox.cancelled = true;
    hitbox.complete?.(false);
  }
  activeHitboxes.length = 0;
  for (const movement of activeVelocityMoves) {
    const square = squares[movement.squareIndex];
    square.vx = movement.previousVx;
    square.vy = movement.previousVy;
    square.speed = movement.previousSpeed;
    movement.complete?.(false);
  }
  activeVelocityMoves.length = 0;
  for (const square of squares) {
    square.vx = square.startDirectionX * square.speed;
    square.vy = square.startDirectionY * square.speed;
    square.health = square.maxHealth;
    square.rotation = 0;
    square.flashUntil = 0;
    square.spriteReplace = null;
  }
  winnerSoundPlayed = false;
  winnerAudio.pause();
  if (winnerAudio.readyState > 0) winnerAudio.currentTime = 0;
  resetMoveTimers();
  needsStartMotion = true;
  positionSquaresAtStart();
});

watermarkButton.addEventListener('click', () => {
  if (document.body.classList.contains('watermark-mode')) {
    clearTimeout(youtubeStartTimer);
    youtubeStartTimer = null;
    watermarkText = '';
    document.body.classList.remove('watermark-mode');
    restartButton.click();
    return;
  }
  watermarkTextInput.value = '';
  watermarkModal.hidden = false;
  watermarkTextInput.focus();
});

backgroundColorButton.addEventListener('click', () => {
  const opening = backgroundColorPanel.hidden;
  backgroundColorPanel.hidden = !opening;
  backgroundColorButton.setAttribute('aria-expanded', String(opening));
});
backgroundColorPanel.addEventListener('click', event => event.stopPropagation());
document.addEventListener('click', event => {
  if (backgroundColorPanel.hidden || backgroundColorButton.contains(event.target)) return;
  backgroundColorPanel.hidden = true;
  backgroundColorButton.setAttribute('aria-expanded', 'false');
});
backgroundColorResetButton.addEventListener('click', () => {
  arenaBackgroundColorInput.value = '#f4f4f1';
  arenaBackgroundColorInput.dispatchEvent(new Event('input', { bubbles: true }));
  backgroundColorPanel.hidden = true;
  backgroundColorButton.setAttribute('aria-expanded', 'false');
});
backgroundColorBlueButton.addEventListener('click', () => {
  arenaBackgroundColorInput.value = '#2596be';
  arenaBackgroundColorInput.dispatchEvent(new Event('input', { bubbles: true }));
  backgroundColorPanel.hidden = true;
  backgroundColorButton.setAttribute('aria-expanded', 'false');
});
backgroundColorTaintedButton.addEventListener('click', () => {
  arenaBackgroundColorInput.value = '#cb3a3a';
  arenaBackgroundColorInput.dispatchEvent(new Event('input', { bubbles: true }));
  backgroundColorPanel.hidden = true;
  backgroundColorButton.setAttribute('aria-expanded', 'false');
});
backgroundColorExperimentButton.addEventListener('click', () => {
  arenaBackgroundColorInput.value = '#575757';
  arenaBackgroundColorInput.dispatchEvent(new Event('input', { bubbles: true }));
  backgroundColorPanel.hidden = true;
  backgroundColorButton.setAttribute('aria-expanded', 'false');
});
speedButton.addEventListener('click', () => {
  gameSpeed = gameSpeed >= 3 ? 1 : gameSpeed + 1;
  const speedLabel = `${gameSpeed}×`;
  speedButton.dataset.speed = String(gameSpeed);
  speedButton.setAttribute('aria-pressed', String(gameSpeed > 1));
  speedButton.setAttribute('aria-label', `Game speed: ${speedLabel}`);
  speedButton.title = `Game speed: ${speedLabel}`;
});
debugButton.addEventListener('click', () => {
  debugHitboxesEnabled = !debugHitboxesEnabled;
  debugButton.setAttribute('aria-pressed', String(debugHitboxesEnabled));
  debugButton.setAttribute('aria-label', `${debugHitboxesEnabled ? 'Hide' : 'Show'} hitboxes`);
  debugButton.title = `${debugHitboxesEnabled ? 'Hide' : 'Show'} hitboxes`;
});

function setArenaResizeMode(active) {
  isArenaResizeMode = active;
  document.body.classList.toggle('arena-resize-mode', active);
  arenaResizeButton.setAttribute('aria-pressed', String(active));
  arenaResizeHandle.hidden = !active;
  startButton.hidden = active;
  pauseButton.hidden = active;
  restartButton.hidden = active;
  arenaResizeDoneButton.hidden = !active;
  arenaResizeResetButton.hidden = !active;
  if (active) {
    wasRunningBeforeArenaResize = isRunning;
    isRunning = false;
    positionSquaresAtStart();
  } else {
    isRunning = wasRunningBeforeArenaResize;
    startButton.disabled = wasRunningBeforeArenaResize;
    pauseButton.disabled = !wasRunningBeforeArenaResize;
    lastTime = performance.now();
  }
}

arenaResizeButton.addEventListener('click', () => {
  if (isArenaResizeMode) return;
  setArenaResizeMode(true);
});
arenaResizeDoneButton.addEventListener('click', () => setArenaResizeMode(false));
arenaResizeResetButton.addEventListener('click', () => {
  canvasFrame.style.width = '';
  canvasFrame.style.height = '';
  stage.style.width = '';
  stage.style.flex = '';
  resize();
});
arenaResizeHandle.addEventListener('pointerdown', event => {
  event.preventDefault();
  arenaResizePointerStartX = event.clientX;
  arenaResizeStartSize = canvasFrame.getBoundingClientRect().width;
  arenaResizeHandle.setPointerCapture(event.pointerId);
});
arenaResizeHandle.addEventListener('pointermove', event => {
  if (!arenaResizeHandle.hasPointerCapture(event.pointerId)) return;
  const maxSize = defaultArenaSize * 3;
  const nextSize = Math.max(260, Math.min(maxSize, arenaResizeStartSize + event.clientX - arenaResizePointerStartX));
  canvasFrame.style.width = `${nextSize}px`;
  canvasFrame.style.height = `${nextSize}px`;
  stage.style.width = `${nextSize}px`;
  stage.style.flex = `0 0 ${nextSize}px`;
  resize();
});

canvas.addEventListener('pointerdown', event => {
  if (!isArenaResizeMode) return;
  const rect = canvas.getBoundingClientRect();
  const pointerX = event.clientX - rect.left;
  const pointerY = event.clientY - rect.top;
  let nearestIndex = null;
  let nearestDistance = Infinity;
  squares.forEach((square, index) => {
    const dx = pointerX - square.x;
    const dy = pointerY - square.y;
    const distance = Math.hypot(dx, dy);
    if (distance <= Math.max(40, square.size * 0.65) && distance < nearestDistance) {
      nearestIndex = index;
      nearestDistance = distance;
    }
  });
  if (nearestIndex === null) return;
  event.preventDefault();
  draggingGuyIndex = nearestIndex;
  draggingGuyPointerId = event.pointerId;
  canvas.setPointerCapture(event.pointerId);
});

canvas.addEventListener('pointermove', event => {
  if (!isArenaResizeMode || draggingGuyPointerId !== event.pointerId || draggingGuyIndex === null) return;
  const rect = canvas.getBoundingClientRect();
  const square = squares[draggingGuyIndex];
  const half = square.size / 2;
  square.x = Math.max(half, Math.min(width - half, event.clientX - rect.left));
  square.y = Math.max(half, Math.min(height - half, event.clientY - rect.top));
  square.startPositionX = width ? square.x / width : 0.5;
  square.startPositionY = height ? square.y / height : 0.5;
});

function stopDraggingGuy(event) {
  if (draggingGuyPointerId !== event.pointerId) return;
  draggingGuyIndex = null;
  draggingGuyPointerId = null;
}

canvas.addEventListener('pointerup', stopDraggingGuy);
canvas.addEventListener('pointercancel', stopDraggingGuy);
arenaBackgroundColorInput.addEventListener('input', () => {
  arenaBackgroundColor = arenaBackgroundColorInput.value;
  document.documentElement.style.backgroundColor = arenaBackgroundColor;
  document.body.style.backgroundColor = arenaBackgroundColor;
  canvasFrame.style.backgroundColor = arenaBackgroundColor;
});

function closeWatermarkPrompt() {
  watermarkModal.hidden = true;
  watermarkButton.focus();
}

watermarkForm.addEventListener('submit', event => {
  event.preventDefault();
  const text = watermarkTextInput.value.trim();
  watermarkText = text;
  closeWatermarkPrompt();
  restartButton.click();
  document.body.classList.add('watermark-mode');
  clearTimeout(youtubeStartTimer);
  youtubeStartTimer = setTimeout(() => {
    youtubeStartTimer = null;
    if (document.body.classList.contains('watermark-mode') && !matchEnded) startButton.click();
  }, 3000);
});

cancelWatermarkButton.addEventListener('click', closeWatermarkPrompt);
watermarkModal.addEventListener('click', event => {
  if (event.target === watermarkModal) closeWatermarkPrompt();
});

function connectSpriteImageUpload(input, square, imageProperty, preview) {
  input.addEventListener('change', () => {
    const file = input.files?.[0];
    if (!file) return;

    const image = new Image();
    const imageUrl = URL.createObjectURL(file);
    const urlProperty = imageProperty === 'image' ? 'imageURL' : 'winImageURL';
    if (square[urlProperty]) URL.revokeObjectURL(square[urlProperty]);
    square[urlProperty] = imageUrl;
    image.onload = () => {
      square[imageProperty] = image;
      square[imageProperty === 'image' ? 'imageBounds' : 'winImageBounds'] = getImageAlphaBounds(image);
      preview.src = imageUrl;
      preview.hidden = false;
    };
    image.onerror = () => {
      URL.revokeObjectURL(imageUrl);
      if (square[urlProperty] === imageUrl) square[urlProperty] = null;
    };
    image.src = imageUrl;
  });
}

connectSpriteImageUpload(guyOneUpload, squares[1], 'image', guyOnePreview);
connectSpriteImageUpload(guyTwoUpload, squares[0], 'image', guyTwoPreview);
connectSpriteImageUpload(guyOneWinUpload, squares[1], 'winImage', guyOneWinPreview);
connectSpriteImageUpload(guyTwoWinUpload, squares[0], 'winImage', guyTwoWinPreview);

async function decodeAnimatedGif(file) {
  if (file.type !== 'image/gif' || typeof ImageDecoder === 'undefined') return [];
  let decoder;
  try {
    decoder = new ImageDecoder({ data: await file.arrayBuffer(), type: file.type });
    await decoder.tracks.ready;
    const frameCount = decoder.tracks.selectedTrack?.frameCount ?? 0;
    const frames = [];
    for (let frameIndex = 0; frameIndex < frameCount; frameIndex++) {
      const result = await decoder.decode({ frameIndex });
      const image = await createImageBitmap(result.image);
      frames.push({ image, duration: Math.max(20, (result.image.duration ?? 100000) / 1000) });
      result.image.close();
    }
    return frames;
  } catch {
    return [];
  } finally {
    decoder?.close();
  }
}

function getAnimatedVisualFrame(image, startedAt = performance.now()) {
  const frames = image?.animatedFrames;
  if (!frames?.length) return image;
  const totalDuration = frames.reduce((total, frame) => total + frame.duration, 0);
  let elapsed = (performance.now() - startedAt) % totalDuration;
  for (const frame of frames) {
    if (elapsed < frame.duration) return frame.image;
    elapsed -= frame.duration;
  }
  return frames[frames.length - 1].image;
}
function getImageAlphaBounds(image) {
  const width = image.naturalWidth;
  const height = image.naturalHeight;
  const sample = document.createElement('canvas');
  sample.width = width;
  sample.height = height;
  const sampleCtx = sample.getContext('2d', { willReadFrequently: true });
  sampleCtx.drawImage(image, 0, 0);

  try {
    const pixels = sampleCtx.getImageData(0, 0, width, height).data;
    let left = width;
    let top = height;
    let right = -1;
    let bottom = -1;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        if (pixels[(y * width + x) * 4 + 3] > 0) {
          left = Math.min(left, x);
          top = Math.min(top, y);
          right = Math.max(right, x);
          bottom = Math.max(bottom, y);
        }
      }
    }
    if (right < left || bottom < top) return { left: width / 2, top: height / 2, width: 0, height: 0 };
    return { left, top, width: right - left + 1, height: bottom - top + 1 };
  } catch {
    return { left: 0, top: 0, width, height };
  }
}

function connectStats(panel, square) {
  panel.querySelectorAll('[data-stat]').forEach(input => {
    const updateValue = commit => {
      const stat = input.dataset.stat;
      const defaultValue = stat === 'health' ? square.defaultHealth
        : stat === 'speed' ? square.defaultSpeed
          : square.defaultSize;
      let value;

      if (input.value === '') {
        value = defaultValue;
      } else {
        value = input.valueAsNumber;
        if (!Number.isFinite(value)) return;
        const min = Number(input.min);
        const max = Number(input.max);
        if (value < min || value > max) {
          if (!commit) return;
          value = Math.max(min, Math.min(max, value));
          input.value = value;
        }
      }

      if (stat === 'health') {
        square.maxHealth = value;
        square.health = value;
      } else if (stat === 'speed') {
        const currentSpeed = Math.hypot(square.vx, square.vy);
        square.speed = value;
        if (currentSpeed > 0) {
          square.vx = square.vx / currentSpeed * value;
          square.vy = square.vy / currentSpeed * value;
        } else {
          square.vx = square.startDirectionX * value;
          square.vy = square.startDirectionY * value;
        }
      } else if (stat === 'size') {
        square.size = value;
        const half = value / 2;
        square.x = Math.max(half, Math.min(width - half, square.x));
        square.y = Math.max(half, Math.min(height - half, square.y));
        updateHitboxPreview();
      }
    };

    input.addEventListener('input', () => updateValue(false));
    input.addEventListener('change', () => updateValue(true));
  });
}

connectStats(guyOneStats, squares[1]);
connectStats(guyTwoStats, squares[0]);

function updateConditionSidePicker(picker, summary) {
  const selected = [...picker.querySelectorAll('input:checked')].map(input => input.value);
  summary.textContent = selected.join(', ') || 'any';
  summary.title = summary.textContent;
}

function setConditionSides(picker, summary, value) {
  const choices = Array.isArray(value) ? value : [value ?? 'any'];
  const validChoices = choices.filter(choice => ['any', 'left', 'up', 'down', 'right'].includes(choice));
  const selected = validChoices.includes('any') || validChoices.length === 0 ? ['any'] : validChoices;
  picker.querySelectorAll('input').forEach(input => { input.checked = selected.includes(input.value); });
  updateConditionSidePicker(picker, summary);
}

function connectConditionSidePicker(picker, summary) {
  picker.addEventListener('change', event => {
    if (!event.target.matches('input[type="checkbox"]')) return;
    const inputs = [...picker.querySelectorAll('input[type="checkbox"]')];
    if (event.target.value === 'any' && event.target.checked) {
      inputs.forEach(input => { if (input.value !== 'any') input.checked = false; });
    } else if (event.target.value !== 'any' && event.target.checked) {
      inputs.find(input => input.value === 'any').checked = false;
    }
    if (!inputs.some(input => input.checked)) inputs.find(input => input.value === 'any').checked = true;
    updateConditionSidePicker(picker, summary);
  });
}

connectConditionSidePicker(targetSidePicker, targetSideSummary);
connectConditionSidePicker(approachSidePicker, approachSideSummary);
connectConditionSidePicker(damageFromPicker, damageFromSummary);
setConditionSides(targetSidePicker, targetSideSummary, 'any');
setConditionSides(approachSidePicker, approachSideSummary, 'any');
setConditionSides(damageFromPicker, damageFromSummary, 'any');

function updateMoveCondition() {
  collisionProperties.hidden = moveConditionSelect.value !== 'collision';
  damagedProperties.hidden = moveConditionSelect.value !== 'damaged';
  metronomeProperties.hidden = moveConditionSelect.value !== 'metronome';
  matchStartProperties.hidden = moveConditionSelect.value !== 'match-start';
}

moveConditionSelect.addEventListener('change', updateMoveCondition);
updateMoveCondition();

function getSelectedGuySquare() {
  return categorySelect.value === 'guy-one' ? squares[1] : squares[0];
}

function updateVisualPreview(node = draftNodes.find(item => item.id === selectedNodeId)) {
  if (!node || node.type !== 'visual') return;
  const square = getSelectedGuySquare();
  const visualType = node.visualType || 'Flash';
  const isFlash = visualType === 'Flash';
  const isOverlay = visualType === 'Overlay';
  const isSpriteReplace = visualType === 'Sprite Replace';
  const image = !isFlash ? node.image : null;
  const scale = Math.max(0, Number(node.scale) || 0);
  const unit = 0.38;

  visualNodePreview.classList.toggle('is-flash', isFlash);
  visualNodePreview.style.setProperty('--preview-guy-color', square.color);
  const guyImage = isSpriteReplace ? image : square.image;
  visualPreviewGuyImage.hidden = !guyImage || isOverlay;
  if (guyImage) visualPreviewGuyImage.src = guyImage.src;
  else visualPreviewGuyImage.removeAttribute('src');
  visualPreviewImage.hidden = !image || isSpriteReplace;
  if (image) visualPreviewImage.src = image.src;
  else visualPreviewImage.removeAttribute('src');
  visualPreviewEmpty.hidden = isFlash || Boolean(image);
  visualNodePreview.style.setProperty('--preview-image-size', `${Math.min(180, square.size * scale * unit)}px`);
  visualNodePreview.style.setProperty('--preview-x', `${(Number(node.positionX) || 0) * unit}px`);
  visualNodePreview.style.setProperty('--preview-y', `${(Number(node.positionY) || 0) * unit}px`);
  visualNodePreview.style.setProperty('--preview-rotation', `${Number(node.rotation) || 0}deg`);
  const previewOpacity = node.opacity == null
    ? (isFlash ? 50 : 100)
    : Math.max(0, Math.min(isFlash ? 200 : 100, Number(node.opacity) || 0));
  visualNodePreview.style.setProperty('--preview-opacity', `${previewOpacity / 100}`);
  visualPreviewGuyImage.style.transform = isSpriteReplace ? `rotate(${Number(node.rotation) || 0}deg)` : '';
  visualPreviewGuyImage.style.opacity = '1';
  visualNodePreview.classList.toggle('is-sprite-replace', isSpriteReplace);
  visualNodePreview.classList.toggle('is-overlay', isOverlay);
  visualNodePreview.setAttribute('aria-label', isFlash
    ? 'Flash preview'
    : `${visualType} preview${image ? '' : ', no image selected'}`);
}

function updateHitboxPreview() {
  if (!hitboxPreview) return;
  const node = draftNodes.find(item => item.id === selectedNodeId);
  if (!node || hitboxNodeDetails.hidden) return;
  const square = getSelectedGuySquare();
  const width = Number(node.width);
  const height = Number(node.height);
  const previewWidth = Number.isFinite(width) ? width : square.size;
  const previewHeight = Number.isFinite(height) ? height : square.size;
  const largestDimension = Math.max(square.size, previewWidth, previewHeight);
  const scale = Math.min(0.24, 56 / largestDimension);
  const previewSize = size => `${size * scale}px`;
  hitboxPreview.style.setProperty('--guy-preview-width', previewSize(square.size));
  hitboxPreview.style.setProperty('--guy-preview-height', previewSize(square.size));
  hitboxPreview.style.setProperty('--hitbox-preview-width', previewSize(previewWidth));
  hitboxPreview.style.setProperty('--hitbox-preview-height', previewSize(previewHeight));
  hitboxPreview.style.setProperty('--hitbox-offset-x', `${(Number(node.x) || 0) * scale}px`);
  hitboxPreview.style.setProperty('--hitbox-offset-y', `${(Number(node.y) || 0) * scale}px`);
  hitboxPreview.style.setProperty('--hitbox-rotation', `${Number(node.rotation) || 0}deg`);
  hitboxPreview.style.setProperty('--guy-color', square.color);
  hitboxSizeXValue.value = node.width;
  hitboxSizeYValue.value = node.height;
  hitboxSizeXInput.value = Math.max(Number(hitboxSizeXInput.min), Math.min(Number(hitboxSizeXInput.max), previewWidth));
  hitboxSizeYInput.value = Math.max(Number(hitboxSizeYInput.min), Math.min(Number(hitboxSizeYInput.max), previewHeight));
  guySizeValue.textContent = `${square.size} × ${square.size}`;
  hitboxSizeLabel.textContent = `${node.width} × ${node.height}`;
}

const movesByGuy = { 'guy-one': [], 'guy-two': [] };
const moveStackSettings = { 'guy-one': { stackMoves: true, selfStack: true }, 'guy-two': { stackMoves: true, selfStack: true } };
const activeMoveTimelines = { 'guy-one': new Map(), 'guy-two': new Map() };
const damagePopups = [];
const activeSoundNodes = new Set();
const activeVisuals = [];
const activeHitboxes = [];
const activeProjectiles = [];
const projectilePositionCache = new Map();
const activeVelocityMoves = [];

function getProjectileIdKey(attackerIndex, preview, id) {
  const normalizedId = String(id ?? '').trim();
  return normalizedId ? `${preview ? 'preview' : 'live'}:${attackerIndex}:${normalizedId}` : null;
}

function rememberProjectilePosition(projectile) {
  if (projectile.idKey) projectilePositionCache.set(projectile.idKey, { x: projectile.x, y: projectile.y, size: projectile.radius * 2 });
}

function removeProjectileFromPlay(projectile) {
  rememberProjectilePosition(projectile);
  const index = activeProjectiles.indexOf(projectile);
  if (index >= 0) activeProjectiles.splice(index, 1);
}

function clearPreviewProjectilePositions() {
  for (const key of projectilePositionCache.keys()) {
    if (key.startsWith('preview:')) projectilePositionCache.delete(key);
  }
}
let simulationTime = 0;
let nextMoveId = 1;
let nextNodeId = 1;
let draftNodes = [];
let selectedNodeId = null;
const variableNumberProperties = {
  'hitbox-damage': 'damage', 'hitbox-size-x-value': 'width', 'hitbox-size-y-value': 'height',
  'hitbox-position-x': 'x', 'hitbox-position-y': 'y', 'hitbox-rotation-value': 'rotation', 'hitbox-time': 'time',
  'projectile-damage': 'damage', 'projectile-speed': 'speed', 'projectile-time': 'time', 'projectile-rotate-speed': 'rotateSpeed',
  'projectile-rotation-value': 'rotation', 'projectile-hit-rate': 'hitRate', 'projectile-damage-deduction': 'damageDeduction',
  'projectile-angle-offset': 'angleOffset', 'projectile-homing': 'homing', 'projectile-size': 'size', 'projectile-end-size': 'endSize',
  'projectile-bounce-count': 'bounceCount', 'projectile-falloff': 'falloff', 'cancel-move-cooldown': 'moveCooldown',
  'sound-node-start': 'start', 'wait-node-time': 'time', 'velocity-speed': 'speed', 'velocity-distance': 'distance',
  'velocity-rotation-value': 'rotation', 'visual-node-scale': 'scale', 'visual-node-position-x': 'positionX',
  'visual-node-position-y': 'positionY', 'visual-rotation-value': 'rotation', 'visual-node-speed': 'speed',
  'visual-node-opacity': 'opacity', 'sprite-replace-time': 'time', 'sprite-replace-rotation': 'rotation',
  'visual-node-time': 'time', 'visual-node-fade-in': 'fadeIn', 'visual-node-fade-out': 'fadeOut',
};
for (const id of Object.keys(variableNumberProperties)) {
  const input = document.getElementById(id);
  if (!input) continue;
  input.type = 'text';
  input.inputMode = 'decimal';
  Object.defineProperty(input, 'valueAsNumber', {
    configurable: true,
    get() {
      const value = this.value.trim();
      return value === '' || value.startsWith('$') ? NaN : Number(value);
    },
  });
}
document.querySelector('.move-node-properties').addEventListener('input', event => {
  const input = event.target;
  const property = variableNumberProperties[input.id];
  if (!property || !input.value.startsWith('$')) return;
  const node = draftNodes.find(item => item.id === selectedNodeId);
  if (!node) return;
  node[property] = input.value;
  event.stopImmediatePropagation();
}, true);
let editingMoveId = null;
let moveReturnFocus = addMoveButton;

function renderTimeline() {
  timelineList.replaceChildren();
  draftNodes.forEach(node => {
    const nodeButton = document.createElement('button');
    nodeButton.type = 'button';
    const nodeClass = node.type === 'cancel' ? 'cancel-timeline-node' : node.type === 'variable' ? 'variable-timeline-node' : node.type === 'sound' ? 'sound-timeline-node' : node.type === 'wait' ? 'wait-timeline-node' : node.type === 'visual' ? 'visual-timeline-node' : node.type === 'projectile' ? 'projectile-timeline-node' : node.type === 'velocity' ? 'velocity-timeline-node' : 'hitbox-timeline-node';
    nodeButton.className = `timeline-node ${nodeClass}`;
    nodeButton.dataset.nodeId = node.id;
    nodeButton.textContent = getTimelineNodeLabel(node);
    nodeButton.setAttribute('aria-pressed', String(node.id === selectedNodeId));
    nodeButton.addEventListener('click', () => selectTimelineNode(node.id));
    timelineList.append(nodeButton);
  });
  previewMoveButton.disabled = draftNodes.length === 0 || isPreviewingMove;
  updateNodeMoveButtons();
}

function updateNodeMoveButtons() {
  const index = draftNodes.findIndex(node => node.id === selectedNodeId);
  moveNodeUpButton.disabled = index <= 0;
  moveNodeDownButton.disabled = index < 0 || index >= draftNodes.length - 1;
  duplicateNodeButton.disabled = index < 0;
  removeNodeButton.disabled = index < 0;
}

function moveSelectedNode(offset) {
  const index = draftNodes.findIndex(node => node.id === selectedNodeId);
  const destination = index + offset;
  if (index < 0 || destination < 0 || destination >= draftNodes.length) return;
  const [node] = draftNodes.splice(index, 1);
  draftNodes.splice(destination, 0, node);
  renderTimeline();
}

function duplicateSelectedNode() {
  const index = draftNodes.findIndex(node => node.id === selectedNodeId);
  if (index < 0) return;
  const duplicate = { ...draftNodes[index], id: nextNodeId++ };
  draftNodes.splice(index + 1, 0, duplicate);
  selectedNodeId = duplicate.id;
  renderTimeline();
  selectTimelineNode(duplicate.id);
}

function removeSelectedNode() {
  const index = draftNodes.findIndex(node => node.id === selectedNodeId);
  if (index < 0) return;
  draftNodes.splice(index, 1);
  const nextNode = draftNodes[index] ?? draftNodes[index - 1];
  selectedNodeId = nextNode?.id ?? null;
  renderTimeline();
  if (nextNode) {
    selectTimelineNode(nextNode.id);
  } else {
    hitboxNodeDetails.hidden = true;
    projectileNodeDetails.hidden = true;
    soundNodeDetails.hidden = true;
    waitNodeDetails.hidden = true;
    visualNodeDetails.hidden = true;
    velocityNodeDetails.hidden = true;
    cancelNodeDetails.hidden = true;
    variableNodeDetails.hidden = true;
  }
}

function getTimelineNodeLabel(node) {
  if (node.type === 'hitbox') return `Hitbox [${node.damage ?? 10}]`;
  if (node.type === 'projectile') return `Projectile [${node.damage ?? 10}]`;
  if (node.type === 'sound') return `Sound [${node.soundName || defaultHitboxSoundName}]`;
  if (node.type === 'visual') return `Visual [${node.visualType || 'Flash'}]`;
  if (node.type === 'velocity') return `Velocity [${node.speed ?? 300} / ${node.distance ?? 200}]`;
  if (node.type === 'cancel') return 'Cancel';
  if (node.type === 'variable') return 'Variable';
  return `Wait [${node.time ?? 1}]`;
}

function updateTimelineNodeLabel(node) {
  const button = [...timelineList.querySelectorAll('.timeline-node')]
    .find(item => Number(item.dataset.nodeId) === node.id);
  if (button) button.textContent = getTimelineNodeLabel(node);
}

function selectTimelineNode(nodeId) {
  selectedNodeId = nodeId;
  const node = draftNodes.find(item => item.id === nodeId);
  if (!node) return;
  hitboxNodeDetails.hidden = node.type !== 'hitbox';
  projectileNodeDetails.hidden = node.type !== 'projectile';
  soundNodeDetails.hidden = node.type !== 'sound';
  waitNodeDetails.hidden = node.type !== 'wait';
  visualNodeDetails.hidden = node.type !== 'visual';
  velocityNodeDetails.hidden = node.type !== 'velocity';
  cancelNodeDetails.hidden = node.type !== 'cancel';
  variableNodeDetails.hidden = node.type !== 'variable';
  timelineList.querySelectorAll('.timeline-node').forEach(button => {
    button.setAttribute('aria-pressed', String(Number(button.dataset.nodeId) === selectedNodeId));
  });
  updateNodeMoveButtons();
  if (node.type === 'sound') {
    soundNodeFileInput.value = '';
    soundNodeFileName.textContent = node.soundName || defaultHitboxSoundName;
    soundNodeVolumeInput.value = node.volume ?? 100;
    soundNodeVolumeValue.textContent = `${node.volume ?? 100}%`;
    soundNodeCancelInput.checked = Boolean(node.cancel);
    soundNodeStartInput.value = node.start ?? 0;
    soundNodeFadeInput.checked = Boolean(node.fade);
    soundNodeFileInput.onchange = () => {
      const file = soundNodeFileInput.files?.[0];
      if (!file) return;
      node.soundURL = URL.createObjectURL(file);
      node.soundName = file.name;
      soundNodeFileName.textContent = file.name;
      updateTimelineNodeLabel(node);
    };
    soundNodeVolumeInput.oninput = () => {
      node.volume = Number(soundNodeVolumeInput.value);
      soundNodeVolumeValue.textContent = `${node.volume}%`;
    };
    soundNodeCancelInput.onchange = () => { node.cancel = soundNodeCancelInput.checked; };
    soundNodeStartInput.oninput = () => {
      const start = soundNodeStartInput.valueAsNumber;
      if (Number.isFinite(start)) node.start = Math.max(0, start);
    };
    soundNodeFadeInput.onchange = () => { node.fade = soundNodeFadeInput.checked; };
    return;
  }
  if (node.type === 'variable') {
    variableValueInput.value = node.variable ?? '';
    variableRemoveInput.checked = Boolean(node.remove);
    variableTargetOfHitboxInput.checked = Boolean(node.targetOfHitbox);
    variableValueInput.oninput = () => { node.variable = variableValueInput.value; };
    variableRemoveInput.onchange = () => { node.remove = variableRemoveInput.checked; };
    variableTargetOfHitboxInput.onchange = () => { node.targetOfHitbox = variableTargetOfHitboxInput.checked; };
    return;
  }
  if (node.type === 'cancel') {
    cancelNeverRepeatInput.checked = Boolean(node.neverRepeat);
    cancelMoveCooldownInput.value = node.moveCooldown ?? 1;
    cancelNeverRepeatInput.onchange = () => { node.neverRepeat = cancelNeverRepeatInput.checked; };
    cancelMoveCooldownInput.oninput = () => {
      const cooldown = cancelMoveCooldownInput.valueAsNumber;
      if (Number.isFinite(cooldown)) node.moveCooldown = Math.max(0, cooldown);
    };
    return;
  }
  if (node.type === 'wait') {
    waitNodeTimeInput.value = node.time ?? 1;
    waitNodeAfterDamageInput.checked = Boolean(node.afterDamage);
    waitNodeAfterDamageInput.onchange = () => { node.afterDamage = waitNodeAfterDamageInput.checked; };
    waitNodeTimeInput.oninput = () => {
      const time = waitNodeTimeInput.valueAsNumber;
      if (Number.isFinite(time)) {
        node.time = Math.max(0, time);
        updateTimelineNodeLabel(node);
      }
    };
    return;
  }
  if (node.type === 'velocity') {
    velocitySpeedInput.value = node.speed ?? 300;
    velocityDistanceInput.value = node.distance ?? 200;
    node.rotation = node.rotation ?? (categorySelect.value === 'guy-one' ? 90 : 270);
    updateVelocityRotationDial(node.rotation);
    velocityTrackEnemyInput.checked = Boolean(node.trackEnemy);
    velocityTrackOppositeInput.checked = Boolean(node.trackOpposite);
    velocityChangesDirectionInput.checked = Boolean(node.changesDirection);
    velocityTargetOfHitboxInput.checked = Boolean(node.targetOfHitbox);
    velocitySpeedInput.oninput = () => {
      const value = velocitySpeedInput.valueAsNumber;
      if (!Number.isFinite(value)) return;
      node.speed = Math.max(1, Math.min(3000, value));
      updateTimelineNodeLabel(node);
    };
    velocityDistanceInput.oninput = () => {
      const value = velocityDistanceInput.valueAsNumber;
      if (!Number.isFinite(value)) return;
      node.distance = Math.max(0, Math.min(5000, value));
      updateTimelineNodeLabel(node);
    };
    velocityTrackEnemyInput.onchange = () => {
      node.trackEnemy = velocityTrackEnemyInput.checked;
      if (node.trackEnemy) {
        node.trackOpposite = false;
        velocityTrackOppositeInput.checked = false;
      }
    };
    velocityTrackOppositeInput.onchange = () => {
      node.trackOpposite = velocityTrackOppositeInput.checked;
      if (node.trackOpposite) {
        node.trackEnemy = false;
        velocityTrackEnemyInput.checked = false;
      }
    };
    velocityChangesDirectionInput.onchange = () => { node.changesDirection = velocityChangesDirectionInput.checked; };
    velocityTargetOfHitboxInput.onchange = () => { node.targetOfHitbox = velocityTargetOfHitboxInput.checked; };
    return;
  }
  if (node.type === 'projectile') {
    projectileIdInput.value = node.projectileId ?? '';
    projectileCancelIdInput.value = node.cancelProjectileId ?? '';
    projectileSpawnAtIdInput.value = node.spawnAtProjectileId ?? '';
    projectileIdInput.oninput = () => { node.projectileId = projectileIdInput.value; };
    projectileCancelIdInput.oninput = () => { node.cancelProjectileId = projectileCancelIdInput.value; };
    projectileSpawnAtIdInput.oninput = () => { node.spawnAtProjectileId = projectileSpawnAtIdInput.value; };
    projectileImageInput.value = '';
    projectileImageName.textContent = node.imageName || (node.image ? 'Bottle' : 'No image selected');
    node.soundURL = node.soundURL || defaultHitboxSound;
    node.soundName = node.soundName || defaultHitboxSoundName;
    projectileSoundInput.value = '';
    projectileSoundName.textContent = node.soundName;
    projectileDamageInput.value = node.damage ?? 10;
    projectileSpeedInput.value = node.speed ?? 420;
    projectileTimeInput.value = node.time ?? 4;
    projectileBounceCountInput.value = node.bounceCount ?? 0;
    projectileRotateSpeedInput.value = node.rotateSpeed ?? 0;
    updateProjectileRotationDial(node.rotation ?? (categorySelect.value === 'guy-one' ? 90 : 270));
    projectileRotateToDirectionInput.checked = node.rotateToDirection ?? true;
    projectileSizeInput.value = node.size ?? 1;
    projectileEndSizeInput.value = node.endSize ?? 1;
    projectileTracksInput.checked = node.tracks ?? true;
    projectilePiercingInput.checked = Boolean(node.piercing);
    projectileHitRateInput.value = node.hitRate ?? 1;
    projectileDamageDeductionInput.value = node.damageDeduction ?? 0;
    const updateProjectilePiercingProperties = () => {
      node.piercing = projectilePiercingInput.checked;
      projectileHitRateSetting.hidden = !node.piercing;
      projectileDamageDeductionSetting.hidden = !node.piercing;
    };
    updateProjectilePiercingProperties();
    projectileAngleOffsetInput.value = node.angleOffset ?? 0;
    projectileHomingInput.value = node.homing ?? 0;
    const updateProjectileTrackingProperties = () => {
      const tracks = projectileTracksInput.checked;
      node.tracks = tracks;
      projectileRotationSetting.hidden = tracks;
      projectileAngleOffsetSetting.hidden = !tracks;
      projectileHomingSetting.hidden = !tracks;
    };
    updateProjectileTrackingProperties();
    projectileFalloffInput.value = node.falloff ?? 0;
    projectileDamageInput.oninput = () => {
      const value = projectileDamageInput.valueAsNumber;
      if (Number.isFinite(value)) node.damage = Math.max(0, value);
      updateTimelineNodeLabel(node);
    };
    projectileSpeedInput.oninput = () => {
      const value = projectileSpeedInput.valueAsNumber;
      if (Number.isFinite(value)) node.speed = Math.max(1, Math.min(2000, value));
    };
    projectileTimeInput.oninput = () => {
      const value = projectileTimeInput.valueAsNumber;
      if (Number.isFinite(value)) node.time = Math.max(0.05, Math.min(60, value));
    };
    projectileBounceCountInput.oninput = () => {
      const value = projectileBounceCountInput.valueAsNumber;
      if (Number.isFinite(value)) node.bounceCount = Math.max(0, Math.min(99, Math.floor(value)));
    };
    projectileRotateSpeedInput.oninput = () => {
      const value = projectileRotateSpeedInput.valueAsNumber;
      if (Number.isFinite(value)) node.rotateSpeed = Math.max(-3600, Math.min(3600, value));
    };
    node.rotation = node.rotation ?? (categorySelect.value === 'guy-one' ? 90 : 270);
    projectileSizeInput.oninput = () => {
      const value = projectileSizeInput.valueAsNumber;
      if (Number.isFinite(value)) node.size = Math.max(0.1, Math.min(10, value));
    };
    projectileEndSizeInput.oninput = () => {
      const value = projectileEndSizeInput.valueAsNumber;
      if (Number.isFinite(value)) node.endSize = Math.max(0.1, Math.min(10, value));
    };
    projectileTracksInput.onchange = updateProjectileTrackingProperties;
    projectileRotateToDirectionInput.onchange = () => { node.rotateToDirection = projectileRotateToDirectionInput.checked; };
    projectilePiercingInput.onchange = updateProjectilePiercingProperties;
    projectileHitRateInput.oninput = () => {
      const value = projectileHitRateInput.valueAsNumber;
      if (Number.isFinite(value)) node.hitRate = Math.max(0, value);
    };
    projectileDamageDeductionInput.oninput = () => {
      const value = projectileDamageDeductionInput.valueAsNumber;
      if (Number.isFinite(value)) node.damageDeduction = Math.max(0, value);
    };
    projectileAngleOffsetInput.oninput = () => {
      const value = projectileAngleOffsetInput.valueAsNumber;
      if (Number.isFinite(value)) node.angleOffset = Math.max(0, Math.min(180, value));
    };
    projectileHomingInput.oninput = () => {
      const value = projectileHomingInput.valueAsNumber;
      if (Number.isFinite(value)) node.homing = Math.max(0, Math.min(3600, value));
    };
    projectileFalloffInput.oninput = () => {
      const value = projectileFalloffInput.valueAsNumber;
      if (Number.isFinite(value)) node.falloff = Math.max(0, Math.min(9999, value));
    };
    projectileImageInput.onchange = () => {
      const file = projectileImageInput.files?.[0];
      if (!file) return;
      if (node.imageURL) URL.revokeObjectURL(node.imageURL);
      node.imageURL = URL.createObjectURL(file);
      node.imageName = file.name;
      const image = new Image();
      image.onload = () => {
        node.image = image;
        node.imageBounds = getImageAlphaBounds(image);
      };
      image.src = node.imageURL;
      projectileImageName.textContent = file.name;
    };
    projectileSoundInput.onchange = () => {
      const file = projectileSoundInput.files?.[0];
      if (!file) return;
      if (node.soundURL?.startsWith('blob:')) URL.revokeObjectURL(node.soundURL);
      node.soundURL = URL.createObjectURL(file);
      node.soundName = file.name;
      projectileSoundName.textContent = file.name;
    };
    projectileSoundDefaultButton.onclick = () => {
      if (node.soundURL?.startsWith('blob:')) URL.revokeObjectURL(node.soundURL);
      node.soundURL = defaultHitboxSound;
      node.soundName = defaultHitboxSoundName;
      projectileSoundName.textContent = defaultHitboxSoundName;
      projectileSoundInput.value = '';
    };
    return;
  }
  if (node.type === 'visual') {
    visualNodeTypeInput.value = node.visualType || 'Flash';
    visualNodeTimeInput.value = node.time ?? 1;
    visualNodeFadeInInput.value = node.fadeIn ?? 0;
    visualNodeFadeOutInput.value = node.fadeOut ?? 0;
    visualDataFileInput.value = '';
    visualDataName.textContent = node.imageName || 'No image selected';
    const isSpriteReplace = node.visualType === 'Sprite Replace';
    const isOverlay = node.visualType === 'Overlay';
    const isImageVisual = ['Image', 'Attached Image'].includes(node.visualType);
    visualDataSetting.hidden = !(isImageVisual || isSpriteReplace || isOverlay);
    visualImageSettings.hidden = !isImageVisual;
    spriteReplaceSettings.hidden = !isSpriteReplace;
    visualTargetOfHitboxSetting.hidden = isSpriteReplace || isOverlay;
    visualSpawnAtProjectileSetting.hidden = isSpriteReplace || isOverlay;
    visualOpacitySetting.hidden = isSpriteReplace;
    visualTimeSetting.hidden = isSpriteReplace;
    visualFadeInSetting.hidden = isSpriteReplace;
    visualFadeOutSetting.hidden = isSpriteReplace;
    spriteReplaceTimeInput.value = node.time ?? 1;
    if (node.visualType === 'Sprite Replace') node.opacity = 100;
    spriteReplaceRotationInput.value = node.rotation ?? 0;
    spriteReplaceFaceEnemyInput.checked = Boolean(node.faceTowardsEnemy);
    visualScaleInput.value = node.scale ?? 1;
    visualPositionXInput.value = node.positionX ?? 0;
    visualPositionYInput.value = node.positionY ?? 0;
    updateVisualRotationDial(node.rotation ?? 0);
    visualSpeedInput.value = node.speed ?? 0;
    visualTowardsEnemyInput.checked = Boolean(node.towardsEnemy);
    visualRotateTowardsEnemyInput.checked = Boolean(node.rotateTowardsEnemy);
    visualOpacityInput.value = node.opacity ?? (node.visualType === 'Flash' || !node.visualType ? 50 : 100);
    visualOpacityInput.max = node.visualType === 'Flash' || !node.visualType ? '200' : '100';
    visualMaskInput.checked = Boolean(node.mask);
    visualTargetOfHitboxInput.checked = Boolean(node.targetOfHitbox);
    visualSpawnAtProjectileInput.value = node.spawnAtProjectileId ?? '';
    visualTargetOfHitboxSetting.hidden = isSpriteReplace || isOverlay;
    updateVisualPreview(node);
    visualNodeTypeInput.onchange = () => {
      node.visualType = visualNodeTypeInput.value || 'Flash';
      visualOpacityInput.max = node.visualType === 'Flash' ? '200' : '100';
      const imageVisual = ['Image', 'Attached Image'].includes(node.visualType);
      const overlay = node.visualType === 'Overlay';
      const spriteReplace = node.visualType === 'Sprite Replace';
      node.opacity = node.visualType === 'Flash' ? 50 : 100;
      visualOpacityInput.value = node.opacity;
      if (spriteReplace) {
        node.fadeIn = 0;
        node.fadeOut = 0;
        node.opacity = 100;
      } else if (node.visualType !== 'Flash' && Number(node.opacity) > 100) {
        node.opacity = 100;
        visualOpacityInput.value = 100;
      }
      visualDataSetting.hidden = !(imageVisual || spriteReplace || overlay);
      visualImageSettings.hidden = !imageVisual;
      spriteReplaceSettings.hidden = !spriteReplace;
      visualTargetOfHitboxSetting.hidden = spriteReplace || overlay;
      visualSpawnAtProjectileSetting.hidden = spriteReplace || overlay;
      visualOpacitySetting.hidden = spriteReplace;
      visualTimeSetting.hidden = spriteReplace;
      visualFadeInSetting.hidden = spriteReplace;
      visualFadeOutSetting.hidden = spriteReplace;
      updateVisualPreview(node);
      updateTimelineNodeLabel(node);
    };
    visualNodeTimeInput.oninput = () => {
      const time = visualNodeTimeInput.valueAsNumber;
      if (Number.isFinite(time)) node.time = Math.max(0, time);
    };
    visualNodeFadeInInput.oninput = () => {
      const time = visualNodeFadeInInput.valueAsNumber;
      if (Number.isFinite(time)) node.fadeIn = Math.max(0, time);
    };
    visualNodeFadeOutInput.oninput = () => {
      const time = visualNodeFadeOutInput.valueAsNumber;
      if (Number.isFinite(time)) node.fadeOut = Math.max(0, time);
    };
    visualScaleInput.oninput = () => {
      const scale = visualScaleInput.valueAsNumber;
      if (Number.isFinite(scale)) node.scale = Math.max(0, scale);
      updateVisualPreview(node);
    };
    visualPositionXInput.oninput = () => {
      node.positionX = Number(visualPositionXInput.value) || 0;
      updateVisualPreview(node);
    };
    visualPositionYInput.oninput = () => {
      node.positionY = Number(visualPositionYInput.value) || 0;
      updateVisualPreview(node);
    };
    visualSpeedInput.oninput = () => {
      const speed = visualSpeedInput.valueAsNumber;
      if (Number.isFinite(speed)) node.speed = Math.max(0, speed);
    };
    visualTowardsEnemyInput.onchange = () => { node.towardsEnemy = visualTowardsEnemyInput.checked; };
    visualRotateTowardsEnemyInput.onchange = () => { node.rotateTowardsEnemy = visualRotateTowardsEnemyInput.checked; };
    visualOpacityInput.oninput = () => {
      const opacity = visualOpacityInput.valueAsNumber;
      if (Number.isFinite(opacity)) {
        node.opacity = Math.max(0, Math.min(node.visualType === 'Flash' ? 200 : 100, opacity));
        visualOpacityInput.value = node.opacity;
        updateVisualPreview(node);
      }
    };
    visualMaskInput.onchange = () => { node.mask = visualMaskInput.checked; };
    visualTargetOfHitboxInput.onchange = () => { node.targetOfHitbox = visualTargetOfHitboxInput.checked; };
    visualSpawnAtProjectileInput.oninput = () => { node.spawnAtProjectileId = visualSpawnAtProjectileInput.value; };
    spriteReplaceTimeInput.oninput = () => {
      const time = spriteReplaceTimeInput.valueAsNumber;
      if (Number.isFinite(time)) node.time = Math.max(0, time);
    };
    spriteReplaceRotationInput.oninput = () => {
      const rotation = spriteReplaceRotationInput.valueAsNumber;
      if (Number.isFinite(rotation)) node.rotation = rotation;
      updateVisualPreview(node);
    };
    spriteReplaceFaceEnemyInput.onchange = () => { node.faceTowardsEnemy = spriteReplaceFaceEnemyInput.checked; };
    visualDataFileInput.onchange = () => {
      const file = visualDataFileInput.files?.[0];
      if (!file) return;
      if (node.imageURL) URL.revokeObjectURL(node.imageURL);
      node.imageURL = URL.createObjectURL(file);
      node.imageName = file.name;
      node.image = new Image();
      const image = node.image;
      image.onload = async () => {
        if (node.image !== image) return;
        node.imageBounds = getImageAlphaBounds(image);
        const frames = await decodeAnimatedGif(file);
        if (node.image !== image) {
          frames.forEach(frame => frame.image.close());
          return;
        }
        image.animatedFrames = frames;
        updateVisualPreview(node);
      };
      image.src = node.imageURL;
      visualDataName.textContent = file.name;
      updateVisualPreview(node);
      updateTimelineNodeLabel(node);
    };
    return;
  }
  if (node.type !== 'hitbox') return;
  hitboxNodeDetails.hidden = false;
  hitboxDamageInput.value = node.damage;
  hitboxTimeInput.value = node.time ?? 0.05;
  hitboxAnchoredInput.checked = Boolean(node.anchored);
  hitboxSizeXValue.value = node.width;
  hitboxSizeYValue.value = node.height;
  hitboxSizeXInput.value = Math.max(Number(hitboxSizeXInput.min), Math.min(Number(hitboxSizeXInput.max), node.width));
  hitboxSizeYInput.value = Math.max(Number(hitboxSizeYInput.min), Math.min(Number(hitboxSizeYInput.max), node.height));
  hitboxPositionXInput.value = node.x;
  hitboxPositionYInput.value = node.y;
  hitboxSoundInput.value = '';
  hitboxSoundName.textContent = node.soundName || defaultHitboxSoundName;
  hitboxDamageInput.oninput = () => {
    node.damage = Math.max(0, Math.min(9999, Number(hitboxDamageInput.value) || 0));
    updateTimelineNodeLabel(node);
  };
  hitboxTimeInput.oninput = () => {
    const time = hitboxTimeInput.valueAsNumber;
    if (Number.isFinite(time)) node.time = Math.max(0, time);
  };
  hitboxAnchoredInput.onchange = () => { node.anchored = hitboxAnchoredInput.checked; };
  hitboxPositionXInput.oninput = () => {
    node.x = Number(hitboxPositionXInput.value) || 0;
    updateHitboxPreview();
  };
  hitboxPositionYInput.oninput = () => {
    node.y = Number(hitboxPositionYInput.value) || 0;
    updateHitboxPreview();
  };
  if (!Number.isFinite(node.rotation) && !(typeof node.rotation === 'string' && node.rotation.startsWith('$'))) node.rotation = 0;
  updateRotationDial(node.rotation);
  hitboxSoundInput.onchange = () => {
    const file = hitboxSoundInput.files?.[0];
    if (!file) return;
    node.soundURL = URL.createObjectURL(file);
    node.soundName = file.name;
    hitboxSoundName.textContent = file.name;
  };
  hitboxSoundDefaultButton.onclick = () => {
    node.soundURL = defaultHitboxSound;
    node.soundName = defaultHitboxSoundName;
    hitboxSoundName.textContent = node.soundName;
    hitboxSoundInput.value = '';
  };
  hitboxSizeXInput.oninput = () => {
    node.width = Number(hitboxSizeXInput.value);
    hitboxSizeXValue.value = node.width;
    updateHitboxPreview();
  };
  hitboxSizeYInput.oninput = () => {
    node.height = Number(hitboxSizeYInput.value);
    hitboxSizeYValue.value = node.height;
    updateHitboxPreview();
  };
  hitboxSizeXValue.oninput = () => {
    const value = hitboxSizeXValue.valueAsNumber;
    if (!Number.isFinite(value) || value < 1) return;
    node.width = value;
    updateHitboxPreview();
  };
  hitboxSizeYValue.oninput = () => {
    const value = hitboxSizeYValue.valueAsNumber;
    if (!Number.isFinite(value) || value < 1) return;
    node.height = value;
    updateHitboxPreview();
  };
  hitboxSizeXValue.onchange = () => { if (!Number.isFinite(hitboxSizeXValue.valueAsNumber) || hitboxSizeXValue.valueAsNumber < 1) hitboxSizeXValue.value = node.width; };
  hitboxSizeYValue.onchange = () => { if (!Number.isFinite(hitboxSizeYValue.valueAsNumber) || hitboxSizeYValue.valueAsNumber < 1) hitboxSizeYValue.value = node.height; };
  updateHitboxPreview();
}

function updateRotationDial(value) {
  const numericValue = Number(value);
  const degrees = Number.isFinite(numericValue) ? ((Math.round(numericValue) % 360) + 360) % 360 : 0;
  hitboxRotationDial.style.setProperty('--dial-angle', `${degrees}deg`);
  hitboxRotationDial.setAttribute('aria-valuenow', String(degrees));
  hitboxRotationDial.setAttribute('aria-valuetext', `${degrees} degrees`);
  if (!(typeof value === 'string' && value.startsWith('$'))) hitboxRotationValue.value = String(degrees);
}

function updateNodeRotation(node, value) {
  node.rotation = ((Math.round(value) % 360) + 360) % 360;
  updateRotationDial(node.rotation);
  updateHitboxPreview();
}

function updateProjectileRotationDial(value) {
  const numericValue = Number(value);
  const degrees = Number.isFinite(numericValue) ? ((Math.round(numericValue) % 360) + 360) % 360 : 0;
  projectileRotationDial.style.setProperty('--dial-angle', `${degrees}deg`);
  projectileRotationDial.setAttribute('aria-valuenow', String(degrees));
  projectileRotationDial.setAttribute('aria-valuetext', `${degrees} degrees`);
  if (!(typeof value === 'string' && value.startsWith('$'))) projectileRotationInput.value = String(degrees);
}

function updateProjectileRotation(node, value) {
  node.rotation = ((Math.round(value) % 360) + 360) % 360;
  updateProjectileRotationDial(node.rotation);
}

function updateVelocityRotationDial(value) {
  const numericValue = Number(value);
  const degrees = Number.isFinite(numericValue) ? ((Math.round(numericValue) % 360) + 360) % 360 : 0;
  velocityRotationDial.style.setProperty('--dial-angle', `${degrees}deg`);
  velocityRotationDial.setAttribute('aria-valuenow', String(degrees));
  velocityRotationDial.setAttribute('aria-valuetext', `${degrees} degrees`);
  if (!(typeof value === 'string' && value.startsWith('$'))) velocityRotationInput.value = String(degrees);
}

function updateVelocityRotation(node, value) {
  node.rotation = ((Math.round(value) % 360) + 360) % 360;
  updateVelocityRotationDial(node.rotation);
}

function updateVisualRotationDial(value) {
  const numericValue = Number(value);
  const degrees = Number.isFinite(numericValue) ? ((Math.round(numericValue) % 360) + 360) % 360 : 0;
  visualRotationDial.style.setProperty('--dial-angle', `${degrees}deg`);
  visualRotationDial.setAttribute('aria-valuenow', String(degrees));
  visualRotationDial.setAttribute('aria-valuetext', `${degrees} degrees`);
  if (!(typeof value === 'string' && value.startsWith('$'))) visualRotationValue.value = String(degrees);
}

function updateVisualRotation(node, value) {
  node.rotation = ((Math.round(value) % 360) + 360) % 360;
  updateVisualRotationDial(node.rotation);
  updateVisualPreview(node);
}

function setVisualRotationFromPointer(event) {
  const bounds = visualRotationDial.getBoundingClientRect();
  const dx = event.clientX - bounds.left - bounds.width / 2;
  const dy = event.clientY - bounds.top - bounds.height / 2;
  const degrees = (Math.atan2(dy, dx) * 180 / Math.PI + 90 + 360) % 360;
  const node = draftNodes.find(item => item.id === selectedNodeId);
  if (node?.type === 'visual') updateVisualRotation(node, degrees);
}

visualRotationDial.addEventListener('pointerdown', event => {
  visualRotationDial.setPointerCapture(event.pointerId);
  setVisualRotationFromPointer(event);
});
visualRotationDial.addEventListener('pointermove', event => {
  if (visualRotationDial.hasPointerCapture(event.pointerId)) setVisualRotationFromPointer(event);
});
visualRotationDial.addEventListener('keydown', event => {
  const node = draftNodes.find(item => item.id === selectedNodeId);
  if (node?.type !== 'visual') return;
  const step = event.shiftKey ? 15 : 1;
  if (event.key === 'ArrowRight' || event.key === 'ArrowUp') updateVisualRotation(node, (node.rotation || 0) + step);
  else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') updateVisualRotation(node, (node.rotation || 0) - step);
  else if (event.key === 'Home') updateVisualRotation(node, 0);
  else return;
  event.preventDefault();
});
visualRotationValue.addEventListener('input', () => {
  const node = draftNodes.find(item => item.id === selectedNodeId);
  const value = visualRotationValue.valueAsNumber;
  if (node?.type === 'visual' && Number.isFinite(value)) updateVisualRotation(node, Math.max(0, Math.min(359, value)));
});

function setRotationFromPointer(event) {
  const bounds = hitboxRotationDial.getBoundingClientRect();
  const dx = event.clientX - bounds.left - bounds.width / 2;
  const dy = event.clientY - bounds.top - bounds.height / 2;
  const degrees = (Math.atan2(dy, dx) * 180 / Math.PI + 90 + 360) % 360;
  const node = draftNodes.find(item => item.id === selectedNodeId);
  if (node) updateNodeRotation(node, degrees);
}

hitboxRotationDial.addEventListener('pointerdown', event => {
  hitboxRotationDial.setPointerCapture(event.pointerId);
  setRotationFromPointer(event);
});
hitboxRotationDial.addEventListener('pointermove', event => {
  if (hitboxRotationDial.hasPointerCapture(event.pointerId)) setRotationFromPointer(event);
});
hitboxRotationDial.addEventListener('keydown', event => {
  const node = draftNodes.find(item => item.id === selectedNodeId);
  if (!node) return;
  const step = event.shiftKey ? 15 : 1;
  if (event.key === 'ArrowRight' || event.key === 'ArrowUp') updateNodeRotation(node, node.rotation + step);
  else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') updateNodeRotation(node, node.rotation - step);
  else if (event.key === 'Home') updateNodeRotation(node, 0);
  else return;
  event.preventDefault();
});
hitboxRotationValue.addEventListener('input', () => {
  const node = draftNodes.find(item => item.id === selectedNodeId);
  const value = hitboxRotationValue.valueAsNumber;
  if (!node || !Number.isFinite(value)) return;
  updateNodeRotation(node, Math.max(0, Math.min(359, value)));
});

function setProjectileRotationFromPointer(event) {
  const bounds = projectileRotationDial.getBoundingClientRect();
  const dx = event.clientX - bounds.left - bounds.width / 2;
  const dy = event.clientY - bounds.top - bounds.height / 2;
  const degrees = (Math.atan2(dy, dx) * 180 / Math.PI + 90 + 360) % 360;
  const node = draftNodes.find(item => item.id === selectedNodeId);
  if (node?.type === 'projectile') updateProjectileRotation(node, degrees);
}

function setVelocityRotationFromPointer(event) {
  const bounds = velocityRotationDial.getBoundingClientRect();
  const dx = event.clientX - bounds.left - bounds.width / 2;
  const dy = event.clientY - bounds.top - bounds.height / 2;
  const degrees = (Math.atan2(dy, dx) * 180 / Math.PI + 90 + 360) % 360;
  const node = draftNodes.find(item => item.id === selectedNodeId);
  if (node?.type === 'velocity') updateVelocityRotation(node, degrees);
}

velocityRotationDial.addEventListener('pointerdown', event => {
  velocityRotationDial.setPointerCapture(event.pointerId);
  setVelocityRotationFromPointer(event);
});
velocityRotationDial.addEventListener('pointermove', event => {
  if (velocityRotationDial.hasPointerCapture(event.pointerId)) setVelocityRotationFromPointer(event);
});
velocityRotationDial.addEventListener('keydown', event => {
  const node = draftNodes.find(item => item.id === selectedNodeId);
  if (node?.type !== 'velocity') return;
  const step = event.shiftKey ? 15 : 1;
  if (event.key === 'ArrowRight' || event.key === 'ArrowUp') updateVelocityRotation(node, node.rotation + step);
  else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') updateVelocityRotation(node, node.rotation - step);
  else if (event.key === 'Home') updateVelocityRotation(node, 0);
  else return;
  event.preventDefault();
});
velocityRotationInput.addEventListener('input', () => {
  const node = draftNodes.find(item => item.id === selectedNodeId);
  const value = velocityRotationInput.valueAsNumber;
  if (node?.type === 'velocity' && Number.isFinite(value)) {
    updateVelocityRotation(node, Math.max(0, Math.min(359, value)));
  }
});

projectileRotationDial.addEventListener('pointerdown', event => {
  projectileRotationDial.setPointerCapture(event.pointerId);
  setProjectileRotationFromPointer(event);
});
projectileRotationDial.addEventListener('pointermove', event => {
  if (projectileRotationDial.hasPointerCapture(event.pointerId)) setProjectileRotationFromPointer(event);
});
projectileRotationDial.addEventListener('keydown', event => {
  const node = draftNodes.find(item => item.id === selectedNodeId);
  if (node?.type !== 'projectile') return;
  const step = event.shiftKey ? 15 : 1;
  if (event.key === 'ArrowRight' || event.key === 'ArrowUp') updateProjectileRotation(node, node.rotation + step);
  else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') updateProjectileRotation(node, node.rotation - step);
  else if (event.key === 'Home') updateProjectileRotation(node, 0);
  else return;
  event.preventDefault();
});
projectileRotationInput.addEventListener('input', () => {
  const node = draftNodes.find(item => item.id === selectedNodeId);
  const value = projectileRotationInput.valueAsNumber;
  if (node?.type === 'projectile' && Number.isFinite(value)) {
    updateProjectileRotation(node, Math.max(0, Math.min(359, value)));
  }
});

function addHitboxNode() {
  const size = getSelectedGuySquare().size;
  draftNodes.push({ id: nextNodeId++, type: 'hitbox', damage: 10, time: 0.05, anchored: false, x: 0, y: 0, rotation: 0, width: size, height: size, soundURL: defaultHitboxSound, soundName: defaultHitboxSoundName });
  selectedNodeId = null;
  hitboxNodeDetails.hidden = true;
  projectileNodeDetails.hidden = true;
  soundNodeDetails.hidden = true;
  waitNodeDetails.hidden = true;
  visualNodeDetails.hidden = true;
  velocityNodeDetails.hidden = true;
  cancelNodeDetails.hidden = true;
    variableNodeDetails.hidden = true;
  renderTimeline();
}

hitboxNode.addEventListener('click', addHitboxNode);
projectileNodeButton.addEventListener('click', () => {
  draftNodes.push({
    id: nextNodeId++,
    type: 'projectile',
    projectileId: '',
    cancelProjectileId: '',
    spawnAtProjectileId: '',
    damage: 112,
    speed: 420,
    time: 4,
    bounceCount: 0,
    rotateSpeed: 90,
    rotation: categorySelect.value === 'guy-one' ? 90 : 270,
    size: 1,
    endSize: 1,
    tracks: true,
    piercing: false,
    hitRate: 1,
    damageDeduction: 0,
    angleOffset: 0,
    homing: 0,
    falloff: 0,
    soundURL: defaultHitboxSound,
    soundName: defaultHitboxSoundName,
    image: defaultProjectileImage,
    imageBounds: defaultProjectileImageBounds,
    imageName: 'Bottle',
  });
  selectedNodeId = null;
  hitboxNodeDetails.hidden = true;
  projectileNodeDetails.hidden = true;
  soundNodeDetails.hidden = true;
  waitNodeDetails.hidden = true;
  visualNodeDetails.hidden = true;
  velocityNodeDetails.hidden = true;
  cancelNodeDetails.hidden = true;
    variableNodeDetails.hidden = true;
  renderTimeline();
});
velocityNodeButton.addEventListener('click', () => {
  draftNodes.push({
    id: nextNodeId++,
    type: 'velocity',
    speed: 300,
    distance: 200,
    rotation: categorySelect.value === 'guy-one' ? 90 : 270,
    trackEnemy: false,
    trackOpposite: false,
    changesDirection: false,
  });
  selectedNodeId = null;
  hitboxNodeDetails.hidden = true;
  projectileNodeDetails.hidden = true;
  soundNodeDetails.hidden = true;
  waitNodeDetails.hidden = true;
  visualNodeDetails.hidden = true;
  velocityNodeDetails.hidden = true;
  cancelNodeDetails.hidden = true;
    variableNodeDetails.hidden = true;
  renderTimeline();
});
soundNodeButton.addEventListener('click', () => {
  draftNodes.push({ id: nextNodeId++, type: 'sound', soundURL: defaultHitboxSound, soundName: defaultHitboxSoundName, volume: 100, start: 0, fade: false, cancel: false });
  selectedNodeId = null;
  hitboxNodeDetails.hidden = true;
  projectileNodeDetails.hidden = true;
  soundNodeDetails.hidden = true;
  waitNodeDetails.hidden = true;
  visualNodeDetails.hidden = true;
  velocityNodeDetails.hidden = true;
  cancelNodeDetails.hidden = true;
    variableNodeDetails.hidden = true;
  renderTimeline();
});
variableNodeButton.addEventListener('click', () => {
  draftNodes.push({ id: nextNodeId++, type: 'variable', variable: '', remove: false, targetOfHitbox: false });
  selectedNodeId = null;
  hitboxNodeDetails.hidden = true;
  projectileNodeDetails.hidden = true;
  soundNodeDetails.hidden = true;
  waitNodeDetails.hidden = true;
  visualNodeDetails.hidden = true;
  velocityNodeDetails.hidden = true;
  cancelNodeDetails.hidden = true;
  variableNodeDetails.hidden = true;
  renderTimeline();
});
cancelNodeButton.addEventListener('click', () => {
  draftNodes.push({ id: nextNodeId++, type: 'cancel', neverRepeat: false, moveCooldown: 1 });
  selectedNodeId = null;
  hitboxNodeDetails.hidden = true;
  projectileNodeDetails.hidden = true;
  soundNodeDetails.hidden = true;
  waitNodeDetails.hidden = true;
  visualNodeDetails.hidden = true;
  velocityNodeDetails.hidden = true;
  cancelNodeDetails.hidden = true;
    variableNodeDetails.hidden = true;
  renderTimeline();
});
waitNodeButton.addEventListener('click', () => {
  draftNodes.push({ id: nextNodeId++, type: 'wait', time: 1, afterDamage: false });
  selectedNodeId = null;
  hitboxNodeDetails.hidden = true;
  projectileNodeDetails.hidden = true;
  soundNodeDetails.hidden = true;
  waitNodeDetails.hidden = true;
  visualNodeDetails.hidden = true;
  velocityNodeDetails.hidden = true;
  cancelNodeDetails.hidden = true;
    variableNodeDetails.hidden = true;
  renderTimeline();
});
visualNodeButton.addEventListener('click', () => {
  draftNodes.push({ id: nextNodeId++, type: 'visual', visualType: 'Flash', time: 1, fadeIn: 0, fadeOut: 0, scale: 1, opacity: 50, positionX: 0, positionY: 0, spawnAtProjectileId: '' });
  selectedNodeId = null;
  hitboxNodeDetails.hidden = true;
  projectileNodeDetails.hidden = true;
  soundNodeDetails.hidden = true;
  waitNodeDetails.hidden = true;
  visualNodeDetails.hidden = true;
  velocityNodeDetails.hidden = true;
  cancelNodeDetails.hidden = true;
    variableNodeDetails.hidden = true;
  renderTimeline();
});
categorySelect.addEventListener('change', updateHitboxPreview);
categorySelect.addEventListener('change', () => updateVisualPreview());


function renderMoves() {
  movesList.replaceChildren();
  const guyId = categorySelect.value;
  const settings = moveStackSettings[guyId];
  stackMovesInput.checked = settings.stackMoves;
  movesSelfStackInput.checked = settings.selfStack;
  const moves = movesByGuy[guyId];
  for (const move of moves) {
    const card = document.createElement('div');
    card.className = 'move-card';

    const nameInput = document.createElement('input');
    nameInput.className = 'move-name';
    nameInput.type = 'text';
    nameInput.value = move.name;
    nameInput.setAttribute('aria-label', `Rename ${move.name}`);
    nameInput.addEventListener('input', () => {
      move.name = nameInput.value;
      nameInput.setAttribute('aria-label', `Rename ${move.name || 'move'}`);
    });

    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.textContent = 'Edit';
    editButton.setAttribute('aria-label', `Edit ${move.name}`);
    editButton.addEventListener('click', () => openMoveEditor(move, editButton));

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('aria-label', `Delete ${move.name}`);
    deleteButton.addEventListener('click', () => {
      movesByGuy[categorySelect.value] = movesByGuy[categorySelect.value].filter(item => item.id !== move.id);
      renderMoves();
    });

    card.append(nameInput, editButton, deleteButton);
    movesList.append(card);
  }
}

stackMovesInput.addEventListener('change', () => {
  moveStackSettings[categorySelect.value].stackMoves = stackMovesInput.checked;
});
movesSelfStackInput.addEventListener('change', () => {
  moveStackSettings[categorySelect.value].selfStack = movesSelfStackInput.checked;
});

renderMoves();

function applyMoveToEditor(move) {
  moveConditionSelect.value = move?.condition ?? 'collision';
  setConditionSides(targetSidePicker, targetSideSummary, move?.targetSides ?? move?.targetSide ?? 'any');
  setConditionSides(approachSidePicker, approachSideSummary, move?.approachSides ?? move?.approachSide ?? 'any');
  setConditionSides(damageFromPicker, damageFromSummary, move?.damageFromSides ?? 'any');
  metronomeDelayInput.value = move?.delay ?? 0;
  metronomeIntervalInput.value = move?.interval ?? 1;
  hitboxNodeDetails.hidden = true;
  projectileNodeDetails.hidden = true;
  soundNodeDetails.hidden = true;
  waitNodeDetails.hidden = true;
  visualNodeDetails.hidden = true;
  velocityNodeDetails.hidden = true;
  cancelNodeDetails.hidden = true;
    variableNodeDetails.hidden = true;
  updateMoveCondition();
}

function openMoveEditor(move = null, returnFocus = addMoveButton) {
  editingMoveId = move?.id ?? null;
  moveReturnFocus = returnFocus;
  draftNodes = (move?.nodes ?? []).map(node => ({ ...node }));
  selectedNodeId = null;
  renderTimeline();
  moveEditorTitle.textContent = move ? 'Edit Move' : 'New Move';
  finishMoveButton.textContent = move ? 'Save Move' : 'Finish';
  applyMoveToEditor(move);
  moveModal.hidden = false;
  closeMoveModalButton.focus();
}

function closeMoveModal() {
  moveModal.hidden = true;
  moveReturnFocus?.focus();
}

addMoveButton.addEventListener('click', () => {
  openMoveEditor();
});

closeMoveModalButton.addEventListener('click', closeMoveModal);
finishMoveButton.addEventListener('click', () => {
  const moves = movesByGuy[categorySelect.value];
  const existingMove = moves.find(move => move.id === editingMoveId);
  const moveData = {
    id: editingMoveId ?? nextMoveId++,
    name: existingMove?.name ?? `Move ${moves.length + 1}`,
    condition: moveConditionSelect.value,
    targetSides: [...targetSidePicker.querySelectorAll('input:checked')].map(input => input.value),
    approachSides: [...approachSidePicker.querySelectorAll('input:checked')].map(input => input.value),
    damageFromSides: [...damageFromPicker.querySelectorAll('input:checked')].map(input => input.value),
    delay: Number(metronomeDelayInput.value) || 0,
    interval: Number(metronomeIntervalInput.value) || 1,
    nodes: draftNodes.map(node => ({ ...node })),
  };

  if (existingMove) {
    Object.assign(existingMove, moveData);
  } else {
    moves.push(moveData);
  }
  renderMoves();
  closeMoveModal();
});

moveNodeUpButton.addEventListener('click', () => moveSelectedNode(-1));
moveNodeDownButton.addEventListener('click', () => moveSelectedNode(1));
duplicateNodeButton.addEventListener('click', duplicateSelectedNode);
removeNodeButton.addEventListener('click', removeSelectedNode);
previewMoveButton.addEventListener('click', previewDraftMove);

function getGuyId(index) {
  return index === 1 ? 'guy-one' : 'guy-two';
}

async function runMoveTimeline(attackerIndex, move, preview = false) {
  if (preview) return executeMoveTimeline(attackerIndex, move, true, activeMovePreview);

  const guyId = getGuyId(attackerIndex);
  const settings = moveStackSettings[guyId];
  const runningMoves = activeMoveTimelines[guyId];
  const generation = matchGeneration;
  const activeCount = [...runningMoves.values()].reduce((total, count) => total + count, 0);
  const sameMoveCount = runningMoves.get(move.id) ?? 0;
  if (sameMoveCount > 0 && !settings.selfStack) return;
  if (activeCount > sameMoveCount && !settings.stackMoves) return;

  runningMoves.set(move.id, sameMoveCount + 1);
  try {
    return await executeMoveTimeline(attackerIndex, move);
  } finally {
    if (generation === matchGeneration) {
      const remaining = (runningMoves.get(move.id) ?? 1) - 1;
      if (remaining > 0) runningMoves.set(move.id, remaining);
      else runningMoves.delete(move.id);
    }
  }
}

async function executeMoveTimeline(attackerIndex, move, preview = false, previewState = null) {
  const generation = matchGeneration;
  const moveWasStopped = () => preview ? Boolean(previewState?.cancelled) : (matchEnded || generation !== matchGeneration);
  const attacker = squares[attackerIndex];
  const targetIndex = attackerIndex === 0 ? 1 : 0;
  const target = squares[targetIndex];
  let lastHitResolution = Promise.resolve(null);
  if (!attacker || !target || attacker === target || (!preview && attacker.health <= 0)) return;
  if (!preview && (move._neverRepeat || simulationTime < (move._cooldownUntil ?? 0))) return;
  const nodes = move.nodes ?? [];
  const pendingTimelineCompletions = [];
  const pendingHitResolutions = [];
  let currentVariable = null;
  for (let nodeIndex = 0; nodeIndex < nodes.length; nodeIndex++) {
    const sourceNode = nodes[nodeIndex];
    if (sourceNode.type === 'variable') {
      if (sourceNode.targetOfHitbox) {
        const hitIndex = await lastHitResolution;
        if (hitIndex === null || moveWasStopped()) continue;
      }
      if (moveWasStopped()) return;
      currentVariable = sourceNode.remove ? null : String(sourceNode.variable ?? '');
      continue;
    }
    const node = { ...sourceNode };
    if (currentVariable !== null) {
      for (const [property, value] of Object.entries(node)) {
        if (typeof value === 'string' && value.startsWith('$')) {
          node[property] = currentVariable + value.slice(1);
        }
      }
    }
    if (moveWasStopped()) return;
    if (!preview && isPreviewingMove) return;
    if (!preview && attacker.health <= 0) return;
    if (node.type === 'wait') {
      if (node.afterDamage) {
        const hitsToWaitFor = pendingHitResolutions.splice(0);
        const landed = await new Promise(resolve => {
          if (hitsToWaitFor.length === 0) { resolve(false); return; }
          let unresolved = hitsToWaitFor.length;
          for (const hitResolution of hitsToWaitFor) {
            hitResolution.then(hit => {
              if (hit) resolve(true);
              else if (--unresolved === 0) resolve(false);
            });
          }
        });
        if (!landed) {
          if (moveWasStopped()) return;
          continue;
        }
      }
      const time = Math.max(0, Number(node.time) || 0);
      if (time > 0) {
        const wait = new Promise(resolve => setTimeout(resolve, time * 1000 / gameSpeed));
        if (preview) await Promise.race([wait, previewState.cancelledPromise]);
        else await wait;
      }
      if (moveWasStopped()) return;
      continue;
    }
    if (node.type === 'sound') {
      playSoundNode(node);
      continue;
    }
    if (node.type === 'cancel') {
      if (!preview) {
        if (node.neverRepeat) move._neverRepeat = true;
        move._cooldownUntil = simulationTime + Math.max(0, Number(node.moveCooldown) || 0);
      }
      return;
    }
    if (node.type === 'velocity') {
      const startVelocityMovement = moverIndex => {
        const mover = squares[moverIndex];
        const opponent = squares[moverIndex === 0 ? 1 : 0];
        const speed = Math.max(1, Math.min(3000, Number(node.speed) || 300));
        const distance = Math.max(0, Math.min(5000, Number(node.distance) || 0));
        if (distance <= 0 || !mover) return Promise.resolve(false);
        // Retire an older move on the same guy before saving the new movement state.
        for (let index = activeVelocityMoves.length - 1; index >= 0; index--) {
          const activeMove = activeVelocityMoves[index];
          if (activeMove.squareIndex !== moverIndex) continue;
          activeVelocityMoves.splice(index, 1);
          mover.vx = activeMove.previousVx;
          mover.vy = activeMove.previousVy;
          mover.speed = activeMove.previousSpeed;
          activeMove.complete?.(false);
        }
        const direction = node.trackEnemy
          ? Math.atan2(opponent.y - mover.y, opponent.x - mover.x)
          : node.trackOpposite
            ? Math.atan2(-mover.vy, -mover.vx)
          : (Number(node.rotation ?? 90) - 90) * Math.PI / 180;
        const movement = {
          squareIndex: moverIndex,
          direction,
          speed,
          distance,
          travelled: 0,
          lastX: mover.x,
          lastY: mover.y,
          previousVx: mover.vx,
          previousVy: mover.vy,
          previousSpeed: mover.speed,
          preview,
          changesDirection: Boolean(node.changesDirection),
          complete: null,
        };
        mover.vx = Math.cos(direction) * speed;
        mover.vy = Math.sin(direction) * speed;
        mover.speed = speed;
        const movementResolution = new Promise(resolve => { movement.complete = resolve; });
        activeVelocityMoves.push(movement);
        return movementResolution;
      };
      if (node.targetOfHitbox) {
        const targetMovement = lastHitResolution.then(hitIndex => {
          if (hitIndex === null || moveWasStopped()) return false;
          return startVelocityMovement(hitIndex);
        });
        if (preview) pendingTimelineCompletions.push(targetMovement);
      } else {
        const movement = startVelocityMovement(attackerIndex);
        if (preview) pendingTimelineCompletions.push(movement);
      }
      continue;
    }
    if (node.type === 'visual') {
      const visualType = node.visualType || 'Flash';
      const spawnAtProjectileKey = getProjectileIdKey(attackerIndex, preview, node.spawnAtProjectileId);
      const launchVisual = anchorIndex => {
        const projectilePosition = spawnAtProjectileKey ? projectilePositionCache.get(spawnAtProjectileKey) : null;
        if (spawnAtProjectileKey && !projectilePosition) return;
        if (visualType === 'Sprite Replace') {
          if (!node.image) return;
          const sprite = squares[attackerIndex];
          sprite.spriteReplace = {
            image: node.image,
            imageBounds: node.imageBounds || (node.image.complete && node.image.naturalWidth ? getImageAlphaBounds(node.image) : null),
            animationStartedAt: performance.now(),
            endsAt: simulationTime + Math.max(0, Number(node.time) || 0),
            opacity: 1,
            rotation: Number(node.rotation) || 0,
            faceTowardsEnemy: Boolean(node.faceTowardsEnemy),
          };
          if (preview) previewMoveEndTime = Math.max(previewMoveEndTime, sprite.spriteReplace.endsAt);
          return;
        }
        if (visualType === 'Overlay' && node.image) {
          const startedAt = simulationTime;
          const fadeIn = Math.max(0, Number(node.fadeIn) || 0);
          const duration = Math.max(0, Number(node.time) || 0);
          const fadeOut = Math.max(0, Number(node.fadeOut) || 0);
          activeVisuals.push({
            type: 'Overlay', image: node.image, startedAt, animationStartedAt: performance.now(), fadeIn, duration, fadeOut,
            opacity: Math.max(0, Math.min(100, Number.isFinite(Number(node.opacity)) ? Number(node.opacity) : 100)) / 100,
          });
          if (preview) previewMoveEndTime = Math.max(previewMoveEndTime, startedAt + fadeIn + duration + fadeOut);
        } else if (visualType === 'Flash' || node.image) {
          const anchor = squares[anchorIndex];
          const startedAt = simulationTime;
          const fadeIn = Math.max(0, Number(node.fadeIn) || 0);
          const duration = Math.max(0, Number(node.time) || 0);
          const fadeOut = Math.max(0, Number(node.fadeOut) || 0);
          activeVisuals.push({
            type: visualType,
            attackerIndex,
            anchorIndex,
            image: node.image,
            startedAt,
            animationStartedAt: performance.now(),
            fadeIn,
            duration,
            fadeOut,
            x: (projectilePosition?.x ?? anchor.x) + (Number(node.positionX) || 0),
            y: (projectilePosition?.y ?? anchor.y) + (Number(node.positionY) || 0),
            projectilePositioned: Boolean(spawnAtProjectileKey),
            positionX: Number(node.positionX) || 0,
            positionY: Number(node.positionY) || 0,
            rotation: Number(node.rotation) || 0,
            speed: Math.max(0, Number(node.speed) || 0),
            towardsEnemy: Boolean(node.towardsEnemy),
            rotateTowardsEnemy: Boolean(node.rotateTowardsEnemy),
            opacity: Math.max(0, Math.min(visualType === 'Flash' ? 200 : 100, Number.isFinite(Number(node.opacity)) ? Number(node.opacity) : visualType === 'Flash' ? 50 : 100)) / 100,
            mask: Boolean(node.mask),
            travelX: 0,
            travelY: 0,
            baseSize: projectilePosition?.size ?? anchor.size,
            scale: Number.isFinite(Number(node.scale)) ? Math.max(0, Number(node.scale)) : 1,
          });
          if (preview) previewMoveEndTime = Math.max(previewMoveEndTime, startedAt + fadeIn + duration + fadeOut);
        }
      };
      if (visualType !== 'Overlay' && node.targetOfHitbox) {
        lastHitResolution.then(hitIndex => {
          if (hitIndex !== null && !previewState?.cancelled && (matchEnded || generation === matchGeneration)) launchVisual(hitIndex);
        });
      } else {
        launchVisual(attackerIndex);
      }
      continue;
    }
    if (node.type === 'projectile') {
      const rotation = Number.isFinite(Number(node.rotation))
        ? (Number(node.rotation) - 90) * Math.PI / 180
        : Math.atan2(target.y - attacker.y, target.x - attacker.x);
      const angleOffsetRange = Math.max(0, Math.min(180, Number(node.angleOffset) || 0)) * Math.PI / 180;
      const randomAngleOffset = (Math.random() * 2 - 1) * angleOffsetRange;
      let direction;
      const speed = Math.max(1, Math.min(2000, Number(node.speed) || 420));
      const configuredDuration = Number(node.time);
      const duration = Math.max(0.05, Math.min(60, Number.isFinite(configuredDuration) ? configuredDuration : 4));
      const projectileId = String(node.projectileId ?? '').trim();
      const projectileIdKey = getProjectileIdKey(attackerIndex, preview, projectileId);
      const cancelIdKey = getProjectileIdKey(attackerIndex, preview, node.cancelProjectileId);
      const spawnAtId = String(node.spawnAtProjectileId ?? '').trim();
      const spawnAtIdKey = getProjectileIdKey(attackerIndex, preview, spawnAtId);
      if (cancelIdKey) {
        const cancelled = activeProjectiles.find(item => item.idKey === cancelIdKey);
        if (cancelled) {
          removeProjectileFromPlay(cancelled);
          cancelled.cancelled = true;
          cancelled.complete?.(false);
          cancelled.complete = null;
        }
      }
      const spawnPosition = spawnAtIdKey ? projectilePositionCache.get(spawnAtIdKey) : null;
      if (spawnAtIdKey && !spawnPosition) continue;
      const startX = spawnPosition?.x ?? attacker.x;
      const startY = spawnPosition?.y ?? attacker.y;
      direction = (node.tracks ?? true)
        ? Math.atan2(target.y - startY, target.x - startX) + randomAngleOffset
        : rotation;
      if (projectileIdKey) {
        const replaced = activeProjectiles.find(item => item.idKey === projectileIdKey);
        if (replaced) {
          removeProjectileFromPlay(replaced);
          replaced.cancelled = true;
          replaced.complete?.(false);
          replaced.complete = null;
        }
      }
      const projectile = {
        projectileId,
        idKey: projectileIdKey,
        attackerIndex,
        targetIndex,
        damage: Math.max(0, Number(node.damage) || 0),
        speed,
        baseSize: 75 * Math.max(0.1, Math.min(10, Number(node.size) || 1)),
        endSizeMultiplier: Math.max(0.1, Math.min(10, Number(node.endSize) || 1)),
        radius: 75 * Math.max(0.1, Math.min(10, Number(node.size) || 1)) / 2,
        image: node.image || null,
        imageBounds: node.imageBounds || (node.image?.complete && node.image.naturalWidth ? getImageAlphaBounds(node.image) : null),
        soundURL: node.soundURL || defaultHitboxSound,
        bouncesRemaining: Math.max(0, Math.min(99, Math.floor(Number(node.bounceCount) || 0))),
        rotation: 0,
        rotateSpeed: Math.max(-3600, Math.min(3600, Number(node.rotateSpeed) || 0)),
        tracks: Boolean(node.tracks ?? true),
        rotateToDirection: Boolean(node.rotateToDirection ?? true),
        homing: Math.max(0, Math.min(3600, Number(node.homing) || 0)),
        falloff: Math.max(0, Number(node.falloff) || 0),
        piercing: Boolean(node.piercing),
        hitRate: Math.max(0, Number(node.hitRate ?? 1) || 0),
        damageDeduction: Math.max(0, Number(node.damageDeduction) || 0),
        lastHitAt: null,
        nextFalloffAt: simulationTime + 0.05,
        x: startX,
        y: startY,
        vx: Math.cos(direction) * speed,
        vy: Math.sin(direction) * speed,
        startedAt: simulationTime,
        color: attacker.color,
        expiresAt: simulationTime + duration,
        preview,
      };
      rememberProjectilePosition(projectile);
      if (preview && projectile.piercing) previewMoveEndTime = Math.max(previewMoveEndTime, projectile.expiresAt);
      const projectileResolution = new Promise(resolve => { projectile.complete = resolve; });
      activeProjectiles.push(projectile);
      pendingHitResolutions.push(projectileResolution);
      lastHitResolution = projectileResolution.then(hit => hit ? targetIndex : null);
      if (preview) pendingTimelineCompletions.push(projectileResolution);
      continue;
    }
    if (node.type !== 'hitbox' || (!preview && target.health <= 0)) continue;
    const damage = Math.max(0, Number(node.damage) || 0);
    const duration = Math.max(0, Number.isFinite(Number(node.time)) ? Number(node.time) : 0.05);
    const rotation = Number(node.rotation) || 0;
    const positionX = Number(node.x) || 0;
    const positionY = Number(node.y) || 0;
    const anchored = Boolean(node.anchored);
    const cos = Math.cos(attacker.rotation);
    const sin = Math.sin(attacker.rotation);
    let resolveHitbox;
    const hitboxResolution = new Promise(resolve => { resolveHitbox = resolve; });
    const activeHitbox = {
      attackerIndex,
      targetIndex,
      damage,
      width: Math.max(0, Number(node.width) || 0),
      height: Math.max(0, Number(node.height) || 0),
      rotation,
      anchored,
      positionX,
      positionY,
      x: attacker.x + (anchored ? positionX * cos - positionY * sin : positionX),
      y: attacker.y + (anchored ? positionX * sin + positionY * cos : positionY),
      worldRotation: rotation + (anchored ? attacker.rotation : 0),
      soundURL: node.soundURL,
      startedAt: simulationTime,
      duration,
      hit: false,
      preview,
      cancelled: false,
      complete: resolveHitbox,
    };
    activeHitboxes.push(activeHitbox);
    pendingHitResolutions.push(hitboxResolution);
    if (preview) {
      pendingTimelineCompletions.push(hitboxResolution);
      previewMoveEndTime = Math.max(previewMoveEndTime, simulationTime + duration);
    }
    lastHitResolution = hitboxResolution.then(hit => hit ? targetIndex : null);
  }
  if (preview) await Promise.all(pendingTimelineCompletions);
}

function cancelActiveMovePreview() {
  const preview = activeMovePreview;
  if (!preview || preview.cancelled) return;
  preview.cancelled = true;
  preview.resolveCancellation();
  for (let index = activeProjectiles.length - 1; index >= 0; index--) {
    const projectile = activeProjectiles[index];
    if (preview.projectiles.has(projectile)) continue;
    removeProjectileFromPlay(projectile);
    projectile.cancelled = true;
    projectile.complete?.(false);
  }
  for (let index = activeHitboxes.length - 1; index >= 0; index--) {
    const hitbox = activeHitboxes[index];
    if (preview.hitboxes.has(hitbox)) continue;
    activeHitboxes.splice(index, 1);
    hitbox.cancelled = true;
    hitbox.complete?.(false);
  }
  for (let index = activeVelocityMoves.length - 1; index >= 0; index--) {
    const movement = activeVelocityMoves[index];
    if (preview.velocityMoves.has(movement)) continue;
    activeVelocityMoves.splice(index, 1);
    movement.complete?.(false);
  }
  for (let index = activeVisuals.length - 1; index >= 0; index--) {
    if (!preview.visuals.has(activeVisuals[index])) activeVisuals.splice(index, 1);
  }
  for (const sound of activeSoundNodes) {
    if (preview.sounds.has(sound)) continue;
    clearInterval(sound.fadeTimer);
    sound.fadeTimer = null;
    sound.pause();
    sound.currentTime = 0;
    activeSoundNodes.delete(sound);
  }
  for (let index = damagePopups.length - 1; index >= 0; index--) {
    if (!preview.damagePopups.has(damagePopups[index])) damagePopups.splice(index, 1);
  }
  squares.forEach((square, index) => { square.spriteReplace = preview.spriteReplacements[index]; });
}

async function previewDraftMove() {
  if (isPreviewingMove || draftNodes.length === 0) return;
  const attackerIndex = categorySelect.value === 'guy-one' ? 1 : 0;
  const savedHealth = squares.map(square => square.health);
  const savedMovement = squares.map(square => ({ vx: square.vx, vy: square.vy, speed: square.speed }));
  const savedPositions = squares.map(square => ({ x: square.x, y: square.y }));
  const wasRunning = isRunning;
  let resolveCancellation;
  const previewState = {
    cancelled: false,
    cancelledPromise: new Promise(resolve => { resolveCancellation = resolve; }),
    resolveCancellation: () => resolveCancellation(),
    projectiles: new Set(activeProjectiles),
    hitboxes: new Set(activeHitboxes),
    velocityMoves: new Set(activeVelocityMoves),
    visuals: new Set(activeVisuals),
    sounds: new Set(activeSoundNodes),
    damagePopups: new Set(damagePopups),
    spriteReplacements: squares.map(square => square.spriteReplace),
  };

  clearPreviewProjectilePositions();
  activeMovePreview = previewState;
  isPreviewingMove = true;
  restartButton.textContent = 'Cancel Preview';
  restartButton.setAttribute('aria-label', 'Cancel preview');
  previewMoveEndTime = simulationTime;
  isRunning = false;
  startButton.disabled = true;
  pauseButton.disabled = true;
  previewMoveButton.disabled = true;
  moveModal.hidden = true;
  squares.forEach(square => { if (square.health <= 0) square.health = 1; });
  lastTime = performance.now();

  try {
    await runMoveTimeline(attackerIndex, { nodes: draftNodes.map(node => ({ ...node })) }, true);
    while (!previewState.cancelled && simulationTime < previewMoveEndTime) {
      await new Promise(resolve => requestAnimationFrame(resolve));
    }
  } finally {
    clearPreviewProjectilePositions();
    isPreviewingMove = false;
    squares.forEach((square, index) => {
      square.health = savedHealth[index];
      square.vx = savedMovement[index].vx;
      square.vy = savedMovement[index].vy;
      square.speed = savedMovement[index].speed;
      square.x = savedPositions[index].x;
      square.y = savedPositions[index].y;
      square.spriteReplace = previewState.spriteReplacements[index];
    });
    activeMovePreview = null;
    restartButton.textContent = 'Restart';
    restartButton.setAttribute('aria-label', 'Restart');
    isRunning = wasRunning;
    startButton.disabled = wasRunning;
    pauseButton.disabled = !wasRunning;
    lastTime = performance.now();
    moveModal.hidden = false;
    previewMoveButton.disabled = draftNodes.length === 0;
    previewMoveButton.focus();
  }
}

function playSoundNode(node) {
  if (!node.soundURL) return;
  if (node.cancel) {
    for (const sound of activeSoundNodes) {
      clearInterval(sound.fadeTimer);
      sound.fadeTimer = null;
      sound.pause();
      sound.currentTime = 0;
    }
    activeSoundNodes.clear();
  }
  const sound = new Audio(node.soundURL);
  const start = Math.max(0, Number(node.start) || 0);
  const baseVolume = Math.max(0, Math.min(1, (Number(node.volume) || 0) / 100));
  activeSoundNodes.add(sound);
  const cleanup = () => {
    clearInterval(sound.fadeTimer);
    sound.fadeTimer = null;
    activeSoundNodes.delete(sound);
  };
  sound.addEventListener('ended', cleanup, { once: true });
  sound.addEventListener('error', cleanup, { once: true });
  let playbackStarted = false;
  const beginPlayback = () => {
    if (playbackStarted) return;
    playbackStarted = true;
    if (start >= sound.duration) { cleanup(); return; }
    sound.currentTime = start;
    const fadeDuration = node.fade && Number.isFinite(sound.duration)
      ? Math.min(0.2, (sound.duration - start) / 2)
      : node.fade ? 0.2 : 0;
    sound.volume = node.fade ? 0 : baseVolume;
    if (node.fade) {
      sound.fadeTimer = window.setInterval(() => {
        const fadeIn = fadeDuration > 0 ? Math.min(1, (sound.currentTime - start) / fadeDuration) : 1;
        const fadeOut = fadeDuration > 0 && Number.isFinite(sound.duration)
          ? Math.min(1, (sound.duration - sound.currentTime) / fadeDuration)
          : 1;
        sound.volume = baseVolume * Math.max(0, Math.min(fadeIn, fadeOut));
      }, 30);
    }
    sound.play().catch(cleanup);
  };
  sound.addEventListener('loadedmetadata', beginPlayback, { once: true });
  if (sound.readyState >= 1) beginPlayback();
}

function playWallBounceSound() {
  const sound = wallBounceAudio[Math.floor(Math.random() * wallBounceAudio.length)];
  if (sound.readyState > 0) sound.currentTime = 0;
  sound.play().catch(() => {});
}

function playWinnerSoundIfNeeded() {
  if (winnerSoundPlayed || !squares.some(square => square.health <= 0)) return;
  winnerSoundPlayed = true;
  winnerAudio.play().catch(() => {});
  finishMatch();
}

function finishMatch() {
  if (matchEnded) return;
  matchEnded = true;
  matchGeneration++;
  isRunning = false;
  startButton.disabled = true;
  pauseButton.disabled = true;
  damagePopups.length = 0;
  for (const sound of activeSoundNodes) {
    clearInterval(sound.fadeTimer);
    sound.fadeTimer = null;
    sound.pause();
    sound.currentTime = 0;
  }
  activeSoundNodes.clear();
  for (const projectile of [...activeProjectiles]) {
    removeProjectileFromPlay(projectile);
    projectile.cancelled = true;
    projectile.complete?.(false);
    projectile.complete = null;
  }
  for (const hitbox of activeHitboxes) {
    hitbox.cancelled = true;
    hitbox.complete?.(false);
  }
  activeHitboxes.length = 0;
  resetMoveTimers();
  clearTimeout(winSpriteTimer);
  winSpriteTimer = setTimeout(() => {
    winSpriteTimer = null;
    if (matchEnded) showWinSprites = true;
  }, 1000);
}

function runMovesForCondition(guyIndex, condition, contactSide = null) {
  if (matchEnded || squares[guyIndex].health <= 0) return;
  for (const move of movesByGuy[getGuyId(guyIndex)]) {
    if (move.condition !== condition) continue;
    if (contactSide && condition === 'collision') {
      const targetSides = move.targetSides ?? [move.targetSide ?? 'any'];
      const approachSides = move.approachSides ?? [move.approachSide ?? 'any'];
      if (!targetSides.includes('any') && !targetSides.includes(contactSide)) continue;
      if (!approachSides.includes('any') && !approachSides.includes(contactSide)) continue;
    } else if (contactSide && condition === 'damaged') {
      const damageFromSides = move.damageFromSides ?? ['any'];
      if (!damageFromSides.includes('any') && !damageFromSides.includes(contactSide)) continue;
    }
    runMoveTimeline(guyIndex, move);
  }
}

function getDamageSourceSide(attackerIndex, targetIndex) {
  const attacker = squares[attackerIndex];
  const target = squares[targetIndex];
  const dx = attacker.x - target.x;
  const dy = attacker.y - target.y;
  if (Math.abs(dx) >= Math.abs(dy)) return dx < 0 ? 'left' : 'right';
  return dy < 0 ? 'up' : 'down';
}

function resetMoveTimers() {
  for (const runningMoves of Object.values(activeMoveTimelines)) runningMoves.clear();
  for (const moves of Object.values(movesByGuy)) {
    for (const move of moves) {
      delete move._elapsed;
      delete move._nextTick;
      delete move._neverRepeat;
      delete move._cooldownUntil;
    }
  }
}

function startMatchMoves() {
  if (matchEnded) return;
  resetMoveTimers();
  for (let guyIndex = 0; guyIndex < squares.length; guyIndex++) {
    runMovesForCondition(guyIndex, 'match-start');
    for (const move of movesByGuy[getGuyId(guyIndex)]) {
      if (move.condition !== 'metronome') continue;
      move._elapsed = 0;
      const delay = Math.max(0, Number(move.delay) || 0);
      const interval = Math.max(0.1, Number(move.interval) || 1);
      if (delay === 0) {
        runMoveTimeline(guyIndex, move);
        move._nextTick = interval;
      } else {
        move._nextTick = delay;
      }
    }
  }
}

function advanceMetronomeMoves(dt) {
  if (matchEnded) return;
  for (let guyIndex = 0; guyIndex < squares.length; guyIndex++) {
    if (squares[guyIndex].health <= 0) continue;
    for (const move of movesByGuy[getGuyId(guyIndex)]) {
      if (move.condition !== 'metronome') continue;
      if (!Number.isFinite(move._elapsed) || !Number.isFinite(move._nextTick)) {
        move._elapsed = 0;
        move._nextTick = Math.max(0, Number(move.delay) || 0);
      }
      move._elapsed += dt;
      const interval = Math.max(0.1, Number(move.interval) || 1);
      while (move._elapsed >= move._nextTick) {
        runMoveTimeline(guyIndex, move);
        move._nextTick += interval;
      }
    }
  }
}

moveModal.addEventListener('click', event => {
  if (event.target === moveModal) closeMoveModal();
});
document.addEventListener('keydown', event => {
  if (event.key !== 'Escape') return;
  if (!watermarkModal.hidden) closeWatermarkPrompt();
  else if (!moveModal.hidden) closeMoveModal();
  else if (isArenaResizeMode) setArenaResizeMode(false);
  else if (!backgroundColorPanel.hidden) {
    backgroundColorPanel.hidden = true;
    backgroundColorButton.setAttribute('aria-expanded', 'false');
    backgroundColorButton.focus();
  }
});

function resize() {
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = rect.width;
  height = rect.height;
  if (!defaultArenaSize && width > 0) defaultArenaSize = canvasFrame.getBoundingClientRect().width;
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  if (width > 0 && height > 0 && (!positioned || (!isRunning && (needsStartMotion || isArenaResizeMode)))) {
    positionSquaresAtStart();
    positioned = true;
  }
}

function positionSquaresAtStart() {
  const centerX = width / 2;
  const centerY = height / 2;
  const gap = Math.min(320, Math.max(0, width - squares[0].size - squares[1].size));
  const defaultX = new Map([
    [squares[1], centerX - squares[1].size / 2 - gap / 2],
    [squares[0], centerX + squares[0].size / 2 + gap / 2],
  ]);
  for (const square of squares) {
    if (square.startPositionX === null) square.startPositionX = width ? defaultX.get(square) / width : 0.5;
    if (square.startPositionY === null) square.startPositionY = 0.5;
    const half = square.size / 2;
    square.x = Math.max(half, Math.min(width - half, square.startPositionX * width));
    square.y = Math.max(half, Math.min(height - half, square.startPositionY * height));
  }
}

function getDisplayImage(square, opponent) {
  if (showWinSprites && opponent.health <= 0 && square.winImage) return square.winImage;
  if (square.spriteReplace && simulationTime < square.spriteReplace.endsAt) return square.spriteReplace.image;
  return square.image;
}

function getFlashedImage(image) {
  let flashedImage = flashedImageCache.get(image);
  if (flashedImage) return flashedImage;
  flashedImage = document.createElement('canvas');
  flashedImage.width = image.naturalWidth;
  flashedImage.height = image.naturalHeight;
  const flashContext = flashedImage.getContext('2d');
  flashContext.drawImage(image, 0, 0);
  flashContext.globalCompositeOperation = 'source-atop';
  flashContext.globalAlpha = 1;
  flashContext.fillStyle = '#fff';
  flashContext.fillRect(0, 0, flashedImage.width, flashedImage.height);
  flashedImageCache.set(image, flashedImage);
  return flashedImage;
}

function shouldFlipSprite(square, opponent) {
  if (!square.flipForEnemyEyeContact || !opponent) return false;
  return (opponent.x < square.x) !== square.reverseEyeContactFlip;
}

function shouldFlipHitbox(square, opponent) {
  return Boolean(square?.eyeContactFlipAffectsHitbox && shouldFlipSprite(square, opponent));
}

function getLocalHitboxBounds(square, opponent) {
  const image = getDisplayImage(square, opponent);
  const useWinBounds = image && image === square.winImage;
  const bounds = square.hitboxMatchesPng || square.eyeContactFlipAffectsHitbox
    ? (useWinBounds ? square.winImageBounds : square.imageBounds)
    : null;

  let local;
  if (!bounds || !image) {
    local = { left: -square.size / 2, top: -square.size / 2, width: square.size, height: square.size };
  } else {
    const scaleX = square.size / image.naturalWidth;
    const scaleY = square.size / image.naturalHeight;
    local = {
      left: -square.size / 2 + bounds.left * scaleX,
      top: -square.size / 2 + bounds.top * scaleY,
      width: bounds.width * scaleX,
      height: bounds.height * scaleY,
    };
  }
  if (shouldFlipHitbox(square, opponent)) {
    local.left = -local.left - local.width;
  }
  return local;
}

function getHitbox(square, opponent) {
  const local = getLocalHitboxBounds(square, opponent);
  const centerX = local.left + local.width / 2;
  const centerY = local.top + local.height / 2;
  const cos = Math.cos(square.rotation);
  const sin = Math.sin(square.rotation);
  const rotatedCenterX = centerX * cos - centerY * sin;
  const rotatedCenterY = centerX * sin + centerY * cos;
  const extentX = (Math.abs(cos) * local.width + Math.abs(sin) * local.height) / 2;
  const extentY = (Math.abs(sin) * local.width + Math.abs(cos) * local.height) / 2;
  return {
    left: rotatedCenterX - extentX,
    top: rotatedCenterY - extentY,
    width: extentX * 2,
    height: extentY * 2,
  };
}

function updateActiveHitboxes() {
  for (let index = activeHitboxes.length - 1; index >= 0; index--) {
    if (matchEnded) break;
    const hitbox = activeHitboxes[index];
    if (!hitbox) continue;
    if (simulationTime - hitbox.startedAt >= hitbox.duration) {
      activeHitboxes.splice(index, 1);
      const complete = hitbox.complete;
      hitbox.complete = null;
      complete?.(false);
      continue;
    }
    if (hitbox.hit) continue;
    const attacker = squares[hitbox.attackerIndex];
    const target = squares[hitbox.targetIndex];
    if (!attacker || !target || target.health <= 0 || (!hitbox.preview && attacker.health <= 0)) continue;

    let centerX = hitbox.x;
    let centerY = hitbox.y;
    let rotation = hitbox.worldRotation;
    if (hitbox.anchored) {
      const cos = Math.cos(attacker.rotation);
      const sin = Math.sin(attacker.rotation);
      centerX = attacker.x + hitbox.positionX * cos - hitbox.positionY * sin;
      centerY = attacker.y + hitbox.positionX * sin + hitbox.positionY * cos;
      rotation = attacker.rotation + hitbox.rotation;
    }
    const hitboxCos = Math.cos(rotation);
    const hitboxSin = Math.sin(rotation);
    const extentX = (Math.abs(hitboxCos) * hitbox.width + Math.abs(hitboxSin) * hitbox.height) / 2;
    const extentY = (Math.abs(hitboxSin) * hitbox.width + Math.abs(hitboxCos) * hitbox.height) / 2;
    const targetBounds = getHitbox(target, attacker);
    const targetLeft = target.x + targetBounds.left;
    const targetTop = target.y + targetBounds.top;
    if (centerX + extentX < targetLeft || centerX - extentX > targetLeft + targetBounds.width ||
        centerY + extentY < targetTop || centerY - extentY > targetTop + targetBounds.height) continue;

    hitbox.hit = true;
    const complete = hitbox.complete;
    hitbox.complete = null;
    complete?.(true);
    if (hitbox.soundURL) {
      const sound = new Audio(hitbox.soundURL);
      sound.play().catch(() => {});
    }
    if (hitbox.preview) {
      if (hitbox.damage > 0) {
        damagePopups.push({
          x: target.x + (Math.random() * 24 - 12),
          y: target.y - target.size / 2 - 18,
          amount: hitbox.damage,
          age: 0,
          duration: 0.9,
        });
      }
      continue;
    }
    const damageTaken = Math.min(target.health, hitbox.damage);
    if (damageTaken > 0) {
      runMovesForCondition(hitbox.targetIndex, 'damaged', getDamageSourceSide(hitbox.attackerIndex, hitbox.targetIndex));
      target.health = Math.max(0, target.health - damageTaken);
      playWinnerSoundIfNeeded();
      if (matchEnded) break;
      damagePopups.push({
        x: target.x + (Math.random() * 24 - 12),
        y: target.y - target.size / 2 - 18,
        amount: damageTaken,
        age: 0,
        duration: 0.9,
      });
    }
  }
}

function updateActiveProjectiles(dt) {
  for (let index = activeProjectiles.length - 1; index >= 0; index--) {
    if (matchEnded) break;
    const projectile = activeProjectiles[index];
    if (!projectile) continue;
    const attacker = squares[projectile.attackerIndex];
    const target = squares[projectile.targetIndex];
    projectile.rotation += projectile.rotateSpeed * Math.PI / 180 * dt;
    if (projectile.tracks && projectile.homing > 0 && target && target.health > 0) {
      const currentAngle = Math.atan2(projectile.vy, projectile.vx);
      const targetAngle = Math.atan2(target.y - projectile.y, target.x - projectile.x);
      const angleDifference = Math.atan2(
        Math.sin(targetAngle - currentAngle),
        Math.cos(targetAngle - currentAngle),
      );
      const maxTurn = projectile.homing * Math.PI / 180 * dt;
      const angle = currentAngle + Math.max(-maxTurn, Math.min(maxTurn, angleDifference));
      projectile.vx = Math.cos(angle) * projectile.speed;
      projectile.vy = Math.sin(angle) * projectile.speed;
    }
    while (projectile.falloff > 0 && simulationTime >= projectile.nextFalloffAt) {
      projectile.damage = Math.max(0, projectile.damage - projectile.falloff);
      projectile.nextFalloffAt += 0.05;
    }
    const lifetime = Math.max(0.001, projectile.expiresAt - projectile.startedAt);
    const scaleProgress = Math.max(0, Math.min(1, (simulationTime - projectile.startedAt) / lifetime));
    projectile.radius = projectile.baseSize * (1 + (projectile.endSizeMultiplier - 1) * scaleProgress) / 2;
    projectile.x += projectile.vx * dt;
    projectile.y += projectile.vy * dt;

    const wallX = Math.min(projectile.radius, width / 2);
    const wallY = Math.min(projectile.radius, height / 2);
    let hitWallX = false;
    let hitWallY = false;
    if (projectile.x < wallX) {
      projectile.x = wallX;
      projectile.vx = Math.abs(projectile.vx);
      hitWallX = true;
    } else if (projectile.x > width - wallX) {
      projectile.x = width - wallX;
      projectile.vx = -Math.abs(projectile.vx);
      hitWallX = true;
    }
    if (projectile.y < wallY) {
      projectile.y = wallY;
      projectile.vy = Math.abs(projectile.vy);
      hitWallY = true;
    } else if (projectile.y > height - wallY) {
      projectile.y = height - wallY;
      projectile.vy = -Math.abs(projectile.vy);
      hitWallY = true;
    }
    if (hitWallX || hitWallY) {
      if (projectile.bouncesRemaining <= 0) {
        removeProjectileFromPlay(projectile);
        projectile.complete?.(false);
        continue;
      }
      projectile.bouncesRemaining -= 1;
      projectile.tracks = false;
      const directionX = hitWallX ? (projectile.x <= width / 2 ? 1 : -1) : null;
      const directionY = hitWallY ? (projectile.y <= height / 2 ? 1 : -1) : null;
      if (hitWallX && hitWallY) {
        const angle = Math.random() * Math.PI / 2;
        projectile.vx = Math.abs(Math.cos(angle)) * directionX * projectile.speed;
        projectile.vy = Math.abs(Math.sin(angle)) * directionY * projectile.speed;
      } else if (hitWallX) {
        const angle = (Math.random() - 0.5) * Math.PI;
        projectile.vx = Math.cos(angle) * directionX * projectile.speed;
        projectile.vy = Math.sin(angle) * projectile.speed;
      } else {
        const angle = (Math.random() - 0.5) * Math.PI;
        projectile.vx = Math.sin(angle) * projectile.speed;
        projectile.vy = Math.cos(angle) * directionY * projectile.speed;
      }
    }

    rememberProjectilePosition(projectile);
    const bounds = target && getHitbox(target, attacker);
    if (target && target.health > 0 && bounds) {
      const left = target.x + bounds.left;
      const top = target.y + bounds.top;
      let projectileHitsTarget = false;
      if (projectile.image?.complete && projectile.image.naturalWidth && projectile.imageBounds) {
        const imageScale = Math.min(
          projectile.radius * 2 / projectile.image.naturalWidth,
          projectile.radius * 2 / projectile.image.naturalHeight,
        );
        const imageWidth = projectile.image.naturalWidth * imageScale;
        const imageHeight = projectile.image.naturalHeight * imageScale;
        const alpha = projectile.imageBounds;
        const localCenterX = -imageWidth / 2 + (alpha.left + alpha.width / 2) * imageScale;
        const localCenterY = -imageHeight / 2 + (alpha.top + alpha.height / 2) * imageScale;
        const rotation = Math.atan2(projectile.vy, projectile.vx) + projectile.rotation;
        const cos = Math.cos(rotation);
        const sin = Math.sin(rotation);
        const alphaCenterX = projectile.x + localCenterX * cos - localCenterY * sin;
        const alphaCenterY = projectile.y + localCenterX * sin + localCenterY * cos;
        const alphaWidth = alpha.width * imageScale;
        const alphaHeight = alpha.height * imageScale;
        const extentX = (Math.abs(cos) * alphaWidth + Math.abs(sin) * alphaHeight) / 2;
        const extentY = (Math.abs(sin) * alphaWidth + Math.abs(cos) * alphaHeight) / 2;
        projectileHitsTarget = alphaWidth > 0 && alphaHeight > 0 &&
          alphaCenterX + extentX > left && alphaCenterX - extentX < left + bounds.width &&
          alphaCenterY + extentY > top && alphaCenterY - extentY < top + bounds.height;
      } else {
        const closestX = Math.max(left, Math.min(projectile.x, left + bounds.width));
        const closestY = Math.max(top, Math.min(projectile.y, top + bounds.height));
        const dx = projectile.x - closestX;
        const dy = projectile.y - closestY;
        projectileHitsTarget = dx * dx + dy * dy <= projectile.radius * projectile.radius;
      }
      const hitRateReady = projectile.lastHitAt === null ||
        (projectile.hitRate > 0 && simulationTime >= projectile.lastHitAt + projectile.hitRate);
      if (projectileHitsTarget && hitRateReady) {
        if (!projectile.piercing) removeProjectileFromPlay(projectile);
        projectile.lastHitAt = simulationTime;
        if (projectile.soundURL) {
          const sound = new Audio(projectile.soundURL);
          sound.play().catch(() => {});
        }
        if (projectile.damage > 0) {
          const damageTaken = projectile.preview ? projectile.damage : Math.min(target.health, projectile.damage);
          if (!projectile.preview) {
            runMovesForCondition(projectile.targetIndex, 'damaged', getDamageSourceSide(projectile.attackerIndex, projectile.targetIndex));
            target.health = Math.max(0, target.health - damageTaken);
            playWinnerSoundIfNeeded();
            if (matchEnded) {
              projectile.complete?.(false);
              continue;
            }
          }
          damagePopups.push({
            x: target.x + (Math.random() * 24 - 12),
            y: target.y - target.size / 2 - 18,
            amount: damageTaken,
            age: 0,
            duration: 0.9,
          });
        }
        projectile.damage = Math.max(0, projectile.damage - projectile.damageDeduction);
        if (!projectile.completed) {
          projectile.completed = true;
          projectile.complete?.(true);
          projectile.complete = null;
        }
        if (!projectile.piercing) continue;
      }
    }

    if (simulationTime >= projectile.expiresAt || !target || target.health <= 0) {
      removeProjectileFromPlay(projectile);
      projectile.complete?.(false);
    }
  }
}

function drawActiveProjectiles() {
  for (const projectile of activeProjectiles) {
    const size = projectile.radius * 2;
    const image = projectile.image?.complete && projectile.image.naturalWidth ? projectile.image : null;
    const scale = image ? Math.min(size / image.naturalWidth, size / image.naturalHeight) : 0;
    const imageWidth = image ? image.naturalWidth * scale : size;
    const imageHeight = image ? image.naturalHeight * scale : size;
    const rotation = projectile.rotateToDirection
      ? Math.atan2(projectile.vy, projectile.vx) + projectile.rotation
      : projectile.rotation;
    ctx.save();
    ctx.translate(projectile.x, projectile.y);
    ctx.rotate(rotation);
    if (image) {
      ctx.drawImage(image, -imageWidth / 2, -imageHeight / 2, imageWidth, imageHeight);
    } else {
      ctx.beginPath();
      ctx.arc(0, 0, projectile.radius, 0, Math.PI * 2);
      ctx.fillStyle = projectile.color;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#20211f';
      ctx.stroke();
    }
    ctx.restore();
  }
}

function drawDebugHitboxes() {
  if (!debugHitboxesEnabled) return;

  ctx.save();
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 4]);

  for (let index = 0; index < squares.length; index++) {
    const square = squares[index];
    if (square.health <= 0) continue;
    const bounds = getLocalHitboxBounds(square, squares[1 - index]);
    ctx.save();
    ctx.translate(square.x, square.y);
    ctx.rotate(square.rotation);
    ctx.strokeStyle = index === 0 ? '#13b8e6' : '#ff9b38';
    ctx.strokeRect(bounds.left, bounds.top, bounds.width, bounds.height);
    ctx.restore();
  }

  const selectedNode = draftNodes.find(node => node.id === selectedNodeId);
  if (selectedNode?.type === 'hitbox') {
    const attackerIndex = categorySelect.value === 'guy-one' ? 1 : 0;
    const attacker = squares[attackerIndex];
    const target = squares[1 - attackerIndex];
    const rotation = Number(selectedNode.rotation) || 0;
    const anchored = Boolean(selectedNode.anchored);
    const cos = Math.cos(attacker.rotation);
    const sin = Math.sin(attacker.rotation);
    const centerX = attacker.x + (anchored ? selectedNode.x * cos - selectedNode.y * sin : selectedNode.x);
    const centerY = attacker.y + (anchored ? selectedNode.x * sin + selectedNode.y * cos : selectedNode.y);
    const worldRotation = rotation + (anchored ? attacker.rotation : 0);
    const alreadyActive = activeHitboxes.some(hitbox =>
      hitbox.attackerIndex === attackerIndex &&
      hitbox.width === selectedNode.width &&
      hitbox.height === selectedNode.height &&
      hitbox.anchored === anchored &&
      hitbox.positionX === selectedNode.x &&
      hitbox.positionY === selectedNode.y &&
      hitbox.rotation === rotation);
    if (!alreadyActive) {
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(worldRotation);
      ctx.strokeStyle = '#51f2d0';
      ctx.fillStyle = 'rgb(81 242 208 / 12%)';
      ctx.fillRect(-selectedNode.width / 2, -selectedNode.height / 2, selectedNode.width, selectedNode.height);
      ctx.strokeRect(-selectedNode.width / 2, -selectedNode.height / 2, selectedNode.width, selectedNode.height);
      ctx.restore();
    }
  }

  for (const hitbox of activeHitboxes) {
    const attacker = squares[hitbox.attackerIndex];
    if (!attacker) continue;
    const cos = Math.cos(attacker.rotation);
    const sin = Math.sin(attacker.rotation);
    const centerX = hitbox.anchored
      ? attacker.x + hitbox.positionX * cos - hitbox.positionY * sin
      : hitbox.x;
    const centerY = hitbox.anchored
      ? attacker.y + hitbox.positionX * sin + hitbox.positionY * cos
      : hitbox.y;
    const rotation = hitbox.anchored ? attacker.rotation + hitbox.rotation : hitbox.worldRotation;
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(rotation);
    ctx.strokeStyle = hitbox.hit ? '#f4db36' : '#f044d2';
    ctx.fillStyle = hitbox.hit ? 'rgb(244 219 54 / 14%)' : 'rgb(240 68 210 / 12%)';
    ctx.fillRect(-hitbox.width / 2, -hitbox.height / 2, hitbox.width, hitbox.height);
    ctx.strokeRect(-hitbox.width / 2, -hitbox.height / 2, hitbox.width, hitbox.height);
    ctx.restore();
  }

  for (const projectile of activeProjectiles) {
    let left = projectile.x - projectile.radius;
    let top = projectile.y - projectile.radius;
    let boxWidth = projectile.radius * 2;
    let boxHeight = projectile.radius * 2;
    if (projectile.image?.complete && projectile.image.naturalWidth && projectile.imageBounds) {
      const imageScale = Math.min(
        projectile.radius * 2 / projectile.image.naturalWidth,
        projectile.radius * 2 / projectile.image.naturalHeight,
      );
      const alpha = projectile.imageBounds;
      const alphaWidth = alpha.width * imageScale;
      const alphaHeight = alpha.height * imageScale;
      const localCenterX = -projectile.image.naturalWidth * imageScale / 2 + (alpha.left + alpha.width / 2) * imageScale;
      const localCenterY = -projectile.image.naturalHeight * imageScale / 2 + (alpha.top + alpha.height / 2) * imageScale;
      const rotation = Math.atan2(projectile.vy, projectile.vx) + projectile.rotation;
      const cos = Math.cos(rotation);
      const sin = Math.sin(rotation);
      const centerX = projectile.x + localCenterX * cos - localCenterY * sin;
      const centerY = projectile.y + localCenterX * sin + localCenterY * cos;
      boxWidth = Math.abs(cos) * alphaWidth + Math.abs(sin) * alphaHeight;
      boxHeight = Math.abs(sin) * alphaWidth + Math.abs(cos) * alphaHeight;
      left = centerX - boxWidth / 2;
      top = centerY - boxHeight / 2;
    }
    ctx.strokeStyle = '#fff';
    ctx.strokeRect(left, top, boxWidth, boxHeight);
    ctx.strokeStyle = '#161616';
    ctx.setLineDash([]);
    ctx.strokeRect(left, top, boxWidth, boxHeight);
    ctx.setLineDash([6, 4]);
  }

  for (let index = 0; index < squares.length; index++) {
    const square = squares[index];
    if (square.health > 0) drawDebugGuyDirections(square, squares[1 - index]);
  }

  ctx.restore();
}

function drawDebugGuyDirections(square, opponent) {
  const image = getDisplayImage(square, opponent);
  const bounds = image === square.winImage
    ? square.winImageBounds
    : image === square.spriteReplace?.image
      ? square.spriteReplace.imageBounds
      : image === square.image
        ? square.imageBounds
        : null;
  let localLeft = -square.size / 2;
  let localTop = -square.size / 2;
  let localWidth = square.size;
  let localHeight = square.size;
  if (image && bounds) {
    const scaleX = square.size / image.naturalWidth;
    const scaleY = square.size / image.naturalHeight;
    localLeft += bounds.left * scaleX;
    localTop += bounds.top * scaleY;
    localWidth = bounds.width * scaleX;
    localHeight = bounds.height * scaleY;
  }
  const flipped = shouldFlipHitbox(square, opponent);
  if (flipped) localLeft = -localLeft - localWidth;
  const localCenterX = localLeft + localWidth / 2;
  const localCenterY = localTop + localHeight / 2;
  const cos = Math.cos(square.rotation);
  const sin = Math.sin(square.rotation);
  const centerX = square.x + localCenterX * cos - localCenterY * sin;
  const centerY = square.y + localCenterX * sin + localCenterY * cos;
  const extentX = (Math.abs(cos) * localWidth + Math.abs(sin) * localHeight) / 2;
  const extentY = (Math.abs(sin) * localWidth + Math.abs(cos) * localHeight) / 2;
  const gap = 12;
  const labels = [
    ['U', centerX, centerY - extentY - gap],
    ['D', centerX, centerY + extentY + gap],
    [flipped ? 'R' : 'L', centerX - extentX - gap, centerY],
    [flipped ? 'L' : 'R', centerX + extentX + gap, centerY],
  ];
  ctx.save();
  ctx.setLineDash([]);
  ctx.font = '700 14px "DM Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineWidth = 3.5;
  ctx.lineJoin = 'round';
  ctx.strokeStyle = '#fff';
  ctx.fillStyle = '#20211f';
  for (const [label, x, y] of labels) {
    ctx.strokeText(label, x, y);
    ctx.fillText(label, x, y);
  }
  ctx.restore();
}

function resolveGuyCollision() {
  const [a, b] = squares;
  if (a.health <= 0 || b.health <= 0) return false;
  const aHitbox = getHitbox(a, b);
  const bHitbox = getHitbox(b, a);
  const leftA = a.x + aHitbox.left;
  const rightA = leftA + aHitbox.width;
  const topA = a.y + aHitbox.top;
  const bottomA = topA + aHitbox.height;
  const leftB = b.x + bHitbox.left;
  const rightB = leftB + bHitbox.width;
  const topB = b.y + bHitbox.top;
  const bottomB = topB + bHitbox.height;
  const overlapX = Math.min(rightA, rightB) - Math.max(leftA, leftB);
  const overlapY = Math.min(bottomA, bottomB) - Math.max(topA, topB);

  if (overlapX <= 0 || overlapY <= 0) return false;

  if (overlapX < overlapY) {
    const centerDirection = Math.sign((leftB + rightB) / 2 - (leftA + rightA) / 2) || 1;
    const sideA = centerDirection > 0 ? 'left' : 'right';
    const sideB = centerDirection > 0 ? 'right' : 'left';
    const direction = centerDirection;
    a.x -= direction * overlapX / 2;
    b.x += direction * overlapX / 2;
    if ((b.vx - a.vx) * direction < 0) {
      [a.vx, b.vx] = [b.vx, a.vx];
      keepConfiguredSpeed(a);
      keepConfiguredSpeed(b);
      addBounceVariation(a);
      addBounceVariation(b);
      return { sideA, sideB };
    }
  } else {
    const centerDirection = Math.sign((topB + bottomB) / 2 - (topA + bottomA) / 2) || 1;
    const sideA = centerDirection > 0 ? 'up' : 'down';
    const sideB = centerDirection > 0 ? 'down' : 'up';
    const direction = centerDirection;
    a.y -= direction * overlapY / 2;
    b.y += direction * overlapY / 2;
    if ((b.vy - a.vy) * direction < 0) {
      [a.vy, b.vy] = [b.vy, a.vy];
      keepConfiguredSpeed(a);
      keepConfiguredSpeed(b);
      addBounceVariation(a);
      addBounceVariation(b);
      return { sideA, sideB };
    }
  }

  return false;
}

function updateHealthIcons() {
  squares.forEach((square, index) => {
    const icon = healthIcons[index];
    icon.hidden = square.health <= 0;
    icon.style.left = `${square.x}px`;
    icon.style.top = `${square.y - square.size / 2 - 72 - 14}px`;
    icon.querySelector('text').textContent = String(square.health);
    const fill = icon.querySelector('.health-fill');
    const fraction = square.maxHealth > 0 ? Math.max(0, Math.min(1, square.health / square.maxHealth)) : 0;
    fill.setAttribute('y', String(72 * (1 - fraction)));
    fill.setAttribute('height', String(72 * fraction));
    fill.style.fill = fraction < 0.5 ? '#e33d46' : '#fff';
  });
}

function keepConfiguredSpeed(square) {
  const currentSpeed = Math.hypot(square.vx, square.vy);
  if (currentSpeed > 0) {
    square.vx = square.vx / currentSpeed * square.speed;
    square.vy = square.vy / currentSpeed * square.speed;
  }
}

function addBounceVariation(square, constrainX = false, constrainY = false, opponent = null) {
  const speed = Math.hypot(square.vx, square.vy);
  if (!speed) return;
  const expectedX = Math.sign(square.vx);
  const expectedY = Math.sign(square.vy);
  let angle = Math.atan2(square.vy, square.vx) + (Math.random() - 0.5) * 0.5;
  if (opponent) {
    const targetAngle = Math.atan2(opponent.y - square.y, opponent.x - square.x);
    const angleToOpponent = Math.atan2(Math.sin(targetAngle - angle), Math.cos(targetAngle - angle));
    angle += angleToOpponent * (0.12 + Math.random() * 0.22);
  }
  square.vx = Math.cos(angle) * speed;
  square.vy = Math.sin(angle) * speed;
  if (constrainX && Math.sign(square.vx) !== expectedX) square.vx *= -1;
  if (constrainY && Math.sign(square.vy) !== expectedY) square.vy *= -1;
  const variedSpeed = Math.hypot(square.vx, square.vy);
  square.vx = square.vx / variedSpeed * speed;
  square.vy = square.vy / variedSpeed * speed;
}

function getVisualOpacity(visual) {
  const elapsed = simulationTime - visual.startedAt;
  const fadeIn = visual.fadeIn;
  const duration = visual.duration;
  const fadeOut = visual.fadeOut;
  if (elapsed < 0 || elapsed >= fadeIn + duration + fadeOut) return 0;
  if (fadeIn > 0 && elapsed < fadeIn) return elapsed / fadeIn;
  if (elapsed < fadeIn + duration) return 1;
  return fadeOut > 0 ? 1 - (elapsed - fadeIn - duration) / fadeOut : 0;
}

function getActiveFlashOpacity(squareIndex) {
  let opacity = 0;
  for (const visual of activeVisuals) {
    if (!visual.projectilePositioned && visual.type === 'Flash' && (visual.anchorIndex ?? visual.attackerIndex) === squareIndex) {
      opacity = Math.max(opacity, getVisualOpacity(visual) * visual.opacity);
    }
  }
  return opacity;
}

function drawActiveImageVisuals(dt) {
  for (let index = activeVisuals.length - 1; index >= 0; index--) {
    const visual = activeVisuals[index];
    const elapsed = simulationTime - visual.startedAt;
    if (elapsed >= visual.fadeIn + visual.duration + visual.fadeOut) {
      activeVisuals.splice(index, 1);
      continue;
    }
    const visualOpacity = getVisualOpacity(visual) * visual.opacity;
    if (visualOpacity <= 0) continue;
    if (visual.type === 'Flash') {
      if (visual.projectilePositioned) {
        ctx.save();
        ctx.globalAlpha = visualOpacity;
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(visual.x + visual.travelX, visual.y + visual.travelY, visual.baseSize * visual.scale / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      continue;
    }
    if (!visual.image?.complete || !visual.image.naturalWidth) continue;

    if (visual.type === 'Overlay') {
      const image = visual.image;
      const frame = getAnimatedVisualFrame(image, visual.animationStartedAt);
      const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
      const imageWidth = image.naturalWidth * scale;
      const imageHeight = image.naturalHeight * scale;
      ctx.save();
      ctx.globalAlpha = visualOpacity;
      ctx.drawImage(frame, (width - imageWidth) / 2, (height - imageHeight) / 2, imageWidth, imageHeight);
      ctx.restore();
      continue;
    }

    const image = visual.image;
    const frame = getAnimatedVisualFrame(image, visual.animationStartedAt);
    const anchorIndex = visual.anchorIndex ?? visual.attackerIndex;
    const square = squares[anchorIndex];
    const target = squares[1 - anchorIndex];
    const attached = visual.type === 'Attached Image' && !visual.projectilePositioned;
    const anchorX = attached ? square.x : visual.x;
    const anchorY = attached ? square.y : visual.y;
    const aimAngle = Math.atan2(target.y - anchorY, target.x - anchorX);
    const speed = Math.max(0, Number(visual.speed) || 0);
    if (speed > 0) {
      if (visual.towardsEnemy) {
        visual.travelX += Math.cos(aimAngle) * speed * dt;
        visual.travelY += Math.sin(aimAngle) * speed * dt;
      } else {
        visual.travelY -= speed * dt;
      }
    }
    const centerX = attached ? square.x : visual.x;
    const centerY = attached ? square.y : visual.y;
    const maxWidth = (attached ? square.size : visual.baseSize) * visual.scale;
    const maxHeight = (attached ? square.size : visual.baseSize) * visual.scale;
    const scale = Math.min(maxWidth / image.naturalWidth, maxHeight / image.naturalHeight);
    const imageWidth = image.naturalWidth * scale;
    const imageHeight = image.naturalHeight * scale;
    const drawVisual = targetContext => {
      targetContext.save();
      targetContext.globalAlpha = visualOpacity;
      targetContext.translate(centerX + visual.travelX, centerY + visual.travelY);
      if (attached && !visual.rotateTowardsEnemy) targetContext.rotate(square.rotation);
      if (visual.rotateTowardsEnemy) targetContext.rotate(aimAngle + Math.PI / 2 + (Number(visual.rotation) || 0) * Math.PI / 180);
      else targetContext.rotate((Number(visual.rotation) || 0) * Math.PI / 180);
      if (attached) targetContext.translate(visual.positionX, visual.positionY);
      targetContext.drawImage(frame, -imageWidth / 2, -imageHeight / 2, imageWidth, imageHeight);
      targetContext.restore();
    };

    const maskImage = getDisplayImage(square, target);
    if (!visual.mask || visual.projectilePositioned || !maskImage?.complete || !maskImage.naturalWidth) {
      drawVisual(ctx);
      continue;
    }
    if (!visualMaskCanvas || visualMaskCanvas.width !== canvas.width || visualMaskCanvas.height !== canvas.height) {
      visualMaskCanvas = document.createElement('canvas');
      visualMaskCanvas.width = canvas.width;
      visualMaskCanvas.height = canvas.height;
      visualMaskContext = visualMaskCanvas.getContext('2d');
    }
    const dpr = canvas.width / width;
    visualMaskContext.setTransform(1, 0, 0, 1, 0, 0);
    visualMaskContext.clearRect(0, 0, visualMaskCanvas.width, visualMaskCanvas.height);
    visualMaskContext.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawVisual(visualMaskContext);
    visualMaskContext.globalCompositeOperation = 'destination-in';
    visualMaskContext.save();
    visualMaskContext.translate(square.x, square.y);
    visualMaskContext.rotate(square.rotation);
    const half = square.size / 2;
    visualMaskContext.beginPath();
    visualMaskContext.roundRect(-half, -half, square.size, square.size, 7);
    visualMaskContext.clip();
    visualMaskContext.drawImage(maskImage, -half, -half, square.size, square.size);
    visualMaskContext.restore();
    visualMaskContext.globalCompositeOperation = 'source-over';
    ctx.drawImage(visualMaskCanvas, 0, 0, visualMaskCanvas.width, visualMaskCanvas.height, 0, 0, width, height);
  }
}

function updateActiveVelocityMoves(dt) {
  for (let index = activeVelocityMoves.length - 1; index >= 0; index--) {
    const movement = activeVelocityMoves[index];
    const square = squares[movement.squareIndex];
    if (!square || square.health <= 0) {
      if (square) {
        square.vx = movement.previousVx;
        square.vy = movement.previousVy;
        square.speed = movement.previousSpeed;
      }
      activeVelocityMoves.splice(index, 1);
      movement.complete?.(false);
      continue;
    }

    let segmentDistance = 0;
    if (movement.preview) {
      segmentDistance = Math.min(movement.distance - movement.travelled, movement.speed * dt);
      square.x += Math.cos(movement.direction) * segmentDistance;
      square.y += Math.sin(movement.direction) * segmentDistance;
    } else {
      const dx = square.x - movement.lastX;
      const dy = square.y - movement.lastY;
      segmentDistance = Math.hypot(dx, dy);
      const distanceRemaining = movement.distance - movement.travelled;
      if (segmentDistance >= distanceRemaining && segmentDistance > 0) {
        const progress = distanceRemaining / segmentDistance;
        square.x = movement.lastX + dx * progress;
        square.y = movement.lastY + dy * progress;
        segmentDistance = distanceRemaining;
      }
    }

    movement.travelled += segmentDistance;
    movement.lastX = square.x;
    movement.lastY = square.y;
    if (movement.travelled >= movement.distance) {
      if (movement.changesDirection && !movement.preview) {
        square.vx = Math.cos(movement.direction) * movement.previousSpeed;
        square.vy = Math.sin(movement.direction) * movement.previousSpeed;
      } else {
        square.vx = movement.previousVx;
        square.vy = movement.previousVy;
      }
      square.speed = movement.previousSpeed;
      activeVelocityMoves.splice(index, 1);
      movement.complete?.(true);
    }
  }
}

function draw(time) {
  const dt = isRunning || isPreviewingMove || matchEnded ? Math.min((time - lastTime) / 1000 || 0, 0.032) * gameSpeed : 0;
  lastTime = time;
  simulationTime += dt;
  ctx.clearRect(0, 0, width, height);
  drawArenaWatermark(time);

  if (isRunning || matchEnded) {
    if (isRunning) advanceMetronomeMoves(dt);
    for (let index = 0; index < squares.length; index++) {
      const square = squares[index];
      if (square.health <= 0) continue;
      const hitbox = getHitbox(square, squares[1 - index]);
      square.x += square.vx * dt;
      square.y += square.vy * dt;
      square.rotation += square.rotateSpeed * Math.PI / 180 * dt;
      let hitWallX = false;
      let hitWallY = false;

      const left = square.x + hitbox.left;
      const right = left + hitbox.width;
      if (left < 0 || right > width) {
        square.x = Math.max(-hitbox.left, Math.min(width - hitbox.left - hitbox.width, square.x));
        square.vx *= -1;
        hitWallX = true;
      }
      const top = square.y + hitbox.top;
      const bottom = top + hitbox.height;
      if (top < 0 || bottom > height) {
        square.y = Math.max(-hitbox.top, Math.min(height - hitbox.top - hitbox.height, square.y));
        square.vy *= -1;
        hitWallY = true;
      }
      if (hitWallX || hitWallY) {
        addBounceVariation(square, hitWallX, hitWallY, squares[1 - index]);
        playWallBounceSound();
      }
    }
    if (isRunning) {
      const collision = resolveGuyCollision();
      if (collision) {
        runMovesForCondition(0, 'collision', collision.sideA);
        runMovesForCondition(1, 'collision', collision.sideB);
      }
    }
  }

  updateActiveVelocityMoves(dt);
  updateActiveHitboxes();
  updateActiveProjectiles(dt);

  for (let index = 0; index < squares.length; index++) {
    const square = squares[index];
    if (square.health <= 0) continue;
    const opponent = squares[1 - index];
    const displayImage = getDisplayImage(square, opponent);
    const replacement = square.spriteReplace && simulationTime < square.spriteReplace.endsAt && displayImage === square.spriteReplace.image
      ? square.spriteReplace
      : null;
    const flipSprite = shouldFlipSprite(square, opponent);
    const half = square.size / 2;
    ctx.save();
    ctx.translate(square.x, square.y);
    const facingRotation = replacement?.faceTowardsEnemy
      ? Math.atan2(opponent.y - square.y, opponent.x - square.x) + Math.PI / 2
      : 0;
    ctx.rotate(square.rotation + facingRotation + (replacement?.rotation || 0) * Math.PI / 180);
    if (flipSprite) ctx.scale(-1, 1);
    ctx.beginPath();
    ctx.roundRect(-half, -half, square.size, square.size, 7);
    if (displayImage) {
      const displayFrame = replacement ? getAnimatedVisualFrame(displayImage, replacement.animationStartedAt) : displayImage;
      ctx.save();
      ctx.clip();
      if (replacement) ctx.globalAlpha = 1;
      ctx.drawImage(displayFrame, -half, -half, square.size, square.size);
      ctx.restore();
    } else {
      ctx.fillStyle = square.color;
      ctx.fill();
    }
    const flashOpacity = getActiveFlashOpacity(index);
    if (flashOpacity > 0) {
      if (displayImage) {
        ctx.globalAlpha = Math.min(1, flashOpacity);
        ctx.drawImage(getFlashedImage(displayImage), -half, -half, square.size, square.size);
        ctx.globalAlpha = 1;
      } else {
        ctx.save();
        ctx.globalAlpha = Math.min(1, flashOpacity);
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.restore();
      }
    }
    ctx.restore();
  }

  drawActiveProjectiles();
  drawActiveImageVisuals(dt);

  for (const popup of damagePopups) {
    if (isRunning || isPreviewingMove) popup.age += dt;
    const progress = Math.min(1, popup.age / popup.duration);
    ctx.save();
    ctx.globalAlpha = 1 - progress;
    ctx.font = '700 24px "DM Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffd52a';
    const label = `-${popup.amount}`;
    const popupY = popup.y - progress * 44;
    ctx.fillText(label, popup.x, popupY);
    ctx.restore();
  }
  for (let i = damagePopups.length - 1; i >= 0; i--) {
    if (damagePopups[i].age >= damagePopups[i].duration) damagePopups.splice(i, 1);
  }

  drawDebugHitboxes();
  updateHealthIcons();
  requestAnimationFrame(draw);
}

function drawArenaWatermark(time) {
  if (!watermarkText) return;
  const maxWidth = Math.max(1, width - 40);
  const words = watermarkText.split(/\s+/);
  let fontSize = Math.min(68, Math.max(18, width * 0.12));
  ctx.save();
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `800 ${fontSize}px "DM Sans", sans-serif`;
  while (fontSize > 16 && words.some(word => ctx.measureText(word).width > maxWidth)) {
    fontSize -= 2;
    ctx.font = `800 ${fontSize}px "DM Sans", sans-serif`;
  }
  const lines = [];
  let line = '';
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (line && ctx.measureText(candidate).width > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  ctx.globalAlpha = 0.42;
  ctx.fillStyle = `hsl(${(time * 0.0667) % 360} 100% 50%)`;
  const lineHeight = fontSize * 1.08;
  const firstY = height / 2 - (lines.length - 1) * lineHeight / 2;
  lines.forEach((text, index) => ctx.fillText(text, width / 2, firstY + index * lineHeight, maxWidth));
  ctx.restore();
}

new ResizeObserver(resize).observe(canvas);
resize();
requestAnimationFrame(draw);
