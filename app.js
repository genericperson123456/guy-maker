const canvas = document.querySelector('#scene');
const ctx = canvas.getContext('2d');
const canvasFrame = document.querySelector('.canvas-frame');
const stage = document.querySelector('.stage');
const startButton = document.querySelector('#start-button');
const pauseButton = document.querySelector('#pause-button');
const restartButton = document.querySelector('#restart-button');
const watermarkButton = document.querySelector('#watermark-button');
const arenaLabel = document.querySelector('#arena-label');
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
const labelTextInput = document.querySelector('#label-text');
const youtubeStartDelayInput = document.querySelector('#youtube-start-delay');
const youtubeSpeedInput = document.querySelector('#youtube-speed');
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
const guyOneCornerPadding = document.querySelector('#guy-one-corner-padding');
const guyTwoCornerPadding = document.querySelector('#guy-two-corner-padding');
const guyOneCategory = document.querySelector('#guy-one');
const guyTwoCategory = document.querySelector('#guy-two');
const cosmeticPage = document.querySelector('#cosmetic-page');
const statisticsPage = document.querySelector('#statistics-page');
const movesPage = document.querySelector('#moves-page');
const guyOneStats = document.querySelector('#guy-one-stats');
const guyTwoStats = document.querySelector('#guy-two-stats');
const addMoveButton = document.querySelector('#add-move-button');
const movesList = document.querySelector('#moves-list');
const stackMovesInput = document.querySelector('#stack-moves');
const movesSelfStackInput = document.querySelector('#moves-self-stack');
const guyExportButton = document.querySelector('#guy-export-button');
const guyImportButton = document.querySelector('#guy-import-button');
const guyImportFile = document.querySelector('#guy-import-file');
const hitboxNode = document.querySelector('#hitbox-node');
const projectileNodeButton = document.querySelector('#projectile-node');
const velocityNodeButton = document.querySelector('#velocity-node');
const soundNodeButton = document.querySelector('#sound-node');
const waitNodeButton = document.querySelector('#wait-node');
const loopNodeButton = document.querySelector('#loop-node');
const loopNodeDetails = document.querySelector('#loop-properties');
const loopStartNodeButton = document.querySelector('#loop-start-node');
const loopStartNodePicker = document.querySelector('#loop-start-node-picker');
const loopAmountInput = document.querySelector('#loop-amount');
const commentNodeButton = document.querySelector('#comment-node');
const commentNodeDetails = document.querySelector('#comment-properties');
const commentTextInput = document.querySelector('#comment-text');
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
const velocityRotationSetting = document.querySelector('#velocity-rotation-setting');
const velocityRandomInput = document.querySelector('#velocity-random');
const velocityTrackEnemySetting = document.querySelector('#velocity-track-enemy-setting');
const velocityTrackOppositeSetting = document.querySelector('#velocity-track-opposite-setting');
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
const projectileRandomSetting = document.querySelector('#projectile-random-setting');
const projectileRandomInput = document.querySelector('#projectile-random');
const projectileTracksSetting = document.querySelector('#projectile-tracks-setting');
const projectileRotateToDirectionInput = document.querySelector('#projectile-rotate-to-direction');
const projectileAngleOffsetInput = document.querySelector('#projectile-angle-offset');
const projectileHomingInput = document.querySelector('#projectile-homing');
const projectileSizeInput = document.querySelector('#projectile-size');
const projectileEndSizeInput = document.querySelector('#projectile-end-size');
const projectileTracksInput = document.querySelector('#projectile-tracks');
const projectilePiercingInput = document.querySelector('#projectile-piercing');
const projectileStacksInput = document.querySelector('#projectile-stacks');
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
const projectileDestroySoundInput = document.querySelector('#projectile-destroy-sound');
const projectileDestroySoundName = document.querySelector('#projectile-destroy-sound-name');
const projectileDestroySoundDefaultButton = document.querySelector('#projectile-destroy-sound-default');
const projectileTrackProperties = document.querySelector('#projectile-track-properties');
const defaultProjectileImage = new Image();
let defaultProjectileImageBounds = null;
defaultProjectileImage.onload = () => {
  defaultProjectileImageBounds = getImageAlphaBounds(defaultProjectileImage);
};
defaultProjectileImage.src = './uploads/bottle-of-beer-isolated-png-3396754066.png';
const hitboxTimeInput = document.querySelector('#hitbox-time');
const hitboxShapeInput = document.querySelector('#hitbox-shape');
const hitboxAnchoredInput = document.querySelector('#hitbox-anchored');
const hitboxHitSelfInput = document.querySelector('#hitbox-hit-self');
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
const soundNodeVolumeNumberInput = document.querySelector('#sound-node-volume-number');
const soundNodeCancelInput = document.querySelector('#sound-node-cancel');
const soundNodeStartInput = document.querySelector('#sound-node-start');
const soundNodeFadeInput = document.querySelector('#sound-node-fade');
const soundNodeStackInput = document.querySelector('#sound-node-stack');
const variableNodeButton = document.querySelector('#variable-node');
const stateNodeButton = document.querySelector('#state-node');
const stateNodeDetails = document.querySelector('#state-properties');
const stateNodeTypeInput = document.querySelector('#state-node-type');
const stateNodeValueInput = document.querySelector('#state-node-value');
const stateNodeTimeInput = document.querySelector('#state-node-time');
const stateTargetOfHitboxInput = document.querySelector('#state-node-target-of-hitbox');
const stateTargetPicker = document.querySelector('#state-hitbox-target-picker');
const variableGlobalInput = document.querySelector('#variable-global');
const variableNodeDetails = document.querySelector('#variable-properties');
const variableValueInput = document.querySelector('#variable-value');
const variableDataValueInput = document.querySelector('#variable-data-value');
const variableMathInput = document.querySelector('#variable-math');
const variableTargetPicker = document.querySelector('#variable-hitbox-target-picker');
const velocityTargetPicker = document.querySelector('#velocity-hitbox-target-picker');
const visualTargetPicker = document.querySelector('#visual-hitbox-target-picker');
const waitTargetPicker = document.querySelector('#wait-hitbox-target-picker');
const skipNodeButton = document.querySelector('#skip-node');
const randomSkipNodeButton = document.querySelector('#random-skip-node');
const advancedProjectileNodeButton = document.querySelector('#advanced-projectile-node');
const advancedProjectileNodeDetails = document.querySelector('#advanced-projectile-properties');
const advancedProjectileBehaviorInput = document.querySelector('#advanced-projectile-behavior');
const advancedProjectileIdInput = document.querySelector('#advanced-projectile-id');
const advancedTransferInput = document.querySelector('#advanced-transfer');
const advancedTransferProperties = document.querySelector('#advanced-transfer-properties');
const advancedTransferReverseInput = document.querySelector('#advanced-transfer-reverse');
const advancedProjectileSticksInput = document.querySelector('#advanced-projectile-sticks');
const advancedProjectileStickSettings = document.querySelector('#advanced-projectile-stick-settings');
const advancedProjectileBoundariesInput = document.querySelector('#advanced-projectile-boundaries');
const advancedProjectileEnemyInput = document.querySelector('#advanced-projectile-enemy');
const advancedProjectileBounceDamageSetting = document.querySelector('#advanced-projectile-bounce-damage-setting');
const advancedProjectileBounceDamageInput = document.querySelector('#advanced-projectile-bounce-damage');
const advancedProjectileHitSelfInput = document.querySelector('#advanced-projectile-hit-self');
const advancedProjectileSkipOnTouchInput = document.querySelector('#advanced-projectile-skip-on-touch');
const advancedProjectileSkipSettings = document.querySelector('#advanced-projectile-skip-settings');
const advancedProjectileSkipTargetButton = document.querySelector('#advanced-projectile-skip-target');
const advancedProjectileSkipPicker = document.querySelector('#advanced-projectile-skip-picker');
const advancedProjectileBoundaryDamageSetting = document.querySelector('#advanced-projectile-boundary-damage-setting');
const advancedProjectileBoundaryDamageInput = document.querySelector('#advanced-projectile-boundary-damage');
const advancedProjectileCancelOnTouchInput = document.querySelector('#advanced-projectile-cancel-on-touch');
const advancedPiercingInput = document.querySelector('#advanced-piercing');
const advancedPiercingProperties = document.querySelector('#advanced-piercing-properties');
const advancedHitRateInput = document.querySelector('#advanced-hit-rate');
const advancedDamageDeductionInput = document.querySelector('#advanced-damage-deduction');
const advancedHomingEnabledInput = document.querySelector('#advanced-homing-enabled');
const advancedHomingProperties = document.querySelector('#advanced-homing-properties');
const advancedHomingInput = document.querySelector('#advanced-homing');
const advancedDisableAllInput = document.querySelector('#advanced-disable-all');
const advancedOrbitEnabledInput = document.querySelector('#advanced-orbit-enabled');
const advancedOrbitProperties = document.querySelector('#advanced-orbit-properties');
const advancedOrbitSpeedInput = document.querySelector('#advanced-orbit-speed');
const advancedOrbitStartingDirectionSetting = document.querySelector('#advanced-orbit-starting-direction-setting');
const advancedOrbitStartingDirectionDial = document.querySelector('#advanced-orbit-starting-direction-dial');
const advancedOrbitStartingDirectionInput = document.querySelector('#advanced-orbit-starting-direction');
const advancedOrbitRandomSetting = document.querySelector('#advanced-orbit-random-setting');
const advancedOrbitRandomInput = document.querySelector('#advanced-orbit-random');
const advancedOrbitTrackEnemySetting = document.querySelector('#advanced-orbit-track-enemy-setting');
const advancedOrbitTrackEnemyInput = document.querySelector('#advanced-orbit-track-enemy');
const advancedOrbitAlignedInput = document.querySelector('#advanced-orbit-aligned');
const advancedOrbitCounterClockwiseInput = document.querySelector('#advanced-orbit-counter-clockwise');
const advancedOrbitTargetHitboxInput = document.querySelector('#advanced-orbit-target-hitbox');
const advancedOrbitTargetPicker = document.querySelector('#advanced-orbit-target-picker');
const advancedOrbitImmuneInput = document.querySelector('#advanced-orbit-immune');
const advancedOrbitDistanceInput = document.querySelector('#advanced-orbit-distance');
const advancedOrbitIndestructibleInput = document.querySelector('#advanced-orbit-indestructible');
const advancedOrbitIndestructibleOptions = document.querySelector('#advanced-orbit-indestructible-options');
const advancedOrbitPhaseThroughInput = document.querySelector('#advanced-orbit-phase-through');
const advancedChangePropertyInput = document.querySelector('#advanced-change-property');
const advancedChangeProperties = document.querySelector('#advanced-change-properties');
const advancedChangeSizeInput = document.querySelector('#advanced-change-size');
const advancedChangeSpeedInput = document.querySelector('#advanced-change-speed');
const advancedChangeDamageInput = document.querySelector('#advanced-change-damage');
const advancedChangeImageInput = document.querySelector('#advanced-change-image');
const advancedChangeImageName = document.querySelector('#advanced-change-image-name');
const advancedChangeTimeInput = document.querySelector('#advanced-change-time');
const advancedChangeBouncesInput = document.querySelector('#advanced-change-bounces');
const randomSkipNodeDetails = document.querySelector('#random-skip-properties');
const signalNodeButton = document.querySelector('#signal-node');
const signalNodeDetails = document.querySelector('#signal-node-properties');
const signalNodeTargetSetting = document.querySelector('#signal-node-target-setting');
const signalNodeTargetButton = document.querySelector('#signal-node-target');
const signalNodeTargetPicker = document.querySelector('#signal-node-target-picker');
const signalNodeValueInput = document.querySelector('#signal-node-value');
const signalNodeReceiveInput = document.querySelector('#signal-node-receive');
const signalNodeModeLabel = document.querySelector('#signal-node-mode-label');
const randomSkipDestinations = document.querySelector('#random-skip-destinations');
const randomSkipAddButton = document.querySelector('#random-skip-add');
const randomSkipStackNodesInput = document.querySelector('#random-skip-stack-nodes');
const randomSkipAfterHitInput = document.querySelector('#random-skip-after-hit-landed');
const randomSkipAfterHitPicker = document.querySelector('#random-skip-hitbox-target-picker');
const randomSkipVariableNameInput = document.querySelector('#random-skip-variable-name');
const randomSkipVariableValueInput = document.querySelector('#random-skip-variable-value');
const randomSkipTargetOfHitboxInput = document.querySelector('#random-skip-target-of-hitbox');
const randomSkipTargetPicker = document.querySelector('#random-skip-target-picker');
const skipNodeDetails = document.querySelector('#skip-properties');
const skipNodeTargetButton = document.querySelector('#skip-node-target');
const skipNodeTargetPicker = document.querySelector('#skip-node-target-picker');
const skipAfterHitLandedInput = document.querySelector('#skip-after-hit-landed');
const skipTargetPicker = document.querySelector('#skip-hitbox-target-picker');
const skipVariableNameInput = document.querySelector('#skip-variable-name');
const skipVariableValueInput = document.querySelector('#skip-variable-value');
const skipTargetOfHitboxInput = document.querySelector('#skip-target-of-hitbox');
const skipTargetOfHitboxPicker = document.querySelector('#skip-target-picker');
const variableRemoveInput = document.querySelector('#variable-remove');
const variableTargetOfHitboxInput = document.querySelector('#variable-target-of-hitbox');
const cancelNodeButton = document.querySelector('#cancel-node');
const cancelNodeDetails = document.querySelector('#cancel-properties');
const cancelNeverRepeatInput = document.querySelector('#cancel-never-repeat');
const cancelMoveCooldownInput = document.querySelector('#cancel-move-cooldown');
const cancelPatternMoveInput = document.querySelector('#cancel-pattern-move');
const waitNodeTimeInput = document.querySelector('#wait-node-time');
const waitNodeAfterDamageInput = document.querySelector('#wait-node-after-damage');
const visualNodeTypeInput = document.querySelector('#visual-node-type');
const visualNodePreview = document.querySelector('#visual-node-preview');
const visualPreviewGuyImage = document.querySelector('#visual-preview-guy-image');
const hitboxPreviewGuyImage = document.querySelector('#hitbox-preview-guy-image');
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
const spriteReplaceSizeInput = document.querySelector('#sprite-replace-size');
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
const moveSettingsButton = document.querySelector('#move-settings-button');
const moveSettingsPanel = document.querySelector('#move-settings-panel');
const categorizedNodesSetting = document.querySelector('#setting-categorized-nodes');
const emptySoundsSetting = document.querySelector('#setting-empty-sounds');
const alwaysSaveMovesSetting = document.querySelector('#setting-always-save-moves');
const compactModeSetting = document.querySelector('#setting-compact-mode');
const finishMoveButton = document.querySelector('#finish-move');
const moveNodeUpButton = document.querySelector('#move-node-up');
const moveNodeDownButton = document.querySelector('#move-node-down');
const duplicateNodeButton = document.querySelector('#duplicate-node');
const undoNodeButton = document.querySelector('#undo-node');
let undoSnapshots = [];
let previousUndoSnapshot = '';
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
const directionSidePicker = document.querySelector('#direction-side-picker');
const directionSideSummary = document.querySelector('#direction-side-summary');
const directionModeSelect = document.querySelector('#direction-mode-select');
const directionFrequencySelect = document.querySelector('#direction-frequency-select');
const metronomeDelayInput = document.querySelector('#metronome-delay');
const metronomeIntervalInput = document.querySelector('#metronome-interval');
const collisionProperties = document.querySelector('#collision-properties');
const damagedProperties = document.querySelector('#damaged-properties');
const directionProperties = document.querySelector('#direction-properties');
const metronomeProperties = document.querySelector('#metronome-properties');
const matchStartProperties = document.querySelector('#match-start-properties');
const clickProperties = document.querySelector('#click-properties');
const signalConditionProperties = document.querySelector('#signal-condition-properties');
const signalConditionIdInput = document.querySelector('#signal-condition-id');
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
  { x: 0, y: 0, startPositionX: null, startPositionY: null, vx: 112, vy: 82, startDirectionX: 112 / Math.hypot(112, 82), startDirectionY: 82 / Math.hypot(112, 82), speed: 246, defaultSpeed: 246, size: 100, defaultSize: 100, rotation: 0, rotateSpeed: 0, cornerPadding: 0, color: '#f27658', image: null, imageBounds: null, winImage: null, winImageBounds: null, hitboxMatchesPng: false, flipForEnemyEyeContact: true, reverseEyeContactFlip: false, eyeContactFlipAffectsHitbox: false, spriteReplace: null, health: maxHealth, maxHealth, defaultHealth: maxHealth, flashUntil: 0 },
  { x: 0, y: 0, startPositionX: null, startPositionY: null, vx: -86, vy: -108, startDirectionX: -86 / Math.hypot(86, 108), startDirectionY: -108 / Math.hypot(86, 108), speed: 246, defaultSpeed: 246, size: 100, defaultSize: 100, rotation: 0, rotateSpeed: 0, cornerPadding: 0, color: '#5868d8', image: null, imageBounds: null, winImage: null, winImageBounds: null, hitboxMatchesPng: false, flipForEnemyEyeContact: true, reverseEyeContactFlip: false, eyeContactFlipAffectsHitbox: false, spriteReplace: null, health: maxHealth, maxHealth, defaultHealth: maxHealth, flashUntil: 0 },
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

function connectCornerPadding(input, square) {
  input.addEventListener('input', () => {
    const value = input.value === '' ? 0 : input.valueAsNumber;
    if (!Number.isFinite(value)) return;
    square.cornerPadding = Math.max(0, Math.min(Number(input.max), value));
    input.value = square.cornerPadding;
  });
}

connectRotateSpeed(guyOneRotateSpeed, squares[1]);
connectRotateSpeed(guyTwoRotateSpeed, squares[0]);
connectCornerPadding(guyOneCornerPadding, squares[1]);
connectCornerPadding(guyTwoCornerPadding, squares[0]);

function updateEditorView() {
  const showGuyOne = categorySelect.value === 'guy-one';
  guyOneCategory.hidden = !showGuyOne;
  guyTwoCategory.hidden = showGuyOne;
  guyOneStats.hidden = !showGuyOne;
  guyTwoStats.hidden = showGuyOne;

  const category = editorCategorySelect.value;
  cosmeticPage.hidden = category !== 'cosmetic';
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
let clickConditionAvailableAt = 0;
let isPreviewingMove = false;
let activeMovePreview = null;
let previewMoveEndTime = 0;
let matchEnded = false;
let matchGeneration = 0;
let showWinSprites = false;
let winSpriteTimer = null;
let youtubeStartTimer = null;
let youtubeSpeedTimer = null;
let youtubeModePreviousSpeed = null;
let gameSpeed = 1;
let needsStartMotion = true;
let watermarkText = '';
let arenaLabelText = '';
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
  clickConditionAvailableAt = performance.now() + 100;
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
  stopAllSounds();
  startButton.disabled = false;
  pauseButton.disabled = true;
});

restartButton.addEventListener('click', () => {
  stopAllSounds();
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
  for (const projectile of [...activeProjectiles]) {
    removeProjectileFromPlay(projectile);
    projectile.cancelled = true;
    projectile.complete?.(false);
    for (const resolveTouch of projectile.skipOnTouchResolvers) resolveTouch(false);
    projectile.skipOnTouchResolvers.clear();
  }
  projectilePositionCache.clear();
  advancedProjectilePropertiesById.clear();
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
    square.stateEffects = {};
    square.maxHealth = square.defaultHealth;
    square.speed = square.defaultSpeed;
    square.size = square.defaultSize;
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
  for (const variables of Object.values(globalVariablesByGuy)) variables.clear();
  needsStartMotion = true;
  positionSquaresAtStart();
});

