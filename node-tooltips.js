const panel = document.querySelector('.move-node-properties');
if (panel) {
  const tip = document.createElement('div');
  tip.className = 'node-property-tooltip';
  tip.id = 'node-property-tooltip';
  tip.setAttribute('role', 'tooltip');
  tip.hidden = true;
  document.body.append(tip);

  const byId = {
    'hitbox-damage': 'Damage this hitbox deals when it hits the opponent.',
    'hitbox-size-x': 'The hitbox width, relative to the character size.', 'hitbox-size-y': 'The hitbox height, relative to the character size.',
    'hitbox-position-x': 'Horizontal offset of the hitbox from the character center.', 'hitbox-position-y': 'Vertical offset of the hitbox from the character center.', 'hitbox-rotation-value': 'The angle the hitbox faces.', 'hitbox-rotation-dial': 'The angle the hitbox faces.',
    'hitbox-time': 'How long this hitbox stays active, in seconds.', 'hitbox-shape': 'The outline used to detect hits for this hitbox.', 'hitbox-anchored': 'Keep the hitbox fixed in place instead of following its owner.', 'hitbox-hit-self': 'Allow this hitbox to hit the character that created it.',
    'projectile-id': 'A tag used to identify and select this projectile.', 'projectile-cancel-id': 'Cancel projectiles that use this ID.', 'projectile-spawn-at-id': 'Spawn this projectile at the position of another projectile with this ID.',
    'projectile-stacks': 'Allow this projectile to coexist with other projectiles instead of replacing them.', 'projectile-damage': 'Damage dealt when this projectile hits.', 'projectile-speed': 'How quickly the projectile travels.', 'projectile-time': 'How long the projectile exists, in seconds.', 'projectile-rotate-speed': 'How quickly the projectile spins, in degrees per second.',
    'projectile-rotation-value': 'The projectile’s initial travel direction.', 'projectile-rotation-dial': 'The projectile’s initial travel direction.', 'projectile-random': 'Choose a random travel direction.', 'projectile-rotate-to-direction': 'Rotate the projectile image to face its direction of travel.', 'projectile-tracks': 'Make the projectile aim toward and follow the opponent.',
    'projectile-angle-offset': 'Maximum angle offset allowed while tracking the opponent.', 'projectile-homing': 'How quickly the projectile turns toward its target, in degrees per second.', 'projectile-piercing': 'Let the projectile pass through targets and hit them repeatedly.', 'projectile-hit-rate': 'Minimum time between hits on the same target, in seconds.', 'projectile-damage-deduction': 'Damage subtracted after each hit by a piercing projectile.', 'projectile-size': 'The projectile’s starting size multiplier.', 'projectile-end-size': 'The projectile’s size when its lifetime ends.', 'projectile-bounce-count': 'Maximum number of times the projectile can bounce.', 'projectile-falloff': 'Damage reduction as the projectile travels.',
    'advanced-projectile-behavior': 'Choose whether this node affects all matching projectiles, only earlier ones, or only later ones.', 'advanced-projectile-id': 'A tag used to identify and select matching projectiles.', 'advanced-projectile-sticks': 'Make the projectile stick when it collides.', 'advanced-projectile-boundaries': 'Make the stuck projectile interact with arena boundaries.', 'advanced-projectile-boundary-damage': 'Damage dealt while the projectile is inside the boundary.', 'advanced-projectile-enemy': 'Treat the opposing character as the projectile’s enemy target.', 'advanced-projectile-bounce-damage': 'Damage dealt when the projectile bounces off a character.', 'advanced-projectile-hit-self': 'Allow the projectile to hit its owner.', 'advanced-projectile-skip-on-touch': 'Jump to a selected node when this projectile touches something.', 'advanced-projectile-cancel-on-touch': 'Cancel the move when this projectile touches something.',
    'advanced-piercing': 'Let the projectile pass through targets and hit them repeatedly.', 'advanced-hit-rate': 'Minimum time between hits on the same target, in seconds.', 'advanced-damage-deduction': 'Damage subtracted after each hit by a piercing projectile.', 'advanced-homing-enabled': 'Make the projectile turn toward its target.', 'advanced-homing': 'How quickly the projectile turns toward its target, in degrees per second.', 'advanced-disable-all': 'Disable homing on all matching projectiles.',
    'advanced-orbit-enabled': 'Make the projectile orbit around its owner.', 'advanced-orbit-speed': 'How quickly the projectile moves around its orbit.', 'advanced-orbit-starting-direction': 'The angle where the projectile begins its orbit.', 'advanced-orbit-starting-direction-dial': 'The angle where the projectile begins its orbit.', 'advanced-orbit-random': 'Choose a random starting angle for the orbit.', 'advanced-orbit-track-enemy': 'Aim the orbit toward the opponent.', 'advanced-orbit-aligned': 'Keep the projectile aligned with the orbital path.', 'advanced-orbit-counter-clockwise': 'Make the projectile orbit counter-clockwise.', 'advanced-orbit-target-hitbox': 'Apply the orbit effect only to selected hitbox targets.', 'advanced-orbit-immune': 'Make the orbiting projectile immune to damage.', 'advanced-orbit-distance': 'Distance between the projectile and its orbital center.', 'advanced-orbit-indestructible': 'Prevent the orbiting projectile from being destroyed.', 'advanced-orbit-phase-through': 'Allow the projectile to pass through arena boundaries.',
    'advanced-change-property': 'Change the selected properties of matching projectiles.', 'advanced-change-size': 'Set the new projectile size multiplier.', 'advanced-change-speed': 'Set the new projectile travel speed.', 'advanced-change-damage': 'Set the new projectile damage.', 'advanced-change-time': 'Set the new projectile lifetime, in seconds.', 'advanced-change-bounces': 'Set the new projectile bounce count.', 'advanced-transfer': 'Transfer matching projectiles to the other character.', 'advanced-transfer-reverse': 'Reverse the direction of projectile transfer.',
    'variable-value': 'The name used to reference this variable in other properties.', 'variable-data-value': 'The value assigned to this variable. Use $name to reference another variable.', 'variable-math': 'Evaluate supported arithmetic in a numeric variable value.', 'variable-global': 'Keep this variable shared between moves instead of resetting it for each move.', 'variable-remove': 'Remove the variable instead of assigning a value.', 'variable-target-of-hitbox': 'Apply this variable node only to selected hitbox targets.',
    'state-node-type': 'Choose which character state this node changes.', 'state-node-value': 'The value applied to the selected state.', 'state-node-time': 'How long the state lasts, in seconds.', 'state-node-target-of-hitbox': 'Apply this state only to selected hitbox targets.',
    'random-skip-add': 'Add a possible destination to this random branch.', 'random-skip-stack-nodes': 'Run selected destination nodes alongside the current move.', 'random-skip-after-hit-landed': 'Wait for a hit to land before choosing a destination.', 'random-skip-variable-name': 'The variable to check before taking this branch.', 'random-skip-variable-value': 'The value the variable must match.', 'random-skip-target-of-hitbox': 'Apply this branch only to selected hitbox targets.',
    'signal-node-target': 'Choose which node receives or sends this signal.', 'signal-node-value': 'The signal ID used to match senders and receivers.', 'signal-node-receive': 'Switch between sending a signal and waiting to receive one.',
    'skip-node-target': 'Choose the node execution jumps to.', 'skip-after-hit-landed': 'Wait until a hit lands before continuing.', 'skip-variable-name': 'The variable to check before taking this branch.', 'skip-variable-value': 'The value the variable must match.', 'skip-target-of-hitbox': 'Apply this skip only to selected hitbox targets.',
    'comment-text': 'Really bro', 'loop-start-node': 'Choose which earlier node the loop repeats from.', 'loop-amount': 'How many times to repeat the nodes in the loop.',
    'cancel-never-repeat': 'Prevent this move from being used again after it is canceled.', 'cancel-move-cooldown': 'How long before this move can be used again, in seconds.', 'cancel-pattern-move': 'Choose the move to continue into after this node.',
    'sound-node-volume': 'Playback volume as a percentage.', 'sound-node-volume-number': 'Playback volume as a percentage.', 'sound-node-start': 'Delay sound playback by this many seconds.', 'sound-node-fade': 'Fade the sound in at the start and out at the end.', 'sound-node-stack': 'Allow this sound to play over other sounds from the move.', 'sound-node-cancel': 'Stop previous sounds from this move when this sound plays.',
    'wait-node-time': 'How long to pause before the move continues, in seconds.', 'wait-node-after-damage': 'Wait until a hit lands before continuing.',
    'velocity-speed': 'How quickly the character moves.', 'velocity-distance': 'How far the character moves before stopping.', 'velocity-rotation-value': 'The direction the character moves.', 'velocity-rotation-dial': 'The direction the character moves.', 'velocity-random': 'Choose a random movement direction.', 'velocity-track-enemy': 'Move toward the opponent.', 'velocity-track-opposite': 'Move in the direction opposite the current direction.', 'velocity-changes-direction': 'Change the character’s ongoing movement direction.', 'velocity-target-of-hitbox': 'Apply this movement only to selected hitbox targets.',
    'visual-node-type': 'Choose the kind of visual effect to show.', 'visual-node-scale': 'Scale of the image relative to its original size.', 'visual-node-position-x': 'Horizontal offset from the character center.', 'visual-node-position-y': 'Vertical offset from the character center.', 'visual-rotation-value': 'The image’s rotation angle.', 'visual-rotation-dial': 'The image’s rotation angle.', 'visual-node-rotate-towards-enemy': 'Rotate the image to face the opponent.', 'visual-node-speed': 'How quickly the visual image moves.', 'visual-node-towards-enemy': 'Move the visual image toward the opponent.', 'visual-node-mask': 'Use the character image transparency as a mask.', 'visual-node-opacity': 'How transparent the visual effect is.', 'visual-node-target-of-hitbox': 'Apply this visual only to selected hitbox targets.', 'visual-node-spawn-at-projectile': 'Place the visual at a projectile with this ID.', 'sprite-replace-time': 'How long until the character returns to its idle sprite.', 'sprite-replace-size': 'Scale of the replacement sprite.', 'sprite-replace-rotation': 'Rotation of the replacement sprite.', 'sprite-replace-face-enemy': 'Make the replacement sprite face the opponent.', 'visual-node-time': 'How long the visual remains active, in seconds.', 'visual-node-fade-in': 'How long the visual takes to fade in.', 'visual-node-fade-out': 'How long the visual takes to fade away.'
  };
  const byName = [
    [/damage to target/i, 'Damage dealt when this hitbox or projectile hits.'], [/^damage$/i, 'Damage dealt by this projectile.'], [/^speed$/i, 'How quickly this projectile, visual, or movement travels.'], [/distance/i, 'Distance between this projectile and its target or center.'], [/time/i, 'How long this node or effect remains active, in seconds.'],
    [/fade in/i, 'How long the visual takes to fade in.'], [/fade out/i, 'How long the visual takes to fade away.'], [/rotation|direction/i, 'The angle or direction this property faces or moves.'], [/rotate speed/i, 'How quickly the projectile spins, in degrees per second.'], [/^shape$/i, 'The outline used to detect hits for this hitbox.'], [/^x size/i, 'The hitbox width, relative to the character.'], [/^y size/i, 'The hitbox height, relative to the character.'], [/^x$/i, 'Horizontal offset from the character center.'], [/^y$/i, 'Vertical offset from the character center.'], [/anchored/i, 'Keep the hitbox fixed in place instead of following its owner.'], [/hit self/i, 'Allow the attack or effect to hit its owner.'],
    [/^sound$|hit sound/i, 'The audio played when this node triggers or hits.'], [/destroy sound/i, 'The audio played when the projectile is destroyed.'], [/volume/i, 'Playback volume as a percentage.'], [/^start$/i, 'Starting delay or direction used by this property.'], [/^image$|^data$/i, 'The image asset used by this projectile or visual effect.'], [/^projectile id$/i, 'A tag used to identify and select matching projectiles.'], [/spawn at projectile/i, 'Spawn this at the position of a projectile with this ID.'], [/cancel/i, 'Cancel projectiles matching this ID.'], [/^size$|^scale$/i, 'The size multiplier applied to this projectile or visual.'], [/end size/i, 'The projectile size when its lifetime ends.'], [/bounce count/i, 'The maximum number of times the projectile can bounce.'], [/fall-off/i, 'Damage reduction applied as the projectile travels.'],
    [/random/i, 'Choose a random direction or starting value.'], [/track/i, 'Aim toward or follow the opponent.'], [/angle offset/i, 'Maximum angle offset allowed while tracking.'], [/homing/i, 'How quickly the projectile turns toward its target.'], [/piercing damage deduction/i, 'Damage subtracted after each piercing hit.'], [/hit rate/i, 'Minimum time between hits on the same target.'], [/piercing/i, 'Let the projectile pass through targets and hit repeatedly.'], [/behavior/i, 'Choose which matching projectiles this node affects.'], [/sticks/i, 'Make the projectile stick when it collides.'], [/boundaries/i, 'Make the stuck projectile interact with arena boundaries.'], [/bounce damage/i, 'Damage dealt when the projectile bounces off a character.'], [/^value$/i, 'The value assigned to this variable or state.'], [/^type$/i, 'Choose the kind of state or visual effect.'], [/^text$/i, 'Really bro'], [/chance/i, 'The probability, as a percentage, of choosing this destination.'], [/^node$/i, 'Choose the node this action targets.'], [/^position$/i, 'Position offset from the character center.'], [/^opacity/i, 'How transparent the visual effect is.'], [/^mask/i, 'Use image transparency as a mask.'], [/^skip$/i, 'Jump execution to the selected node.'], [/^transfer$/i, 'Transfer matching projectiles to the other character.'], [/^reverse$/i, 'Reverse the direction of projectile transfer.'], [/^global$/i, 'Keep this variable shared between moves.'], [/^math$/i, 'Evaluate arithmetic in numeric variable values.'], [/^remove$/i, 'Remove the variable instead of assigning a value.'], [/^if variable$/i, 'Only take this branch when the named variable matches the value.'], [/^loop amount$/i, 'How many times to repeat the looped nodes.'], [/^start at$/i, 'Choose which earlier node the loop repeats from.'], [/^never repeat move$/i, 'Prevent this move from being used again after it is canceled.'], [/move cooldown/i, 'How long before this move can be used again.'], [/after hit landed/i, 'Wait until a hit lands before continuing.'], [/stack nodes/i, 'Run destination nodes alongside the current move.'], [/^stacks?$|^stack$/i, 'Allow this object or sound to coexist with others.'], [/target of hitbox/i, 'Apply this node only to selected hitbox targets.'], [/face towards enemy/i, 'Make the sprite face the opponent.'], [/rotate towards enemy/i, 'Rotate the image to face the opponent.'], [/towards enemy/i, 'Move the visual toward the opponent.']
  ];
  let active = null;
  function propertyText(el) {
    if (el.matches('.hitbox-rotation-setting, .visual-rotation-setting')) return el.querySelector('span')?.textContent.trim() || 'Rotation';
    if (el.matches('.hitbox-position-settings, .visual-position-settings')) return 'Position';
    const aria = el.getAttribute('aria-label') || el.querySelector('[aria-label]')?.getAttribute('aria-label');
    if (aria) return aria.replace(/\s+(slider|in degrees|percent)$/i, '');
    if (el.matches('.node-target-button')) return el.textContent.trim() || 'Node target';
    if (el.matches('.hitbox-sound-setting, .sound-file-setting, .projectile-image-setting, .visual-data-setting')) return el.querySelector('span')?.textContent.trim() || 'Asset';
    if (el.matches('.skip-property-label')) return el.textContent.trim();
    const control = el.querySelector('input,select,textarea');
    if (control?.id && byId[control.id]) return el.childNodes.length ? [...el.childNodes].filter(n => n.nodeType === Node.TEXT_NODE).map(n => n.textContent).join(' ').trim().replace(/[:：]$/, '') : control.id;
    return [...el.childNodes].filter(n => n.nodeType === Node.TEXT_NODE).map(n => n.textContent).join(' ').replace(/\s+/g, ' ').trim().replace(/[:：]$/, '') || el.textContent.trim();
  }
  function explain(el) {
    const control = el.matches('input,select,textarea,button') ? el : el.querySelector('input,select,textarea,button');
    if (control?.id && byId[control.id]) return byId[control.id];
    if (el.matches('.node-target-button')) {
      if (el.id.includes('loop-start')) return byId['loop-start-node'];
      if (el.id.includes('skip') || el.id.includes('signal')) return 'Choose the node this action targets.';
      return 'Choose the destination node for this branch.';
    }
    if (el.classList.contains('random-skip-row')) return 'Set the chance of choosing this destination.';
    const name = propertyText(el);
    const result = byName.find(([re]) => re.test(name));
    return result ? result[1] : 'Controls the ' + (name || 'setting').toLowerCase() + ' for this node.';
  }
  function findTarget(event) {
    const raw = event.target;
    const fileButton = raw.closest('.file-picker-button');
    if (fileButton && panel.contains(fileButton)) return fileButton.closest('.hitbox-sound-setting, .sound-file-setting, .projectile-image-setting, .visual-data-setting') || fileButton;
    const prop = raw.closest('label, .hitbox-rotation-setting, .visual-rotation-setting, .hitbox-position-settings, .visual-position-settings, .hitbox-sound-setting, .sound-file-setting, .projectile-image-setting, .visual-data-setting, .node-target-button, .skip-property-label, .default-sound-button, .random-skip-row');
    return prop && panel.contains(prop) ? (prop.matches('.default-sound-button') ? prop.closest('.hitbox-sound-setting') : prop) : null;
  }
  function hide() {
    tip.hidden = true;
    if (active) active.removeAttribute('aria-describedby');
    active = null;
  }
  function show(el) {
    if (active && active !== el) active.removeAttribute('aria-describedby');
    tip.textContent = explain(el);
    tip.hidden = false;
    el.setAttribute('aria-describedby', tip.id);
    const r = el.getBoundingClientRect();
    const maxWidth = Math.min(290, innerWidth - 24);
    tip.style.maxWidth = maxWidth + 'px';
    tip.style.left = Math.max(12, Math.min(innerWidth - maxWidth - 12, r.left + r.width / 2 - maxWidth / 2)) + 'px';
    tip.style.top = (r.top > 95 ? r.top - 9 : r.bottom + 9) + 'px';
    tip.classList.toggle('below', r.top <= 95);
    active = el;
  }
  panel.addEventListener('pointerover', e => { const el = findTarget(e); if (el) show(el); });
  panel.addEventListener('pointerout', e => { if (active && !active.contains(e.relatedTarget)) hide(); });
  panel.addEventListener('focusin', e => { const el = findTarget(e); if (el) show(el); });
  panel.addEventListener('focusout', e => { if (active && !active.contains(e.relatedTarget)) hide(); });
  window.addEventListener('scroll', hide, true);
  window.addEventListener('resize', hide);
}
