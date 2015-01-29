

exports.hello = hello;

function hello(req, res) {

  var who = req.params.who;
  var content = who + ' say hello world!';

  res.render('hello', {hello: content})
}