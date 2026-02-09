/* ═══════════════════════════════════════════
   BEFORE PATHWAYS — Game Engine
   ═══════════════════════════════════════════ */

(function() {
'use strict';

// ── Constants ──
const ASSET = {
  img:   'assets/img/',
  audio: 'assets/audio/',
  voice: 'assets/voice/'
};

const BGM_MAP = {
  'bgm-title':    'assets/audio/compliance-score.mp3',
  'bgm-pastoral': 'assets/audio/duty-of-care.mp3',
  'bgm-anthem':   'assets/audio/arithmetic-of-silence.mp3',
  'bgm-citizen':  'assets/audio/model-citizen.mp3',
  'bgm-zero':     'assets/audio/trust-zero.mp3'
};

const SAVE_KEY = 'before-pathways-save';
const SAVE_VERSION = 2;
const CROSSFADE_MS = 1200;
const METER_SHOW_MS = 3000;
const BGM_VOLUME = 0.55;
const SFX_VOLUME = 0.3;
const VOICE_VOLUME = 0.85;

// ── DOM refs (populated on init) ──
let $screen, $sceneBg, $char, $textbox, $cctv, $cctvRight;
let $meterToast, $mtC, $mtT, $mtE, $mtvC, $mtvT, $mtvE;
let $loading, $loadingFill;
let $btnSound, $btnVoice;

// ── Audio elements ──
const bgmA = new Audio();
const bgmB = new Audio();
bgmA.loop = true;
bgmB.loop = true;
const sfxJingle = new Audio(ASSET.audio + 'compliance-jingle.mp3');
sfxJingle.volume = SFX_VOLUME;
const voiceEl = new Audio();
voiceEl.volume = VOICE_VOLUME;

let activeBGM = null;
let activeBGMId = null;
let fadeInterval = null;

// ── State ──
let state = null;
let meterTimeout = null;

function initState() {
  state = {
    meters: { compliance: 50, trust: 85, exhaustion: 10 },
    currentScreen: 'title',
    history: [],
    choices: {},
    flags: {},
    audioEnabled: true,
    voiceEnabled: true,
    currentBGM: null,
    version: SAVE_VERSION,
    startedAt: new Date().toISOString()
  };
}

// ── Save / Load ──
function saveGame() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    return true;
  } catch(e) { return false; }
}

function loadGame() {
  try {
    var raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    var saved = JSON.parse(raw);
    if (saved.version !== SAVE_VERSION) return null;
    return saved;
  } catch(e) { return null; }
}

function hasSave() {
  return !!localStorage.getItem(SAVE_KEY);
}

function deleteSave() {
  localStorage.removeItem(SAVE_KEY);
}

// ── Meters ──
function applyEffects(effects) {
  if (!effects) return;
  var changed = false;
  var keys = ['compliance', 'trust', 'exhaustion'];
  // Also support short keys c/t/e
  var map = { c: 'compliance', t: 'trust', e: 'exhaustion' };

  for (var k in effects) {
    var fullKey = map[k] || k;
    if (keys.indexOf(fullKey) !== -1 && effects[k] !== 0) {
      var old = state.meters[fullKey];
      state.meters[fullKey] = Math.max(0, Math.min(100, state.meters[fullKey] + effects[k]));
      if (state.meters[fullKey] !== old) changed = true;
    }
  }
  if (changed) {
    playJingle();
    showMeterToast();
  }
}

function showMeterToast() {
  if (!$meterToast) return;
  $mtC.style.width = state.meters.compliance + '%';
  $mtT.style.width = state.meters.trust + '%';
  $mtE.style.width = state.meters.exhaustion + '%';
  $mtvC.textContent = state.meters.compliance;
  $mtvT.textContent = state.meters.trust;
  $mtvE.textContent = state.meters.exhaustion;
  $meterToast.classList.add('show');
  clearTimeout(meterTimeout);
  meterTimeout = setTimeout(function() {
    $meterToast.classList.remove('show');
  }, METER_SHOW_MS);
}

