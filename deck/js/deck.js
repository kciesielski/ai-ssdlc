(function () {
  'use strict';

  // 1. Position canvas decorations (non-step elements) the same way impress positions steps.
  document.querySelectorAll('#impress .deco').forEach(function (el) {
    var x = Number(el.dataset.x || 0);
    var y = Number(el.dataset.y || 0);
    var z = Number(el.dataset.z || -10);
    var s = Number(el.dataset.scale || 1);
    el.style.position = 'absolute';
    el.style.transformStyle = 'preserve-3d';
    el.style.transform =
      'translate(-50%,-50%) translate3d(' + x + 'px,' + y + 'px,' + z + 'px) scale(' + s + ')';
  });

  var body = document.body;
  if (/[?&]static\b/.test(location.search)) { body.classList.add('static'); }
  var root = document.getElementById('impress');
  var steps = Array.prototype.slice.call(root.querySelectorAll('.step'));
  var revealStep = document.getElementById('s27');
  var revealIdx = steps.indexOf(revealStep);
  var order = ['projekt', 'kod', 'cicd', 'runtime'];
  var segs = Array.prototype.slice.call(document.querySelectorAll('#sdlc-bar .seg'));
  var slideNum = document.getElementById('slide-num');

  function updateBar(stage, revealed) {
    var cur = order.indexOf(stage);
    segs.forEach(function (seg) {
      var s = seg.dataset.stage;
      seg.classList.remove('current', 'done');
      if (s === stage) {
        seg.classList.add('current');
      } else if (stage === 'laptop') {
        seg.classList.add('done');
      } else if (order.indexOf(s) > -1 && order.indexOf(s) < cur) {
        seg.classList.add('done');
      } else if (s === 'laptop' && revealed) {
        seg.classList.add('done');
      }
    });
  }

  root.addEventListener('impress:stepenter', function (e) {
    var step = e.target;
    var stage = step.dataset.stage || '';
    var mode = step.dataset.mode || 'slide';
    var idx = steps.indexOf(step);
    var revealed = idx >= revealIdx;

    body.classList.remove('mode-slide', 'mode-map', 'mode-final');
    body.classList.add('mode-' + mode);
    body.dataset.highlight = step.dataset.highlight || '';
    body.dataset.step = step.id;
    body.classList.toggle('laptop-revealed', revealed);

    var barVisible = step.dataset.bar === 'show' ||
      (mode === 'slide' && (order.indexOf(stage) > -1 || stage === 'laptop'));
    body.classList.toggle('bar-visible', barVisible);
    updateBar(step.dataset.barCurrent || stage, revealed);
    if (slideNum) { slideNum.textContent = (idx + 1) + ' / ' + steps.length; }
  });

  impress().init();
})();
