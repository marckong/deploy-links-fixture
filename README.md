# deploy-links-fixture

Fixture repository for testing Volcano deploy links ([Kong/volcano-hosting#2304](https://github.com/Kong/volcano-hosting/pull/2304)).

- `hello` needs only Volcano's own variables.
- `ai-check` declares `OPENAI_API_KEY`, so a visitor is asked for it. It reports whether the value arrived, never the value.
- `admin-stats` declares `VOLCANO_SERVICE_KEY`, so the deploy page lists it under `service_key_functions`.