// ── Audio ──
function switchBGM(newId) {
  if (!state.audioEnabled) return;
  if (newId === activeBGMId) return;
  var url = BGM_MAP[newId];
  if (!url) return;

  var incoming = (activeBGM === bgmA) ? bgmB : bgmA;
  var outgoing = activeBGM;

  incoming.src = url;
  incoming.volume = 0;
  incoming.play().catch(function(){});

  // Clear any ongoing fade
  if (fadeInterval) clearInterval(fadeInterval);

  var steps = 24;
  var interval = CROSSFADE_MS / steps;
  var step = 0;

  fadeInterval = setInterval(function() {
    step++;
    var progress = step / steps;
    incoming.volume = Math.min(BGM_VOLUME, progress * BGM_VOLUME);
    if (outgoing) {
      outgoing.volume = Math.max(0, BGM_VOLUME * (1 - progress));
    }
    if (step >= steps) {
      clearInterval(fadeInterval);
      fadeInterval = null;
      if (outgoing) { outgoing.pause(); outgoing.currentTime = 0; }
    }
  }, interval);

  activeBGM = incoming;
  activeBGMId = newId;
  state.currentBGM = newId;
}

function playJingle() {
  if (!state.audioEnabled) return;
  sfxJingle.currentTime = 0;
  sfxJingle.play().catch(function(){});
}

function playVoice(clipId) {
  if (!state.audioEnabled || !state.voiceEnabled) return;
  voiceEl.pause();
  voiceEl.src = ASSET.voice + clipId + '.mp3';
  voiceEl.play().catch(function(){});
}

function stopVoice() {
  voiceEl.pause();
}

function toggleSound() {
  state.audioEnabled = !state.audioEnabled;
  updateAudioButtons();
  if (!state.audioEnabled) {
    if (activeBGM) activeBGM.pause();
    voiceEl.pause();
    sfxJingle.pause();
  } else if (activeBGMId) {
    activeBGM.play().catch(function(){});
  }
}

function toggleVoice() {
  state.voiceEnabled = !state.voiceEnabled;
  updateAudioButtons();
  if (!state.voiceEnabled) voiceEl.pause();
}

function updateAudioButtons() {
  if ($btnSound) {
    $btnSound.textContent = state.audioEnabled ? '\uD83D\uDD0A SOUND' : '\uD83D\uDD07 SOUND';
    $btnSound.classList.toggle('off', !state.audioEnabled);
  }
  if ($btnVoice) {
    $btnVoice.textContent = state.voiceEnabled ? '\uD83C\uDFA4 VOICE' : '\uD83C\uDFA4 VOICE';
    $btnVoice.classList.toggle('off', !state.voiceEnabled);
  }
}

// ── CCTV ──
var ACT_LABELS = {
  p: 'PROLOGUE: SEPT',
  lib: 'ACT I: LIBRARY — OCT',
  pshe: 'ACT I: PSHE — NOV',
  din: 'ACT I: DINNER — DEC',
  int: 'INTERLUDE: MIDNIGHT',
  blog: 'ACT II: BLOG — FEB',
  past: 'ACT II: PASTORAL — JAN',
  viral: 'ACT II: VIRAL — FEB',
  meet: 'ACT III: MEETING — MAR',
  con: 'ACT III: CONFRONTATION',
  ref: 'ACT III: THE REFERRAL',
  aft: 'ACT III: AFTERMATH — APR',
  sum: 'THE SUMMER — JUL',
  sfp: 'SIXTH FORM — SEPT',
  disc: 'THE DISCOVERY — JAN 2026',
  mono: 'AMELIA\'S MONOLOGUE',
  kitchen: 'THE KITCHEN',
  epilogue: 'EPILOGUE',
  e_: 'ENDING',
  interlude: '\u266A SOUNDTRACK \u266A',
  living: 'INTERLUDE: LIVING ROOM',
  credits: 'CREDITS',
  title: 'BEFORE PATHWAYS'
};

