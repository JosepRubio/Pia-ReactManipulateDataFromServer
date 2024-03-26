# Challenge

## Setup

- Securize your `main` branch with one approve.
- Invite 2 reviewer to your repo: Jaume and Roger
- Open branch `feat/manipulate-data`
- Define script `lint:fix` in `package.json`

## CI/CD

- Define CI pipeline (only lint job, not test)
- Connect your repo with your Netlify account,
- Setup your deploy process

## Exercises

- complete step by step exercises 2.12-2.15. from section _Forms_ [ [↗] ](https://fullstackopen.com/en/part2/altering_data_in_server#exercises-2-12-2-15)

- Tots els components que creeu i utilitzeu cal extreure'ls a la seva carpeta.
- Tots els customHooks que creeu i utilitzeu cal extreure'ls a la seva carpeta.
- Per mantenir unes bones pràctiques s'ha d'utilitzar handlers.
- Totes les crides fetch han de ser extretes dins un nou servei que guardarem a la carpeta src/services.
- Cal que la URL de les crides fetch sigue el més abstracte possible, és a dir, que modifican-la un cop, em serveixi per totes.

PD: no fa falta que funcioni al netlify, per corregir em descargaré tot en local i ho probaré en local.

> [!NOTE]
> Take care of naming and format. Use camelCase or PascalCase when required, name constants in English, separate blocks and use eslint to properly format code.

## Delivey

- Open PR once your challenge is ready.
- Check your pipeline is in 🟢.

## Deploy

- Ensure your code is properly working in production environment.
