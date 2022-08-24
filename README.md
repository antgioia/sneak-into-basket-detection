<a name="readme-top"></a>

<p align="center">
<img src="https://img.shields.io/badge/--3178C6?logo=typescript&logoColor=ffffff">
  <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
	<a href="https://github.com/antgioia/sneak-into-basket-detection/issues">
		<img src="https://img.shields.io/github/issues/xrenegade100/trick-question-detection?style=flat-square">
	</a>
	<a href="https://www.linkedin.com/in/domenico-antonio-gioia-42541a1a2/">
		<img src="https://img.shields.io/badge/linkedin-0077b5?style=flat-square&logo=linkedin&logocolor=white">
	</a>
</p>
<br />

<div align="center">
  <h3 align="center">Sneak Into Basket Detection</h3>

  <p align="center">
    Detect the dark pattern <i>sneak into basket</i> in web pages
    <br />
    <br />
    ·
    <a href="https://github.com/antgioia/sneak-into-basket-detection/issues">Report Bug</a>
    ·
  </p>
</div>

## About

The term dark pattern was originally coined by Harry Brignull, London designer, in 2010. He defined it as:

> a user interface that has been carefully crafted to trick users into doing things, such as buying insurance with their purchase or signing up for recurring bills
> When we use the Internet, there are many times we encounter instances of dark pattern. Our actions are influenced by the elements in the interface of a web page.

This algorithm is used to identify instances of the dark pattern _sneak into basket_ within web pages.

## Prerequisites

- NodeJS v16.x

## Usage

```typescript
import { isSneakIntoBasket } from 'sneak-into-basket-detection';

isSneakIntoBasket({
  productUrl: 'https://amazon.com',
  cartUrl: 'https://www.amazon.com/cart',
});
```

<p align="right">(<a href="#readme-top">⬆️ back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">⬆️ back to top</a>)</p>