function updateCCTV(scene, screenId) {
  if (!$cctvRight) return;
  var label = '';
  if (scene.label) {
    label = scene.label;
  } else {
    for (var k in ACT_LABELS) {
      if (screenId.indexOf(k) === 0) { label = ACT_LABELS[k]; break; }
    }
  }
  var m = state.meters;
  $cctvRight.textContent = label + ' | C:' + m.compliance + ' T:' + m.trust + ' E:' + m.exhaustion;
}

// ── Text helpers ──
function esc(str) {
  var d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function formatText(text) {
  // Replace meter template tokens {{compliance}}, {{trust}}, {{exhaustion}}
  text = text.replace(/\{\{(compliance|trust|exhaustion)\}\}/g, function(_, key) {
    return state.meters[key] !== undefined ? state.meters[key] : '?';
  });
  // Allow basic formatting: *italic*, **bold**, line breaks
  return text
    .replace(/\n/g, '<br>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

// ── Segment renderer ──
function renderSegment(seg) {
  // Conditional segments
  if (seg.condition && (!state.flags || !state.flags[seg.condition])) return null;

  var el = document.createElement('div');
  el.className = 'seg seg-' + seg.type;

  switch(seg.type) {
    case 'narrator':
      el.innerHTML = '<em>' + formatText(seg.text) + '</em>';
      break;
    case 'dialogue':
      el.innerHTML = '<span class="speaker">' + esc(seg.speaker) + '</span>' + formatText(seg.text);
      break;
    case 'system':
      el.innerHTML = formatText(seg.text);
      break;
    case 'warning':
      el.innerHTML = '<strong>\u26A0 ' + esc(seg.label || 'WARNING') + '</strong><br>' + formatText(seg.text);
      break;
    case 'quote':
      el.innerHTML = formatText(seg.text);
      break;
    case 'googling':
      el.innerHTML = '\uD83D\uDD0D ' + formatText(seg.text);
      break;
    case 'prompt':
      el.innerHTML = formatText(seg.text);
      break;
    case 'source':
      el.innerHTML = formatText(seg.text);
      break;
    case 'punch':
      el.innerHTML = formatText(seg.text);
      break;
    default:
      el.innerHTML = formatText(seg.text);
  }
  return el;
}

// ── Character ──
var currentCharFile = '';

function setCharacters(chars) {
  if (!chars || chars.length === 0) {
    $char.classList.add('hidden');
    currentCharFile = '';
    return;
  }
  var ch = chars[0];
  var filename = ch.id + '-' + ch.pose + '.png';
  var posClass = 'pos-' + ch.pos;

  if (currentCharFile === filename && $char.classList.contains(posClass)) return;

  $char.style.opacity = '0';
  setTimeout(function() {
    $char.src = ASSET.img + filename;
    $char.alt = ch.id + ' (' + ch.pose + ')';
    $char.className = posClass;
    $char.onerror = function() { $char.classList.add('hidden'); };
    currentCharFile = filename;
    $char.style.opacity = '1';
  }, 150);
}

// ── Background ──
function setBackground(bgFile) {
  if (!bgFile) {
    $sceneBg.style.backgroundImage = '';
    return;
  }
  $sceneBg.style.opacity = '0';
  setTimeout(function() {
    $sceneBg.style.backgroundImage = "url('" + ASSET.img + bgFile + "')";
    $sceneBg.style.opacity = '1';
  }, 200);
}

// ── Create UI elements ──
function createNextButton(handler) {
  var btn = document.createElement('button');
  btn.className = 'btn-next';
  btn.textContent = 'NEXT \u25B6\u25B6';
  btn.setAttribute('aria-label', 'Continue to next scene');
  btn.addEventListener('click', handler);
  return btn;
}

// ── Clear overlays ──
function clearOverlays() {
  var overlays = $screen.querySelectorAll('.title-wrap,.ending-wrap,.interlude-wrap');
  for (var i = 0; i < overlays.length; i++) overlays[i].remove();
}

// ── Router ──
function evaluateCondition(condStr) {
  var match = condStr.match(/^(\w+)\s*(>=|<=|>|<|===?)\s*(\d+)$/);
  if (!match) return false;
  var meter = match[1], op = match[2], val = parseInt(match[3], 10);
  var actual = state.meters[meter];
  if (actual === undefined) return false;
  switch(op) {
    case '>=': return actual >= val;
    case '<=': return actual <= val;
    case '>':  return actual > val;
    case '<':  return actual < val;
    case '==': case '===': return actual === val;
  }
  return false;
}

function resolveRouter(scene) {
  for (var i = 0; i < scene.routes.length; i++) {
    if (evaluateCondition(scene.routes[i].condition)) return scene.routes[i].next;
  }
  return scene.routes[scene.routes.length - 1].next;
}

// ── Preloading ──
function preloadNextScene(screenId) {
  var scene = SCENES[screenId];
  if (!scene) return;
  var targets = [];
  if (scene.next) targets.push(scene.next);
  if (scene.choices) {
    for (var i = 0; i < scene.choices.length; i++) targets.push(scene.choices[i].next);
  }
  for (var j = 0; j < targets.length; j++) {
    var next = SCENES[targets[j]];
    if (!next) continue;
    if (next.bg) { var img = new Image(); img.src = ASSET.img + next.bg; }
    if (next.chars) {
      for (var k = 0; k < next.chars.length; k++) {
        var c = next.chars[k];
        var img2 = new Image();
        img2.src = ASSET.img + c.id + '-' + c.pose + '.png';
      }
    }
  }
}

// ── Type-specific renderers ──

function renderTitle(scene) {
  clearOverlays();
  $sceneBg.style.backgroundImage = '';
  $char.classList.add('hidden');
  $textbox.style.display = 'none';

  var wrap = document.createElement('div');
  wrap.className = 'title-wrap';

  var logo = document.createElement('div');
  logo.className = 'logo';
  logo.innerHTML = 'BEFORE<br>PATHWAYS';
  wrap.appendChild(logo);

  var sub = document.createElement('div');
  sub.className = 'sub';
  sub.textContent = scene.subtitle || "She wasn't radicalised. She was educated.";
  wrap.appendChild(sub);

  if (scene.description) {
    var desc = document.createElement('p');
    desc.className = 'desc';
    desc.innerHTML = formatText(scene.description);
    wrap.appendChild(desc);
  }

  // Content warning
  var cw = document.createElement('p');
  cw.className = 'cw';
  cw.textContent = 'Content warning: child sexual exploitation, institutional failure, surveillance. All statistics are real and sourced from UK government data.';
  wrap.appendChild(cw);

  var btnRow = document.createElement('div');
  btnRow.className = 'btn-row';

  var beginBtn = document.createElement('button');
  beginBtn.className = 'btn-next';
  beginBtn.textContent = 'BEGIN \u25B6\u25B6';
  beginBtn.addEventListener('click', function() {
    deleteSave();
    initState();
    renderScreen(scene.next);
  });
  btnRow.appendChild(beginBtn);

  if (hasSave()) {
    var contBtn = document.createElement('button');
    contBtn.className = 'btn-continue';
    contBtn.textContent = 'CONTINUE';
    contBtn.addEventListener('click', function() {
      var saved = loadGame();
      if (saved) {
        state = saved;
        updateAudioButtons();
        renderScreen(state.currentScreen);
      }
    });
    btnRow.appendChild(contBtn);
  }

  wrap.appendChild(btnRow);
  $screen.appendChild(wrap);
}

function renderNarrative(scene, screenId) {
  clearOverlays();
  $textbox.style.display = '';
  setBackground(scene.bg);
  setCharacters(scene.chars);

  $textbox.innerHTML = '';
  var container = document.createElement('div');
  container.className = 'segments';

  if (scene.segments) {
    for (var i = 0; i < scene.segments.length; i++) {
      var el = renderSegment(scene.segments[i]);
      if (el) container.appendChild(el);
    }
  }
  $textbox.appendChild(container);

  if (scene.next) {
    var btn = createNextButton(function() { renderScreen(scene.next); });
    $textbox.appendChild(btn);
  }
}

function renderChoice(scene, screenId) {
  clearOverlays();
  $textbox.style.display = '';
  setBackground(scene.bg);
  setCharacters(scene.chars);

  $textbox.innerHTML = '';
  var container = document.createElement('div');
  container.className = 'segments';

  if (scene.segments) {
    for (var i = 0; i < scene.segments.length; i++) {
      var el = renderSegment(scene.segments[i]);
      if (el) container.appendChild(el);
    }
  }
  $textbox.appendChild(container);

  var choicesDiv = document.createElement('div');
  choicesDiv.id = 'choices';
  choicesDiv.setAttribute('role', 'group');
  choicesDiv.setAttribute('aria-label', 'Choose how Amelia responds');

  for (var j = 0; j < scene.choices.length; j++) {
    (function(choice, index) {
      var btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.setAttribute('tabindex', '0');
      btn.setAttribute('aria-label', 'Option ' + choice.key + ': ' + choice.text);

      var letter = document.createElement('span');
      letter.className = 'choice-letter';
      letter.setAttribute('aria-hidden', 'true');
      letter.textContent = choice.key;

      var text = document.createElement('span');
      text.innerHTML = formatText(choice.text);

      btn.appendChild(letter);
      btn.appendChild(text);

      btn.addEventListener('click', function() {
        // Disable all
        var allBtns = choicesDiv.querySelectorAll('.choice-btn');
        for (var x = 0; x < allBtns.length; x++) {
          allBtns[x].classList.add('disabled');
          allBtns[x].disabled = true;
        }
        btn.classList.add('selected');

        // Record choice
        state.choices[screenId] = choice.key;
        state.history.push({
          screenId: screenId,
          choiceKey: choice.key,
          timestamp: Date.now(),
          meters: { compliance: state.meters.compliance, trust: state.meters.trust, exhaustion: state.meters.exhaustion }
        });

        // Set flag
        if (choice.tag) {
          state.flags[screenId + '_' + choice.tag] = true;
        }

        // Apply effects
        applyEffects(choice.fx);

        // Advance
        setTimeout(function() { renderScreen(choice.next); }, 400);
      });

      choicesDiv.appendChild(btn);
    })(scene.choices[j], j);
  }

  $textbox.appendChild(choicesDiv);

  // Focus first choice
  setTimeout(function() {
    var first = choicesDiv.querySelector('.choice-btn');
    if (first) first.focus();
  }, 100);
}

function renderInterlude(scene, screenId) {
  clearOverlays();
  $sceneBg.style.backgroundImage = '';
  $char.classList.add('hidden');
  $textbox.style.display = 'none';

  var wrap = document.createElement('div');
  wrap.className = 'interlude-wrap';

  if (scene.title) {
    var title = document.createElement('div');
    title.className = 'int-title';
    title.textContent = '\u266A ' + scene.title + ' \u266A';
    wrap.appendChild(title);
  }

  // Music bars
  var bars = document.createElement('div');
  bars.className = 'music-bars';
  for (var i = 0; i < 5; i++) bars.appendChild(document.createElement('span'));
  wrap.appendChild(bars);

  // Segments
  if (scene.segments) {
    for (var j = 0; j < scene.segments.length; j++) {
      var seg = scene.segments[j];
      var el = document.createElement('div');
      if (seg.type === 'quote') {
        el.className = 'int-quote';
        el.innerHTML = formatText(seg.text);
      } else if (seg.type === 'source') {
        el.className = 'int-source';
        el.textContent = seg.text;
      } else {
        el.className = 'int-text';
        el.innerHTML = formatText(seg.text);
      }
      wrap.appendChild(el);
    }
  }

  if (scene.next) {
    var btn = createNextButton(function() { renderScreen(scene.next); });
    btn.style.marginTop = '1.5rem';
    wrap.appendChild(btn);
  }

  $screen.appendChild(wrap);
}

function renderEnding(scene) {
  clearOverlays();
  $sceneBg.style.backgroundImage = '';
  $char.classList.add('hidden');
  $textbox.style.display = 'none';

  var wrap = document.createElement('div');
  wrap.className = 'ending-wrap';

  if (scene.title) {
    var title = document.createElement('div');
    title.className = 'etitle';
    title.textContent = scene.title;
    wrap.appendChild(title);
  }

  var subEl = document.createElement('div');
  subEl.className = 'esub';
  subEl.textContent = 'Compliance: ' + state.meters.compliance + '/100';
  wrap.appendChild(subEl);

  if (scene.segments) {
    for (var i = 0; i < scene.segments.length; i++) {
      var seg = scene.segments[i];
      var el = document.createElement('p');
      if (seg.type === 'punch') {
        el.className = 'epunch';
      } else {
        el.className = 'etext';
      }
      el.innerHTML = formatText(seg.text);
      wrap.appendChild(el);
    }
  }

  if (scene.next) {
    var btn = createNextButton(function() { renderScreen(scene.next); });
    btn.style.marginTop = '1.5rem';
    wrap.appendChild(btn);
  }

  $screen.appendChild(wrap);
}

function renderCredits(scene) {
  clearOverlays();
  $sceneBg.style.backgroundImage = '';
  $char.classList.add('hidden');
  $textbox.style.display = 'none';

  var wrap = document.createElement('div');
  wrap.className = 'ending-wrap';

  var title = document.createElement('div');
  title.className = 'esub';
  title.style.fontSize = '1.3rem';
  title.style.marginBottom = '1.5rem';
  title.textContent = 'BEFORE PATHWAYS';
  wrap.appendChild(title);

  if (scene.segments) {
    for (var i = 0; i < scene.segments.length; i++) {
      var el = document.createElement('p');
      el.className = 'etext';
      el.innerHTML = formatText(scene.segments[i].text);
      wrap.appendChild(el);
    }
  }

  var btn = document.createElement('button');
  btn.className = 'btn-next';
  btn.style.marginTop = '1.5rem';
  btn.textContent = 'PLAY AGAIN \u25B6\u25B6';
  btn.addEventListener('click', function() {
    deleteSave();
    initState();
    renderScreen('title');
  });
  wrap.appendChild(btn);

  $screen.appendChild(wrap);
}

// ── Main renderer ──
function renderScreen(screenId) {
  var scene = SCENES[screenId];
  if (!scene) { console.error('Missing scene:', screenId); return; }

  // Router — immediate redirect, no visual
  if (scene.type === 'router') {
    var target = resolveRouter(scene);
    // Brief "..." display
    clearOverlays();
    $textbox.style.display = 'none';
    $char.classList.add('hidden');
    var dots = document.createElement('div');
    dots.className = 'title-wrap';
    dots.innerHTML = '<div style="color:var(--purple-lt);font-size:1.2rem">...</div>';
    $screen.appendChild(dots);
    setTimeout(function() { renderScreen(target); }, 800);
    return;
  }

  // Update state
  state.currentScreen = screenId;

  // Audio
  if (scene.audio && scene.audio.bgm) {
    switchBGM(scene.audio.bgm);
  }
  stopVoice();

  // CCTV
  updateCCTV(scene, screenId);

  // Route to type renderer
  switch(scene.type) {
    case 'title':     renderTitle(scene); break;
    case 'narrative':  renderNarrative(scene, screenId); break;
    case 'choice':     renderChoice(scene, screenId); break;
    case 'interlude':  renderInterlude(scene, screenId); break;
    case 'ending':     renderEnding(scene); break;
    case 'credits':    renderCredits(scene); break;
    default:           renderNarrative(scene, screenId);
  }

  // Auto-save
  saveGame();

  // Voice narration
  if (scene.audio && scene.audio.voice) {
    setTimeout(function() { playVoice(scene.audio.voice); }, 400);
  }

  // Show meters if requested
  if (scene.effects && scene.effects.showMeters) {
    showMeterToast();
  }

  // Preload next
  preloadNextScene(screenId);
}

// ── Keyboard navigation ──
document.addEventListener('keydown', function(e) {
  var key = e.key.toUpperCase();

  // A/B/C/D to select choices
  if (['A','B','C','D'].indexOf(key) !== -1) {
    var choices = document.querySelectorAll('.choice-btn:not(.disabled)');
    for (var i = 0; i < choices.length; i++) {
      var letter = choices[i].querySelector('.choice-letter');
      if (letter && letter.textContent.trim() === key) {
        choices[i].click();
        e.preventDefault();
        return;
      }
    }
  }

  // Space / Enter to advance
  if (e.key === ' ' || e.key === 'Enter') {
    // Don't trigger if focused on a button already
    if (document.activeElement && document.activeElement.tagName === 'BUTTON') return;
    var nextBtn = document.querySelector('.btn-next:not(.disabled)');
    if (nextBtn) { nextBtn.click(); e.preventDefault(); }
  }

  // M to toggle sound
  if (key === 'M') { toggleSound(); e.preventDefault(); }

  // V to toggle voice
  if (key === 'V' && !e.metaKey && !e.ctrlKey) {
    // Only if not in choice mode
    var activeChoices = document.querySelectorAll('.choice-btn:not(.disabled)');
    if (activeChoices.length === 0) {
      toggleVoice();
      e.preventDefault();
    }
  }
});

// ── Initial preload & boot ──
function preloadCritical() {
  return new Promise(function(resolve) {
    var urls = [
      ASSET.img + 'bg-amelias-bedroom.png',
      ASSET.img + 'amelia-reading.png'
    ];
    var loaded = 0;
    var total = urls.length;

    function onLoad() {
      loaded++;
      if ($loadingFill) $loadingFill.style.width = Math.round((loaded/total)*100) + '%';
      if (loaded >= total) resolve();
    }

    for (var i = 0; i < urls.length; i++) {
      var img = new Image();
      img.onload = onLoad;
      img.onerror = onLoad;
      img.src = urls[i];
    }

    // Timeout fallback
    setTimeout(resolve, 4000);
  });
}

function boot() {
  // Cache DOM refs
  $screen = document.getElementById('screen');
  $sceneBg = document.getElementById('scene-bg');
  $char = document.getElementById('char');
  $textbox = document.getElementById('textbox');
  $cctvRight = document.getElementById('cctv-right');
  $meterToast = document.getElementById('meter-toast');
  $mtC = document.getElementById('mt-c');
  $mtT = document.getElementById('mt-t');
  $mtE = document.getElementById('mt-e');
  $mtvC = document.getElementById('mtv-c');
  $mtvT = document.getElementById('mtv-t');
  $mtvE = document.getElementById('mtv-e');
  $loading = document.getElementById('loading');
  $loadingFill = document.querySelector('.loading-fill');
  $btnSound = document.getElementById('btn-sound');
  $btnVoice = document.getElementById('btn-voice');

  // Bind audio buttons
  if ($btnSound) $btnSound.addEventListener('click', toggleSound);
  if ($btnVoice) $btnVoice.addEventListener('click', toggleVoice);

  // Init state
  initState();
  updateAudioButtons();

  // Preload then show title
  preloadCritical().then(function() {
    if ($loading) $loading.classList.add('hidden');
    renderScreen('title');
  });
}

// Expose renderScreen globally for title BEGIN button
window.renderScreen = renderScreen;

// Boot on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

})();
