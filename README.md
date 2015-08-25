# gitello

See you soon :)

## Example

### Config file

```
{
  "trello": {
    "key": "<your key>",
    "token": "<token>"
  }
}
```
#### Getting your key and token

* [Generate your developer key][devkey].
* To read a user’s private information, get a token by directing them to `https://trello.com/1/connect?key=<PUBLIC_KEY>&name=MyApp&response_type=token` replacing, of course, &lt;PUBLIC_KEY&gt; with the public key obtained in the first step.
* If you never want the token to expire, include `&expiration=never` in the url from the previous step.
* If you need write access as well as read, `&scope=read,write` to the request for your user token.

## License

**gitello** is Copyright (c) 2015 TinOo512 [@TinOo512](https://twitter.com/TinOo512) and licensed under the MIT License. All rights not explicitly granted in the MIT License are reserved. See the included [LICENSE.md](./LICENSE.md) file for more details.