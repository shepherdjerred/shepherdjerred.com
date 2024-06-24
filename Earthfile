VERSION 0.8

FROM node:lts
WORKDIR /workspace

ENV NPM_CACHE="type=cache,id=npm,target=/workspace/node_modules"
ENV WEBRING_CACHE="type=cache,id=webring,target=/workspace/.cache"
ENV PLAYWRIGHT_CACHE="type=cache,id=playwright,target=/root/.cache/ms-playwright"

SRC:
  FUNCTION
  COPY --dir src public astro.config.ts tailwind.config.cjs tsconfig.json .

ci:
  # TODO: this isn't working quite yet
  # BUILD +lint
  # TODO: need to run webserver alongside tests
  # BUILD +test
  BUILD +deploy

deps:
  COPY package*.json .
  RUN --mount $NPM_CACHE npm ci

build:
  FROM +deps
  DO +SRC
  RUN --mount $NPM_CACHE --mount $WEBRING_CACHE npm run build
  SAVE ARTIFACT dist AS LOCAL .

lint:
  FROM +deps
  COPY .eslintignore .eslintrc.cjs .markdownlint-cli2.jsonc .prettierignore .prettierrc.json .
  DO +SRC
  RUN --mount $NPM_CACHE npm run lint

test.deps:
  FROM +deps
  RUN --mount $NPM_CACHE --mount $PLAYWRIGHT_CACHE npx playwright install

test:
  FROM +test.deps
  COPY +build/ dist/
  COPY playwright.config.ts .
  COPY --dir test .
  RUN --mount $NPM_CACHE npm run test

deploy:
  ARG EARTHLY_GIT_SHORT_HASH
  ARG git_sha=$EARTHLY_GIT_SHORT_HASH
  ARG EARTHLY_GIT_BRANCH
  RUN npm install -g wrangler
  COPY +build/dist dist
  RUN --push --secret=CLOUDFLARE_ACCOUNT_ID --secret=CLOUDFLARE_API_TOKEN wrangler pages deploy dist --project-name=shepherdjerred-com --branch=$EARTHLY_GIT_BRANCH --commit-hash=$EARTHLY_GIT_SHORT_HASH
