// Make a prediction: does the fact that the account object is constant mean
// that we can't update the password inside?  Why or why not?
// Try it out!
// If it turns out we *can* change the password, try to make it so that we
// can't.  Hint: the thing to google is object freeze


//object freeze does not allow new properties to be added or removed

const account = {
  username: "marijn",
  password: "xyzzy"
}

const freezeAccount = Object.freeze(account)

freezeAccount.password = "s3cret"
//account.password = "s3cret"

console.log(freezeAccount.password)
//console.log(account.password)



// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Constant_non-constance
