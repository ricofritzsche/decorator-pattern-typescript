# 🚗 Decorator Pattern Car Assembly with TypeScript in Deno

This repository showcases the Decorator Design Pattern using a real-world analogy of a car assembly. The code is written in TypeScript and designed to run in the Deno runtime.

Read the article [here](https://blog.ricofritzsche.de/typescript-by-example-the-decorator-design-pattern-77ce7c76e126)

## About

The Decorator Pattern is a structural design pattern that allows you to dynamically attach new behaviors to objects. Using the analogy of customizing a car with various features, we walk through this pattern, making it easier to grasp and implement.

## Prerequisites

- [Deno](https://deno.land/): Make sure you have Deno installed. If not, you can download and install from [here](https://deno.land/#installation).

## How to Run

1. Clone this repository:

```bash
git clone https://github.com/ricofritzsche/decorator-pattern-typescript.git
cd decorator-pattern-typescript
```

2. Run the TypeScript file using Deno:
```bash
deno run --allow-read main.ts
```

Note: The --allow-read flag is only necessary if the code reads files, which is common in many Deno projects. Adjust the permissions according to your code's requirements.
Exploring the Code

    main.ts: The entry point where we bring everything together.
    car.ts: Defines the basic car.
	decorators.ts: Contains car decorators.

## Feedback & Contributions

Feedback, issues, and pull requests are more than welcome! This repo is meant to be a community-driven learning resource.

## License

This project is under the MIT License. See LICENSE for details.

## Checkout the authors [homepage](https://ricofritzsche.me)