watermarkButton.addEventListener('click', () => {
  if (document.body.classList.contains('watermark-mode')) {
    clearTimeout(youtubeStartTimer);
    clearTimeout(youtubeSpeedTimer);
    youtubeStartTimer = null;
    youtubeSpeedTimer = null;
    if (youtubeModePreviousSpeed !== null) setGameSpeed(youtubeModePreviousSpeed);
    youtubeModePreviousSpeed = null;
    watermarkText = '';
    arenaLabelText = '';
    arenaLabel.textContent = '';
    arenaLabel.hidden = true;
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
function updateSpeedButton() {
  const speedLabel = `${gameSpeed}×`;
  speedButton.dataset.speed = String(gameSpeed);
  speedButton.setAttribute('aria-pressed', String(gameSpeed > 1));
  speedButton.setAttribute('aria-label', `Game speed: ${speedLabel}`);
  speedButton.title = `Game speed: ${speedLabel}`;
}

function setGameSpeed(speed) {
  gameSpeed = speed;
  updateSpeedButton();
}

speedButton.addEventListener('click', () => {
  setGameSpeed(gameSpeed >= 3 ? 1 : gameSpeed + 1);
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
  squares.forEach(square => { square.startPositionX = null; square.startPositionY = null; });
  canvasFrame.style.width = '';
  canvasFrame.style.height = '';
  stage.style.width = '';
  stage.style.flex = '';
  resize();
  positionSquaresAtStart();
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
  youtubeModePreviousSpeed = gameSpeed;
  const selectedYoutubeSpeed = youtubeSpeedInput.value;
  const initialSpeed = selectedYoutubeSpeed === '2x' ? 2 : selectedYoutubeSpeed === '3x' ? 3 : selectedYoutubeSpeed === '5x' ? 5 : 1;
  setGameSpeed(initialSpeed);
  arenaLabelText = labelTextInput.value.trim();
  arenaLabel.textContent = arenaLabelText;
  closeWatermarkPrompt();
  restartButton.click();
  document.body.classList.add('watermark-mode');
  arenaLabel.hidden = !arenaLabelText;
  clearTimeout(youtubeStartTimer);
  youtubeStartTimer = setTimeout(() => {
    youtubeStartTimer = null;
    if (!document.body.classList.contains('watermark-mode') || matchEnded) return;
    startButton.click();
    if (selectedYoutubeSpeed === '2x-after-30' || selectedYoutubeSpeed === '3x-after-30') {
      youtubeSpeedTimer = setTimeout(() => {
        youtubeSpeedTimer = null;
        if (document.body.classList.contains('watermark-mode') && !matchEnded) {
          setGameSpeed(selectedYoutubeSpeed === '2x-after-30' ? 2 : 3);
        }
      }, 30000);
    }
  }, (Number(youtubeStartDelayInput.value) || 3) * 1000);
});

cancelWatermarkButton.addEventListener('click', closeWatermarkPrompt);
watermarkModal.addEventListener('click', event => {
  if (event.target === watermarkModal) closeWatermarkPrompt();
});

function enableImageDropOnPickers() {
  document.querySelectorAll('.upload-button[for], .file-picker-button[for]').forEach(target => {
    const input = document.getElementById(target.htmlFor);
    if (!(input instanceof HTMLInputElement) || input.type !== 'file' || !input.accept.toLowerCase().includes('image')) return;

    const clearHighlight = () => target.classList.remove('image-drop-active');
    target.addEventListener('dragenter', event => {
      if (![...(event.dataTransfer?.types ?? [])].includes('Files')) return;
      event.preventDefault();
      target.classList.add('image-drop-active');
    });
    target.addEventListener('dragover', event => {
      if (![...(event.dataTransfer?.types ?? [])].includes('Files')) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = 'copy';
      target.classList.add('image-drop-active');
    });
    target.addEventListener('dragleave', event => {
      if (!target.contains(event.relatedTarget)) clearHighlight();
    });
    target.addEventListener('drop', event => {
      event.preventDefault();
      clearHighlight();
      const imageFile = [...(event.dataTransfer?.files ?? [])].find(file => file.type.startsWith('image/'));
      if (!imageFile) return;
      const transfer = new DataTransfer();
      transfer.items.add(imageFile);
      input.files = transfer.files;
      input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });
}

enableImageDropOnPickers();

function connectSpriteImageUpload(input, square, imageProperty, preview) {
  input.addEventListener('change', () => {
    const file = input.files?.[0];
    if (!file) return;

    const image = new Image();
    const imageUrl = URL.createObjectURL(file);
    const urlProperty = imageProperty === 'image' ? 'imageURL' : 'winImageURL';
    if (square[urlProperty]) URL.revokeObjectURL(square[urlProperty]);
    square[urlProperty] = imageUrl;
    image.onload = async () => {
      const frames = imageProperty === 'image' ? await decodeAnimatedGif(file) : [];
      if (square[urlProperty] !== imageUrl) {
        frames.forEach(frame => frame.image.close());
        return;
      }
      image.originalMimeType = file.type;
      image.animatedFrames = frames;
      image.animationStartedAt = performance.now();
      square[imageProperty] = image;
      square[imageProperty === 'image' ? 'imageBounds' : 'winImageBounds'] = getImageAlphaBounds(image);
      preview.src = imageUrl;
      preview.hidden = false;
      updateHitboxPreview();
      updateVisualPreview();
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
        square.defaultHealth = square.maxHealth = value;
        square.health = value;
      } else if (stat === 'speed') {
        const currentSpeed = Math.hypot(square.vx, square.vy);
        square.defaultSpeed = square.speed = value;
        if (currentSpeed > 0) {
          square.vx = square.vx / currentSpeed * value;
          square.vy = square.vy / currentSpeed * value;
        } else {
          square.vx = square.startDirectionX * value;
          square.vy = square.startDirectionY * value;
        }
      } else if (stat === 'size') {
        square.defaultSize = square.size = value;
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
function updateDirectionSidePicker() {
  directionSideSummary.textContent = [...directionSidePicker.querySelectorAll('input:checked')].map(input => input.value).join(', ') || 'none';
}
directionSidePicker.addEventListener('change', updateDirectionSidePicker);
setConditionSides(targetSidePicker, targetSideSummary, 'any');
setConditionSides(approachSidePicker, approachSideSummary, 'any');
setConditionSides(damageFromPicker, damageFromSummary, 'any');
updateDirectionSidePicker();

const moveUiSettings = { categorizedNodes: true, emptySounds: false, alwaysSaveMoves: false, compactMode: false };
try {
  Object.assign(moveUiSettings, JSON.parse(localStorage.getItem('guy-maker-move-settings') || '{}'));
  if (!localStorage.getItem('guy-maker-categorized-default-on')) {
    moveUiSettings.categorizedNodes = true;
    localStorage.setItem('guy-maker-categorized-default-on', '1');
    localStorage.setItem('guy-maker-move-settings', JSON.stringify(moveUiSettings));
  }
  if (!localStorage.getItem('guy-maker-compact-default-off')) {
    moveUiSettings.compactMode = false;
    localStorage.setItem('guy-maker-compact-default-off', '1');
  }
} catch {}
function applyMoveUiSettings() {
  categorizedNodesSetting.checked = moveUiSettings.categorizedNodes;
  emptySoundsSetting.checked = moveUiSettings.emptySounds;
  alwaysSaveMovesSetting.checked = moveUiSettings.alwaysSaveMoves;
  compactModeSetting.checked = moveUiSettings.compactMode;
  document.querySelector('.move-nodes').classList.toggle('uncategorized', !moveUiSettings.categorizedNodes);
  timelineList.classList.toggle('compact', moveUiSettings.compactMode);
}
function saveMoveUiSettings() {
  localStorage.setItem('guy-maker-move-settings', JSON.stringify(moveUiSettings));
  applyMoveUiSettings();
}
function getDefaultSoundProperties() {
  return moveUiSettings.emptySounds ? { soundURL: '', soundName: 'No sound' } : { soundURL: defaultHitboxSound, soundName: defaultHitboxSoundName };
}
moveSettingsButton.addEventListener('click', event => {
  event.stopPropagation();
  moveSettingsPanel.hidden = !moveSettingsPanel.hidden;
  moveSettingsButton.setAttribute('aria-expanded', String(!moveSettingsPanel.hidden));
});
moveSettingsPanel.addEventListener('click', event => event.stopPropagation());
document.addEventListener('click', () => {
  moveSettingsPanel.hidden = true;
  moveSettingsButton.setAttribute('aria-expanded', 'false');
});
function expandNodeCategories() {
  document.querySelectorAll('.move-nodes .node-category').forEach(category => { category.open = true; });
}
for (const [input, key] of [[categorizedNodesSetting, 'categorizedNodes'], [emptySoundsSetting, 'emptySounds'], [alwaysSaveMovesSetting, 'alwaysSaveMoves'], [compactModeSetting, 'compactMode']]) {
  input.addEventListener('change', () => {
    moveUiSettings[key] = input.checked;
    if (key === 'categorizedNodes') expandNodeCategories();
    saveMoveUiSettings();
  });
}
expandNodeCategories();
applyMoveUiSettings();

function updateMoveCondition() {
  collisionProperties.hidden = moveConditionSelect.value !== 'collision';
  damagedProperties.hidden = moveConditionSelect.value !== 'damaged';
  directionProperties.hidden = moveConditionSelect.value !== 'direction';
  metronomeProperties.hidden = moveConditionSelect.value !== 'metronome';
  matchStartProperties.hidden = moveConditionSelect.value !== 'match-start';
  clickProperties.hidden = moveConditionSelect.value !== 'click';
  signalConditionProperties.hidden = moveConditionSelect.value !== 'signal';
}

moveConditionSelect.addEventListener('change', updateMoveCondition);
updateMoveCondition();

function getSelectedGuySquare() {
  return categorySelect.value === 'guy-one' ? squares[1] : squares[0];
}

function setMovePreviewArena(preview, square, unit) {
  const arenaWidth = canvas.clientWidth || defaultArenaSize || square.size;
  const arenaHeight = canvas.clientHeight || arenaWidth;
  preview.style.setProperty('--move-arena-width', `${arenaWidth * unit}px`);
  preview.style.setProperty('--move-arena-height', `${arenaHeight * unit}px`);
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
  setMovePreviewArena(visualNodePreview, square, unit);

  visualNodePreview.classList.toggle('is-flash', isFlash);
  visualNodePreview.style.setProperty('--preview-guy-color', square.color);
  const guyImage = isSpriteReplace ? image : square.image;
  visualNodePreview.classList.toggle('has-guy-image', Boolean(guyImage));
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
    : Math.max(0, Math.min(100, Number(node.opacity) || 0));
  visualNodePreview.style.setProperty('--preview-opacity', String(previewOpacity / 100));
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
  const arenaWidth = canvas.clientWidth || defaultArenaSize || square.size;
  const arenaHeight = canvas.clientHeight || arenaWidth;
  const largestDimension = Math.max(square.size, previewWidth, previewHeight);
  const scale = Math.min(0.24, 56 / largestDimension);
  const previewSize = size => `${size * scale}px`;
  hitboxPreview.style.setProperty('--arena-preview-width', previewSize(arenaWidth));
  hitboxPreview.style.setProperty('--arena-preview-height', previewSize(arenaHeight));
  hitboxPreview.style.setProperty('--guy-preview-width', previewSize(square.size));
  hitboxPreview.style.setProperty('--guy-preview-height', previewSize(square.size));
  hitboxPreview.style.setProperty('--hitbox-preview-width', previewSize(previewWidth));
  hitboxPreview.style.setProperty('--hitbox-preview-height', previewSize(previewHeight));
  hitboxPreview.style.setProperty('--hitbox-offset-x', `${(Number(node.x) || 0) * scale}px`);
  hitboxPreview.style.setProperty('--hitbox-offset-y', `${(Number(node.y) || 0) * scale}px`);
  hitboxPreview.style.setProperty('--hitbox-rotation', `${Number(node.rotation) || 0}deg`);
  hitboxPreview.dataset.shape = node.shape || 'Square';
  hitboxPreview.style.setProperty('--guy-color', square.color);
  hitboxPreview.classList.toggle('has-guy-image', Boolean(square.image));
  hitboxPreviewGuyImage.hidden = !square.image;
  if (square.image) hitboxPreviewGuyImage.src = square.image.src;
  else hitboxPreviewGuyImage.removeAttribute('src');
  hitboxSizeXValue.value = node.width;
  hitboxSizeYValue.value = node.height;
  hitboxSizeXInput.value = Math.max(Number(hitboxSizeXInput.min), Math.min(Number(hitboxSizeXInput.max), previewWidth));
  hitboxSizeYInput.value = Math.max(Number(hitboxSizeYInput.min), Math.min(Number(hitboxSizeYInput.max), previewHeight));
  guySizeValue.textContent = `${square.size} × ${square.size}`;
  hitboxSizeLabel.textContent = `${node.width} × ${node.height}`;
}

const movesByGuy = { 'guy-one': [], 'guy-two': [] };
const moveStackSettings = { 'guy-one': { stackMoves: true, selfStack: false }, 'guy-two': { stackMoves: true, selfStack: false } };
const activeMoveTimelines = { 'guy-one': new Map(), 'guy-two': new Map() };
let directionSideByMove = new WeakMap();
const globalVariablesByGuy = { 'guy-one': new Map(), 'guy-two': new Map() };
const damagePopups = [];
const activeSoundNodes = new Set();
const activeSounds = new Set();
let activeSoundsByNode = new WeakMap();
const soundCleanupByAudio = new WeakMap();
const activeVisuals = [];
const activeHitboxes = [];
const activeProjectiles = [];
const advancedProjectilePropertiesById = new Map();
const familiarMaskWidth = 48;
const familiarMaskHeight = 132;
let familiarMaskPoints = [];
let familiarMaskFillPath = null;
let familiarMaskOutlinePath = null;
const familiarMaskReady = new Promise(resolve => {
  const image = new Image();
  image.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = familiarMaskWidth;
    canvas.height = familiarMaskHeight;
    const maskContext = canvas.getContext('2d', { willReadFrequently: true });
    maskContext.drawImage(image, 0, 0, familiarMaskWidth, familiarMaskHeight);
    const imageData = maskContext.getImageData(0, 0, familiarMaskWidth, familiarMaskHeight);
    const opaque = new Uint8Array(familiarMaskWidth * familiarMaskHeight);
    for (let y = 0; y < familiarMaskHeight; y++) {
      for (let x = 0; x < familiarMaskWidth; x++) {
        const offset = (y * familiarMaskWidth + x) * 4;
        const alpha = imageData.data[offset + 3];
        imageData.data[offset] = 255;
        imageData.data[offset + 1] = 255;
        imageData.data[offset + 2] = 255;
        if (alpha > 64) {
          opaque[y * familiarMaskWidth + x] = 1;
          familiarMaskPoints.push({ x: (x + 0.5) / familiarMaskWidth - 0.5, y: (y + 0.5) / familiarMaskHeight - 0.5 });
        }
      }
    }
    const fillPath = new Path2D();
    const outlinePath = new Path2D();
    for (let y = 0; y < familiarMaskHeight; y++) {
      for (let x = 0; x < familiarMaskWidth; x++) {
        if (!opaque[y * familiarMaskWidth + x]) continue;
        const left = x / familiarMaskWidth - 0.5;
        const right = (x + 1) / familiarMaskWidth - 0.5;
        const top = y / familiarMaskHeight - 0.5;
        const bottom = (y + 1) / familiarMaskHeight - 0.5;
        fillPath.rect(left, top, right - left, bottom - top);
        if (!x || !opaque[y * familiarMaskWidth + x - 1]) { outlinePath.moveTo(left, top); outlinePath.lineTo(left, bottom); }
        if (x === familiarMaskWidth - 1 || !opaque[y * familiarMaskWidth + x + 1]) { outlinePath.moveTo(right, top); outlinePath.lineTo(right, bottom); }
        if (!y || !opaque[(y - 1) * familiarMaskWidth + x]) { outlinePath.moveTo(left, top); outlinePath.lineTo(right, top); }
        if (y === familiarMaskHeight - 1 || !opaque[(y + 1) * familiarMaskWidth + x]) { outlinePath.moveTo(left, bottom); outlinePath.lineTo(right, bottom); }
      }
    }
    maskContext.putImageData(imageData, 0, 0);
    familiarMaskFillPath = fillPath;
    familiarMaskOutlinePath = outlinePath;
    resolve();
  };
  image.onerror = () => resolve();
  image.src = './uploads/familiar.png';
});
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
  if (index >= 0) {
    activeProjectiles.splice(index, 1);
    if (!projectile.destroySoundPlayed && projectile.destroySoundURL) playTransientSound(projectile.destroySoundURL);
    projectile.destroySoundPlayed = true;
  }
  for (const resolveTouch of projectile.skipOnTouchResolvers ?? []) resolveTouch(false);
  projectile.skipOnTouchResolvers?.clear();
}

function cancelProjectilesById(idKey, sourceProjectile = null) {
  const matches = idKey ? activeProjectiles.filter(item => item.idKey === idKey) : sourceProjectile ? [sourceProjectile] : [];
  for (const projectile of matches) {
    removeProjectileFromPlay(projectile);
    projectile.cancelled = true;
    projectile.complete?.(false);
    projectile.complete = null;
  }
}

function applyAdvancedProjectileConfiguration(projectile, config) {
  projectile.advanced = config;
  if (config.transfer && (config.transferOwnerIndex === 0 || config.transferOwnerIndex === 1)) {
    projectile.attackerIndex = config.transferOwnerIndex;
    projectile.spawnedByIndex = config.transferOwnerIndex;
    projectile.targetIndex = 1 - config.transferOwnerIndex;
    projectile.color = squares[config.transferOwnerIndex].color;
  }
  projectile.sticksToBoundaries = Boolean(config.sticks && config.boundaries);
  projectile.sticksToEnemy = Boolean(config.sticks && config.enemy);
  projectile.hitSelfWhenStuck = Boolean(config.sticks && config.hitSelf);
  projectile.bounceDamage = config.enemy ? Math.max(0, Number(config.bounceDamage) || 0) : 0;
  projectile.boundaryDamage = config.sticks && config.boundaries ? Math.max(0, Number(config.boundaryDamage) || 0) : 0;
  projectile.cancelOnTouch = Boolean(config.cancelOnTouch);
  if (config.piercing !== undefined) projectile.piercing = Boolean(config.piercing);
  if (config.hitRate !== undefined) projectile.hitRate = Math.max(0, Number(config.hitRate) || 0);
  if (config.damageDeduction !== undefined) projectile.damageDeduction = Math.max(0, Number(config.damageDeduction) || 0);
  if (config.homingEnabled) {
    projectile.homing = Math.max(0, Number(config.homing) || 0);
    projectile.tracks = true;
  }
  projectile.indestructible = Boolean(config.orbit?.enabled && config.orbit.indestructible && !(config.homingEnabled && config.disableAll));
  projectile.immuneIndex = config.orbit?.enabled && config.orbit.immune ? config.orbit.centerIndex : null;
  const disableOtherProperties = Boolean(config.homingEnabled && config.disableAll);
  if (disableOtherProperties) {
    projectile.speed = projectile.defaultSpeed;
    const restoredHeading = Math.hypot(projectile.vx, projectile.vy) > 0 ? Math.atan2(projectile.vy, projectile.vx) : projectile.heading ?? projectile.defaultDirection;
    projectile.heading = restoredHeading;
    projectile.vx = Math.cos(restoredHeading) * projectile.speed;
    projectile.vy = Math.sin(restoredHeading) * projectile.speed;
    projectile.baseSize = projectile.defaultBaseSize;
    projectile.endSizeMultiplier = projectile.defaultEndSizeMultiplier;
    projectile.radius = projectile.baseSize / 2;
    projectile.damage = projectile.defaultDamage;
    projectile.image = projectile.defaultImage;
    projectile.imageBounds = projectile.defaultImageBounds;
    projectile.rotateSpeed = 0;
    projectile.rotation = 0;
    projectile.rotateToDirection = false;
    projectile.falloff = 0;
    projectile.bouncesRemaining = projectile.defaultBounces;
    projectile.sticksToBoundaries = false;
    projectile.sticksToEnemy = false;
    projectile.hitSelfWhenStuck = false;
    projectile.bounceDamage = 0;
    for (const resolveTouch of projectile.skipOnTouchResolvers ?? []) resolveTouch(false);
    projectile.skipOnTouchResolvers?.clear();
    projectile.boundaryDamage = 0;
    projectile.cancelOnTouch = false;
    projectile.indestructible = false;
    projectile.immuneIndex = null;
    projectile.orbitDisabled = false;
    projectile.startedAt = simulationTime;
    projectile.expiresAt = simulationTime + projectile.defaultDuration;
    projectile.tracks = Boolean(config.homingEnabled);
  } else if (config.changeEnabled) {
    const size = Number(config.changeSize);
    if (Number.isFinite(size)) {
      if (size <= 0) {
        removeProjectileFromPlay(projectile);
        projectile.complete?.(false);
        projectile.complete = null;
        return false;
      }
      projectile.baseSize = 75 * size;
      projectile.radius = projectile.baseSize / 2;
    }
    if (Number.isFinite(Number(config.changeSpeed))) {
      projectile.speed = Number(config.changeSpeed);
      const angle = Math.hypot(projectile.vx, projectile.vy) > 0 ? Math.atan2(projectile.vy, projectile.vx) : projectile.heading ?? projectile.defaultDirection;
      projectile.heading = angle;
      projectile.vx = Math.cos(angle) * projectile.speed;
      projectile.vy = Math.sin(angle) * projectile.speed;
    }
    if (Number.isFinite(Number(config.changeDamage))) projectile.damage = Number(config.changeDamage);
    if (config.changeImage) { projectile.image = config.changeImage; projectile.imageBounds = config.changeImageBounds; }
    if (Number.isFinite(Number(config.changeTime))) {
      projectile.startedAt = simulationTime;
      projectile.expiresAt = simulationTime + Math.max(0, Number(config.changeTime));
    }
    if (Number.isFinite(Number(config.changeBounces))) projectile.bouncesRemaining = Math.max(0, Math.floor(Number(config.changeBounces)));
  }
  if (config.orbit?.enabled && !disableOtherProperties) {
    config.orbit.startedAt ??= simulationTime;
    projectile.stuckTo = null;
    projectile.orbitDisabled = false;
    projectile.orbitDirection = config.orbit.counterClockwise ? -1 : 1;
    projectile.orbitStartedAt = config.orbit.startedAt;
    const center = squares[Number.isInteger(config.orbit.centerIndex) ? config.orbit.centerIndex : projectile.attackerIndex];
    const target = squares[projectile.targetIndex];
    let startingAngle = ((Number(config.orbit.startingDirection ?? 90) - 90) * Math.PI) / 180;
    if (config.orbit.random) startingAngle = Math.random() * Math.PI * 2;
    else if (config.orbit.trackEnemy && center && target) startingAngle = Math.atan2(target.y - center.y, target.x - center.x);
    projectile.orbitAngle = startingAngle;
    projectile.orbitBaseAngle = startingAngle;
    projectile.orbitWasOutside = false;
  }
  return true;
}

function clearPreviewProjectilePositions() {
  for (const key of projectilePositionCache.keys()) {
    if (key.startsWith('preview:')) projectilePositionCache.delete(key);
  }
  for (const key of advancedProjectilePropertiesById.keys()) {
    if (key.startsWith('preview:')) advancedProjectilePropertiesById.delete(key);
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
  'projectile-bounce-count': 'bounceCount', 'projectile-falloff': 'falloff', 'advanced-projectile-bounce-damage': 'bounceDamage',
  'advanced-projectile-boundary-damage': 'boundaryDamage', 'advanced-hit-rate': 'hitRate', 'advanced-damage-deduction': 'damageDeduction',
  'advanced-homing': 'homing', 'advanced-orbit-speed': 'orbitSpeed', 'advanced-orbit-starting-direction': 'orbitStartingDirection', 'advanced-orbit-distance': 'orbitDistance',
  'advanced-change-size': 'changeSize', 'advanced-change-speed': 'changeSpeed', 'advanced-change-damage': 'changeDamage',
  'advanced-change-time': 'changeTime', 'advanced-change-bounces': 'changeBounces', 'cancel-move-cooldown': 'moveCooldown',
  'sound-node-start': 'start', 'wait-node-time': 'time', 'velocity-speed': 'speed', 'velocity-distance': 'distance',
  'velocity-rotation-value': 'rotation', 'visual-node-scale': 'scale', 'visual-node-position-x': 'positionX',
  'visual-node-position-y': 'positionY', 'visual-rotation-value': 'rotation', 'visual-node-speed': 'speed',
  'visual-node-opacity': 'opacity', 'sprite-replace-time': 'time', 'sprite-replace-rotation': 'rotation',
  'visual-node-time': 'time', 'visual-node-fade-in': 'fadeIn', 'visual-node-fade-out': 'fadeOut',
  'state-node-time': 'time',
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

function getTimelineNodeClass(node) {
  if (node.type === 'advanced-projectile') return 'advanced-projectile-timeline-node';
  if (node.type === 'skip') return 'skip-timeline-node';
  if (node.type === 'random-skip') return 'random-skip-timeline-node';
  if (node.type === 'signal') return 'signal-timeline-node';
  if (node.type === 'state') return 'state-timeline-node';
  if (node.type === 'cancel') return 'cancel-timeline-node';
  if (node.type === 'comment') return 'comment-timeline-node';
  if (node.type === 'variable') return 'variable-timeline-node';
  if (node.type === 'sound') return 'sound-timeline-node';
  if (node.type === 'wait') return 'wait-timeline-node';
  if (node.type === 'loop') return 'loop-timeline-node';
  if (node.type === 'visual') return 'visual-timeline-node';
  if (node.type === 'projectile') return 'projectile-timeline-node';
  if (node.type === 'velocity') return 'velocity-timeline-node';
  return 'hitbox-timeline-node';
}

function renderTimeline() {
  timelineList.replaceChildren();
  draftNodes.forEach(node => {
    const nodeButton = document.createElement('button');
    nodeButton.type = 'button';
    const nodeClass = getTimelineNodeClass(node);
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

function draftFingerprint(nodes = draftNodes) {
  return JSON.stringify(nodes, (key, value) => ['image', 'imageBounds'].includes(key) ? undefined : value);
}

moveModal.addEventListener('click', event => {
  if (event.target.closest('#undo-node')) return;
  const before = draftNodes.map(node => ({ ...node }));
  const fingerprint = draftFingerprint();
  queueMicrotask(() => {
    if (draftFingerprint() !== fingerprint) {
      undoSnapshots.push(before);
      updateNodeMoveButtons();
    }
  });
}, true);
moveModal.addEventListener('input', () => {
  const before = draftNodes.map(node => ({ ...node }));
  const fingerprint = draftFingerprint();
  queueMicrotask(() => {
    const after = draftFingerprint();
    if (after !== fingerprint) {
      undoSnapshots.push(before);
      previousUndoSnapshot = after;
      updateNodeMoveButtons();
    }
  });
}, true);
moveModal.addEventListener('change', () => {
  const before = draftNodes.map(node => ({ ...node }));
  const fingerprint = draftFingerprint();
  queueMicrotask(() => {
    const after = draftFingerprint();
    if (after !== fingerprint) {
      undoSnapshots.push(before);
      previousUndoSnapshot = after;
      updateNodeMoveButtons();
    }
  });
}, true);

function configureFutureNodePicker(node, button, picker) {
  const selectedNode = draftNodes.find(item => item.id === node.skipNodeId);
  button.className = selectedNode ? `node-target-button ${getTimelineNodeClass(selectedNode)}` : 'node-target-button';
  button.textContent = selectedNode ? getTimelineNodeLabel(selectedNode) : 'Select node';
  picker.hidden = true;
  button.onclick = () => {
    picker.replaceChildren();
    picker.hidden = !picker.hidden;
    if (picker.hidden) return;
    const candidates = draftNodes.filter(item => item.id !== node.id);
    if (!candidates.length) {
      const empty = document.createElement('span');
      empty.textContent = 'Add another node to select it.';
      picker.append(empty);
    }
    for (const candidate of candidates) {
      const option = document.createElement('button');
      option.type = 'button';
      option.className = `node-target-button ${getTimelineNodeClass(candidate)}`;
      option.textContent = getTimelineNodeLabel(candidate);
      option.addEventListener('click', () => {
        node.skipNodeId = candidate.id;
        button.className = `node-target-button ${getTimelineNodeClass(candidate)}`;
        button.textContent = getTimelineNodeLabel(candidate);
        picker.hidden = true;
        updateNodeMoveButtons();
      });
      picker.append(option);
    }
  };
}

function renderHitboxTargetPicker(container, node, property, multiple = true) {
  container.hidden = false;
  container.replaceChildren();
  const selectedValues = multiple ? (node[property] ?? []) : [node[property]];
  const selected = new Set(selectedValues.filter(Boolean).map(Number));
  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'node-target-button';
  const selectedLabels = [...selected].map(id => draftNodes.find(item => item.id === id)).filter(Boolean).map(item => getTimelineNodeLabel(item));
  trigger.textContent = selectedLabels.length ? 'Selected: ' + selectedLabels.join(', ') : 'Select hitboxes / projectiles';
  const choices = document.createElement('div');
  choices.className = 'node-target-choices';
  choices.hidden = true;
  const nodeIndex = draftNodes.findIndex(item => item.id === node.id);
  const candidates = draftNodes.slice(0, nodeIndex).filter(item => ['hitbox', 'projectile'].includes(item.type));
  if (!candidates.length) {
    const empty = document.createElement('span');
    empty.textContent = 'Add a hitbox or projectile before this node.';
    choices.append(empty);
  }
  for (const candidate of candidates) {
    const label = document.createElement('label');
    label.className = getTimelineNodeClass(candidate);
    const input = document.createElement('input');
    input.type = multiple ? 'checkbox' : 'radio';
    input.name = 'node-target-' + node.id + '-' + property;
    input.value = String(candidate.id);
    input.checked = selected.has(candidate.id);
    input.addEventListener('change', () => {
      if (multiple) {
        const ids = new Set((node[property] ?? []).map(Number));
        if (input.checked) ids.add(candidate.id); else ids.delete(candidate.id);
        node[property] = [...ids];
      } else node[property] = input.checked ? candidate.id : null;
      renderHitboxTargetPicker(container, node, property, multiple);
      updateNodeMoveButtons();
    });
    label.append(input, document.createTextNode(getTimelineNodeLabel(candidate)));
    choices.append(label);
  }
  trigger.addEventListener('click', () => { choices.hidden = !choices.hidden; });
  container.append(trigger, choices);
  if (multiple && property === 'targetNodeIds' && node.targetOfHitbox && selected.size > 1) {
    node.targetAllRequired ??= true;
    node.targetRunAgain ??= false;
    const settings = document.createElement('div');
    settings.className = 'sub-property-options';
    const allRequiredLabel = document.createElement('label');
    allRequiredLabel.className = 'hitbox-anchored-setting';
    const allRequiredInput = document.createElement('input');
    allRequiredInput.type = 'checkbox';
    allRequiredInput.checked = node.targetAllRequired;
    allRequiredInput.addEventListener('change', () => {
      node.targetAllRequired = allRequiredInput.checked;
      if (node.targetAllRequired) node.targetRunAgain = false;
      renderHitboxTargetPicker(container, node, property, multiple);
    });
    allRequiredLabel.append(allRequiredInput, document.createTextNode('All Required'));
    settings.append(allRequiredLabel);
    if (!node.targetAllRequired) {
      const runAgainLabel = document.createElement('label');
      runAgainLabel.className = 'hitbox-anchored-setting';
      const runAgainInput = document.createElement('input');
      runAgainInput.type = 'checkbox';
      runAgainInput.checked = Boolean(node.targetRunAgain);
      runAgainInput.addEventListener('change', () => { node.targetRunAgain = runAgainInput.checked; });
      runAgainLabel.append(runAgainInput, document.createTextNode('Run Again'));
      settings.append(runAgainLabel);
    }
    container.append(settings);
  }
}

function updateNodeMoveButtons() {
  const index = draftNodes.findIndex(node => node.id === selectedNodeId);
  undoNodeButton.disabled = undoSnapshots.length === 0;
  moveNodeUpButton.disabled = index <= 0;
  moveNodeDownButton.disabled = index < 0 || index >= draftNodes.length - 1;
  duplicateNodeButton.disabled = index < 0;
  removeNodeButton.disabled = index < 0;
}

undoNodeButton.addEventListener('click', () => {
  const previous = undoSnapshots.pop();
  if (!previous) return;
  draftNodes = previous.map(node => ({ ...node }));
  selectedNodeId = draftNodes.some(node => node.id === selectedNodeId) ? selectedNodeId : null;
  renderTimeline();
  if (selectedNodeId !== null) selectTimelineNode(selectedNodeId);
});

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
  const duplicate = { ...draftNodes[index], id: nextNodeId++, destinations: draftNodes[index].destinations?.map(destination => ({ ...destination })) };
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
  skipNodeDetails.hidden = true;
  variableNodeDetails.hidden = true;
  stateNodeDetails.hidden = true;
  randomSkipNodeDetails.hidden = true;
  advancedProjectileNodeDetails.hidden = true;
  loopNodeDetails.hidden = true;
  commentNodeDetails.hidden = true;
  signalNodeDetails.hidden = true;
  }
}

function getTimelineNodeLabel(node) {
  if (node.type === 'loop') return `Loop [${node.loopAmount ?? 1}]`;
  if (node.type === 'advanced-projectile') return node.projectileId ? `Advanced Projectile [${node.projectileId}]` : 'Advanced Projectile';
  if (node.type === 'hitbox') return `Hitbox [${node.damage ?? 10}]`;
  if (node.type === 'projectile') return `Projectile [${node.damage ?? 10}]`;
  if (node.type === 'sound') return `Sound [${node.soundName || defaultHitboxSoundName}]`;
  if (node.type === 'visual') return `Visual [${node.visualType || 'Flash'}]`;
  if (node.type === 'velocity') return `Velocity [${node.speed ?? 300} / ${node.distance ?? 200}]`;
  if (node.type === 'skip') return 'Skip';
  if (node.type === 'random-skip') return 'Random Skip';
  if (node.type === 'signal') return `Signal [${node.value || 'ID'}]`;
  if (node.type === 'state') return `State [${node.stateType || 'IFrames'}]`;
  if (node.type === 'cancel') return 'Cancel';
  if (node.type === 'comment') return node.text ?? 'Comment';
  if (node.type === 'variable') return node.variable ? `Variable [${node.variable}]` : 'Variable';
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
  skipNodeDetails.hidden = node.type !== 'skip';
  variableNodeDetails.hidden = node.type !== 'variable';
  stateNodeDetails.hidden = node.type !== 'state';
  randomSkipNodeDetails.hidden = node.type !== 'random-skip';
  signalNodeDetails.hidden = node.type !== 'signal';
  advancedProjectileNodeDetails.hidden = node.type !== 'advanced-projectile';
  loopNodeDetails.hidden = node.type !== 'loop';
  commentNodeDetails.hidden = node.type !== 'comment';
  timelineList.querySelectorAll('.timeline-node').forEach(button => {
    button.setAttribute('aria-pressed', String(Number(button.dataset.nodeId) === selectedNodeId));
  });
  updateNodeMoveButtons();
  if (node.type === 'comment') {
    commentTextInput.value = node.text ?? '';
    commentTextInput.oninput = () => {
      node.text = commentTextInput.value;
      updateTimelineNodeLabel(node);
    };
    return;
  }
  if (node.type === 'loop') {
    loopAmountInput.value = node.loopAmount ?? 1;
    const updateLoopStartButton = () => {
      const startNode = draftNodes.find(item => item.id === node.loopStartNodeId);
      loopStartNodeButton.className = startNode ? `node-target-button ${getTimelineNodeClass(startNode)}` : 'node-target-button';
      loopStartNodeButton.textContent = startNode ? getTimelineNodeLabel(startNode) : 'Select node';
    };
    updateLoopStartButton();
    loopStartNodePicker.hidden = true;
    loopStartNodeButton.onclick = () => {
      loopStartNodePicker.replaceChildren();
      loopStartNodePicker.hidden = !loopStartNodePicker.hidden;
      if (loopStartNodePicker.hidden) return;
      const nodeIndex = draftNodes.findIndex(item => item.id === node.id);
      const candidates = draftNodes.slice(0, nodeIndex);
      if (!candidates.length) {
        const empty = document.createElement('span');
        empty.textContent = 'Add a node before this Loop.';
        loopStartNodePicker.append(empty);
      }
      for (const candidate of candidates) {
        const option = document.createElement('button');
        option.type = 'button';
        option.className = `node-target-button ${getTimelineNodeClass(candidate)}`;
        option.textContent = getTimelineNodeLabel(candidate);
        option.addEventListener('click', () => {
          node.loopStartNodeId = candidate.id;
          updateLoopStartButton();
          loopStartNodePicker.hidden = true;
        });
        loopStartNodePicker.append(option);
      }
    };
    loopAmountInput.oninput = () => {
      const amount = loopAmountInput.valueAsNumber;
      if (Number.isFinite(amount)) {
        node.loopAmount = Math.max(0, Math.min(1000, Math.floor(amount)));
        updateTimelineNodeLabel(node);
      }
    };
    return;
  }
  if (node.type === 'sound') {
    soundNodeFileInput.value = '';
    soundNodeFileName.textContent = node.soundName ?? defaultHitboxSoundName;
    soundNodeVolumeInput.value = node.volume ?? 100;
    soundNodeVolumeNumberInput.value = node.volume ?? 100;
    soundNodeVolumeValue.textContent = `${node.volume ?? 100}%`;
    soundNodeCancelInput.checked = Boolean(node.cancel);
    soundNodeStackInput.checked = Boolean(node.stack);
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
    const updateSoundVolume = value => {
      if (!Number.isFinite(value)) return;
      node.volume = Math.max(0, Math.min(200, value));
      soundNodeVolumeInput.value = node.volume;
      soundNodeVolumeNumberInput.value = node.volume;
      soundNodeVolumeValue.textContent = `${node.volume}%`;
      for (const sound of activeSoundsByNode.get(node) ?? []) sound.updateNodeVolume?.(node.volume / 100);
    };
    soundNodeVolumeInput.oninput = () => updateSoundVolume(Number(soundNodeVolumeInput.value));
    soundNodeVolumeNumberInput.oninput = () => updateSoundVolume(soundNodeVolumeNumberInput.valueAsNumber);
    soundNodeCancelInput.onchange = () => { node.cancel = soundNodeCancelInput.checked; };
    soundNodeStackInput.onchange = () => { node.stack = soundNodeStackInput.checked; };
    soundNodeStartInput.oninput = () => {
      const start = soundNodeStartInput.valueAsNumber;
      if (Number.isFinite(start)) node.start = Math.max(0, start);
    };
    soundNodeFadeInput.onchange = () => { node.fade = soundNodeFadeInput.checked; };
    return;
  }
  if (node.type === 'state') {
    stateNodeTypeInput.value = node.stateType ?? 'IFrames';
    stateNodeValueInput.value = node.value ?? '1';
    stateNodeTimeInput.value = node.time ?? 1;
    stateTargetOfHitboxInput.checked = Boolean(node.targetOfHitbox);
    stateTargetPicker.hidden = !node.targetOfHitbox;
    if (node.targetOfHitbox) renderHitboxTargetPicker(stateTargetPicker, node, 'targetNodeIds');
    stateNodeTypeInput.onchange = () => { node.stateType = stateNodeTypeInput.value; updateTimelineNodeLabel(node); };
    stateNodeValueInput.oninput = () => { node.value = stateNodeValueInput.value; };
    stateNodeTimeInput.oninput = () => { const value = stateNodeTimeInput.valueAsNumber; if (Number.isFinite(value)) node.time = Math.max(0, value); };
    stateTargetOfHitboxInput.onchange = () => {
      node.targetOfHitbox = stateTargetOfHitboxInput.checked;
      stateTargetPicker.hidden = !node.targetOfHitbox;
      if (node.targetOfHitbox) renderHitboxTargetPicker(stateTargetPicker, node, 'targetNodeIds');
    };
    return;
  }
  if (node.type === 'random-skip') {
    node.destinations ??= [];
    randomSkipAfterHitInput.checked = Boolean(node.afterHitLanded);
    randomSkipAfterHitPicker.hidden = !node.afterHitLanded;
    if (node.afterHitLanded) renderHitboxTargetPicker(randomSkipAfterHitPicker, node, 'afterHitNodeIds');
    randomSkipStackNodesInput.checked = Boolean(node.stackNodes);
    randomSkipVariableNameInput.value = node.ifVariableName ?? '';
    randomSkipVariableValueInput.value = node.ifVariableValue ?? '';
    randomSkipTargetOfHitboxInput.checked = Boolean(node.targetOfHitbox);
    randomSkipTargetPicker.hidden = !node.targetOfHitbox;
    if (node.targetOfHitbox) renderHitboxTargetPicker(randomSkipTargetPicker, node, 'targetNodeIds');
    randomSkipAfterHitInput.onchange = () => {
      node.afterHitLanded = randomSkipAfterHitInput.checked;
      randomSkipAfterHitPicker.hidden = !node.afterHitLanded;
      if (node.afterHitLanded) renderHitboxTargetPicker(randomSkipAfterHitPicker, node, 'afterHitNodeIds');
    };
    randomSkipStackNodesInput.onchange = () => { node.stackNodes = randomSkipStackNodesInput.checked; };
    randomSkipVariableNameInput.oninput = () => { node.ifVariableName = randomSkipVariableNameInput.value; };
    randomSkipVariableValueInput.oninput = () => { node.ifVariableValue = randomSkipVariableValueInput.value; };
    randomSkipTargetOfHitboxInput.onchange = () => {
      node.targetOfHitbox = randomSkipTargetOfHitboxInput.checked;
      randomSkipTargetPicker.hidden = !node.targetOfHitbox;
      if (node.targetOfHitbox) renderHitboxTargetPicker(randomSkipTargetPicker, node, 'targetNodeIds');
    };
    randomSkipDestinations.replaceChildren();
    const renderDestinations = () => {
      randomSkipDestinations.replaceChildren();
      node.destinations.forEach((destination, index) => {
        const row = document.createElement('div');
        row.className = 'random-skip-row';
        const pick = document.createElement('button');
        pick.type = 'button';
        const selectedNode = draftNodes.find(item => item.id === destination.nodeId);
        pick.className = selectedNode ? `node-target-button ${getTimelineNodeClass(selectedNode)}` : 'node-target-button';
        pick.textContent = selectedNode ? getTimelineNodeLabel(selectedNode) : 'Select node';
        const chance = document.createElement('input');
        chance.type = 'number'; chance.min = '0'; chance.max = '100'; chance.step = '1'; chance.value = destination.chance ?? ''; chance.placeholder = 'Chance'; chance.setAttribute('aria-label', 'Chance percentage');
        chance.addEventListener('input', () => { destination.chance = Math.max(0, Math.min(100, Number(chance.value) || 0)); });
        const remove = document.createElement('button');
        remove.type = 'button'; remove.className = 'move-node-order remove-node random-skip-remove'; remove.textContent = '−'; remove.setAttribute('aria-label', 'Remove destination'); remove.title = 'Remove destination';
        remove.addEventListener('click', () => { node.destinations.splice(index, 1); renderDestinations(); });
        const picker = document.createElement('div');
        picker.className = 'node-target-choices';
        picker.hidden = true;
        const candidates = draftNodes.filter(item => item.id !== node.id);
        candidates.forEach(candidate => {
          const option = document.createElement('button'); option.type = 'button'; option.className = `node-target-button ${getTimelineNodeClass(candidate)}`; option.textContent = getTimelineNodeLabel(candidate);
          option.addEventListener('click', () => { destination.nodeId = candidate.id; renderDestinations(); }); picker.append(option);
        });
        if (!candidates.length) { const empty = document.createElement('span'); empty.textContent = 'Add another node to select it.'; picker.append(empty); }
        pick.addEventListener('click', () => { picker.hidden = !picker.hidden; });
        row.append(pick, chance, remove, picker);
        randomSkipDestinations.append(row);
      });
    };
    renderDestinations();
    randomSkipAddButton.onclick = () => { node.destinations.push({ nodeId: null, chance: '' }); renderDestinations(); };
    return;
  }
  if (node.type === 'advanced-projectile') {
    Object.assign(node, {
      behavior: node.behavior ?? 'All',
      projectileId: node.projectileId ?? '',
      transfer: Boolean(node.transfer),
      transferReverse: Boolean(node.transferReverse),
      bounceDamage: node.bounceDamage ?? 10,
      boundaryDamage: node.boundaryDamage ?? 10,
      hitRate: node.hitRate ?? 1,
      damageDeduction: node.damageDeduction ?? 0,
      homing: node.homing ?? 0,
      orbitSpeed: node.orbitSpeed ?? 90,
      orbitStartingDirection: node.orbitStartingDirection ?? (categorySelect.value === 'guy-one' ? 90 : 270),
      orbitRandom: Boolean(node.orbitRandom),
      orbitTrackEnemy: Boolean(node.orbitTrackEnemy),
      orbitDistance: node.orbitDistance ?? 150,
      phaseThroughArena: Boolean(node.phaseThroughArena),
      changeSize: node.changeSize ?? 1,
      changeSpeed: node.changeSpeed ?? 420,
      changeDamage: node.changeDamage ?? 10,
      changeTime: node.changeTime ?? 4,
      changeBounces: node.changeBounces ?? 0,
    });
    advancedProjectileBehaviorInput.value = node.behavior;
    advancedProjectileIdInput.value = node.projectileId;
    advancedTransferInput.checked = node.transfer;
    advancedTransferProperties.hidden = !node.transfer;
    advancedTransferReverseInput.checked = node.transferReverse;
    advancedProjectileSticksInput.checked = Boolean(node.sticks);
    advancedProjectileStickSettings.hidden = !node.sticks;
    advancedProjectileBoundariesInput.checked = Boolean(node.boundaries);
    advancedProjectileBoundaryDamageSetting.hidden = !node.sticks || !node.boundaries;
    advancedProjectileBoundaryDamageInput.value = node.boundaryDamage;
    advancedProjectileEnemyInput.checked = Boolean(node.enemy);
    advancedProjectileBounceDamageSetting.hidden = !node.enemy;
    advancedProjectileBounceDamageInput.value = node.bounceDamage;
    advancedProjectileHitSelfInput.checked = Boolean(node.hitSelf);
    advancedProjectileSkipOnTouchInput.checked = Boolean(node.skipOnTouch);
    advancedProjectileCancelOnTouchInput.checked = Boolean(node.cancelOnTouch);
    advancedProjectileSkipSettings.hidden = !node.sticks || !node.skipOnTouch;
    configureFutureNodePicker(node, advancedProjectileSkipTargetButton, advancedProjectileSkipPicker);
    advancedPiercingInput.checked = Boolean(node.piercing);
    advancedPiercingProperties.hidden = !node.piercing;
    advancedHitRateInput.value = node.hitRate;
    advancedDamageDeductionInput.value = node.damageDeduction;
    advancedHomingEnabledInput.checked = Boolean(node.homingEnabled);
    advancedHomingProperties.hidden = !node.homingEnabled;
    advancedHomingInput.value = node.homing;
    advancedDisableAllInput.checked = Boolean(node.disableAll);
    advancedOrbitEnabledInput.checked = Boolean(node.orbitEnabled);
    advancedOrbitProperties.hidden = !node.orbitEnabled;
    advancedOrbitSpeedInput.value = node.orbitSpeed;
    updateAdvancedOrbitStartingDirectionDial(node.orbitStartingDirection);
    advancedOrbitRandomInput.checked = Boolean(node.orbitRandom);
    advancedOrbitTrackEnemyInput.checked = Boolean(node.orbitTrackEnemy);
    const updateAdvancedOrbitDirectionControls = () => {
      const random = advancedOrbitRandomInput.checked;
      const trackEnemy = advancedOrbitTrackEnemyInput.checked;
      advancedOrbitStartingDirectionSetting.hidden = random || trackEnemy;
      advancedOrbitRandomSetting.hidden = trackEnemy;
      advancedOrbitTrackEnemySetting.hidden = random;
    };
    updateAdvancedOrbitDirectionControls();
    advancedOrbitAlignedInput.checked = Boolean(node.orbitAligned);
    advancedOrbitCounterClockwiseInput.checked = Boolean(node.orbitCounterClockwise);
    advancedOrbitTargetHitboxInput.checked = Boolean(node.orbitTargetOfHitbox);
    advancedOrbitTargetPicker.hidden = !node.orbitTargetOfHitbox;
    if (node.orbitTargetOfHitbox) renderHitboxTargetPicker(advancedOrbitTargetPicker, node, 'orbitTargetNodeIds', false);
    advancedOrbitImmuneInput.checked = Boolean(node.orbitImmune);
    advancedOrbitDistanceInput.value = node.orbitDistance;
    advancedOrbitIndestructibleInput.checked = Boolean(node.orbitIndestructible);
    advancedOrbitIndestructibleOptions.hidden = !node.orbitIndestructible;
    advancedOrbitPhaseThroughInput.checked = Boolean(node.phaseThroughArena);
    advancedChangePropertyInput.checked = Boolean(node.changeEnabled);
    advancedChangeProperties.hidden = !node.changeEnabled;
    advancedChangeSizeInput.value = node.changeSize;
    advancedChangeSpeedInput.value = node.changeSpeed;
    advancedChangeDamageInput.value = node.changeDamage;
    advancedChangeTimeInput.value = node.changeTime;
    advancedChangeBouncesInput.value = node.changeBounces;
    advancedChangeImageInput.value = '';
    advancedChangeImageName.textContent = node.changeImageName || 'No image selected';
    advancedProjectileBehaviorInput.onchange = () => { node.behavior = advancedProjectileBehaviorInput.value; };
    advancedProjectileIdInput.oninput = () => { node.projectileId = advancedProjectileIdInput.value; updateTimelineNodeLabel(node); };
    advancedTransferInput.onchange = () => {
      node.transfer = advancedTransferInput.checked;
      advancedTransferProperties.hidden = !node.transfer;
    };
    advancedTransferReverseInput.onchange = () => { node.transferReverse = advancedTransferReverseInput.checked; };
    advancedProjectileSticksInput.onchange = () => {
      node.sticks = advancedProjectileSticksInput.checked;
      advancedProjectileStickSettings.hidden = !node.sticks;
      advancedProjectileBoundaryDamageSetting.hidden = !node.sticks || !node.boundaries;
      advancedProjectileSkipSettings.hidden = !node.sticks || !node.skipOnTouch;
    };
    advancedProjectileBoundariesInput.onchange = () => {
      node.boundaries = advancedProjectileBoundariesInput.checked;
      advancedProjectileBoundaryDamageSetting.hidden = !node.sticks || !node.boundaries;
    };
    advancedProjectileEnemyInput.onchange = () => {
      node.enemy = advancedProjectileEnemyInput.checked;
      advancedProjectileBounceDamageSetting.hidden = !node.enemy;
    };
    advancedProjectileBounceDamageInput.oninput = () => { const value = advancedProjectileBounceDamageInput.valueAsNumber; if (Number.isFinite(value)) node.bounceDamage = Math.max(0, Math.min(9999, value)); };
    advancedProjectileBoundaryDamageInput.oninput = () => { const value = advancedProjectileBoundaryDamageInput.valueAsNumber; if (Number.isFinite(value)) node.boundaryDamage = Math.max(0, Math.min(9999, value)); };
    advancedProjectileHitSelfInput.onchange = () => { node.hitSelf = advancedProjectileHitSelfInput.checked; };
    advancedProjectileSkipOnTouchInput.onchange = () => { node.skipOnTouch = advancedProjectileSkipOnTouchInput.checked; advancedProjectileSkipSettings.hidden = !node.sticks || !node.skipOnTouch; };
    advancedProjectileCancelOnTouchInput.onchange = () => { node.cancelOnTouch = advancedProjectileCancelOnTouchInput.checked; };
    advancedPiercingInput.onchange = () => { node.piercing = advancedPiercingInput.checked; advancedPiercingProperties.hidden = !node.piercing; };
    advancedHitRateInput.oninput = () => { const value = advancedHitRateInput.valueAsNumber; if (Number.isFinite(value)) node.hitRate = Math.max(0, value); };
    advancedDamageDeductionInput.oninput = () => { const value = advancedDamageDeductionInput.valueAsNumber; if (Number.isFinite(value)) node.damageDeduction = Math.max(0, value); };
    advancedHomingEnabledInput.onchange = () => { node.homingEnabled = advancedHomingEnabledInput.checked; advancedHomingProperties.hidden = !node.homingEnabled; };
    advancedHomingInput.oninput = () => { const value = advancedHomingInput.valueAsNumber; if (Number.isFinite(value)) node.homing = Math.max(0, Math.min(3600, value)); };
    advancedDisableAllInput.onchange = () => { node.disableAll = advancedDisableAllInput.checked; };
    advancedOrbitEnabledInput.onchange = () => { node.orbitEnabled = advancedOrbitEnabledInput.checked; advancedOrbitProperties.hidden = !node.orbitEnabled; };
    advancedOrbitSpeedInput.oninput = () => { const value = advancedOrbitSpeedInput.valueAsNumber; if (Number.isFinite(value)) node.orbitSpeed = value; };
    advancedOrbitRandomInput.onchange = () => {
      node.orbitRandom = advancedOrbitRandomInput.checked;
      if (node.orbitRandom) { node.orbitTrackEnemy = false; advancedOrbitTrackEnemyInput.checked = false; }
      updateAdvancedOrbitDirectionControls();
    };
    advancedOrbitTrackEnemyInput.onchange = () => {
      node.orbitTrackEnemy = advancedOrbitTrackEnemyInput.checked;
      if (node.orbitTrackEnemy) { node.orbitRandom = false; advancedOrbitRandomInput.checked = false; }
      updateAdvancedOrbitDirectionControls();
    };
    advancedOrbitStartingDirectionInput.oninput = () => {
      const value = advancedOrbitStartingDirectionInput.valueAsNumber;
      if (Number.isFinite(value)) {
        node.orbitStartingDirection = ((Math.round(value) % 360) + 360) % 360;
        updateAdvancedOrbitStartingDirectionDial(node.orbitStartingDirection);
      }
    };
    advancedOrbitAlignedInput.onchange = () => { node.orbitAligned = advancedOrbitAlignedInput.checked; };
    advancedOrbitCounterClockwiseInput.onchange = () => { node.orbitCounterClockwise = advancedOrbitCounterClockwiseInput.checked; };
    advancedOrbitTargetHitboxInput.onchange = () => { node.orbitTargetOfHitbox = advancedOrbitTargetHitboxInput.checked; advancedOrbitTargetPicker.hidden = !node.orbitTargetOfHitbox; if (node.orbitTargetOfHitbox) renderHitboxTargetPicker(advancedOrbitTargetPicker, node, 'orbitTargetNodeIds', false); };
    advancedOrbitImmuneInput.onchange = () => { node.orbitImmune = advancedOrbitImmuneInput.checked; };
    advancedOrbitDistanceInput.oninput = () => { const value = advancedOrbitDistanceInput.valueAsNumber; if (Number.isFinite(value)) node.orbitDistance = Math.max(0, value); };
    advancedOrbitIndestructibleInput.onchange = () => {
      node.orbitIndestructible = advancedOrbitIndestructibleInput.checked;
      advancedOrbitIndestructibleOptions.hidden = !node.orbitIndestructible;
    };
    advancedOrbitPhaseThroughInput.onchange = () => { node.phaseThroughArena = advancedOrbitPhaseThroughInput.checked; };
    advancedChangePropertyInput.onchange = () => { node.changeEnabled = advancedChangePropertyInput.checked; advancedChangeProperties.hidden = !node.changeEnabled; };
    advancedChangeSizeInput.oninput = () => { const value = advancedChangeSizeInput.valueAsNumber; if (Number.isFinite(value)) node.changeSize = Math.max(0, value); };
    advancedChangeSpeedInput.oninput = () => { const value = advancedChangeSpeedInput.valueAsNumber; if (Number.isFinite(value)) node.changeSpeed = Math.max(0, value); };
    advancedChangeDamageInput.oninput = () => { const value = advancedChangeDamageInput.valueAsNumber; if (Number.isFinite(value)) node.changeDamage = value; };
    advancedChangeTimeInput.oninput = () => { const value = advancedChangeTimeInput.valueAsNumber; if (Number.isFinite(value)) node.changeTime = Math.max(0, value); };
    advancedChangeBouncesInput.oninput = () => { const value = advancedChangeBouncesInput.valueAsNumber; if (Number.isFinite(value)) node.changeBounces = Math.max(0, Math.floor(value)); };
    advancedChangeImageInput.onchange = () => {
      const file = advancedChangeImageInput.files?.[0];
      if (!file) return;
      if (node.changeImageURL) URL.revokeObjectURL(node.changeImageURL);
      node.changeImageURL = URL.createObjectURL(file);
      node.changeImageName = file.name;
      advancedChangeImageName.textContent = file.name;
      const image = new Image();
      image.onload = () => { if (node.changeImageURL === image.src) { node.changeImage = image; node.changeImageBounds = getImageAlphaBounds(image); } };
      image.src = node.changeImageURL;
    };
    return;
  }
  if (node.type === 'variable') {
    variableValueInput.value = node.variable ?? '';
    variableDataValueInput.value = node.value ?? '';
    variableMathInput.checked = Boolean(node.math);
    variableGlobalInput.checked = Boolean(node.global);
    variableRemoveInput.checked = Boolean(node.remove);
    variableTargetOfHitboxInput.checked = Boolean(node.targetOfHitbox);
    variableTargetPicker.hidden = !node.targetOfHitbox;
    if (node.targetOfHitbox) renderHitboxTargetPicker(variableTargetPicker, node, 'targetNodeIds');
    variableValueInput.oninput = () => { node.variable = variableValueInput.value; updateTimelineNodeLabel(node); };
    variableDataValueInput.oninput = () => { node.value = variableDataValueInput.value; };
    variableMathInput.onchange = () => { node.math = variableMathInput.checked; };
    variableGlobalInput.onchange = () => { node.global = variableGlobalInput.checked; };
    variableRemoveInput.onchange = () => { node.remove = variableRemoveInput.checked; };
    variableTargetOfHitboxInput.onchange = () => {
      node.targetOfHitbox = variableTargetOfHitboxInput.checked;
      variableTargetPicker.hidden = !node.targetOfHitbox;
      if (node.targetOfHitbox) renderHitboxTargetPicker(variableTargetPicker, node, 'targetNodeIds');
    };
    return;
  }
  if (node.type === 'signal') {
    const selectedSignalTarget = draftNodes.find(item => item.id === node.signalTargetNodeId);
    signalNodeTargetButton.className = selectedSignalTarget ? `node-target-button ${getTimelineNodeClass(selectedSignalTarget)}` : 'node-target-button';
    signalNodeTargetButton.textContent = selectedSignalTarget ? getTimelineNodeLabel(selectedSignalTarget) : 'Select node';
    signalNodeTargetPicker.hidden = true;
    signalNodeValueInput.value = node.value ?? '';
    signalNodeReceiveInput.checked = Boolean(node.receive);
    signalNodeModeLabel.textContent = node.receive ? 'Receive' : 'Send';
    signalNodeTargetSetting.hidden = !node.receive;
    signalNodeTargetButton.onclick = () => {
      signalNodeTargetPicker.replaceChildren();
      signalNodeTargetPicker.hidden = !signalNodeTargetPicker.hidden;
      if (signalNodeTargetPicker.hidden) return;
      const candidates = draftNodes.filter(item => item.id !== node.id);
      if (!candidates.length) {
        const empty = document.createElement('span');
        empty.textContent = 'Add another node to select it.';
        signalNodeTargetPicker.append(empty);
      }
      for (const candidate of candidates) {
        const option = document.createElement('button');
        option.type = 'button';
        option.className = `node-target-button ${getTimelineNodeClass(candidate)}`;
        option.textContent = getTimelineNodeLabel(candidate);
        option.addEventListener('click', () => {
          node.signalTargetNodeId = candidate.id;
          signalNodeTargetButton.className = `node-target-button ${getTimelineNodeClass(candidate)}`;
          signalNodeTargetButton.textContent = getTimelineNodeLabel(candidate);
          signalNodeTargetPicker.hidden = true;
        });
        signalNodeTargetPicker.append(option);
      }
    };
    signalNodeValueInput.oninput = () => {
      node.value = signalNodeValueInput.value;
      updateTimelineNodeLabel(node);
    };
    signalNodeReceiveInput.onchange = () => {
      node.receive = signalNodeReceiveInput.checked;
      signalNodeModeLabel.textContent = node.receive ? 'Receive' : 'Send';
      signalNodeTargetSetting.hidden = !node.receive;
      updateTimelineNodeLabel(node);
    };
    return;
  }
  if (node.type === 'skip') {
    const selectedSkipNode = draftNodes.find(item => item.id === node.skipNodeId);
    skipNodeTargetButton.className = selectedSkipNode ? `node-target-button ${getTimelineNodeClass(selectedSkipNode)}` : 'node-target-button';
    skipNodeTargetButton.textContent = selectedSkipNode ? getTimelineNodeLabel(selectedSkipNode) : 'Select node';
    skipAfterHitLandedInput.checked = Boolean(node.afterHitLanded);
    skipTargetPicker.hidden = !node.afterHitLanded;
    if (node.afterHitLanded) renderHitboxTargetPicker(skipTargetPicker, node, 'afterHitNodeIds');
    skipVariableNameInput.value = node.ifVariableName ?? '';
    skipVariableValueInput.value = node.ifVariableValue ?? '';
    skipTargetOfHitboxInput.checked = Boolean(node.targetOfHitbox);
    skipTargetOfHitboxPicker.hidden = !node.targetOfHitbox;
    if (node.targetOfHitbox) renderHitboxTargetPicker(skipTargetOfHitboxPicker, node, 'targetNodeIds');
    skipNodeTargetPicker.hidden = true;
    skipNodeTargetButton.onclick = () => {
      skipNodeTargetPicker.replaceChildren();
      skipNodeTargetPicker.hidden = !skipNodeTargetPicker.hidden;
      if (skipNodeTargetPicker.hidden) return;
      const candidates = draftNodes.filter(item => item.id !== node.id);
      if (!candidates.length) {
        const empty = document.createElement('span');
        empty.textContent = 'Add another node to select it.';
        skipNodeTargetPicker.append(empty);
      }
      for (const candidate of candidates) {
        const option = document.createElement('button');
        option.type = 'button';
        option.className = `node-target-button ${getTimelineNodeClass(candidate)}`;
        option.textContent = getTimelineNodeLabel(candidate);
        option.addEventListener('click', () => {
          node.skipNodeId = candidate.id;
          skipNodeTargetButton.className = `node-target-button ${getTimelineNodeClass(candidate)}`;
          skipNodeTargetButton.textContent = getTimelineNodeLabel(candidate);
          skipNodeTargetPicker.hidden = true;
        });
        skipNodeTargetPicker.append(option);
      }
    };
    skipAfterHitLandedInput.onchange = () => {
      node.afterHitLanded = skipAfterHitLandedInput.checked;
      skipTargetPicker.hidden = !node.afterHitLanded;
      if (node.afterHitLanded) renderHitboxTargetPicker(skipTargetPicker, node, 'afterHitNodeIds');
    };
    skipVariableNameInput.oninput = () => { node.ifVariableName = skipVariableNameInput.value; };
    skipVariableValueInput.oninput = () => { node.ifVariableValue = skipVariableValueInput.value; };
    skipTargetOfHitboxInput.onchange = () => {
      node.targetOfHitbox = skipTargetOfHitboxInput.checked;
      skipTargetOfHitboxPicker.hidden = !node.targetOfHitbox;
      if (node.targetOfHitbox) renderHitboxTargetPicker(skipTargetOfHitboxPicker, node, 'targetNodeIds');
    };
    return;
  }
  if (node.type === 'cancel') {
    cancelNeverRepeatInput.checked = Boolean(node.neverRepeat);
    cancelMoveCooldownInput.value = node.moveCooldown ?? 1;
    populateCancelPatternOptions(node);
    cancelPatternMoveInput.onchange = () => { node.patternMoveId = cancelPatternMoveInput.value ? Number(cancelPatternMoveInput.value) : null; };
    cancelNeverRepeatInput.onchange = () => { node.neverRepeat = cancelNeverRepeatInput.checked; };
    cancelMoveCooldownInput.oninput = () => {
      const cooldown = cancelMoveCooldownInput.valueAsNumber;
      if (Number.isFinite(cooldown)) node.moveCooldown = Math.max(0, cooldown);
    };
    return;
  }
  if (node.type === 'wait') {
    waitNodeTimeInput.value = node.time ?? 1;
    waitNodeAfterDamageInput.checked = Boolean(node.afterHitLanded ?? node.afterDamage);
    waitTargetPicker.hidden = !waitNodeAfterDamageInput.checked;
    if (waitNodeAfterDamageInput.checked) renderHitboxTargetPicker(waitTargetPicker, node, 'afterHitNodeIds');
    waitNodeAfterDamageInput.onchange = () => {
      node.afterHitLanded = waitNodeAfterDamageInput.checked;
      waitTargetPicker.hidden = !node.afterHitLanded;
      if (node.afterHitLanded) renderHitboxTargetPicker(waitTargetPicker, node, 'afterHitNodeIds');
    };
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
      velocityRandomInput.checked = Boolean(node.random);
    velocityRotationSetting.hidden = Boolean(node.random || node.trackEnemy || node.trackOpposite);
    velocityTrackEnemySetting.hidden = Boolean(node.random);
    velocityTrackOppositeSetting.hidden = Boolean(node.random);
    velocityTrackEnemyInput.checked = Boolean(node.trackEnemy);
    velocityTrackOppositeInput.checked = Boolean(node.trackOpposite);
    velocityChangesDirectionInput.checked = Boolean(node.changesDirection);
    velocityTargetOfHitboxInput.checked = Boolean(node.targetOfHitbox);
    velocityTargetPicker.hidden = !node.targetOfHitbox;
    if (node.targetOfHitbox) renderHitboxTargetPicker(velocityTargetPicker, node, 'targetNodeIds');
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
    velocityRandomInput.onchange = () => {
      node.random = velocityRandomInput.checked;
      velocityRotationSetting.hidden = node.random || node.trackEnemy || node.trackOpposite;
      velocityTrackEnemySetting.hidden = node.random;
      velocityTrackOppositeSetting.hidden = node.random;
    };
    velocityTrackEnemyInput.onchange = () => {
      node.trackEnemy = velocityTrackEnemyInput.checked;
      velocityRotationSetting.hidden = node.random || node.trackEnemy || node.trackOpposite;
    };
    velocityTrackOppositeInput.onchange = () => {
      node.trackOpposite = velocityTrackOppositeInput.checked;
      velocityRotationSetting.hidden = node.random || node.trackEnemy || node.trackOpposite;
    };
    velocityChangesDirectionInput.onchange = () => { node.changesDirection = velocityChangesDirectionInput.checked; };
    velocityTargetOfHitboxInput.onchange = () => {
      node.targetOfHitbox = velocityTargetOfHitboxInput.checked;
      velocityTargetPicker.hidden = !node.targetOfHitbox;
      if (node.targetOfHitbox) renderHitboxTargetPicker(velocityTargetPicker, node, 'targetNodeIds');
    };
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
    node.soundURL = node.soundURL ?? defaultHitboxSound;
    node.soundName = node.soundName ?? defaultHitboxSoundName;
    projectileSoundInput.value = '';
    projectileSoundName.textContent = node.soundName;
    node.destroySoundURL = node.destroySoundURL ?? defaultHitboxSound;
    node.destroySoundName = node.destroySoundName ?? defaultHitboxSoundName;
    projectileDestroySoundInput.value = '';
    projectileDestroySoundName.textContent = node.destroySoundName;
    projectileDamageInput.value = node.damage ?? 10;
    projectileSpeedInput.value = node.speed ?? 420;
    projectileTimeInput.value = node.time ?? 4;
    projectileBounceCountInput.value = node.bounceCount ?? 0;
    projectileRotateSpeedInput.value = node.rotateSpeed ?? 0;
    updateProjectileRotationDial(node.rotation ?? (categorySelect.value === 'guy-one' ? 90 : 270));
    projectileRotateToDirectionInput.checked = node.rotateToDirection ?? false;
    projectileSizeInput.value = node.size ?? 1;
    projectileEndSizeInput.value = node.endSize ?? 1;
    projectileTracksInput.checked = node.tracks ?? true;
    projectileRandomInput.checked = Boolean(node.randomDirection);
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
      const randomDirection = projectileRandomInput.checked;
      if (randomDirection) projectileTracksInput.checked = false;
      const tracks = projectileTracksInput.checked;
      node.randomDirection = randomDirection;
      node.tracks = tracks;
      projectileRotationSetting.hidden = tracks || randomDirection;
      projectileRotationInput.disabled = randomDirection;
      projectileRotationDial.disabled = randomDirection;
      projectileTracksSetting.hidden = randomDirection;
      projectileTracksInput.disabled = randomDirection;
      projectileRandomSetting.hidden = tracks;
      projectileTrackProperties.hidden = !tracks;
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
      if (Number.isFinite(value)) node.size = Math.max(0, Math.min(10, value));
    };
    projectileEndSizeInput.oninput = () => {
      const value = projectileEndSizeInput.valueAsNumber;
      if (Number.isFinite(value)) node.endSize = Math.max(0, Math.min(10, value));
    };
    projectileTracksInput.onchange = updateProjectileTrackingProperties;
    projectileRandomInput.onchange = updateProjectileTrackingProperties;
    projectileRotateToDirectionInput.onchange = () => { node.rotateToDirection = projectileRotateToDirectionInput.checked; };
    projectileStacksInput.onchange = () => { node.stacks = projectileStacksInput.checked; };
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
    projectileDestroySoundInput.onchange = () => {
      const file = projectileDestroySoundInput.files?.[0];
      if (!file) return;
      if (node.destroySoundURL?.startsWith('blob:')) URL.revokeObjectURL(node.destroySoundURL);
      node.destroySoundURL = URL.createObjectURL(file);
      node.destroySoundName = file.name;
      projectileDestroySoundName.textContent = file.name;
    };
    projectileDestroySoundDefaultButton.onclick = () => {
      if (node.destroySoundURL?.startsWith('blob:')) URL.revokeObjectURL(node.destroySoundURL);
      node.destroySoundURL = defaultHitboxSound;
      node.destroySoundName = defaultHitboxSoundName;
      projectileDestroySoundName.textContent = defaultHitboxSoundName;
      projectileDestroySoundInput.value = '';
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
    spriteReplaceSizeInput.value = node.size ?? 1;
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
    const defaultOpacity = node.visualType === 'Flash' || !node.visualType ? 50 : 100;
    if (!(typeof node.opacity === 'string' && node.opacity.startsWith('$'))) node.opacity = Math.max(0, Math.min(100, Number(node.opacity ?? defaultOpacity)));
    visualOpacityInput.value = node.opacity ?? defaultOpacity;
    visualOpacityInput.max = '100';
    visualMaskInput.checked = Boolean(node.mask);
    visualTargetOfHitboxInput.checked = Boolean(node.targetOfHitbox);
    visualTargetPicker.hidden = !node.targetOfHitbox;
    if (node.targetOfHitbox) renderHitboxTargetPicker(visualTargetPicker, node, 'targetNodeIds');
    visualSpawnAtProjectileInput.value = node.spawnAtProjectileId ?? '';
    visualTargetOfHitboxSetting.hidden = isSpriteReplace || isOverlay;
    updateVisualPreview(node);
    visualNodeTypeInput.onchange = () => {
      node.visualType = visualNodeTypeInput.value || 'Flash';
      visualOpacityInput.max = '100';
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
      const raw = visualPositionXInput.value.trim();
      node.positionX = raw.startsWith('$') ? raw : Number(raw) || 0;
      updateVisualPreview(node);
    };
    visualPositionYInput.oninput = () => {
      const raw = visualPositionYInput.value.trim();
      node.positionY = raw.startsWith('$') ? raw : Number(raw) || 0;
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
        node.opacity = Math.max(0, Math.min(100, opacity));
        visualOpacityInput.value = node.opacity;
        updateVisualPreview(node);
      }
    };
    visualMaskInput.onchange = () => { node.mask = visualMaskInput.checked; };
    visualTargetOfHitboxInput.onchange = () => {
      node.targetOfHitbox = visualTargetOfHitboxInput.checked;
      visualTargetPicker.hidden = !node.targetOfHitbox;
      if (node.targetOfHitbox) renderHitboxTargetPicker(visualTargetPicker, node, 'targetNodeIds');
    };
    visualSpawnAtProjectileInput.oninput = () => { node.spawnAtProjectileId = visualSpawnAtProjectileInput.value; };
    spriteReplaceTimeInput.oninput = () => {
      const time = spriteReplaceTimeInput.valueAsNumber;
      if (Number.isFinite(time)) node.time = Math.max(0, time);
    };
    spriteReplaceSizeInput.oninput = () => {
      const size = spriteReplaceSizeInput.valueAsNumber;
      if (Number.isFinite(size)) node.size = Math.max(0, size);
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
  hitboxShapeInput.value = node.shape || 'Square';
  hitboxAnchoredInput.checked = Boolean(node.anchored);
  hitboxHitSelfInput.checked = Boolean(node.hitSelf);
  hitboxSizeXValue.value = node.width;
  hitboxSizeYValue.value = node.height;
  hitboxSizeXInput.value = Math.max(Number(hitboxSizeXInput.min), Math.min(Number(hitboxSizeXInput.max), node.width));
  hitboxSizeYInput.value = Math.max(Number(hitboxSizeYInput.min), Math.min(Number(hitboxSizeYInput.max), node.height));
  hitboxPositionXInput.value = node.x;
  hitboxPositionYInput.value = node.y;
  hitboxSoundInput.value = '';
  hitboxSoundName.textContent = node.soundName ?? defaultHitboxSoundName;
  hitboxDamageInput.oninput = () => {
    const raw = hitboxDamageInput.value.trim();
    const percentage = raw.endsWith('%') ? raw.slice(0, -1).trim() : null;
    node.damage = raw.startsWith('$') || (percentage !== null && Number.isFinite(Number(percentage)))
      ? raw
      : (Number.isFinite(Number(raw)) ? Number(raw) : 0);
    updateTimelineNodeLabel(node);
  };
  hitboxTimeInput.oninput = () => {
    const time = hitboxTimeInput.valueAsNumber;
    if (Number.isFinite(time)) node.time = Math.max(0, time);
  };
  hitboxShapeInput.onchange = () => {
    node.shape = hitboxShapeInput.value;
    updateHitboxPreview();
  };
  hitboxAnchoredInput.onchange = () => { node.anchored = hitboxAnchoredInput.checked; };
  hitboxHitSelfInput.onchange = () => { node.hitSelf = hitboxHitSelfInput.checked; };
  hitboxPositionXInput.oninput = () => {
    const raw = hitboxPositionXInput.value.trim();
    node.x = raw.startsWith('$') ? raw : Number(raw) || 0;
    updateHitboxPreview();
  };
  hitboxPositionYInput.oninput = () => {
    const raw = hitboxPositionYInput.value.trim();
    node.y = raw.startsWith('$') ? raw : Number(raw) || 0;
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

function updateAdvancedOrbitStartingDirectionDial(value) {
  const numericValue = Number(value);
  const degrees = Number.isFinite(numericValue) ? ((Math.round(numericValue) % 360) + 360) % 360 : 0;
  advancedOrbitStartingDirectionDial.style.setProperty('--dial-angle', `${degrees}deg`);
  advancedOrbitStartingDirectionDial.setAttribute('aria-valuenow', String(degrees));
  advancedOrbitStartingDirectionDial.setAttribute('aria-valuetext', `${degrees} degrees`);
  if (!(typeof value === 'string' && value.startsWith('$'))) advancedOrbitStartingDirectionInput.value = String(degrees);
}

function setAdvancedOrbitStartingDirectionFromPointer(event) {
  const bounds = advancedOrbitStartingDirectionDial.getBoundingClientRect();
  const dx = event.clientX - bounds.left - bounds.width / 2;
  const dy = event.clientY - bounds.top - bounds.height / 2;
  const degrees = (Math.atan2(dy, dx) * 180 / Math.PI + 90 + 360) % 360;
  const node = draftNodes.find(item => item.id === selectedNodeId);
  if (node?.type === 'advanced-projectile') {
    node.orbitStartingDirection = Math.round(degrees);
    updateAdvancedOrbitStartingDirectionDial(node.orbitStartingDirection);
  }
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

advancedOrbitStartingDirectionDial.addEventListener('pointerdown', event => {
  advancedOrbitStartingDirectionDial.setPointerCapture(event.pointerId);
  setAdvancedOrbitStartingDirectionFromPointer(event);
});
advancedOrbitStartingDirectionDial.addEventListener('pointermove', event => {
  if (advancedOrbitStartingDirectionDial.hasPointerCapture(event.pointerId)) setAdvancedOrbitStartingDirectionFromPointer(event);
});
advancedOrbitStartingDirectionDial.addEventListener('keydown', event => {
  const node = draftNodes.find(item => item.id === selectedNodeId);
  if (node?.type !== 'advanced-projectile') return;
  const step = event.shiftKey ? 15 : 1;
  if (event.key === 'ArrowRight' || event.key === 'ArrowUp') node.orbitStartingDirection += step;
  else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') node.orbitStartingDirection -= step;
  else if (event.key === 'Home') node.orbitStartingDirection = 0;
  else return;
  node.orbitStartingDirection = ((node.orbitStartingDirection % 360) + 360) % 360;
  updateAdvancedOrbitStartingDirectionDial(node.orbitStartingDirection);
  event.preventDefault();
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
  draftNodes.push({ id: nextNodeId++, type: 'hitbox', damage: 10, time: 0.05, shape: 'Square', anchored: false, hitSelf: false, x: 0, y: 0, rotation: 0, width: size, height: size, ...getDefaultSoundProperties() });
  selectedNodeId = null;
  hitboxNodeDetails.hidden = true;
  projectileNodeDetails.hidden = true;
  soundNodeDetails.hidden = true;
  waitNodeDetails.hidden = true;
  visualNodeDetails.hidden = true;
  velocityNodeDetails.hidden = true;
  cancelNodeDetails.hidden = true;
  skipNodeDetails.hidden = true;
  variableNodeDetails.hidden = true;
  stateNodeDetails.hidden = true;
  randomSkipNodeDetails.hidden = true;
  advancedProjectileNodeDetails.hidden = true;
  loopNodeDetails.hidden = true;
  commentNodeDetails.hidden = true;
  signalNodeDetails.hidden = true;
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
    rotateToDirection: false,
    stacks: false,
    size: 1,
    endSize: 1,
    tracks: true,
    randomDirection: false,
    piercing: false,
    hitRate: 1,
    damageDeduction: 0,
    angleOffset: 0,
    homing: 0,
    falloff: 0,
    ...getDefaultSoundProperties(),
    destroySoundURL: getDefaultSoundProperties().soundURL,
    destroySoundName: getDefaultSoundProperties().soundName,
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
  skipNodeDetails.hidden = true;
  variableNodeDetails.hidden = true;
  stateNodeDetails.hidden = true;
  randomSkipNodeDetails.hidden = true;
  advancedProjectileNodeDetails.hidden = true;
  loopNodeDetails.hidden = true;
  commentNodeDetails.hidden = true;
  signalNodeDetails.hidden = true;
  renderTimeline();
});
velocityNodeButton.addEventListener('click', () => {
  draftNodes.push({
    id: nextNodeId++,
    type: 'velocity',
    speed: 300,
    distance: 200,
    rotation: categorySelect.value === 'guy-one' ? 90 : 270,
    random: false,
    trackEnemy: false,
    trackOpposite: false,
    changesDirection: false,
    targetOfHitbox: false,
    targetNodeIds: [],
  });
  selectedNodeId = null;
  hitboxNodeDetails.hidden = true;
  projectileNodeDetails.hidden = true;
  soundNodeDetails.hidden = true;
  waitNodeDetails.hidden = true;
  visualNodeDetails.hidden = true;
  velocityNodeDetails.hidden = true;
  cancelNodeDetails.hidden = true;
  skipNodeDetails.hidden = true;
  variableNodeDetails.hidden = true;
  stateNodeDetails.hidden = true;
  randomSkipNodeDetails.hidden = true;
  advancedProjectileNodeDetails.hidden = true;
  loopNodeDetails.hidden = true;
  commentNodeDetails.hidden = true;
  signalNodeDetails.hidden = true;
  renderTimeline();
});
soundNodeButton.addEventListener('click', () => {
  draftNodes.push({ id: nextNodeId++, type: 'sound', ...getDefaultSoundProperties(), volume: 100, start: 0, fade: false, stack: false, cancel: false });
  selectedNodeId = null;
  hitboxNodeDetails.hidden = true;
  projectileNodeDetails.hidden = true;
  soundNodeDetails.hidden = true;
  waitNodeDetails.hidden = true;
  visualNodeDetails.hidden = true;
  velocityNodeDetails.hidden = true;
  cancelNodeDetails.hidden = true;
  skipNodeDetails.hidden = true;
  variableNodeDetails.hidden = true;
  stateNodeDetails.hidden = true;
  randomSkipNodeDetails.hidden = true;
  advancedProjectileNodeDetails.hidden = true;
  loopNodeDetails.hidden = true;
  commentNodeDetails.hidden = true;
  signalNodeDetails.hidden = true;
  renderTimeline();
});
stateNodeButton.addEventListener('click', () => {
  draftNodes.push({ id: nextNodeId++, type: 'state', stateType: 'IFrames', value: '1', time: 1, targetOfHitbox: false, targetNodeIds: [] });
  selectedNodeId = null;
  hitboxNodeDetails.hidden = true; projectileNodeDetails.hidden = true; soundNodeDetails.hidden = true; waitNodeDetails.hidden = true; visualNodeDetails.hidden = true; velocityNodeDetails.hidden = true; cancelNodeDetails.hidden = true; skipNodeDetails.hidden = true; variableNodeDetails.hidden = true; stateNodeDetails.hidden = true; randomSkipNodeDetails.hidden = true;
  advancedProjectileNodeDetails.hidden = true;
  loopNodeDetails.hidden = true;
  commentNodeDetails.hidden = true;
  signalNodeDetails.hidden = true;
  renderTimeline();
});
randomSkipNodeButton.addEventListener('click', () => {
  draftNodes.push({ id: nextNodeId++, type: 'random-skip', destinations: [], stackNodes: false });
  selectedNodeId = null;
  hitboxNodeDetails.hidden = true; projectileNodeDetails.hidden = true; soundNodeDetails.hidden = true; waitNodeDetails.hidden = true; visualNodeDetails.hidden = true; velocityNodeDetails.hidden = true; cancelNodeDetails.hidden = true; skipNodeDetails.hidden = true; variableNodeDetails.hidden = true; stateNodeDetails.hidden = true; randomSkipNodeDetails.hidden = true;
  advancedProjectileNodeDetails.hidden = true;
  loopNodeDetails.hidden = true;
  commentNodeDetails.hidden = true;
  signalNodeDetails.hidden = true;
  renderTimeline();
});
signalNodeButton.addEventListener('click', () => {
  draftNodes.push({ id: nextNodeId++, type: 'signal', signalTargetNodeId: null, value: '', receive: false });
  selectedNodeId = null;
  hitboxNodeDetails.hidden = true; projectileNodeDetails.hidden = true; soundNodeDetails.hidden = true; waitNodeDetails.hidden = true; visualNodeDetails.hidden = true; velocityNodeDetails.hidden = true; cancelNodeDetails.hidden = true; skipNodeDetails.hidden = true; variableNodeDetails.hidden = true; stateNodeDetails.hidden = true; randomSkipNodeDetails.hidden = true;
  advancedProjectileNodeDetails.hidden = true;
  loopNodeDetails.hidden = true;
  commentNodeDetails.hidden = true;
  signalNodeDetails.hidden = true;
  renderTimeline();
});
advancedProjectileNodeButton.addEventListener('click', () => {
  draftNodes.push({
    id: nextNodeId++, type: 'advanced-projectile', behavior: 'All', projectileId: '',
    transfer: false, transferReverse: false,
    sticks: false, boundaries: false, enemy: false, bounceDamage: 10,
    hitSelf: false, skipOnTouch: false, skipNodeId: null, phaseThroughArena: false,
  });
  selectedNodeId = null;
  hitboxNodeDetails.hidden = true;
  projectileNodeDetails.hidden = true;
  soundNodeDetails.hidden = true;
  waitNodeDetails.hidden = true;
  visualNodeDetails.hidden = true;
  velocityNodeDetails.hidden = true;
  cancelNodeDetails.hidden = true;
  skipNodeDetails.hidden = true;
  variableNodeDetails.hidden = true;
  stateNodeDetails.hidden = true;
  randomSkipNodeDetails.hidden = true;
  advancedProjectileNodeDetails.hidden = true;
  loopNodeDetails.hidden = true;
  commentNodeDetails.hidden = true;
  signalNodeDetails.hidden = true;
  renderTimeline();
});

variableNodeButton.addEventListener('click', () => {
  draftNodes.push({ id: nextNodeId++, type: 'variable', variable: '', value: '', math: false, remove: false, targetOfHitbox: false, targetNodeIds: [] });
  selectedNodeId = null;
  hitboxNodeDetails.hidden = true;
  projectileNodeDetails.hidden = true;
  soundNodeDetails.hidden = true;
  waitNodeDetails.hidden = true;
  visualNodeDetails.hidden = true;
  velocityNodeDetails.hidden = true;
  cancelNodeDetails.hidden = true;
  variableNodeDetails.hidden = true;
  stateNodeDetails.hidden = true;
  randomSkipNodeDetails.hidden = true;
  advancedProjectileNodeDetails.hidden = true;
  loopNodeDetails.hidden = true;
  commentNodeDetails.hidden = true;
  signalNodeDetails.hidden = true;
  renderTimeline();
});
skipNodeButton.addEventListener('click', () => {
  draftNodes.push({ id: nextNodeId++, type: 'skip', skipNodeId: null, afterHitLanded: false, afterHitNodeIds: [], ifVariableName: '', ifVariableValue: '' });
  selectedNodeId = null;
  hitboxNodeDetails.hidden = true;
  projectileNodeDetails.hidden = true;
  soundNodeDetails.hidden = true;
  waitNodeDetails.hidden = true;
  visualNodeDetails.hidden = true;
  velocityNodeDetails.hidden = true;
  cancelNodeDetails.hidden = true;
  skipNodeDetails.hidden = true;
  variableNodeDetails.hidden = true;
  stateNodeDetails.hidden = true;
  randomSkipNodeDetails.hidden = true;
  advancedProjectileNodeDetails.hidden = true;
  loopNodeDetails.hidden = true;
  commentNodeDetails.hidden = true;
  signalNodeDetails.hidden = true;
  renderTimeline();
});

commentNodeButton.addEventListener('click', () => {
  draftNodes.push({ id: nextNodeId++, type: 'comment', text: 'Comment' });
  selectedNodeId = null;
  hitboxNodeDetails.hidden = true;
  projectileNodeDetails.hidden = true;
  soundNodeDetails.hidden = true;
  waitNodeDetails.hidden = true;
  loopNodeDetails.hidden = true;
  commentNodeDetails.hidden = true;
  signalNodeDetails.hidden = true;
  visualNodeDetails.hidden = true;
  velocityNodeDetails.hidden = true;
  cancelNodeDetails.hidden = true;
  skipNodeDetails.hidden = true;
  variableNodeDetails.hidden = true;
  stateNodeDetails.hidden = true;
  randomSkipNodeDetails.hidden = true;
  advancedProjectileNodeDetails.hidden = true;
  renderTimeline();
});

cancelNodeButton.addEventListener('click', () => {
  draftNodes.push({ id: nextNodeId++, type: 'cancel', patternMoveId: null, neverRepeat: false, moveCooldown: 1 });
  selectedNodeId = null;
  hitboxNodeDetails.hidden = true;
  projectileNodeDetails.hidden = true;
  soundNodeDetails.hidden = true;
  waitNodeDetails.hidden = true;
  visualNodeDetails.hidden = true;
  velocityNodeDetails.hidden = true;
  cancelNodeDetails.hidden = true;
  skipNodeDetails.hidden = true;
  variableNodeDetails.hidden = true;
  stateNodeDetails.hidden = true;
  randomSkipNodeDetails.hidden = true;
  advancedProjectileNodeDetails.hidden = true;
  loopNodeDetails.hidden = true;
  commentNodeDetails.hidden = true;
  signalNodeDetails.hidden = true;
  renderTimeline();
});
loopNodeButton.addEventListener('click', () => {
  draftNodes.push({ id: nextNodeId++, type: 'loop', loopStartNodeId: null, loopAmount: 1 });
  selectedNodeId = null;
  hitboxNodeDetails.hidden = true;
  projectileNodeDetails.hidden = true;
  soundNodeDetails.hidden = true;
  waitNodeDetails.hidden = true;
  loopNodeDetails.hidden = true;
  commentNodeDetails.hidden = true;
  signalNodeDetails.hidden = true;
  visualNodeDetails.hidden = true;
  velocityNodeDetails.hidden = true;
  cancelNodeDetails.hidden = true;
  skipNodeDetails.hidden = true;
  variableNodeDetails.hidden = true;
  stateNodeDetails.hidden = true;
  randomSkipNodeDetails.hidden = true;
  advancedProjectileNodeDetails.hidden = true;
  renderTimeline();
});

waitNodeButton.addEventListener('click', () => {
  draftNodes.push({ id: nextNodeId++, type: 'wait', time: 1, afterHitLanded: false, afterHitNodeIds: [] });
  selectedNodeId = null;
  hitboxNodeDetails.hidden = true;
  projectileNodeDetails.hidden = true;
  soundNodeDetails.hidden = true;
  waitNodeDetails.hidden = true;
  visualNodeDetails.hidden = true;
  velocityNodeDetails.hidden = true;
  cancelNodeDetails.hidden = true;
  skipNodeDetails.hidden = true;
  variableNodeDetails.hidden = true;
  stateNodeDetails.hidden = true;
  randomSkipNodeDetails.hidden = true;
  advancedProjectileNodeDetails.hidden = true;
  loopNodeDetails.hidden = true;
  commentNodeDetails.hidden = true;
  signalNodeDetails.hidden = true;
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
  skipNodeDetails.hidden = true;
  variableNodeDetails.hidden = true;
  stateNodeDetails.hidden = true;
  randomSkipNodeDetails.hidden = true;
  advancedProjectileNodeDetails.hidden = true;
  loopNodeDetails.hidden = true;
  commentNodeDetails.hidden = true;
  signalNodeDetails.hidden = true;
  renderTimeline();
});
categorySelect.addEventListener('change', updateHitboxPreview);
categorySelect.addEventListener('change', () => updateVisualPreview());


function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

async function assetToDataUrl(url) {
  if (!url || url.startsWith('data:') || url.startsWith('./') || url.startsWith('/')) return url;
  try {
    return await blobToDataUrl(await (await fetch(url)).blob());
  } catch {
    return url;
  }
}

async function imageToDataUrl(image) {
  if (!image) return null;
  if (image.src?.startsWith('data:')) return image.src;
  if (image.originalMimeType === 'image/gif') {
    try { return await blobToDataUrl(await (await fetch(image.src)).blob()); } catch {}
  }
  try {
    const copy = document.createElement('canvas');
    copy.width = image.naturalWidth;
    copy.height = image.naturalHeight;
    copy.getContext('2d').drawImage(image, 0, 0);
    return copy.toDataURL('image/png');
  } catch {
    return assetToDataUrl(image.src);
  }
}

function imageFromDataUrl(source) {
  if (!source) return Promise.resolve(null);
  return new Promise(resolve => {
    const image = new Image();
    image.onload = async () => {
      image.imageBounds = getImageAlphaBounds(image);
      image.originalMimeType = source.match(/^data:([^;,]+)/)?.[1] || '';
      if (image.originalMimeType === 'image/gif') {
        try { image.animatedFrames = await decodeAnimatedGif(await (await fetch(source)).blob()); } catch { image.animatedFrames = []; }
      }
      image.animationStartedAt = performance.now();
      resolve(image);
    };
    image.onerror = () => resolve(null);
    image.src = source;
  });
}

async function exportSelectedGuy() {
  const guyId = categorySelect.value;
  const square = getSelectedGuySquare();
  const moves = await Promise.all(movesByGuy[guyId].map(async move => ({
    ...move,
    nodes: await Promise.all(move.nodes.map(async sourceNode => {
      const node = { ...sourceNode };
      if (node.image) node.image = await imageToDataUrl(node.image);
      delete node.imageBounds;
      if (node.changeImage) node.changeImage = typeof node.changeImage === 'string' ? node.changeImage : await imageToDataUrl(node.changeImage);
      delete node.changeImageURL;
      delete node.changeImageBounds;
      if (node.soundURL) node.soundURL = await assetToDataUrl(node.soundURL);
      if (node.destroySoundURL) node.destroySoundURL = await assetToDataUrl(node.destroySoundURL);
      return node;
    })),
  })));
  const data = {
    format: 'guy-maker',
    version: 1,
    guy: {
      maxHealth: square.maxHealth,
      speed: square.defaultSpeed,
      size: square.defaultSize,
      rotateSpeed: square.rotateSpeed,
      cornerPadding: square.cornerPadding,
      hitboxMatchesPng: square.hitboxMatchesPng,
      flipForEnemyEyeContact: square.flipForEnemyEyeContact,
      reverseEyeContactFlip: square.reverseEyeContactFlip,
      eyeContactFlipAffectsHitbox: square.eyeContactFlipAffectsHitbox,
      image: await imageToDataUrl(square.image),
      winImage: await imageToDataUrl(square.winImage),
      stackMoves: moveStackSettings[guyId].stackMoves,
      selfStack: moveStackSettings[guyId].selfStack,
      moves,
    },
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = guyId + '.txt';
  link.click();
  URL.revokeObjectURL(url);
}

async function importSelectedGuy(file) {
  const parsed = JSON.parse(await file.text());
  if (parsed.format !== 'guy-maker' || !parsed.guy) throw new Error('This file is not Guy Maker data.');
  const guyId = categorySelect.value;
  const square = getSelectedGuySquare();
  const data = parsed.guy;
  square.maxHealth = square.defaultHealth = square.health = Number(data.maxHealth) || maxHealth;
  square.defaultSpeed = square.speed = Number(data.speed) || 246;
  square.defaultSize = square.size = Number(data.size) || 100;
  square.rotateSpeed = Number(data.rotateSpeed) || 0;
  square.cornerPadding = Math.max(0, Math.min(120, Number(data.cornerPadding) || 0));
  square.hitboxMatchesPng = Boolean(data.hitboxMatchesPng);
  square.flipForEnemyEyeContact = data.flipForEnemyEyeContact !== false;
  square.reverseEyeContactFlip = Boolean(data.reverseEyeContactFlip);
  square.eyeContactFlipAffectsHitbox = Boolean(data.eyeContactFlipAffectsHitbox);
  square.startPositionX = null;
  square.startPositionY = null;
  square.vx = square.startDirectionX * square.speed;
  square.vy = square.startDirectionY * square.speed;
  const guyIndex = guyId === 'guy-one' ? 'guy-one' : 'guy-two';
  const spriteSettings = document.querySelector('#' + guyIndex);
  const idleImage = await imageFromDataUrl(data.image);
  const winImage = await imageFromDataUrl(data.winImage);
  square.image = idleImage;
  square.imageBounds = idleImage?.imageBounds ?? null;
  square.winImage = winImage;
  square.winImageBounds = winImage?.imageBounds ?? null;
  const idlePreview = spriteSettings.querySelector('.sprite-upload-preview');
  const winPreview = spriteSettings.querySelector('.sprite-setting-title + .sprite-upload-row .sprite-upload-preview');
  if (idleImage) { idlePreview.src = idleImage.src; idlePreview.hidden = false; } else { idlePreview.removeAttribute('src'); idlePreview.hidden = true; }
  if (winImage) { winPreview.src = winImage.src; winPreview.hidden = false; } else { winPreview.removeAttribute('src'); winPreview.hidden = true; }
  spriteSettings.querySelector('#' + guyId + '-hitbox').checked = square.hitboxMatchesPng;
  spriteSettings.querySelector('#' + guyId + '-rotate-speed').value = square.rotateSpeed;
  spriteSettings.querySelector('#' + guyId + '-corner-padding').value = square.cornerPadding;
  spriteSettings.querySelector('#' + guyId + '-eye-contact').checked = square.flipForEnemyEyeContact;
  spriteSettings.querySelector('#' + guyId + '-eye-contact-reverse').checked = square.reverseEyeContactFlip;
  spriteSettings.querySelector('#' + guyId + '-eye-contact-hitbox').checked = square.eyeContactFlipAffectsHitbox;
  spriteSettings.querySelector('#' + guyId + '-eye-contact').dispatchEvent(new Event('change', { bubbles: true }));
  const statsPanel = document.querySelector('#' + guyId + '-stats');
  statsPanel.querySelector('[data-stat="health"]').value = square.maxHealth;
  statsPanel.querySelector('[data-stat="speed"]').value = square.defaultSpeed;
  statsPanel.querySelector('[data-stat="size"]').value = square.defaultSize;
  moveStackSettings[guyId] = { stackMoves: data.stackMoves !== false, selfStack: Boolean(data.selfStack) };
  globalVariablesByGuy[guyId].clear();
  const loadedMoves = data.moves ?? [];
  const nodeIds = new Map();
  for (const move of loadedMoves) for (const node of move.nodes ?? []) nodeIds.set(node.id, nextNodeId++);
  movesByGuy[guyId] = await Promise.all(loadedMoves.map(async move => ({
    ...move,
    id: nextMoveId++,
    nodes: await Promise.all((move.nodes ?? []).map(async sourceNode => {
      const node = { ...sourceNode, id: nodeIds.get(sourceNode.id) ?? nextNodeId++ };
      for (const field of ['targetNodeIds', 'afterHitNodeIds']) node[field] = (node[field] ?? []).map(id => nodeIds.get(id) ?? id);
      if (node.skipNodeId != null) node.skipNodeId = nodeIds.get(node.skipNodeId) ?? null;
      if (node.loopStartNodeId != null) node.loopStartNodeId = nodeIds.get(node.loopStartNodeId) ?? null;
      if (node.signalTargetNodeId != null) node.signalTargetNodeId = nodeIds.get(node.signalTargetNodeId) ?? null;
      if (node.destinations) node.destinations = node.destinations.map(destination => ({ ...destination, nodeId: nodeIds.get(destination.nodeId) ?? null }));
      if (typeof node.image === 'string') {
        node.image = await imageFromDataUrl(node.image);
        node.imageBounds = node.image?.imageBounds ?? null;
      }
      if (typeof node.changeImage === 'string') {
        node.changeImage = await imageFromDataUrl(node.changeImage);
        node.changeImageBounds = node.changeImage?.imageBounds ?? null;
      }
      return node;
    })),
  })));
  nextMoveId = Math.max(nextMoveId, ...movesByGuy[guyId].map(move => move.id + 1));
  renderMoves();
  updateHitboxPreview();
}

guyExportButton.addEventListener('click', () => exportSelectedGuy().catch(error => console.error('Could not export guy data:', error)));
guyImportButton.addEventListener('click', () => guyImportFile.click());
guyImportFile.addEventListener('change', async () => {
  const file = guyImportFile.files?.[0];
  if (!file) return;
  try {
    await importSelectedGuy(file);
  } catch (error) {
    console.error('Could not import guy data:', error);
  } finally {
    guyImportFile.value = '';
  }
});

function populateCancelPatternOptions(node) {
  const moves = movesByGuy[categorySelect.value] ?? [];
  const selectedMoveId = node.patternMoveId == null ? '' : String(node.patternMoveId);
  cancelPatternMoveInput.replaceChildren(new Option('None', ''));
  for (const move of moves) {
    if (move.id === editingMoveId) continue;
    const option = new Option(move.name || `Move ${move.id}`, String(move.id));
    cancelPatternMoveInput.add(option);
  }
  cancelPatternMoveInput.value = [...cancelPatternMoveInput.options].some(option => option.value === selectedMoveId) ? selectedMoveId : '';
}

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

    const copyButton = document.createElement('button');
    copyButton.type = 'button';
    copyButton.textContent = 'Copy';
    copyButton.setAttribute('aria-label', `Duplicate ${move.name}`);
    copyButton.addEventListener('click', () => {
      const sourceNodes = move.nodes ?? [];
      const nodeIds = new Map(sourceNodes.map(node => [node.id, nextNodeId++]));
      const nodes = sourceNodes.map(node => {
        const duplicate = {
          ...node,
          id: nodeIds.get(node.id),
          imageBounds: node.imageBounds ? { ...node.imageBounds } : node.imageBounds,
          targetNodeIds: node.targetNodeIds?.map(id => nodeIds.get(id) ?? id),
          afterHitNodeIds: node.afterHitNodeIds?.map(id => nodeIds.get(id) ?? id),
          skipNodeId: node.skipNodeId == null ? null : (nodeIds.get(node.skipNodeId) ?? null),
          loopStartNodeId: node.loopStartNodeId == null ? null : (nodeIds.get(node.loopStartNodeId) ?? null),
          signalTargetNodeId: node.signalTargetNodeId == null ? null : (nodeIds.get(node.signalTargetNodeId) ?? null),
          destinations: node.destinations?.map(destination => ({ ...destination, nodeId: nodeIds.get(destination.nodeId) ?? null })),
        };
        return duplicate;
      });
      movesByGuy[categorySelect.value].push({
        ...move,
        id: nextMoveId++,
        name: `${move.name} Copy`,
        targetSides: [...(move.targetSides ?? [])],
        approachSides: [...(move.approachSides ?? [])],
        damageFromSides: [...(move.damageFromSides ?? [])],
        directionSides: [...(move.directionSides ?? [])],
        nodes,
      });
      renderMoves();
    });

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = 'Delete';
    deleteButton.setAttribute('aria-label', `Delete ${move.name}`);
    deleteButton.addEventListener('click', () => {
      movesByGuy[categorySelect.value] = movesByGuy[categorySelect.value].filter(item => item.id !== move.id);
      renderMoves();
    });

    card.append(nameInput, editButton, copyButton, deleteButton);
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
  directionSidePicker.querySelectorAll('input').forEach(input => {
    input.checked = (move?.directionSides ?? []).includes(input.value);
  });
  directionModeSelect.value = move?.directionMode ?? 'side';
  directionFrequencySelect.value = move?.directionFrequency ?? 'once';
  updateDirectionSidePicker();
  metronomeDelayInput.value = move?.delay ?? 0;
  metronomeIntervalInput.value = move?.interval ?? 1;
  signalConditionIdInput.value = move?.signalId ?? '';
  hitboxNodeDetails.hidden = true;
  projectileNodeDetails.hidden = true;
  soundNodeDetails.hidden = true;
  waitNodeDetails.hidden = true;
  visualNodeDetails.hidden = true;
  velocityNodeDetails.hidden = true;
  cancelNodeDetails.hidden = true;
  skipNodeDetails.hidden = true;
  variableNodeDetails.hidden = true;
  stateNodeDetails.hidden = true;
  randomSkipNodeDetails.hidden = true;
  advancedProjectileNodeDetails.hidden = true;
  loopNodeDetails.hidden = true;
  commentNodeDetails.hidden = true;
  signalNodeDetails.hidden = true;
  updateMoveCondition();
}

function openMoveEditor(move = null, returnFocus = addMoveButton) {
  editingMoveId = move?.id ?? null;
  moveReturnFocus = returnFocus;
  draftNodes = (move?.nodes ?? []).map(cloneMoveNode);
  undoSnapshots = [];
  previousUndoSnapshot = draftFingerprint();
  selectedNodeId = null;
  renderTimeline();
  moveEditorTitle.textContent = move ? 'Edit Move' : 'New Move';
  finishMoveButton.textContent = move ? 'Save Move' : 'Finish';
  applyMoveToEditor(move);
  moveModal.hidden = false;
  closeMoveModalButton.focus();
}

function cloneMoveNode(node) {
  return {
    ...node,
    targetNodeIds: node.targetNodeIds ? [...node.targetNodeIds] : undefined,
    afterHitNodeIds: node.afterHitNodeIds ? [...node.afterHitNodeIds] : undefined,
    destinations: node.destinations?.map(destination => ({ ...destination })),
    config: node.config ? { ...node.config, orbit: node.config.orbit ? { ...node.config.orbit } : undefined } : undefined,
  };
}

function saveDraftMove() {
  const moves = movesByGuy[categorySelect.value];
  const existingMove = moves.find(move => move.id === editingMoveId);
  const moveData = {
    id: editingMoveId ?? nextMoveId++,
    name: existingMove?.name ?? `Move ${moves.length + 1}`,
    condition: moveConditionSelect.value,
    targetSides: [...targetSidePicker.querySelectorAll('input:checked')].map(input => input.value),
    approachSides: [...approachSidePicker.querySelectorAll('input:checked')].map(input => input.value),
    damageFromSides: [...damageFromPicker.querySelectorAll('input:checked')].map(input => input.value),
    directionSides: [...directionSidePicker.querySelectorAll('input:checked')].map(input => input.value),
    directionMode: directionModeSelect.value,
    directionFrequency: directionFrequencySelect.value,
    signalId: signalConditionIdInput.value.trim(),
    delay: Number(metronomeDelayInput.value) || 0,
    interval: Number(metronomeIntervalInput.value) || 1,
    nodes: draftNodes.map(cloneMoveNode),
  };
  if (existingMove) Object.assign(existingMove, moveData);
  else moves.push(moveData);
  editingMoveId = moveData.id;
  renderMoves();
}

function closeMoveModal(save = moveUiSettings.alwaysSaveMoves) {
  if (save) saveDraftMove();
  moveSettingsPanel.hidden = true;
  moveSettingsButton.setAttribute('aria-expanded', 'false');
  moveModal.hidden = true;
  moveReturnFocus?.focus();
}

addMoveButton.addEventListener('click', () => {
  openMoveEditor();
});

closeMoveModalButton.addEventListener('click', () => closeMoveModal());
finishMoveButton.addEventListener('click', () => {
  saveDraftMove();
  closeMoveModal(false);
});

moveNodeUpButton.addEventListener('click', () => moveSelectedNode(-1));
moveNodeDownButton.addEventListener('click', () => moveSelectedNode(1));
duplicateNodeButton.addEventListener('click', duplicateSelectedNode);
removeNodeButton.addEventListener('click', removeSelectedNode);
previewMoveButton.addEventListener('click', previewDraftMove);

function evaluateMathExpression(value) {
  const expression = String(value ?? '').trim();
  if (!/^[0-9.+\-x:\s]+$/.test(expression)) return value;
  const tokens = expression.match(/[+\-x:]|(?:\d+\.?\d*|\.\d+)/g) ?? [];
  if (!tokens.length || tokens.join('') !== expression.replace(/\s+/g, '')) return value;
  const values = [];
  const operators = [];
  let index = 0;
  if (tokens[0] === '+' || tokens[0] === '-') {
    values.push(0);
    operators.push(tokens[0]);
    index++;
  }
  let expectValue = true;
  for (; index < tokens.length; index++) {
    const token = tokens[index];
    if (expectValue) {
      const number = Number(token);
      if (!Number.isFinite(number)) return value;
      values.push(number);
    } else if (['+', '-', 'x', ':'].includes(token)) operators.push(token);
    else return value;
    expectValue = !expectValue;
  }
  if (expectValue || values.length !== operators.length + 1) return value;
  for (let i = 0; i < operators.length;) {
    if (operators[i] === 'x' || operators[i] === ':') {
      values[i] = operators[i] === 'x' ? values[i] * values[i + 1] : values[i] / values[i + 1];
      values.splice(i + 1, 1);
      operators.splice(i, 1);
    } else i++;
  }
  let result = values[0];
  operators.forEach((operator, i) => { result = operator === '+' ? result + values[i + 1] : result - values[i + 1]; });
  return Number.isFinite(result) ? result : value;
}

function resolveVariableReferences(value, variables) {
  if (typeof value !== 'string' || !value.includes('$')) return value;
  return value.replace(/\$([a-zA-Z0-9_-]+)/g, (match, name) => {
    const variable = variables.get(name);
    if (!variable) return match;
    const content = variable.math ? evaluateMathExpression(variable.value) : variable.value;
    return String(content ?? '');
  });
}

function addDamagePopup(targetIndex, x, y, amount) {
  if (!Number.isFinite(amount) || amount === 0) return;
  const existing = damagePopups.find(popup => popup.targetIndex === targetIndex && popup.age < popup.duration);
  if (existing) {
    existing.amount += amount;
    existing.age = 0;
    existing.x = x;
    existing.y = y;
    return;
  }
  damagePopups.push({ targetIndex, x, y, amount, age: 0, duration: 0.9 });
}

function getGuyId(index) {
  return index === 1 ? 'guy-one' : 'guy-two';
}

function combatStateActive(square, type) {
  return (square.stateEffects?.[type]?.until ?? 0) > simulationTime;
}

function applyCombatState(square, node) {
  if (!square) return;
  square.stateEffects ??= {};
  const type = node.stateType || 'IFrames';
  const duration = Math.max(0, Number(node.time) || 0);
  const value = Number(node.value);
  square.stateEffects[type] = { until: simulationTime + duration, value };
  if (type === 'Speed' && Number.isFinite(value)) {
    const current = Math.hypot(square.vx, square.vy);
    square.speed = Math.max(0, value);
    if (current > 0) { square.vx = square.vx / current * square.speed; square.vy = square.vy / current * square.speed; }
  } else if (type === 'Size' && Number.isFinite(value)) {
    square.size = Math.max(1, value);
  } else if (type === 'MaxHealth' && Number.isFinite(value)) {
    square.maxHealth = Math.max(1, value);
    square.health = Math.min(square.health, square.maxHealth);
  }
}

function updateTimedCombatStates() {
  for (const square of squares) {
    for (const [type, effect] of Object.entries(square.stateEffects ?? {})) {
      if (effect.until > simulationTime) continue;
      delete square.stateEffects[type];
      if (type === 'Speed') {
        const current = Math.hypot(square.vx, square.vy);
        square.speed = square.defaultSpeed;
        if (current > 0) { square.vx = square.vx / current * square.speed; square.vy = square.vy / current * square.speed; }
        for (const movement of activeVelocityMoves) {
          if (movement.squareIndex !== squares.indexOf(square)) continue;
          movement.previousSpeed = square.defaultSpeed;
          const previousDirection = Math.hypot(movement.previousVx, movement.previousVy) > 0
            ? Math.atan2(movement.previousVy, movement.previousVx)
            : movement.previousDirection;
          movement.previousVx = Math.cos(previousDirection) * square.defaultSpeed;
          movement.previousVy = Math.sin(previousDirection) * square.defaultSpeed;
        }
      } else if (type === 'Size') {
        square.size = square.defaultSize;
      } else if (type === 'MaxHealth') {
        square.maxHealth = square.defaultHealth;
        square.health = Math.min(square.health, square.maxHealth);
      }
    }
  }
}

async function runMoveTimeline(attackerIndex, move, preview = false, receivedSignalId = null) {
  if (preview) return executeMoveTimeline(attackerIndex, move, true, activeMovePreview, 0, null, new Map(), true, receivedSignalId);

  const guyId = getGuyId(attackerIndex);
  const settings = moveStackSettings[guyId];
  const runningMoves = activeMoveTimelines[guyId];
  const generation = matchGeneration;
  const activeCount = [...runningMoves.values()].reduce((total, count) => total + count, 0);
  const sameMoveCount = runningMoves.get(move.id) ?? 0;
  if (combatStateActive(squares[attackerIndex], 'Stun')) return;
  if (sameMoveCount > 0 && !settings.selfStack) return;
  if (activeCount > sameMoveCount && !settings.stackMoves) return;

  runningMoves.set(move.id, sameMoveCount + 1);
  try {
    return await executeMoveTimeline(attackerIndex, move, false, null, 0, null, new Map(), true, receivedSignalId);
  } finally {
    if (generation === matchGeneration) {
      const remaining = (runningMoves.get(move.id) ?? 1) - 1;
      if (remaining > 0) runningMoves.set(move.id, remaining);
      else runningMoves.delete(move.id);
    }
  }
}

async function executeMoveTimeline(attackerIndex, move, preview = false, previewState = null, startNodeIndex = 0, branchActorIndex = null, seededHitResolutions = new Map(), allowTargetBranches = true, receivedSignalId = null) {
  const generation = matchGeneration;
  const moveWasStopped = () => preview ? Boolean(previewState?.cancelled) : (matchEnded || generation !== matchGeneration);
  let targetIndex = attackerIndex === 0 ? 1 : 0;
  let attacker = squares[attackerIndex];
  let target = squares[targetIndex];
  let lastHitResolution = branchActorIndex === null ? Promise.resolve(null) : Promise.resolve(branchActorIndex);
  if (!attacker || !target || attacker === target || (!preview && attacker.health <= 0)) return;
  if (!preview && branchActorIndex === null && (move._neverRepeat || simulationTime < (move._cooldownUntil ?? 0))) return;
  const nodes = move.nodes ?? [];
  const pendingTimelineCompletions = [];
  const pendingHitResolutions = branchActorIndex === null ? [] : [Promise.resolve(branchActorIndex)];
  let stackedRandomSkipTargets = [];
  let runJumpDestinationNext = false;
  let skipJumpCount = 0;
  const hitResolutionByNode = new Map();
  const hitDirectionByNode = new Map();
  let lastHitDirectionResolution = Promise.resolve(null);
  let variables = new Map(globalVariablesByGuy[getGuyId(attackerIndex)]);
  const waitForSelectedHits = async ids => {
    if (!ids?.length || ids.some(id => !hitResolutionByNode.has(Number(id)))) return null;
    const results = await Promise.all(ids.map(id => hitResolutionByNode.get(Number(id))));
    return results.every(result => result !== null) ? results.at(-1) : null;
  };
  for (const [id, resolution] of seededHitResolutions) hitResolutionByNode.set(Number(id), resolution);
  const loopRepeatsRemaining = new Map();
  const forkTargetTimelines = async (node, startIndexes) => {
    if (!allowTargetBranches || branchActorIndex !== null || !startIndexes.length) return false;
    const selectedIds = [...new Set((node.targetNodeIds ?? []).map(Number))];
    const selectedResolutions = selectedIds.map(id => [id, hitResolutionByNode.get(id) ?? Promise.resolve(null)]);
    const launchForActor = hitIndex => {
      if ((hitIndex !== 0 && hitIndex !== 1) || moveWasStopped()) return false;
      for (const startIndex of new Set(startIndexes)) {
        const branch = executeMoveTimeline(
          hitIndex, move, preview, previewState, startIndex, hitIndex, new Map(selectedResolutions), false, receivedSignalId,
        );
        if (preview) pendingTimelineCompletions.push(branch);
      }
      return true;
    };
    if (!selectedResolutions.length) return launchForActor(await lastHitResolution);
    if (node.targetAllRequired !== false) {
      const hitIndexes = await Promise.all(selectedResolutions.map(([, resolution]) => resolution));
      const hitIndex = hitIndexes[0];
      if ((hitIndex !== 0 && hitIndex !== 1) || hitIndexes.some(result => result !== hitIndex)) return false;
      return launchForActor(hitIndex);
    }
    if (node.targetRunAgain) {
      let launched = false;
      await Promise.all(selectedResolutions.map(([, resolution]) => resolution.then(hitIndex => {
        if (launchForActor(hitIndex)) launched = true;
      })));
      return launched;
    }
    const firstHit = await new Promise(resolve => {
      let unresolved = selectedResolutions.length;
      let settled = false;
      for (const [id, resolution] of selectedResolutions) {
        resolution.then(hitIndex => {
          if (settled) return;
          if (hitIndex === 0 || hitIndex === 1) {
            settled = true;
            resolve(hitIndex);
          } else if (--unresolved === 0) {
            settled = true;
            resolve(null);
          }
        });
      }
    });
    return launchForActor(firstHit);
  };
  const forkTargetTimeline = (node, startIndex) => forkTargetTimelines(node, [startIndex]);
  const transferTargetTimelines = async (node, startIndexes) => {
    const transferred = await forkTargetTimelines(node, startIndexes);
    if (!transferred) return false;
    if (preview) await Promise.all(pendingTimelineCompletions);
    return true;
  };
  const transferTargetTimeline = (node, startIndex) => transferTargetTimelines(node, [startIndex]);
  const waitForSelectedHitDirection = async ids => {
    if (!ids?.length || ids.some(id => !hitDirectionByNode.has(Number(id)))) return null;
    const results = await Promise.all(ids.map(id => hitDirectionByNode.get(Number(id))));
    return results.every(result => result !== null) ? results.at(-1) : null;
  };
  const waitForAnyPendingHit = async () => {
    const hits = pendingHitResolutions.splice(0);
    if (!hits.length) return false;
    return new Promise(resolve => {
      let unresolved = hits.length;
      let landed = false;
      for (const hit of hits) hit.then(result => {
        if (result !== null && result !== false) { landed = true; resolve(true); }
        else if (--unresolved === 0 && !landed) resolve(false);
      });
    });
  };
  for (let nodeIndex = startNodeIndex; nodeIndex < nodes.length; nodeIndex++) {
    if (runJumpDestinationNext) {
      runJumpDestinationNext = false;
    } else if (stackedRandomSkipTargets.length && nodeIndex < stackedRandomSkipTargets[0]) {
      nodeIndex = stackedRandomSkipTargets.shift() - 1;
      continue;
    }
    if (stackedRandomSkipTargets[0] === nodeIndex) stackedRandomSkipTargets.shift();
    const sourceNode = nodes[nodeIndex];
    if (sourceNode.type === 'variable') {
      if (sourceNode.targetOfHitbox && allowTargetBranches) {
        await transferTargetTimeline(sourceNode, nodeIndex);
        return;
      }
      if (moveWasStopped()) return;
      const name = String(sourceNode.variable ?? '').trim();
      const previous = variables.get(name);
      let value = sourceNode.value ?? '';
      if (sourceNode.math) {
        const previousValue = Number(previous?.value);
        const expression = String(value).trim();
        const computed = /^[+\-x:]/.test(expression) && Number.isFinite(previousValue)
          ? evaluateMathExpression(`${previousValue}${expression}`)
          : Number.isFinite(previousValue)
            ? previousValue + Number(evaluateMathExpression(expression))
            : evaluateMathExpression(expression);
        value = Number.isFinite(Number(computed)) ? String(computed) : computed;
      }
      if (sourceNode.remove) {
        variables.delete(name);
        if (sourceNode.global) globalVariablesByGuy[getGuyId(attackerIndex)].delete(name);
      } else if (name) {
        const stored = { value, math: Boolean(sourceNode.math), global: Boolean(sourceNode.global) };
        variables.set(name, stored);
        if (sourceNode.global) globalVariablesByGuy[getGuyId(attackerIndex)].set(name, stored);
      }
      continue;
    }
    const node = { ...sourceNode };
    for (const [property, value] of Object.entries(node)) {
      if (typeof value === 'string' && value.startsWith('$')) node[property] = resolveVariableReferences(value, variables);
    }
    if (moveWasStopped()) return;
    if (!preview && isPreviewingMove) return;
    if (!preview && attacker.health <= 0) return;
    if (node.type === 'wait') {
      if (node.afterHitLanded ?? node.afterDamage) {
        const landed = node.afterHitNodeIds?.length
          ? (await waitForSelectedHits(node.afterHitNodeIds)) !== null
          : await waitForAnyPendingHit();
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
    if (node.type === 'state') {
      if (node.targetOfHitbox && allowTargetBranches) {
        await transferTargetTimeline(node, nodeIndex);
        return;
      }
      applyCombatState(squares[attackerIndex], node);
      continue;
    }
    if (node.type === 'signal') {
      const signalId = String(node.value ?? '').trim();
      if (!node.receive) {
        if (!preview && signalId) sendSignal(attackerIndex, signalId);
        continue;
      }
      if (String(receivedSignalId ?? '') !== signalId) continue;
      const destinationIndex = nodes.findIndex(item => item.id === node.signalTargetNodeId);
      if (destinationIndex >= 0 && destinationIndex !== nodeIndex) {
        nodeIndex = destinationIndex - 1;
        runJumpDestinationNext = true;
      }
      continue;
    }
    if (node.type === 'random-skip' || node.type === 'skip') {
      if (node.afterHitLanded) {
        const landed = node.afterHitNodeIds?.length
          ? (await waitForSelectedHits(node.afterHitNodeIds)) !== null
          : await waitForAnyPendingHit();
        if (!landed || moveWasStopped()) continue;
      }
      if (node.ifVariableName) {
        const variable = variables.get(node.ifVariableName);
        const value = variable?.math ? evaluateMathExpression(variable.value) : variable?.value;
        if (String(value ?? '') !== String(node.ifVariableValue ?? '')) continue;
      }
      let destinationIndex = -1;
      let targetBranchStartIndexes = [];
      if (node.type === 'skip') {
        destinationIndex = nodes.findIndex(item => item.id === node.skipNodeId);
        if (destinationIndex >= 0 && destinationIndex !== nodeIndex) targetBranchStartIndexes = [destinationIndex];
      } else {
        const passedTargets = [];
        for (const destination of node.destinations ?? []) {
          if (destination.nodeId == null) continue;
          const chance = Math.max(0, Math.min(100, Number(destination.chance) || 0));
          if (Math.random() * 100 >= chance) continue;
          const targetIndex = nodes.findIndex(item => item.id === destination.nodeId);
          if (targetIndex < 0 || targetIndex === nodeIndex) continue;
          if (node.stackNodes) passedTargets.push(targetIndex);
          else { destinationIndex = targetIndex; break; }
        }
        if (node.stackNodes && passedTargets.length) {
          targetBranchStartIndexes = [...new Set(passedTargets)].sort((a, b) => a - b);
          stackedRandomSkipTargets = [...targetBranchStartIndexes];
          destinationIndex = stackedRandomSkipTargets.shift();
        } else if (destinationIndex >= 0 && destinationIndex !== nodeIndex) {
          targetBranchStartIndexes = [destinationIndex];
        }
      }
      if (destinationIndex < 0 || destinationIndex === nodeIndex) continue;
      if (++skipJumpCount > 1000) return;
      if (node.targetOfHitbox && allowTargetBranches) {
        await transferTargetTimelines(node, targetBranchStartIndexes);
        nodeIndex = Math.max(destinationIndex, ...targetBranchStartIndexes);
        stackedRandomSkipTargets = [];
        runJumpDestinationNext = false;
      } else {
        nodeIndex = destinationIndex - 1;
        runJumpDestinationNext = true;
      }
      continue;
    }
    if (node.type === 'loop') {
      const startIndex = nodes.findIndex(item => item.id === node.loopStartNodeId);
      const amount = Math.max(0, Math.min(1000, Math.floor(Number(node.loopAmount) || 0)));
      const repeatsUsed = loopRepeatsRemaining.get(node.id) ?? 0;
      if (startIndex >= 0 && startIndex < nodeIndex && repeatsUsed < amount) {
        if (++skipJumpCount > 1000) return;
        loopRepeatsRemaining.set(node.id, repeatsUsed + 1);
        nodeIndex = startIndex - 1;
        runJumpDestinationNext = true;
      } else {
        loopRepeatsRemaining.delete(node.id);
      }
      continue;
    }
    if (node.type === 'cancel') {
      if (!preview && allowTargetBranches) {
        if (node.neverRepeat) move._neverRepeat = true;
        move._cooldownUntil = simulationTime + Math.max(0, Number(node.moveCooldown) || 0);
      }
      const patternMove = movesByGuy[getGuyId(attackerIndex)]?.find(item => item.id === Number(node.patternMoveId));
      if (patternMove && patternMove.id !== move.id) {
        if (preview) {
          await executeMoveTimeline(attackerIndex, patternMove, true, previewState);
        } else {
          const cancelGeneration = matchGeneration;
          setTimeout(() => {
            if (!matchEnded && matchGeneration === cancelGeneration) runMoveTimeline(attackerIndex, patternMove);
          }, 0);
        }
      }
      return;
    }
    if (node.type === 'velocity') {
      const startVelocityMovement = (moverIndex, previousDirectionOverride = null) => {
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
        const previousDirection = Number.isFinite(previousDirectionOverride)
          ? previousDirectionOverride
          : Math.atan2(mover.vy, mover.vx);
        const direction = node.random
          ? Math.random() * Math.PI * 2
          : node.trackEnemy && node.trackOpposite
            ? Math.atan2(mover.y - opponent.y, mover.x - opponent.x)
            : node.trackEnemy
              ? Math.atan2(opponent.y - mover.y, opponent.x - mover.x)
              : node.trackOpposite
                ? previousDirection + Math.PI
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
          previousDirection,
          previousSpeed: mover.speed,
          preview,
          changesDirection: Boolean(node.changesDirection),
          complete: null,
        };
        mover.vx = Math.cos(direction) * speed;
        mover.vy = Math.sin(direction) * speed;
        mover.speed = speed;
        mover.velocityDistanceRemaining = distance;
        mover.velocityDistanceUntil = Infinity;
        const movementResolution = new Promise(resolve => { movement.complete = resolve; });
        activeVelocityMoves.push(movement);
        return movementResolution;
      };
      if (node.targetOfHitbox && allowTargetBranches) {
        await transferTargetTimeline(node, nodeIndex);
        return;
      }
      const movement = startVelocityMovement(attackerIndex);
      if (preview) pendingTimelineCompletions.push(movement);
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
          const sprite = squares[anchorIndex];
          sprite.spriteReplace = {
            image: node.image,
            imageBounds: node.imageBounds || (node.image.complete && node.image.naturalWidth ? getImageAlphaBounds(node.image) : null),
            animationStartedAt: performance.now(),
            endsAt: simulationTime + Math.max(0, Number(node.time) || 0),
            opacity: 1,
            size: Number.isFinite(Number(node.size)) ? Math.max(0, Number(node.size)) : 1,
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
            opacity: Math.max(0, Math.min(100, Number.isFinite(Number(node.opacity)) ? Number(node.opacity) : visualType === 'Flash' ? 50 : 100)) / 100,
            mask: Boolean(node.mask),
            travelX: 0,
            travelY: 0,
            baseSize: projectilePosition?.size ?? anchor.size,
            scale: Number.isFinite(Number(node.scale)) ? Math.max(0, Number(node.scale)) : 1,
          });
          if (preview) previewMoveEndTime = Math.max(previewMoveEndTime, startedAt + fadeIn + duration + fadeOut);
        }
      };
      if (visualType !== 'Overlay' && node.targetOfHitbox && allowTargetBranches) {
        await transferTargetTimeline(node, nodeIndex);
        return;
      }
      launchVisual(attackerIndex);
      continue;
    }
    if (node.type === 'advanced-projectile') {
      const behavior = node.behavior ?? 'All';
      const sourceOwnerIndex = node.transfer && node.transferReverse ? 1 - attackerIndex : attackerIndex;
      const projectileIdKey = getProjectileIdKey(sourceOwnerIndex, preview, node.projectileId);
      const matchingProjectiles = behavior !== 'New' && projectileIdKey
        ? activeProjectiles.filter(projectile => projectile.idKey === projectileIdKey)
        : [];
      const advanced = {
        transfer: Boolean(node.transfer),
        transferOwnerIndex: node.transfer ? (node.transferReverse ? attackerIndex : 1 - attackerIndex) : null,
        sticks: Boolean(node.sticks), boundaries: Boolean(node.boundaries), enemy: Boolean(node.enemy),
        bounceDamage: node.bounceDamage, boundaryDamage: node.boundaryDamage, hitSelf: Boolean(node.hitSelf),
        skipOnTouch: Boolean(node.skipOnTouch), cancelOnTouch: Boolean(node.cancelOnTouch),
        piercing: Boolean(node.piercing), hitRate: node.hitRate, damageDeduction: node.damageDeduction,
        homingEnabled: Boolean(node.homingEnabled), homing: node.homing, disableAll: Boolean(node.disableAll),
        changeEnabled: Boolean(node.changeEnabled), changeSize: node.changeSize, changeSpeed: node.changeSpeed,
        changeDamage: node.changeDamage, changeImage: node.changeImage, changeImageBounds: node.changeImageBounds,
        changeTime: node.changeTime, changeBounces: node.changeBounces,
        orbit: {
          enabled: Boolean(node.orbitEnabled), aligned: Boolean(node.orbitAligned),
          counterClockwise: Boolean(node.orbitCounterClockwise), immune: Boolean(node.orbitImmune),
          startingDirection: node.orbitStartingDirection, random: Boolean(node.orbitRandom), trackEnemy: Boolean(node.orbitTrackEnemy),
          distance: node.orbitDistance, speed: node.orbitSpeed, indestructible: Boolean(node.orbitIndestructible),
          phaseThroughArena: Boolean(node.phaseThroughArena),
        },
      };
      if (advanced.orbit.enabled && node.orbitTargetOfHitbox) {
        const orbitTargetNodeIds = Array.isArray(node.orbitTargetNodeIds) ? node.orbitTargetNodeIds : node.orbitTargetNodeIds == null ? [] : [node.orbitTargetNodeIds];
        const hitIndex = orbitTargetNodeIds.length
          ? await waitForSelectedHits(orbitTargetNodeIds)
          : await lastHitResolution;
        if (hitIndex === null || moveWasStopped()) continue;
        advanced.orbit.centerIndex = hitIndex;
      } else advanced.orbit.centerIndex = attackerIndex;
      if (behavior !== 'Old' && projectileIdKey) advancedProjectilePropertiesById.set(projectileIdKey, advanced);
      for (const projectile of matchingProjectiles) applyAdvancedProjectileConfiguration(projectile, advanced);
      const canStick = Boolean(node.sticks && (node.boundaries || node.enemy));
      const destinationIndex = nodes.findIndex(item => item.id === node.skipNodeId);
      const waitForTouch = Boolean(canStick && node.skipOnTouch && destinationIndex >= 0 && destinationIndex !== nodeIndex && matchingProjectiles.length);
      let resolveTouch;
      const waitingProjectiles = new Set();
      const touchResolvers = new Map();
      const touchPromise = waitForTouch ? new Promise(resolve => { resolveTouch = resolve; }) : null;
      const signalTouch = (projectile, touched) => {
        if (!waitingProjectiles.has(projectile)) return;
        if (touched) {
          waitingProjectiles.clear();
          resolveTouch(true);
        } else {
          waitingProjectiles.delete(projectile);
          if (!waitingProjectiles.size) resolveTouch(false);
        }
      };
      for (const projectile of matchingProjectiles) {
        projectile.sticksToBoundaries = Boolean(canStick && node.boundaries);
        projectile.sticksToEnemy = Boolean(canStick && node.enemy);
        projectile.hitSelfWhenStuck = Boolean(canStick && node.hitSelf);
        projectile.bounceDamage = node.enemy ? Math.max(0, Number(node.bounceDamage) || 0) : 0;
        if (waitForTouch) {
          waitingProjectiles.add(projectile);
          const resolveProjectileTouch = touched => signalTouch(projectile, touched);
          projectile.skipOnTouchResolvers.add(resolveProjectileTouch);
          touchResolvers.set(projectile, resolveProjectileTouch);
        }
      }
      if (waitingProjectiles.size) {
        const touched = preview
          ? await Promise.race([touchPromise, previewState.cancelledPromise.then(() => false)])
          : await touchPromise;
        for (const [projectile, resolveProjectileTouch] of touchResolvers) {
          projectile.skipOnTouchResolvers.delete(resolveProjectileTouch);
        }
        if (touched && !moveWasStopped()) {
          if (++skipJumpCount > 1000) return;
          nodeIndex = destinationIndex - 1;
          runJumpDestinationNext = true;
        }
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
      const sizeMultiplier = Math.max(0, Math.min(10, Number.isFinite(Number(node.size)) ? Number(node.size) : 1));
      if (sizeMultiplier <= 0) continue;
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
      direction = node.randomDirection
        ? Math.random() * Math.PI * 2
        : (node.tracks ?? true)
          ? Math.atan2(target.y - startY, target.x - startX) + randomAngleOffset
          : rotation;
      if (projectileIdKey) {
        const sameIdProjectiles = activeProjectiles.filter(item => item.idKey === projectileIdKey);
        while (!node.stacks && sameIdProjectiles.length > 0) {
          const replaced = sameIdProjectiles.shift();
          removeProjectileFromPlay(replaced);
          replaced.cancelled = true;
          replaced.complete?.(false);
          replaced.complete = null;
        }
      }
      const projectile = {
        projectileId,
        targetDirection: null,
        idKey: projectileIdKey,
        attackerIndex,
        spawnedByIndex: attackerIndex,
        targetIndex,
        damage: Math.max(0, Number(node.damage) || 0),
        defaultDamage: Math.max(0, Number(node.damage) || 0),
        speed,
        defaultSpeed: speed,
        defaultDirection: direction,
        heading: direction,
        baseSize: 75 * sizeMultiplier,
        defaultBaseSize: 75 * sizeMultiplier,
        endSizeMultiplier: Math.max(0, Math.min(10, Number.isFinite(Number(node.endSize)) ? Number(node.endSize) : 1)),
        defaultEndSizeMultiplier: Math.max(0, Math.min(10, Number.isFinite(Number(node.endSize)) ? Number(node.endSize) : 1)),
        radius: 75 * sizeMultiplier / 2,
        image: node.image || null,
        defaultImage: node.image || null,
        imageBounds: node.imageBounds || (node.image?.complete && node.image.naturalWidth ? getImageAlphaBounds(node.image) : null),
        defaultImageBounds: node.imageBounds || (node.image?.complete && node.image.naturalWidth ? getImageAlphaBounds(node.image) : null),
        soundURL: node.soundURL ?? defaultHitboxSound,
        destroySoundURL: node.destroySoundURL ?? '',
        destroySoundPlayed: false,
        bouncesRemaining: Math.max(0, Math.min(99, Math.floor(Number(node.bounceCount) || 0))),
        defaultBounces: Math.max(0, Math.min(99, Math.floor(Number(node.bounceCount) || 0))),
        sticksToBoundaries: false,
        sticksToEnemy: false,
        hitSelfWhenStuck: false,
        bounceDamage: 0,
        stuckTo: null,
        stuckTargetIndex: null,
        stuckOffsetX: 0,
        stuckOffsetY: 0,
        skipOnTouchResolvers: new Set(),
        ownerLastHitAt: null,
        rotation: 0,
        rotateSpeed: Math.max(-3600, Math.min(3600, Number(node.rotateSpeed) || 0)),
        tracks: Boolean(node.tracks ?? true),
        rotateToDirection: Boolean(node.rotateToDirection ?? false),
        homing: Math.max(0, Math.min(3600, Number(node.homing) || 0)),
        falloff: Math.max(0, Number(node.falloff) || 0),
        piercing: Boolean(node.piercing),
        originalPiercing: Boolean(node.piercing),
        hitRate: Math.max(0, Number(node.hitRate ?? 1) || 0),
        damageDeduction: Math.max(0, Number(node.damageDeduction) || 0),
        lastHitAt: null,
        nextFalloffAt: simulationTime + 0.05,
        defaultDuration: duration,
        boundaryDamage: 0,
        boundaryInside: [false, false],
        cancelOnTouch: false,
        orbitAngle: null,
        immuneIndex: null,
        x: startX,
        y: startY,
        vx: Math.cos(direction) * speed,
        vy: Math.sin(direction) * speed,
        startedAt: simulationTime,
        color: attacker.color,
        expiresAt: simulationTime + duration,
        preview,
      };
      const advanced = projectileIdKey ? advancedProjectilePropertiesById.get(projectileIdKey) : null;
      if (advanced && !applyAdvancedProjectileConfiguration(projectile, advanced)) continue;
      rememberProjectilePosition(projectile);
      if (preview && projectile.piercing) previewMoveEndTime = Math.max(previewMoveEndTime, projectile.expiresAt);
      const resolvedTargetIndex = targetIndex;
      const projectileResolution = new Promise(resolve => { projectile.complete = resolve; });
      activeProjectiles.push(projectile);
      pendingHitResolutions.push(projectileResolution);
      hitResolutionByNode.set(sourceNode.id, projectileResolution.then(hit => hit ? resolvedTargetIndex : null));
      hitDirectionByNode.set(sourceNode.id, projectileResolution.then(hit => hit ? projectile.targetDirection : null));
      lastHitResolution = projectileResolution.then(hit => hit ? resolvedTargetIndex : null);
      lastHitDirectionResolution = projectileResolution.then(hit => hit ? projectile.targetDirection : null);
      if (preview) pendingTimelineCompletions.push(projectileResolution);
      continue;
    }
    if (node.type !== 'hitbox') continue;
    if (node.shape === 'Familiar') await familiarMaskReady;
    const hitboxOwnerIndex = attackerIndex;
    const hitboxVictimIndex = targetIndex;
    const hitboxOwner = squares[hitboxOwnerIndex];
    const hitboxVictim = squares[hitboxVictimIndex];
    if (!preview && hitboxVictim.health <= 0) continue;
    const damage = node.damage ?? 0;
    const duration = Math.max(0, Number.isFinite(Number(node.time)) ? Number(node.time) : 0.05);
    const rotation = Number(node.rotation) || 0;
    const positionX = Number(node.x) || 0;
    const positionY = Number(node.y) || 0;
    const anchored = Boolean(node.anchored);
    const cos = Math.cos(hitboxOwner.rotation);
    const sin = Math.sin(hitboxOwner.rotation);
    let resolveHitbox;
    let remainingHitboxTargets = node.hitSelf ? 2 : 1;
    const hitboxResolution = new Promise(resolve => { resolveHitbox = resolve; });
    const hitboxTargets = node.hitSelf ? [hitboxVictimIndex, hitboxOwnerIndex] : [hitboxVictimIndex];
    const activeHitbox = {
      nodeId: sourceNode.id,
      targetDirection: null,
      attackerIndex: hitboxOwnerIndex,
      damage,
      width: Math.max(0, Number(node.width) || 0),
      height: Math.max(0, Number(node.height) || 0),
      shape: node.shape || 'Square',
      rotation,
      anchored,
      positionX,
      positionY,
      x: hitboxOwner.x + (anchored ? positionX * cos - positionY * sin : positionX),
      y: hitboxOwner.y + (anchored ? positionX * sin + positionY * cos : positionY),
      worldRotation: rotation + (anchored ? hitboxOwner.rotation : 0),
      soundURL: node.soundURL,
      startedAt: simulationTime,
      duration,
      hit: false,
      preview,
      cancelled: false,
    };
    for (const hitTargetIndex of hitboxTargets) {
      if (!preview && squares[hitTargetIndex].health <= 0) {
        remainingHitboxTargets--;
        continue;
      }
      activeHitboxes.push({
        ...activeHitbox,
        targetIndex: hitTargetIndex,
        complete: didHit => {
          if (didHit === hitTargetIndex) resolveHitbox(hitTargetIndex);
          else if (--remainingHitboxTargets === 0) resolveHitbox(null);
        },
      });
    }
    if (remainingHitboxTargets === 0) resolveHitbox(null);
    pendingHitResolutions.push(hitboxResolution);
    hitResolutionByNode.set(sourceNode.id, hitboxResolution.then(hitIndex => hitIndex ?? null));
    hitDirectionByNode.set(sourceNode.id, hitboxResolution.then(hitIndex => hitIndex === null ? null : activeHitboxes.find(hitbox => hitbox.nodeId === sourceNode.id && hitbox.targetIndex === hitIndex)?.targetDirection ?? null));
    if (preview) {
      pendingTimelineCompletions.push(hitboxResolution);
      previewMoveEndTime = Math.max(previewMoveEndTime, simulationTime + duration);
    }
    lastHitResolution = hitboxResolution.then(hitIndex => hitIndex ?? null);
    lastHitDirectionResolution = hitboxResolution.then(hitIndex => hitIndex === null ? null : activeHitboxes.find(hitbox => hitbox.nodeId === sourceNode.id && hitbox.targetIndex === hitIndex)?.targetDirection ?? null);
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
  for (const sound of [...activeSounds]) {
    if (preview.sounds.has(sound)) continue;
    stopTrackedSound(sound);
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
  const savedSizes = squares.map(square => square.size);
  const savedMaxHealth = squares.map(square => square.maxHealth);
  const savedStateEffects = squares.map(square => square.stateEffects ? Object.fromEntries(Object.entries(square.stateEffects).map(([type, effect]) => [type, { ...effect }])) : undefined);
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
    sounds: new Set(activeSounds),
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
    for (const projectile of [...activeProjectiles]) {
      if (previewState.projectiles.has(projectile)) continue;
      removeProjectileFromPlay(projectile);
      projectile.cancelled = true;
      projectile.complete?.(false);
    }
    clearPreviewProjectilePositions();
    isPreviewingMove = false;
    squares.forEach((square, index) => {
      square.health = savedHealth[index];
      square.vx = savedMovement[index].vx;
      square.vy = savedMovement[index].vy;
      square.speed = savedMovement[index].speed;
      square.size = savedSizes[index];
      square.maxHealth = savedMaxHealth[index];
      if (savedStateEffects[index]) square.stateEffects = savedStateEffects[index];
      else delete square.stateEffects;
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

let soundNodeAudioContext = null;

function stopTrackedSound(sound) {
  clearInterval(sound.fadeTimer);
  sound.fadeTimer = null;
  sound.pause();
  sound.currentTime = 0;
  soundCleanupByAudio.get(sound)?.();
}

function stopAllSounds() {
  for (const sound of [...activeSounds]) stopTrackedSound(sound);
  for (const sound of [...wallBounceAudio, winnerAudio]) {
    sound.pause();
    if (sound.readyState > 0) sound.currentTime = 0;
  }
  activeSoundsByNode = new WeakMap();
}

function playTransientSound(url) {
  if (!url) return;
  const sound = new Audio(url);
  activeSounds.add(sound);
  let cleaned = false;
  const cleanup = () => {
    if (cleaned) return;
    cleaned = true;
    activeSounds.delete(sound);
  };
  soundCleanupByAudio.set(sound, cleanup);
  sound.addEventListener('ended', cleanup, { once: true });
  sound.addEventListener('error', cleanup, { once: true });
  sound.play().catch(cleanup);
}

function playSoundNode(node) {
  if (!node.soundURL) return;
  if (node.cancel) {
    for (const sound of [...activeSoundNodes]) stopTrackedSound(sound);
  }
  const nodeSounds = activeSoundsByNode.get(node) ?? new Set();
  if (!node.stack) {
    for (const sound of [...nodeSounds]) stopTrackedSound(sound);
  }
  const sound = new Audio(node.soundURL);
  const start = Math.max(0, Number(node.start) || 0);
  let baseVolume = Math.max(0, Math.min(2, (Number(node.volume) || 0) / 100));
  let gainNode = null;
  let sourceNode = null;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      soundNodeAudioContext ??= new AudioContextClass();
      sourceNode = soundNodeAudioContext.createMediaElementSource(sound);
      gainNode = soundNodeAudioContext.createGain();
      sourceNode.connect(gainNode);
      gainNode.connect(soundNodeAudioContext.destination);
      soundNodeAudioContext.resume().catch(() => {});
    }
  } catch {}
  const setVolume = value => {
    if (gainNode) gainNode.gain.value = value;
    else sound.volume = Math.min(1, value);
  };
  activeSoundNodes.add(sound);
  activeSounds.add(sound);
  nodeSounds.add(sound);
  activeSoundsByNode.set(node, nodeSounds);
  let cleaned = false;
  const cleanup = () => {
    if (cleaned) return;
    cleaned = true;
    clearInterval(sound.fadeTimer);
    sound.fadeTimer = null;
    activeSoundNodes.delete(sound);
    activeSounds.delete(sound);
    nodeSounds.delete(sound);
    sourceNode?.disconnect();
    gainNode?.disconnect();
    sound.updateNodeVolume = null;
    if (nodeSounds.size === 0) activeSoundsByNode.delete(node);
  };
  soundCleanupByAudio.set(sound, cleanup);
  sound.addEventListener('ended', cleanup, { once: true });
  sound.addEventListener('error', cleanup, { once: true });
  let playbackStarted = false;
  let fadeLevel = 1;
  sound.updateNodeVolume = value => {
    baseVolume = Math.max(0, Math.min(2, value));
    if (playbackStarted) setVolume(baseVolume * fadeLevel);
  };
  const beginPlayback = () => {
    if (playbackStarted) return;
    playbackStarted = true;
    if (!activeSoundNodes.has(sound)) { cleanup(); return; }
    if (start >= sound.duration) { cleanup(); return; }
    sound.currentTime = start;
    const fadeDuration = node.fade && Number.isFinite(sound.duration)
      ? Math.min(0.2, (sound.duration - start) / 2)
      : node.fade ? 0.2 : 0;
    sound.volume = 1;
    fadeLevel = node.fade ? 0 : 1;
    setVolume(baseVolume * fadeLevel);
    if (node.fade) {
      sound.fadeTimer = window.setInterval(() => {
        const fadeIn = fadeDuration > 0 ? Math.min(1, (sound.currentTime - start) / fadeDuration) : 1;
        const fadeOut = fadeDuration > 0 && Number.isFinite(sound.duration)
          ? Math.min(1, (sound.duration - sound.currentTime) / fadeDuration)
          : 1;
        fadeLevel = Math.max(0, Math.min(fadeIn, fadeOut));
        setVolume(baseVolume * fadeLevel);
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
  for (const sound of [...activeSoundNodes]) stopTrackedSound(sound);
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

function sendSignal(senderIndex, signalId) {
  const id = String(signalId ?? '').trim();
  if (!id) return;
  const receiverIndex = 1 - senderIndex;
  const receiverMoves = movesByGuy[getGuyId(receiverIndex)] ?? [];
  for (const move of receiverMoves) {
    if (move.condition !== 'signal' || String(move.signalId ?? '').trim() !== id) continue;
    const hasMatchingReceiver = (move.nodes ?? []).some(node =>
      node.type === 'signal' && node.receive && String(node.value ?? '').trim() === id &&
      (move.nodes ?? []).some(candidate => candidate.id === node.signalTargetNodeId),
    );
    if (hasMatchingReceiver) runMoveTimeline(receiverIndex, move, false, id);
  }
}

function runMovesForCondition(guyIndex, condition, contactSide = null) {
  if (matchEnded || squares[guyIndex].health <= 0 || combatStateActive(squares[guyIndex], 'Stun')) return;
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

function getOpponentSide(guyIndex) {
  const guy = squares[guyIndex];
  const opponent = squares[1 - guyIndex];
  const dx = opponent.x - guy.x;
  const dy = opponent.y - guy.y;
  if (Math.abs(dx) >= Math.abs(dy)) return dx < 0 ? 'left' : 'right';
  return dy < 0 ? 'up' : 'down';
}

function resetMoveTimers() {
  directionSideByMove = new WeakMap();
  directionCheckElapsed = 0;
  for (const runningMoves of Object.values(activeMoveTimelines)) runningMoves.clear();
  for (const moves of Object.values(movesByGuy)) {
    for (const move of moves) {
      delete move._elapsed;
      delete move._nextTick;
      delete move._neverRepeat;
      delete move._cooldownUntil;
      delete move._directionNextRunAt;
    }
  }
}

document.addEventListener('click', () => {
  if (!isRunning || matchEnded || performance.now() < clickConditionAvailableAt) return;
  for (let guyIndex = 0; guyIndex < squares.length; guyIndex++) runMovesForCondition(guyIndex, 'click');
});

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

let directionCheckElapsed = 0;
function advanceDirectionMoves(dt) {
  if (matchEnded) return;
  directionCheckElapsed += dt;
  while (directionCheckElapsed >= 0.01) {
    directionCheckElapsed -= 0.01;
    for (let guyIndex = 0; guyIndex < squares.length; guyIndex++) {
      if (squares[guyIndex].health <= 0) continue;
      const guy = squares[guyIndex];
      const opponent = squares[1 - guyIndex];
      for (const move of movesByGuy[getGuyId(guyIndex)]) {
        if (move.condition !== 'direction') continue;
        const selectedSides = move.directionSides ?? [];
        const previousMatch = directionSideByMove.get(move);
        const isAreaMode = (move.directionMode ?? 'side') === 'area';
        const matches = selectedSides.some(selectedSide => {
          const horizontal = selectedSide === 'left' || selectedSide === 'right';
          const delta = horizontal ? opponent.x - guy.x : opponent.y - guy.y;
          const crossDelta = horizontal ? opponent.y - guy.y : opponent.x - guy.x;
          const sign = selectedSide === 'left' || selectedSide === 'up' ? -1 : 1;
          const edgeDistance = (guy.size + opponent.size) / 2;
          if (isAreaMode) return delta * sign >= edgeDistance;
          return delta * sign >= edgeDistance && delta * sign <= edgeDistance + guy.size && Math.abs(crossDelta) <= edgeDistance;
        });
        directionSideByMove.set(move, matches);
        const constantly = move.directionFrequency === 'constantly';
        const runningCount = activeMoveTimelines[getGuyId(guyIndex)].get(move.id) ?? 0;
        const entered = isAreaMode ? previousMatch !== true : previousMatch === false;
        const constantlyReady = runningCount === 0 && simulationTime >= (move._directionNextRunAt ?? 0);
        if (matches && (constantly ? constantlyReady : entered)) {
          if (constantly) move._directionNextRunAt = simulationTime + 0.25;
          runMoveTimeline(guyIndex, move);
        }
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
  updateHitboxPreview();
  updateVisualPreview();
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

function getSquareCornerPadding(square) {
  return Math.min(Math.max(0, Number(square.cornerPadding) || 0), square.size / 2);
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
  flashedImage.width = image.naturalWidth || image.width;
  flashedImage.height = image.naturalHeight || image.height;
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

function transformHitboxPoint(x, y, centerX, centerY, cos, sin) {
  return { x: centerX + x * cos - y * sin, y: centerY + x * sin + y * cos };
}

function hitboxPolygonsOverlap(first, second) {
  for (const polygon of [first, second]) {
    for (let index = 0; index < polygon.length; index++) {
      const start = polygon[index];
      const end = polygon[(index + 1) % polygon.length];
      const axisX = -(end.y - start.y);
      const axisY = end.x - start.x;
      const firstProjection = first.map(point => point.x * axisX + point.y * axisY);
      const secondProjection = second.map(point => point.x * axisX + point.y * axisY);
      if (Math.max(...firstProjection) < Math.min(...secondProjection) || Math.max(...secondProjection) < Math.min(...firstProjection)) return false;
    }
  }
  return true;
}

function hitboxShapeOverlapsTarget(shape, centerX, centerY, rotation, width, height, left, top, targetWidth, targetHeight) {
  if (shape === 'Square') return true;
  if (shape === 'Circle') {
    const radius = Math.min(width, height) / 2;
    const closestX = Math.max(left, Math.min(centerX, left + targetWidth));
    const closestY = Math.max(top, Math.min(centerY, top + targetHeight));
    return (centerX - closestX) ** 2 + (centerY - closestY) ** 2 <= radius ** 2;
  }
  const cos = Math.cos(rotation);
  const sin = Math.sin(rotation);
  const target = [
    { x: left, y: top },
    { x: left + targetWidth, y: top },
    { x: left + targetWidth, y: top + targetHeight },
    { x: left, y: top + targetHeight },
  ];
  if (shape === 'Triangle') {
    const triangle = [
      transformHitboxPoint(0, -height / 2, centerX, centerY, cos, sin),
      transformHitboxPoint(width / 2, height / 2, centerX, centerY, cos, sin),
      transformHitboxPoint(-width / 2, height / 2, centerX, centerY, cos, sin),
    ];
    return hitboxPolygonsOverlap(triangle, target);
  }
  if (shape === 'Familiar' && familiarMaskPoints.length) {
    const cellWidth = width / familiarMaskWidth;
    const cellHeight = height / familiarMaskHeight;
    const extentX = (Math.abs(cos) * cellWidth + Math.abs(sin) * cellHeight) / 2;
    const extentY = (Math.abs(sin) * cellWidth + Math.abs(cos) * cellHeight) / 2;
    for (const point of familiarMaskPoints) {
      const world = transformHitboxPoint(point.x * width, point.y * height, centerX, centerY, cos, sin);
      if (world.x + extentX >= left && world.x - extentX <= left + targetWidth &&
          world.y + extentY >= top && world.y - extentY <= top + targetHeight) return true;
    }
  }
  return shape === 'Familiar' && !familiarMaskPoints.length;
}

function drawHitboxShape(context, shape, width, height) {
  if (shape === 'Familiar' && familiarMaskFillPath && familiarMaskOutlinePath) {
    context.save();
    context.scale(width, height);
    context.fill(familiarMaskFillPath);
    context.lineWidth = 2 / Math.max(1, Math.max(width, height));
    context.stroke(familiarMaskOutlinePath);
    context.restore();
    return;
  }
  context.beginPath();
  if (shape === 'Circle') {
    context.arc(0, 0, Math.min(width, height) / 2, 0, Math.PI * 2);
  } else if (shape === 'Triangle') {
    context.moveTo(0, -height / 2);
    context.lineTo(width / 2, height / 2);
    context.lineTo(-width / 2, height / 2);
    context.closePath();
  } else {
    context.rect(-width / 2, -height / 2, width, height);
  }
  context.fill();
  context.stroke();
}

function resolveHitboxDamage(value, target) {
  if (typeof value === 'string' && value.trim().endsWith('%')) {
    const percentage = Number(value.trim().slice(0, -1));
    return Number.isFinite(percentage) ? target.health * percentage / 100 : 0;
  }
  const damage = Number(value);
  return Number.isFinite(damage) ? damage : 0;
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
    if (!hitboxShapeOverlapsTarget(hitbox.shape || 'Square', centerX, centerY, rotation, hitbox.width, hitbox.height, targetLeft, targetTop, targetBounds.width, targetBounds.height)) continue;

    hitbox.hit = true;
    hitbox.targetDirection = Math.atan2(target.vy, target.vx);
    const complete = hitbox.complete;
    hitbox.complete = null;
    complete?.(hitbox.targetIndex);
    if (hitbox.soundURL) playTransientSound(hitbox.soundURL);
    const damage = resolveHitboxDamage(hitbox.damage, target);
    if (hitbox.preview) {
      if (damage !== 0) {
        addDamagePopup(hitbox.targetIndex, target.x + (Math.random() * 24 - 12), target.y - target.size / 2 - 18, damage);
      }
      continue;
    }
    if (damage < 0) {
      const amountHealed = Math.min(target.maxHealth - target.health, Math.abs(damage));
      if (amountHealed > 0) {
        target.health += amountHealed;
        addDamagePopup(hitbox.targetIndex, target.x + (Math.random() * 24 - 12), target.y - target.size / 2 - 18, -amountHealed);
      }
      continue;
    }
    const damageTaken = combatStateActive(target, 'IFrames') ? 0 : Math.min(target.health, damage);
    if (damageTaken > 0) {
      runMovesForCondition(hitbox.targetIndex, 'damaged', getDamageSourceSide(hitbox.attackerIndex, hitbox.targetIndex));
      target.health = Math.max(0, target.health - damageTaken);
      playWinnerSoundIfNeeded();
      if (matchEnded) break;
      addDamagePopup(hitbox.targetIndex, target.x + (Math.random() * 24 - 12), target.y - target.size / 2 - 18, damageTaken);
    }
  }
}

function projectileTouchesSquare(projectile, square, opponent) {
  if (!square || square.health <= 0) return false;
  const bounds = getHitbox(square, opponent);
  const left = square.x + bounds.left;
  const top = square.y + bounds.top;
  const closestX = Math.max(left, Math.min(projectile.x, left + bounds.width));
  const closestY = Math.max(top, Math.min(projectile.y, top + bounds.height));
  const dx = projectile.x - closestX;
  const dy = projectile.y - closestY;
  return dx * dx + dy * dy <= projectile.radius * projectile.radius;
}

function applyProjectileBounceDamage(projectile, targetIndex, target, amount = projectile.bounceDamage) {
  const damage = Math.max(0, Number(amount) || 0);
  if (!damage || target.health <= 0) return;
  const damageTaken = projectile.preview ? damage : combatStateActive(target, 'IFrames') ? 0 : Math.min(target.health, damage);
  if (!projectile.preview && damageTaken > 0) {
    runMovesForCondition(targetIndex, 'damaged', getDamageSourceSide(projectile.attackerIndex, targetIndex));
    target.health = Math.max(0, target.health - damageTaken);
    playWinnerSoundIfNeeded();
    if (matchEnded) return;
  }
  if (damageTaken > 0) {
    addDamagePopup(targetIndex, target.x + (Math.random() * 24 - 12), target.y - target.size / 2 - 18, damageTaken);
    if (projectile.soundURL) playTransientSound(projectile.soundURL);
  }
}

function updateActiveProjectiles(dt) {
  for (let index = activeProjectiles.length - 1; index >= 0; index--) {
    if (matchEnded) break;
    const projectile = activeProjectiles[index];
    if (!projectile) continue;
    const attacker = squares[projectile.attackerIndex];
    const advanced = projectile.advanced;
    const orbit = advanced?.orbit;
    const homingOverridesOrbit = Boolean(orbit?.enabled && advanced?.homingEnabled);
    const isOrbiting = Boolean(orbit?.enabled && !homingOverridesOrbit && !(advanced.homingEnabled && advanced.disableAll) && !projectile.orbitDisabled);
    if (isOrbiting) {
      const centerIndex = Number.isInteger(orbit.centerIndex) ? orbit.centerIndex : projectile.attackerIndex;
      const center = squares[centerIndex];
      if (center) {
        if (orbit.immune) projectile.targetIndex = 1 - centerIndex;
        projectile.immuneIndex = orbit.immune ? centerIndex : null;
        const orbiters = activeProjectiles.filter(item => item.idKey === projectile.idKey && item.advanced?.orbit?.enabled && !item.orbitDisabled);
        const orbitSpeed = Number(orbit.speed) || 0;
        const angularSpeed = orbitSpeed * Math.PI / 180;
        const direction = projectile.orbitDirection ?? (orbit.counterClockwise ? -1 : 1);
        let groupPhase = 0;
        if (!orbit.aligned) projectile.orbitAngle ??= Math.atan2(projectile.y - center.y, projectile.x - center.x);
        let previousOrbitAngle = projectile.orbitAngle;
        if (orbit.aligned) {
          const groupIndex = orbiters.indexOf(projectile);
          groupPhase = groupIndex * Math.PI * 2 / Math.max(1, orbiters.length);
          const startedAt = projectile.orbitStartedAt ?? Number(orbit.startedAt ?? projectile.startedAt);
          const nextOrbitAngle = (projectile.orbitBaseAngle ?? 0) + direction * (simulationTime - startedAt) * angularSpeed + groupPhase;
          if (!Number.isFinite(previousOrbitAngle)) previousOrbitAngle = nextOrbitAngle - direction * angularSpeed * dt;
          projectile.orbitAngle = nextOrbitAngle;
        } else {
          projectile.orbitAngle += direction * angularSpeed * dt;
        }
        const distance = Math.max(0, Number(orbit.distance) || 0);
        projectile.x = center.x + Math.cos(projectile.orbitAngle) * distance;
        projectile.y = center.y + Math.sin(projectile.orbitAngle) * distance;
        projectile.vx = -Math.sin(projectile.orbitAngle) * angularSpeed * distance * direction;
        projectile.vy = Math.cos(projectile.orbitAngle) * angularSpeed * distance * direction;
        const outside = projectile.x < projectile.radius || projectile.x > width - projectile.radius || projectile.y < projectile.radius || projectile.y > height - projectile.radius;
        const indestructibleOrbit = projectile.indestructible && !projectile.originalPiercing;
        if (outside && indestructibleOrbit) {
          if (!orbit.phaseThroughArena && !projectile.orbitWasOutside && Number.isFinite(previousOrbitAngle)) {
            projectile.orbitDirection = -direction;
            projectile.orbitStartedAt = simulationTime;
            projectile.orbitBaseAngle = previousOrbitAngle - groupPhase;
            projectile.orbitAngle = previousOrbitAngle;
            projectile.x = center.x + Math.cos(previousOrbitAngle) * distance;
            projectile.y = center.y + Math.sin(previousOrbitAngle) * distance;
            projectile.vx = -Math.sin(previousOrbitAngle) * angularSpeed * distance * projectile.orbitDirection;
            projectile.vy = Math.cos(previousOrbitAngle) * angularSpeed * distance * projectile.orbitDirection;
            projectile.orbitWasOutside = projectile.x < projectile.radius || projectile.x > width - projectile.radius || projectile.y < projectile.radius || projectile.y > height - projectile.radius;
          } else projectile.orbitWasOutside = outside;
        } else if (outside) {
          if (projectile.bouncesRemaining <= 0) {
            removeProjectileFromPlay(projectile);
            projectile.complete?.(false);
            continue;
          }
          projectile.bouncesRemaining -= 1;
          projectile.orbitDisabled = true;
        } else projectile.orbitWasOutside = false;
      }
    } else projectile.immuneIndex = null;
    const target = squares[projectile.targetIndex];
    const spawnedBy = squares[projectile.spawnedByIndex ?? projectile.attackerIndex];
    const spawnedByIndex = projectile.spawnedByIndex ?? projectile.attackerIndex;
    projectile.rotation += projectile.rotateSpeed * Math.PI / 180 * dt;
    if (projectile.stuckTo === 'enemy') {
      const stuckTarget = squares[projectile.stuckTargetIndex];
      if (stuckTarget) {
        projectile.x = stuckTarget.x + projectile.stuckOffsetX;
        projectile.y = stuckTarget.y + projectile.stuckOffsetY;
      }
    }
    if (!projectile.stuckTo && !isOrbiting && projectile.tracks && (projectile.homing > 0 || homingOverridesOrbit) && target && target.health > 0) {
      const currentAngle = Math.atan2(projectile.vy, projectile.vx);
      const targetAngle = Math.atan2(target.y - projectile.y, target.x - projectile.x);
      const angleDifference = Math.atan2(
        Math.sin(targetAngle - currentAngle),
        Math.cos(targetAngle - currentAngle),
      );
      const homingRate = projectile.homing > 0 ? projectile.homing : homingOverridesOrbit ? 3600 : 0;
      const maxTurn = homingRate * Math.PI / 180 * dt;
      const angle = currentAngle + Math.max(-maxTurn, Math.min(maxTurn, angleDifference));
      if (projectile.speed > 0) projectile.heading = angle;
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
    if (projectile.radius <= 0) {
      removeProjectileFromPlay(projectile);
      projectile.complete?.(false);
      continue;
    }
    if (!projectile.stuckTo && !isOrbiting) {
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
        if (projectile.sticksToBoundaries) {
          projectile.stuckTo = 'boundary';
          projectile.speed = 0;
          projectile.vx = 0;
          projectile.vy = 0;
          projectile.tracks = false;
          projectile.homing = 0;
          projectile.expiresAt = Infinity;
          const complete = projectile.complete;
          projectile.complete = null;
          complete?.(false);
        } else if (projectile.bouncesRemaining <= 0 && !(projectile.indestructible && !projectile.originalPiercing)) {
          removeProjectileFromPlay(projectile);
          projectile.complete?.(false);
          continue;
        } else {
          if (!(projectile.indestructible && !projectile.originalPiercing)) projectile.bouncesRemaining -= 1;
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
      }
    }
    rememberProjectilePosition(projectile);
    let boundaryTouched = false;
    const boundaryMode = Boolean(projectile.advanced?.boundaries && projectile.sticksToBoundaries && projectile.boundaryDamage > 0 && !(projectile.advanced.homingEnabled && projectile.advanced.disableAll));
    if (boundaryMode) {
      for (let victimIndex = 0; victimIndex < squares.length; victimIndex++) {
        const inside = projectileTouchesSquare(projectile, squares[victimIndex], squares[1 - victimIndex]);
        if (inside && !projectile.boundaryInside[victimIndex]) {
          boundaryTouched = true;
          if (victimIndex !== projectile.immuneIndex) applyProjectileBounceDamage(projectile, victimIndex, squares[victimIndex], projectile.boundaryDamage);
        }
        projectile.boundaryInside[victimIndex] = inside;
      }
    }
    const bounds = target && getHitbox(target, attacker);
    if (projectile.stuckTo !== 'enemy' && !(projectile.stuckTo === 'boundary' && projectile.completed) && target && target.health > 0 && bounds) {
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
      if (!boundaryMode && projectileHitsTarget && hitRateReady) {
        if (combatStateActive(target, 'Deflect') && !projectile.deflected) {
          projectile.deflected = true;
          [projectile.attackerIndex, projectile.targetIndex] = [projectile.targetIndex, projectile.attackerIndex];
          projectile.vx *= -1; projectile.vy *= -1; projectile.damage = 0; projectile.lastHitAt = null; projectile.tracks = false; projectile.homing = 0;
          continue;
        }
        for (const resolveTouch of projectile.skipOnTouchResolvers) resolveTouch(true);
        projectile.skipOnTouchResolvers.clear();
        if (!projectile.piercing && !projectile.sticksToEnemy && projectile.stuckTo !== 'boundary') removeProjectileFromPlay(projectile);
        if (projectile.sticksToEnemy && projectile.stuckTo !== 'boundary' && projectile.stuckTo !== 'enemy') {
          projectile.stuckTo = 'enemy';
          projectile.stuckTargetIndex = projectile.targetIndex;
          projectile.stuckOffsetX = projectile.x - target.x;
          projectile.stuckOffsetY = projectile.y - target.y;
          projectile.speed = 0;
          projectile.vx = 0;
          projectile.vy = 0;
          projectile.tracks = false;
          projectile.homing = 0;
          projectile.expiresAt = Infinity;
        }
        projectile.targetDirection = Math.atan2(target.vy, target.vx);
        projectile.lastHitAt = simulationTime;
        if (projectile.soundURL) playTransientSound(projectile.soundURL);
        if (projectile.damage > 0) {
          const damageTaken = projectile.preview ? projectile.damage : combatStateActive(target, 'IFrames') ? 0 : Math.min(target.health, projectile.damage);
          if (!projectile.preview) {
            if (damageTaken > 0) runMovesForCondition(projectile.targetIndex, 'damaged', getDamageSourceSide(projectile.attackerIndex, projectile.targetIndex));
            target.health = Math.max(0, target.health - damageTaken);
            playWinnerSoundIfNeeded();
            if (matchEnded) {
              projectile.complete?.(false);
              continue;
            }
          }
          addDamagePopup(projectile.targetIndex, target.x + (Math.random() * 24 - 12), target.y - target.size / 2 - 18, damageTaken);
        }
        projectile.damage = Math.max(0, projectile.damage - projectile.damageDeduction);
        if (!projectile.completed) {
          projectile.completed = true;
          projectile.complete?.(true);
          projectile.complete = null;
        }
        if (projectile.cancelOnTouch) {
          cancelProjectilesById(projectile.idKey, projectile);
          continue;
        }
        if (!projectile.piercing) continue;
      }
    }

    if (boundaryTouched) {
      for (const resolveTouch of projectile.skipOnTouchResolvers) resolveTouch(true);
      projectile.skipOnTouchResolvers.clear();
      if (!projectile.completed) {
        projectile.completed = true;
        projectile.complete?.(true);
        projectile.complete = null;
      }
      if (projectile.cancelOnTouch) {
        cancelProjectilesById(projectile.idKey, projectile);
        continue;
      }
    }

    if (projectile.stuckTo && projectileTouchesSquare(projectile, spawnedBy, squares[1 - spawnedByIndex])) {
      for (const resolveTouch of projectile.skipOnTouchResolvers) resolveTouch(true);
      projectile.skipOnTouchResolvers.clear();
      const ownerHitReady = projectile.ownerLastHitAt === null ||
        (projectile.hitRate > 0 && simulationTime >= projectile.ownerLastHitAt + projectile.hitRate);
      if (projectile.hitSelfWhenStuck && ownerHitReady && projectile.damage > 0) {
        projectile.ownerLastHitAt = simulationTime;
        if (projectile.soundURL) playTransientSound(projectile.soundURL);
        const damageTaken = projectile.preview ? projectile.damage : combatStateActive(spawnedBy, 'IFrames') ? 0 : Math.min(spawnedBy.health, projectile.damage);
        if (!projectile.preview && damageTaken > 0) {
          runMovesForCondition(spawnedByIndex, 'damaged', getDamageSourceSide(projectile.targetIndex, spawnedByIndex));
          spawnedBy.health = Math.max(0, spawnedBy.health - damageTaken);
          playWinnerSoundIfNeeded();
        }
        if (damageTaken > 0) addDamagePopup(spawnedByIndex, spawnedBy.x + (Math.random() * 24 - 12), spawnedBy.y - spawnedBy.size / 2 - 18, damageTaken);
        if (matchEnded) continue;
      }
      if (projectile.cancelOnTouch) {
        cancelProjectilesById(projectile.idKey, projectile);
        continue;
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
    const homingTarget = projectile.advanced?.homingEnabled && projectile.advanced?.orbit?.enabled
      ? squares[projectile.targetIndex]
      : null;
    const rotation = homingTarget && homingTarget.health > 0
      ? Math.atan2(homingTarget.y - projectile.y, homingTarget.x - projectile.x)
      : projectile.rotateToDirection
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
      hitbox.shape === (selectedNode.shape || 'Square') &&
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
      drawHitboxShape(ctx, selectedNode.shape || 'Square', selectedNode.width, selectedNode.height);
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
    drawHitboxShape(ctx, hitbox.shape || 'Square', hitbox.width, hitbox.height);
    ctx.restore();
  }

  const drawVelocityDistance = (square, remaining) => {
    ctx.save();
    ctx.font = '700 14px "DM Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.setLineDash([]);
    ctx.lineJoin = 'round';
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#20211f';
    ctx.fillStyle = '#fff';
    const label = String(Math.max(0, Math.ceil(remaining)));
    const x = square.x;
    const y = square.y + square.size / 2 + 24;
    ctx.strokeText(label, x, y);
    ctx.fillText(label, x, y);
    ctx.restore();
  };
  const countedSquares = new Set();
  for (const movement of activeVelocityMoves) {
    const square = squares[movement.squareIndex];
    if (!square) continue;
    drawVelocityDistance(square, movement.distance - movement.travelled);
    countedSquares.add(square);
  }
  squares.forEach(square => {
    if (!countedSquares.has(square) && square.velocityDistanceRemaining === 0 && simulationTime < square.velocityDistanceUntil) {
      drawVelocityDistance(square, 0);
    }
  });

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
    if (square.health > 0) {
      drawDebugGuyDirections(square, squares[1 - index]);
      drawDebugMovementArrow(square);
    }
  }

  ctx.restore();
}

function drawDebugMovementArrow(square) {
  const velocity = Math.hypot(square.vx, square.vy);
  const directionX = velocity > 0 ? square.vx / velocity : square.startDirectionX;
  const directionY = velocity > 0 ? square.vy / velocity : square.startDirectionY;
  const startX = square.x - directionX * 14;
  const startY = square.y - directionY * 14;
  const tipX = square.x + directionX * 14;
  const tipY = square.y + directionY * 14;
  const headLength = 10;
  const headWidth = 8;
  const baseX = tipX - directionX * headLength;
  const baseY = tipY - directionY * headLength;
  const perpX = -directionY * headWidth;
  const perpY = directionX * headWidth;

  ctx.save();
  ctx.setLineDash([]);
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = '#20211f';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(tipX, tipY);
  ctx.stroke();
  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 2.25;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(tipX, tipY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(tipX, tipY);
  ctx.lineTo(baseX + perpX, baseY + perpY);
  ctx.lineTo(baseX - perpX, baseY - perpY);
  ctx.closePath();
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.strokeStyle = '#20211f';
  ctx.lineWidth = 2;
  ctx.stroke();
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

  if (combatStateActive(a, 'NoCollision') || combatStateActive(b, 'NoCollision')) return false;
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
    visualMaskContext.roundRect(-half, -half, square.size, square.size, getSquareCornerPadding(square));
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
    square.velocityDistanceRemaining = Math.max(0, movement.distance - movement.travelled);
    movement.lastX = square.x;
    movement.lastY = square.y;
    if (movement.travelled >= movement.distance) {
      if (movement.changesDirection && !movement.preview) {
        square.vx = Math.cos(movement.direction) * movement.previousSpeed;
        square.vy = Math.sin(movement.direction) * movement.previousSpeed;
      } else if (movement.previousSpeed > 0) {
        square.vx = Math.cos(movement.previousDirection) * movement.previousSpeed;
        square.vy = Math.sin(movement.previousDirection) * movement.previousSpeed;
      } else {
        square.vx = movement.previousVx;
        square.vy = movement.previousVy;
      }
      square.speed = movement.previousSpeed;
      square.velocityDistanceRemaining = 0;
      square.velocityDistanceUntil = simulationTime + 0.5;
      activeVelocityMoves.splice(index, 1);
      movement.complete?.(true);
    }
  }
}

function draw(time) {
  const dt = isRunning || isPreviewingMove || matchEnded ? Math.min((time - lastTime) / 1000 || 0, 0.032) * gameSpeed : 0;
  lastTime = time;
  simulationTime += dt;
  updateTimedCombatStates();
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
        for (const projectile of activeProjectiles) {
          if (projectile.stuckTo === 'enemy' && projectile.stuckTargetIndex === index) {
            applyProjectileBounceDamage(projectile, index, square);
            if (matchEnded) break;
          }
        }
      }
    }
    if (isRunning) {
      const collision = resolveGuyCollision();
      if (collision) {
        runMovesForCondition(0, 'collision', collision.sideA);
        runMovesForCondition(1, 'collision', collision.sideB);
      }
      advanceDirectionMoves(dt);
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
    const spriteDrawSize = replacement ? square.size * replacement.size : square.size;
    const spriteDrawHalf = spriteDrawSize / 2;
    ctx.save();
    ctx.translate(square.x, square.y);
    const facingRotation = replacement?.faceTowardsEnemy
      ? Math.atan2(opponent.y - square.y, opponent.x - square.x) + Math.PI / 2
      : 0;
    ctx.rotate(square.rotation + facingRotation + (replacement?.rotation || 0) * Math.PI / 180);
    if (flipSprite) ctx.scale(-1, 1);
    ctx.beginPath();
    ctx.roundRect(-half, -half, square.size, square.size, getSquareCornerPadding(square));
    if (displayImage) {
      const displayFrame = replacement
        ? getAnimatedVisualFrame(displayImage, replacement.animationStartedAt)
        : displayImage === square.image
          ? getAnimatedVisualFrame(displayImage, displayImage.animationStartedAt)
          : displayImage;
      ctx.save();
      if (!replacement) ctx.clip();
      if (replacement) ctx.globalAlpha = 1;
      ctx.drawImage(displayFrame, -spriteDrawHalf, -spriteDrawHalf, spriteDrawSize, spriteDrawSize);
      ctx.restore();
    } else {
      ctx.fillStyle = square.color;
      ctx.fill();
    }
    const flashOpacity = getActiveFlashOpacity(index);
    if (flashOpacity > 0) {
      if (displayImage) {
        ctx.save();
        ctx.globalAlpha = Math.min(1, flashOpacity);
        ctx.beginPath();
        ctx.roundRect(-half, -half, square.size, square.size, getSquareCornerPadding(square));
        if (!replacement) ctx.clip();
        ctx.drawImage(getFlashedImage(displayImage === square.image ? getAnimatedVisualFrame(displayImage, displayImage.animationStartedAt) : displayImage), -spriteDrawHalf, -spriteDrawHalf, spriteDrawSize, spriteDrawSize);
        ctx.restore();
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
    ctx.fillStyle = popup.amount < 0 ? '#69e66d' : '#ffd52a';
    const label = popup.amount < 0 ? `+${Math.abs(popup.amount)}` : `-${popup.amount}`;
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
