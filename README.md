# NextWise Technicians Toolkit

<img width="1440" alt="Screenshot 2024-10-04 at 7 41 30 AM" src="https://github.com/user-attachments/assets/a3fb5014-e8dc-49ca-9413-5b4e1f5caf66">

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

```

## Page.vue 

```
 <div class="modules_grid">
          <div class="card relative">
            <div class="layout">
              <div class="group">
                <h2 class="heading">IP Address Toolkit</h2>
                <p class="description">IP toolkit to search, convert, and configure addresses.</p>
              </div>
              <div class="group actions">
                <router-link to="/ip-toolkit">
                  <button class="action-button">Enter</button>
                </router-link>
              </div>
            </div>
            <GameIconsOwl class="absolute bottom-2 right-2 w-6 h-6" />
          </div>
```

## VARS

.env example

```
MAC_LOOKUP_API_KEY=
NUXT_MAC_LOOKUP_API_KEY=
SITE_RELIC_API_KEY=
```

