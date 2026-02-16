<h2>valid-parentheses Notes</h2><hr>[ Time taken: 1 hr 29 m 22 s ]

took an empty stack and a reversed object that represents the parentheses is close to open order.
then go through each char of that input string,
if we find closing parentheses, look for open parentheses at the end of the stack (top of the stack)
  if we find that matching pair pop the stack, otherwise return false,
else opening char then push to the stack .
at the end of the operation, there won't be any element on the stack if valid  
