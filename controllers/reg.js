

modules.exports = reg;

function reg(req, res) {

  var who = req.params.who;
  var content = who + ' say hello world!';

  res.render('reg', {hello: content})
}