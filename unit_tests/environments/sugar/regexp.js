test('RegExp', function () {

  var r, n;

  equal(RegExp.escape('test regexp'), 'test regexp', 'RegExp#escape');
  equal(RegExp.escape('test reg|exp'), 'test reg\\|exp', 'RegExp#escape');
  equal(RegExp.escape('hey there (budday)'), 'hey there \\(budday\\)', 'RegExp#escape');
  equal(RegExp.escape('what a day...'), 'what a day\\.\\.\\.', 'RegExp#escape');
  equal(RegExp.escape('.'), '\\.', 'RegExp#escape');
  equal(RegExp.escape('*.+[]{}()?|/'), '\\*\\.\\+\\[\\]\\{\\}\\(\\)\\?\\|\\/', 'RegExp#escape');

  r = /foobar/;
  n = r.setFlags('gim');

  equal(n.global, true, 'RegExp#setFlags');
  equal(n.ignoreCase, true, 'RegExp#setFlags');
  equal(n.multiline, true, 'RegExp#setFlags');

  equal(r.global, false, 'RegExp#setFlags | initial regex is untouched');
  equal(r.ignoreCase, false, 'RegExp#setFlags | initial regex is untouched');
  equal(r.multiline, false, 'RegExp#setFlags | initial regex is untouched');

  n = r.addFlag('g');

  equal(n.global, true, 'RegExp#addFlag');
  equal(n.ignoreCase, false, 'RegExp#addFlag');
  equal(n.multiline, false, 'RegExp#addFlag');

  equal(r.global, false, 'RegExp#addFlag | initial regex is untouched');
  equal(r.ignoreCase, false, 'RegExp#addFlag | initial regex is untouched');
  equal(r.multiline, false, 'RegExp#addFlag | initial regex is untouched');


  r = /foobar/gim;
  n = r.removeFlag('g');

  equal(n.global, false, 'RegExp#removeFlag | global');
  equal(n.ignoreCase, true, 'RegExp#removeFlag | ignoreCase');
  equal(n.multiline, true, 'RegExp#removeFlag | multiline');

  equal(r.global, true, 'RegExp#removeFlag | initial regex is untouched | global');
  equal(r.ignoreCase, true, 'RegExp#removeFlag | initial regex is untouched | ignoreCase');
  equal(r.multiline, true, 'RegExp#removeFlag | initial regex is untouched | multiline');


  // RegExp#getFlags

  equal(/foobar/gim.getFlags(), 'gim', 'RegExp#getFlags');

});

