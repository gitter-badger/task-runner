new tr.Chain()
  .first(new Type(typedHeader, "This tutorial shows how to use the built-in Interval task to create a typing effect."))
  .then(new tr.Sleep(2000))
  .then(new Untype(typedHeader))
  .then(new tr.Sleep(1000))
  .completed(function(task) {
    task.reset();
    task.run();
  })
  .run();